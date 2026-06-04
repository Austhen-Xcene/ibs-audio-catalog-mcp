# ibs-audio-catalog-mcp

[![MCP](https://img.shields.io/badge/MCP-Server-blue)](https://modelcontextprotocol.io)
[![npm](https://img.shields.io/badge/npm-ibs--audio--catalog--mcp-red)](https://www.npmjs.com/package/ibs-audio-catalog-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Servidor [Model Context Protocol](https://modelcontextprotocol.io) (MCP) com o catálogo oficial de produtos **IBS Áudio** — amplificadores estéreo (linha PWM), amplificadores 70V, multizona, multiroom, pré-amplificadores e caixas acústicas premium fabricadas no Brasil.

Permite que Claude Desktop, Cursor, Continue, Zed e qualquer cliente MCP responda perguntas técnicas, compare modelos e localize revendas autorizadas sem precisar de chamadas externas — o catálogo vai *bundled* no pacote.

---

## Tools expostos

| Tool | O que faz | Exemplo |
|------|-----------|---------|
| `search_products(query)` | Pesquisa por nome, modelo, categoria, tag ou característica. | `"amplificador 70v"` |
| `get_specs(model)` | Ficha técnica completa de um modelo. | `"PWM-1250"` |
| `find_dealers(city, state)` | Revendas, integradores parceiros e assistência técnica autorizada. | `city="São Paulo", state="SP"` |

---

## Instalação

### Uso rápido (sem instalar)

```bash
npx -y ibs-audio-catalog-mcp
```

O comando deixa o servidor rodando em modo stdio, esperando um cliente MCP.

### Instalação global

```bash
npm install -g ibs-audio-catalog-mcp
ibs-audio-catalog-mcp
```

---

## Configurar no Claude Desktop

Edite o arquivo de configuração do Claude Desktop:

- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
- **Linux**: `~/.config/Claude/claude_desktop_config.json`

Adicione o servidor no bloco `mcpServers`:

```json
{
  "mcpServers": {
    "ibs-audio": {
      "command": "npx",
      "args": ["-y", "ibs-audio-catalog-mcp"]
    }
  }
}
```

Reinicie o Claude Desktop. O ícone de ferramentas (martelo) na caixa de input vai mostrar `search_products`, `get_specs` e `find_dealers`.

### Outros clientes MCP

| Cliente | Onde configurar |
|---------|-----------------|
| **Cursor** | `Settings → Features → MCP Servers` (mesmo formato JSON acima) |
| **Continue** (VS Code) | `~/.continue/config.json` em `experimental.modelContextProtocolServers` |
| **Zed** | `~/.config/zed/settings.json` em `context_servers` |

---

## Exemplos de uso

Depois de configurado, basta perguntar em linguagem natural no seu cliente MCP. O modelo escolhe a tool sozinho.

### 1. Comparar amplificadores estéreo

> *"Compare os amplificadores PWM 200, PWM 400 e PWM 600 da IBS Áudio. Quero saber potência RMS, preço e qual escolher para uma sala de 30m²."*

O modelo chamará `get_specs("PWM-200")`, `get_specs("PWM-400")` e `get_specs("PWM-600")` em paralelo e montará uma tabela com a recomendação.

### 2. Encontrar solução para sonorização comercial

> *"Preciso sonorizar um shopping com 12 ambientes diferentes (praça de alimentação, lojas, corredores). O que a IBS Áudio tem?"*

O modelo chamará `search_products("multizona 12 zonas comercial")` e retornará o **PWM 1250** (12 zonas × 50W) com especificações, link da página e nota de que o preço é sob consulta B2B.

### 3. Localizar assistência técnica

> *"Onde fica a assistência técnica autorizada da IBS Áudio em São Paulo?"*

O modelo chamará `find_dealers(city="São Paulo", state="SP")` e retornará o endereço da Premier Service e os contatos comerciais.

---

## Catálogo incluído

O pacote vem com ~18 produtos cobrindo todas as linhas IBS Áudio:

- **Amplificadores ôhmicos (estéreo)**: PWM-200, PWM-400, PWM-600
- **Amplificador multizona**: PWM-1250 (12 zonas × 50W RMS)
- **Amplificador 70V**: PA-2150 (Classe AB)
- **Pré-amplificador**: PR-2150 (4 AUX + 2 MIC + MIC sem fio)
- **Multiroom**: LM6 (6 zonas, Bluetooth 4.2, UDP/HTTP)
- **Bookshelf**: C-50 (central HT), B-50 (par)
- **Sobrepor (linha Cubo)**: Gamer 4", Premium 6" FR/Coax, Premium 8" FR/Coax
- **Parede**: LCR-4 (par)
- **Embutir**: 6"
- **Acessórios**: cabo Toslink óptico PIX 10m

Os dados vêm do Catálogo Oficial IBS 2024 e das páginas individuais de produto em [ibsaudio.com.br](https://www.ibsaudio.com.br). Preços em BRL — confirme reajustes com a IBS Áudio.

---

## Desenvolvimento

```bash
git clone https://github.com/Austhen-Xcene/ibs-audio-catalog-mcp.git
cd ibs-audio-catalog-mcp
npm install
npm start
```

O servidor usa stdio transport — para testar localmente, prefira o [MCP Inspector](https://github.com/modelcontextprotocol/inspector):

```bash
npx @modelcontextprotocol/inspector npx -y ibs-audio-catalog-mcp
```

---

## Sobre a IBS Áudio

Fabricante brasileiro de equipamentos de áudio premium desde os anos 80 — amplificadores classe A/AB, sistemas multiroom e caixas acústicas para integração residencial e comercial.

- Site: [ibsaudio.com.br](https://www.ibsaudio.com.br)
- WhatsApp comercial: **+55 11 98757-3800**
- Endereço: Av. João Pedro Cardoso, 49 — Vila Carrão — São Paulo/SP

---

## Licença

[MIT](LICENSE) © IBS Áudio
