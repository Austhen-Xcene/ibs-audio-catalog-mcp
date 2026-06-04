#!/usr/bin/env node
/**
 * IBS Áudio Catalog — Model Context Protocol Server
 *
 * Exposes the IBS Áudio premium audio catalog as MCP tools so any
 * MCP-aware client (Claude Desktop, Cursor, Continue, etc.) can:
 *   - search_products(query)
 *   - get_specs(model)
 *   - find_dealers(city, state)
 *
 * Catalog data is bundled inline (src/catalog.js) — no network calls,
 * no API key, fully offline-capable.
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema
} from "@modelcontextprotocol/sdk/types.js";

import { PRODUCTS, DEALERS, COMPANY } from "./catalog.js";

// ---------- helpers ----------

const normalize = (str) =>
  String(str || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // strip accents
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

function searchProducts(query) {
  const q = normalize(query);
  if (!q) return PRODUCTS;

  const tokens = q.split(" ").filter(Boolean);

  const scored = PRODUCTS.map((p) => {
    const haystack = normalize(
      [
        p.model,
        p.name,
        p.category,
        p.subcategory,
        p.description,
        (p.tags || []).join(" "),
        Object.values(p.specs || {}).join(" ")
      ].join(" ")
    );

    let score = 0;
    for (const t of tokens) {
      if (!t) continue;
      // Exact model match = strong signal.
      if (normalize(p.model) === t) score += 100;
      if (normalize(p.model).includes(t)) score += 25;
      if (haystack.includes(t)) score += 5;
    }
    return { product: p, score };
  })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.product);

  return scored;
}

function getSpecs(model) {
  const target = normalize(model);
  if (!target) return null;

  // Exact match first.
  let hit = PRODUCTS.find((p) => normalize(p.model) === target);
  if (hit) return hit;

  // Tolerate "PWM 200", "pwm200", "pwm-200".
  const compact = target.replace(/[\s-]/g, "");
  hit = PRODUCTS.find(
    (p) => normalize(p.model).replace(/[\s-]/g, "") === compact
  );
  if (hit) return hit;

  // Substring fallback (e.g. "1250" -> PWM-1250).
  hit = PRODUCTS.find((p) => normalize(p.model).includes(target));
  return hit || null;
}

function findDealers(city, state) {
  const c = normalize(city);
  const s = normalize(state);

  return DEALERS.filter((d) => {
    const cityMatch = !c || normalize(d.city).includes(c);
    const stateMatch =
      !s ||
      normalize(d.state) === s ||
      normalize(d.state).includes(s) ||
      normalize(d.region).includes(s);
    return cityMatch && stateMatch;
  });
}

// ---------- MCP server ----------

const server = new Server(
  {
    name: "ibs-audio-catalog-mcp",
    version: "1.0.0"
  },
  {
    capabilities: {
      tools: {}
    }
  }
);

const TOOLS = [
  {
    name: "search_products",
    description:
      "Pesquisa o catálogo IBS Áudio por termo livre (nome, modelo, categoria, tag, descrição). Retorna a lista ordenada por relevância. Exemplos de query: 'amplificador 70v', 'multiroom bluetooth', 'caixa sobrepor 8 polegadas', 'PWM 1250'.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description:
            "Termo de busca. Pode ser modelo (PWM-200), categoria (amplificador), aplicação (multiroom, 70v) ou característica (bluetooth, coaxial)."
        }
      },
      required: ["query"]
    }
  },
  {
    name: "get_specs",
    description:
      "Retorna ficha técnica completa de um produto IBS Áudio pelo nome do modelo. Aceita variações como 'PWM-200', 'PWM 200', 'pwm200'. Use search_products primeiro se não souber o modelo exato.",
    inputSchema: {
      type: "object",
      properties: {
        model: {
          type: "string",
          description:
            "Modelo do produto. Ex.: 'PWM-200', 'PA-2150', 'LM6', 'CUBO-PREMIUM-6-COAX'."
        }
      },
      required: ["model"]
    }
  },
  {
    name: "find_dealers",
    description:
      "Localiza revendas, integradores parceiros e assistência técnica autorizada IBS Áudio. Filtra por cidade e/ou estado (sigla UF ou região). Sem filtros, retorna todos os pontos de atendimento conhecidos.",
    inputSchema: {
      type: "object",
      properties: {
        city: {
          type: "string",
          description: "Cidade (opcional). Ex.: 'São Paulo', 'Rio de Janeiro'."
        },
        state: {
          type: "string",
          description:
            "Estado/UF (opcional). Ex.: 'SP', 'RJ', 'MG'. Aceita também região: 'Sudeste', 'Sul'."
        }
      }
    }
  }
];

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: TOOLS
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args = {} } = request.params;

  try {
    if (name === "search_products") {
      const results = searchProducts(args.query);
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                query: args.query,
                count: results.length,
                results
              },
              null,
              2
            )
          }
        ]
      };
    }

    if (name === "get_specs") {
      const product = getSpecs(args.model);
      if (!product) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  model: args.model,
                  found: false,
                  hint:
                    "Modelo não encontrado. Use search_products para descobrir o nome exato.",
                  available_models: PRODUCTS.map((p) => p.model)
                },
                null,
                2
              )
            }
          ]
        };
      }
      return {
        content: [
          { type: "text", text: JSON.stringify(product, null, 2) }
        ]
      };
    }

    if (name === "find_dealers") {
      const dealers = findDealers(args.city, args.state);
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                filter: { city: args.city || null, state: args.state || null },
                count: dealers.length,
                dealers,
                contact_for_complete_list: {
                  whatsapp: COMPANY.whatsapp,
                  email: COMPANY.email,
                  note:
                    "Para a lista completa e atualizada de revendas regionais, fale com o comercial IBS Áudio."
                }
              },
              null,
              2
            )
          }
        ]
      };
    }

    return {
      isError: true,
      content: [
        { type: "text", text: `Unknown tool: ${name}` }
      ]
    };
  } catch (err) {
    return {
      isError: true,
      content: [
        {
          type: "text",
          text: `Tool ${name} failed: ${err?.message || String(err)}`
        }
      ]
    };
  }
});

// ---------- bootstrap ----------

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  // Banner on stderr (stdout is reserved for MCP protocol).
  console.error(
    `[ibs-audio-catalog-mcp] ready — ${PRODUCTS.length} products, ${DEALERS.length} dealers`
  );
}

main().catch((err) => {
  console.error("[ibs-audio-catalog-mcp] fatal:", err);
  process.exit(1);
});
