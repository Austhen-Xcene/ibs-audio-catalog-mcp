// IBS Áudio — Catálogo oficial (Catálogo 2024 + páginas individuais).
// Fonte: project_ibs_products.md (memória autoritativa).
// Preços em BRL. Pode haver reajustes — confirmar com a IBS Áudio.

export const PRODUCTS = [
  // ===== AMPLIFICADORES ÔHMICOS (Linha PWM estéreo) =====
  {
    model: "PWM-200",
    name: "Amplificador PWM 200",
    category: "amplificador",
    subcategory: "ohmico-estereo",
    price_brl: 1110,
    url: "https://www.ibsaudio.com.br/pwm-200",
    manual_url: "https://www.ibsaudio.com.br/manuais/pwm-200.html",
    description:
      "Amplificador estéreo 200W RMS (100W × canal L/R) para sistemas de áudio premium residenciais e comerciais leves.",
    specs: {
      potencia_rms: "200W (100W × L/R)",
      resposta_frequencia: "20Hz – 20kHz",
      impedancia_saida: "4 – 8Ω",
      volume: "Independente para canal L e R",
      protecoes: "DC e curto-circuito",
      standby: "ST-BY para economia de energia",
      alimentacao: "Bivolt automático 110/220 VCA",
      peso_kg: 5,
      formato: "Padrão rack, 28cm profundidade",
      cor: "Preta com tinta anti-UV",
      garantia: "1 ano"
    },
    tags: ["estereo", "rack", "bivolt", "residencial", "comercial-leve"]
  },
  {
    model: "PWM-400",
    name: "Amplificador PWM 400",
    category: "amplificador",
    subcategory: "ohmico-estereo",
    price_brl: 1600,
    url: "https://www.ibsaudio.com.br/pwm-400",
    manual_url: "https://www.ibsaudio.com.br/manuais/pwm-400.html",
    description:
      "Amplificador estéreo 400W RMS (200W × canal L/R) — mais potência para ambientes maiores ou caixas de baixa sensibilidade.",
    specs: {
      potencia_rms: "400W (200W × L/R)",
      resposta_frequencia: "20Hz – 20kHz",
      impedancia_saida: "4 – 8Ω",
      volume: "Independente para canal L e R",
      protecoes: "DC e curto-circuito",
      standby: "ST-BY para economia de energia",
      alimentacao: "Bivolt automático 110/220 VCA",
      peso_kg: 5,
      formato: "Padrão rack, 28cm profundidade",
      cor: "Preta com tinta anti-UV",
      garantia: "1 ano"
    },
    tags: ["estereo", "rack", "bivolt", "residencial", "comercial"]
  },
  {
    model: "PWM-600",
    name: "Amplificador PWM 600",
    category: "amplificador",
    subcategory: "ohmico-estereo",
    price_brl: 2200,
    url: "https://www.ibsaudio.com.br/amplificadores-ohmicos",
    description:
      "Amplificador estéreo 800W RMS (400W × canal L/R) — topo da linha PWM estéreo. Nota: o nome 'PWM 600' refere-se à série; a potência real é 800W RMS total.",
    specs: {
      potencia_rms: "800W (400W × L/R)",
      resposta_frequencia: "20Hz – 20kHz",
      impedancia_saida: "4 – 8Ω",
      volume: "Independente para canal L e R",
      protecoes: "DC e curto-circuito",
      alimentacao: "Bivolt automático 110/220 VCA",
      formato: "Padrão rack",
      cor: "Preta com tinta anti-UV",
      garantia: "1 ano"
    },
    tags: ["estereo", "rack", "alta-potencia"]
  },

  // ===== AMPLIFICADOR MULTIZONA =====
  {
    model: "PWM-1250",
    name: "Amplificador Multizona PWM 1250",
    category: "amplificador",
    subcategory: "multizona",
    price_brl: null,
    price_note: "Sob consulta (B2B)",
    url: "https://www.ibsaudio.com.br/pwm-1250",
    manual_url: "https://www.ibsaudio.com.br/manuais/pwm-1250.html",
    description:
      "Amplificador MULTIZONA (não estéreo) com 12 zonas independentes de 50W RMS @ 4Ω, totalizando 600W. Aplicações: shoppings, teatros, academias, hotéis, aeroportos, auditórios, escritórios.",
    specs: {
      potencia_total: "600W (12 × 50W RMS @ 4Ω)",
      zonas: "12 saídas independentes",
      circuito: "Alta velocidade, transientes fiéis",
      saida: "Sem transformador elevador",
      protecoes: "Curtos e DC",
      transformador: "Toroidal",
      alimentacao: "Bivolt automático 127/220V",
      formato: "Padrão rack",
      garantia: "1 ano"
    },
    tags: ["multizona", "comercial", "sonorizacao-ambiente", "b2b", "12-zonas"]
  },

  // ===== AMPLIFICADOR 70V =====
  {
    model: "PA-2150",
    name: "Amplificador 70V PA-2150",
    category: "amplificador",
    subcategory: "70v",
    price_brl: 1800,
    url: "https://www.ibsaudio.com.br/amplificadores-70v",
    manual_url: "https://www.ibsaudio.com.br/manuais/pa-2150.html",
    description:
      "Amplificador estéreo 300W total (150W × canal L/R) para sistemas de distribuição de áudio 70V — ambientes comerciais e institucionais com longas tiragens de cabo.",
    specs: {
      potencia_rms: "300W (150W × L/R)",
      tipo: "Classe AB (qualidade Classe A + eficiência Classe B)",
      linha: "70V (sistemas de distribuição)",
      volume: "Independente para canal L e R",
      protecoes: "DC e curto-circuito",
      resposta_frequencia: "20Hz – 20kHz",
      impedancia_saida: "32Ω (instalações de 32Ω ou mais)",
      alimentacao: "Bivolt automático 110/220 VCA",
      peso_kg: 5,
      formato: "Padrão rack, 28cm profundidade",
      cor: "Preta com tinta anti-UV",
      garantia: "1 ano"
    },
    tags: ["70v", "comercial", "institucional", "classe-ab", "rack"]
  },

  // ===== PRÉ-AMPLIFICADOR =====
  {
    model: "PR-2150",
    name: "Pré-Amplificador PR-2150",
    category: "pre-amplificador",
    subcategory: "misturador",
    price_brl: 980,
    url: "https://www.ibsaudio.com.br/pr2150",
    manual_url: "https://www.ibsaudio.com.br/manuais/pr-2150.html",
    description:
      "Pré-amplificador/misturador versátil para sistemas de sonorização ambiente com avisos prioritários e equalização independente para fala e música.",
    specs: {
      entradas_aux: "4 entradas auxiliares (reprodutores, dispositivos móveis)",
      entradas_microfone: "2 com gongo eletrônico + prioridade",
      microfone_sem_fio: "1 entrada com corte automático da música",
      saidas: "Independentes (avisos/música) + saída conjunta",
      equalizacao: "Independente (graves/médios/agudos) p/ avisos e música",
      alimentacao: "Bivolt MANUAL 110/220V",
      formato: "Design rack"
    },
    tags: ["pre-amp", "misturador", "microfone", "gongo", "comercial"]
  },

  // ===== MULTIROOM =====
  {
    model: "LM6",
    name: "Multiroom LM6",
    category: "multiroom",
    subcategory: "central-multizona",
    price_brl: 1050,
    url: "https://www.ibsaudio.com.br/multiroom",
    manual_url: "https://www.ibsaudio.com.br/manuais/Multiroom-LM6.pdf",
    description:
      "Central multiroom estéreo com 6 zonas independentes, Bluetooth 4.2, controle via app, UDP e HTTP. Ideal para automação residencial premium.",
    specs: {
      zonas_saida: "6 saídas pré (zonas independentes)",
      subwoofer: "Sub out ativo nas zonas 1, 2, 3 e 4",
      fontes_audio: "7 fontes total: Bluetooth 4.2 + 5 AUX + 1 óptica",
      bluetooth: "4.2 integrado",
      controle: "Remoto + aplicativo + protocolos UDP e HTTP",
      distorcao: "Mínima — reprodução fiel"
    },
    tags: ["multiroom", "multizona", "bluetooth", "app", "udp", "http", "automacao"]
  },

  // ===== BOOKSHELF =====
  {
    model: "C-50",
    name: "Caixa Central IBS C-50",
    category: "caixa-acustica",
    subcategory: "central-home-theater",
    price_brl: 750,
    url: "https://www.ibsaudio.com.br/bookshelf",
    description:
      "Caixa central para sistemas de home theater. MDF selada elimina ressonâncias para reprodução precisa de diálogos e efeitos centrais.",
    specs: {
      potencia: "160W",
      impedancia: "8Ω",
      sensibilidade: "89 dB",
      resposta_frequencia: "60Hz – 20kHz",
      gabinete: "MDF selado",
      cores: "Branca ou preta (tinta UV)",
      garantia: "5 anos"
    },
    tags: ["bookshelf", "central", "home-theater", "mdf"]
  },
  {
    model: "B-50",
    name: "Caixa Bookshelf IBS B-50 (par)",
    category: "caixa-acustica",
    subcategory: "bookshelf",
    price_brl: 940,
    price_note: "par",
    url: "https://www.ibsaudio.com.br/bookshelf",
    description:
      "Par de caixas bookshelf compactas e poderosas. Gabinete MDF selado para reprodução fiel em ambientes residenciais.",
    specs: {
      potencia: "80W",
      impedancia: "8Ω",
      sensibilidade: "89 dB",
      resposta_frequencia: "60Hz – 20kHz",
      gabinete: "MDF selado",
      cores: "Branca ou preta (tinta anti-UV)",
      garantia: "5 anos"
    },
    tags: ["bookshelf", "par", "compacto", "residencial"]
  },

  // ===== CAIXAS DE SOBREPOR — LINHA CUBO =====
  {
    model: "CUBO-GAMER",
    name: "Cubo Gamer 4\"",
    category: "caixa-acustica",
    subcategory: "sobrepor",
    price_brl: 220,
    price_note: "unitário",
    url: "https://www.ibsaudio.com.br/cubo-gamer",
    description:
      "Caixa de sobrepor 4\" duas vias em MDF Premium. Ideal para setups gamer, áreas gourmet e ambientes compactos. Suporte incluso para fixação vertical ou horizontal.",
    specs: {
      driver: "4\" duas vias",
      gabinete: "MDF Premium com pintura de alta qualidade",
      cores: "Branco ou preto",
      suporte: "Incluso (vertical ou horizontal)",
      garantia: "1 ano"
    },
    tags: ["cubo", "sobrepor", "gamer", "compacto", "surround"]
  },
  {
    model: "CUBO-PREMIUM-6-FR",
    name: "Cubo Premium 6\" Full Range",
    category: "caixa-acustica",
    subcategory: "sobrepor",
    price_brl: 220,
    price_note: "unitário",
    url: "https://www.ibsaudio.com.br/cubo-premium-6-full-range",
    description:
      "Caixa de sobrepor com falante 6\" Full Range. Excelente para sonorização ambiente residencial e comercial — áreas gourmet, jardins cobertos, lojas.",
    specs: {
      driver: "6\" Full Range",
      potencia: "60W",
      gabinete: "MDF Premium",
      cores: "Branco ou preto",
      suporte: "Incluso",
      garantia: "1 ano"
    },
    tags: ["cubo", "sobrepor", "6-polegadas", "full-range", "ambiente"]
  },
  {
    model: "CUBO-PREMIUM-6-COAX",
    name: "Cubo Premium 6\" Coaxial",
    category: "caixa-acustica",
    subcategory: "sobrepor",
    price_brl: 320,
    price_note: "unitário",
    url: "https://www.ibsaudio.com.br/cubo-premium-6-coaxial",
    description:
      "Caixa de sobrepor coaxial 6\" com tweeter direcionável — image stereo aprimorada e flexibilidade de mira para áreas com geometria complexa.",
    specs: {
      driver: "Coaxial 6\" com tweeter direcionável",
      potencia: "100W",
      gabinete: "MDF Premium",
      cores: "Branco ou preto",
      suporte: "Incluso",
      garantia: "1 ano"
    },
    tags: ["cubo", "sobrepor", "coaxial", "tweeter-direcionavel", "premium"]
  },
  {
    model: "CUBO-PREMIUM-8-FR",
    name: "Cubo Premium 8\" Full Range",
    category: "caixa-acustica",
    subcategory: "sobrepor",
    price_brl: 388,
    price_note: "unitário",
    url: "https://www.ibsaudio.com.br/cubo-premium-8-full-range",
    description:
      "Caixa de sobrepor 8\" Full Range — mais corpo grave e SPL para ambientes maiores ou tetos altos.",
    specs: {
      driver: "8\" Full Range",
      potencia: "60W",
      gabinete: "MDF Premium",
      cores: "Branco ou preto",
      suporte: "Incluso",
      garantia: "1 ano"
    },
    tags: ["cubo", "sobrepor", "8-polegadas", "full-range", "grande-ambiente"]
  },
  {
    model: "CUBO-PREMIUM-8-COAX",
    name: "Cubo Premium 8\" Coaxial",
    category: "caixa-acustica",
    subcategory: "sobrepor",
    price_brl: 430,
    price_note: "unitário",
    url: "https://www.ibsaudio.com.br/cubo-premium-8-coaxial",
    description:
      "Caixa de sobrepor coaxial 8\" com tweeter direcionável. Topo da linha Cubo para ambientes premium de grande porte.",
    specs: {
      driver: "Coaxial 8\" com tweeter direcionável",
      potencia: "100W",
      gabinete: "MDF Premium",
      cores: "Branco ou preto",
      suporte: "Incluso",
      garantia: "1 ano"
    },
    tags: ["cubo", "sobrepor", "8-polegadas", "coaxial", "premium", "topo-de-linha"]
  },

  // ===== CAIXAS DE PAREDE =====
  {
    model: "LCR-4",
    name: "Caixa de Parede LCR-4 (par)",
    category: "caixa-acustica",
    subcategory: "parede",
    price_brl: 380,
    price_note: "par",
    url: "https://www.ibsaudio.com.br/caixas-acusticas",
    description:
      "Par de caixas LCR de parede com som natural, grande clareza e dispersão uniforme. Duas vias (woofer + tweeter), suporte incluso.",
    specs: {
      tipo: "Woofer + Tweeter (2 vias)",
      potencia: "50W",
      cores: "Branco e Preto",
      suporte: "Incluso",
      fixacao: "Parede ou móvel",
      garantia: "1 ano"
    },
    tags: ["parede", "lcr", "par", "duas-vias"]
  },

  // ===== CAIXAS DE EMBUTIR =====
  {
    model: "EMB-6",
    name: "Caixa de Embutir 6\"",
    category: "caixa-acustica",
    subcategory: "embutir",
    price_brl: null,
    price_note: "Consulte revenda",
    url: "https://www.ibsaudio.com.br/caixa-embutir-6",
    description:
      "Caixa de embutir 6\" para sonorização ambiente discreta — teto ou parede. Acabamento branco que aceita pintura para integrar a qualquer ambiente.",
    specs: {
      driver: "6\"",
      instalacao: "Teto ou parede (embutida)",
      acabamento: "Branco (aceita pintura)"
    },
    tags: ["embutir", "teto", "ambiente-discreto", "sonorizacao"]
  },

  // ===== ACESSÓRIOS =====
  {
    model: "TOSLINK-10M",
    name: "Cabo Óptico Toslink 10m (PIX)",
    category: "acessorio",
    subcategory: "cabo",
    price_brl: 73.05,
    url: "https://www.ibsaudio.com.br/",
    description:
      "Cabo de fibra óptica digital Toslink-Toslink 10m da marca PIX (Áudio Profissional). Alta largura de banda sem perda — compatível com home theaters, receptores AV, Xbox (360/One) e PlayStation (3/4).",
    specs: {
      tipo: "Fibra óptica digital",
      conectores: "Toslink ↔ Toslink",
      comprimento: "10m",
      marca: "PIX (Áudio Profissional)"
    },
    tags: ["cabo", "optico", "toslink", "fibra", "10m", "pix"]
  }
];

// Revendas autorizadas IBS Áudio (dados públicos do site).
// Atualização: confirmar com IBS (WhatsApp +55 11 98757-3800) para dealer mais próximo.
export const DEALERS = [
  {
    name: "IBS Áudio — Matriz",
    city: "São Paulo",
    state: "SP",
    region: "Sudeste",
    type: "fabricante",
    address: "Av. João Pedro Cardoso, 49 — Vila Carrão",
    phone: "+55 11 98757-3800",
    whatsapp: "+55 11 98757-3800",
    website: "https://www.ibsaudio.com.br",
    services: ["venda-direta", "assistencia-tecnica", "suporte-projetos"]
  },
  {
    name: "Premier Service — Assistência Técnica Autorizada",
    city: "São Paulo",
    state: "SP",
    region: "Sudeste",
    type: "assistencia-autorizada",
    phone: "+55 11 98757-3800",
    services: ["assistencia-tecnica", "reparo", "manutencao"]
  },
  {
    name: "Austhen — Integração e Automação",
    city: "São Paulo",
    state: "SP",
    region: "Sudeste",
    type: "integrador-parceiro",
    website: "https://www.austhen.com.br",
    services: ["projetos-automacao", "integracao-multiroom", "consultoria"]
  }
  // Para a lista atualizada e completa de revendas regionais, contate:
  // WhatsApp +55 11 98757-3800 ou comercial@ibsaudio.com.br
];

export const COMPANY = {
  name: "IBS Áudio",
  slogan: "Áudio premium feito no Brasil",
  website: "https://www.ibsaudio.com.br",
  whatsapp: "+55 11 98757-3800",
  email: "comercial@ibsaudio.com.br",
  address: "Av. João Pedro Cardoso, 49 — Vila Carrão — São Paulo/SP",
  segments: [
    "amplificadores estéreo (linha PWM)",
    "amplificadores 70V",
    "amplificadores multizona",
    "pré-amplificadores e misturadores",
    "centrais multiroom",
    "caixas acústicas (bookshelf, sobrepor, embutir, parede)"
  ]
};
