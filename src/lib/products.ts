export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  priceFormatted: string;
  icon: string;
  color: string;
  colorLight: string;
  features: string[];
  detailFeatures: {
    title: string;
    description: string;
    icon: string;
  }[];
  integrations?: string[];
  stats?: { label: string; value: string }[];
}

export const products: Product[] = [
  {
    slug: "shopsync-pro",
    name: "ShopSync Pro",
    tagline: "Synchronizace produktů napříč e-shopy",
    description:
      "Propojte WooCommerce, Shoptet i Shopify do jednoho centrálního systému. ShopSync Pro automaticky synchronizuje katalogy, stavy skladu, ceny a popisy produktů v reálném čase. Konec ručního přepisování — nastavíte jednou a funguje.",
    price: 2490,
    priceFormatted: "2 490 Kč",
    icon: "⇄",
    color: "#E8553A",
    colorLight: "#FDEAE6",
    features: [
      "Obousměrná synchronizace produktů",
      "Podpora WooCommerce, Shoptet, Shopify",
      "Automatická aktualizace skladu",
      "Mapování kategorií a variant",
      "Hromadný import/export CSV",
      "Webhook notifikace při změnách",
    ],
    detailFeatures: [
      {
        title: "Multi-platform sync",
        description:
          "Propojte až 5 e-shopů najednou. Změna na jednom místě se automaticky promítne všude — ceny, popisy, fotky i skladové zásoby.",
        icon: "🔗",
      },
      {
        title: "Mapování variant",
        description:
          "Inteligentní párování velikostí, barev a dalších variant mezi platformami. Žádné duplicity, žádné chyby.",
        icon: "🎯",
      },
      {
        title: "Konfliktní řešení",
        description:
          "Při kolizi dat (změna na dvou místech současně) vás systém upozorní a nabídne řešení. Vy rozhodujete.",
        icon: "⚡",
      },
      {
        title: "Detailní logy",
        description:
          "Kompletní historie synchronizací s filtry. Sledujte co se kdy změnilo, vraťte změny jedním klikem.",
        icon: "📋",
      },
    ],
    integrations: ["WooCommerce", "Shoptet", "Shopify", "PrestaShop", "Magento"],
    stats: [
      { label: "Synchronizovaných produktů", value: "2.4M+" },
      { label: "Připojených e-shopů", value: "850+" },
      { label: "Uptime", value: "99.97%" },
    ],
  },
  {
    slug: "orderflow",
    name: "OrderFlow",
    tagline: "Automatizace objednávek a fulfillmentu",
    description:
      "OrderFlow přebírá objednávky z vašich kanálů a automaticky je zpracovává — od potvrzení zákazníkovi, přes předání do skladu, až po generování štítků přepravců. Ušetříte hodiny denně.",
    price: 1990,
    priceFormatted: "1 990 Kč",
    icon: "▶",
    color: "#2D9B83",
    colorLight: "#E3F5F0",
    features: [
      "Automatické zpracování objednávek",
      "Generování přepravních štítků",
      "Napojení na Zásilkovnu, PPL, DPD",
      "Pravidla pro fulfillment workflow",
      "Hromadné operace",
      "E-mailové notifikace zákazníkům",
    ],
    detailFeatures: [
      {
        title: "Workflow builder",
        description:
          "Vizuální editor pravidel: pokud objednávka > 2000 Kč → prioritní balení. Sklad v Brně? → DPD. Nastavíte si vlastní logiku.",
        icon: "🔧",
      },
      {
        title: "Přepravci",
        description:
          "Nativní integrace s českými přepravci. Zásilkovna, PPL, DPD, Česká pošta — štítky generujeme automaticky.",
        icon: "📦",
      },
      {
        title: "Hromadné operace",
        description:
          "Zpracujte stovky objednávek najednou. Hromadný tisk štítků, hromadné potvrzení, hromadné storno.",
        icon: "⚡",
      },
      {
        title: "Zákaznické notifikace",
        description:
          "Automatické e-maily v každé fázi: potvrzení, odeslání, doručení. Šablony v češtině, plně upravitelné.",
        icon: "✉️",
      },
    ],
    integrations: ["Zásilkovna", "PPL", "DPD", "Česká pošta", "GLS"],
    stats: [
      { label: "Zpracovaných objednávek", value: "1.8M+" },
      { label: "Ušetřených hodin/měsíc", value: "120+" },
      { label: "Aktivních e-shopů", value: "630+" },
    ],
  },
  {
    slug: "priceguard",
    name: "PriceGuard",
    tagline: "Monitoring cen konkurence",
    description:
      "Sledujte ceny konkurence v reálném čase a automaticky upravujte vlastní ceník. PriceGuard crawluje stovky e-shopů, porovnává ceny a na základě vašich pravidel upravuje vaše ceny tak, abyste zůstali konkurenceschopní.",
    price: 3490,
    priceFormatted: "3 490 Kč",
    icon: "◆",
    color: "#D4A843",
    colorLight: "#FDF5E3",
    features: [
      "Crawling cen konkurence",
      "Automatické úpravy ceníku",
      "Cenová pravidla a strategie",
      "Denní/hodinové reporty",
      "Sledování až 10 000 produktů",
      "Alerting při výrazných změnách",
    ],
    detailFeatures: [
      {
        title: "Cenový radar",
        description:
          "Crawlujeme e-shopy konkurence každou hodinu. Víte přesně, kdo snížil cenu a o kolik — dříve než vaši zákazníci.",
        icon: "📡",
      },
      {
        title: "Strategie",
        description:
          "Nastavte si: vždy o 2 % levněji než nejlevnější, nepodlézat marži 15 %, víkendové slevy. Pravidla se kombinují.",
        icon: "🧮",
      },
      {
        title: "Reporting",
        description:
          "Denní přehled cenových pohybů na trhu. Kdo zdražil, kdo zlevnil, kde jste vy. Export do PDF a CSV.",
        icon: "📊",
      },
      {
        title: "Smart alerty",
        description:
          "Okamžité upozornění při výrazné cenové změně konkurenta. E-mail, Slack, webhook — jak chcete.",
        icon: "🔔",
      },
    ],
    stats: [
      { label: "Sledovaných produktů", value: "4.2M+" },
      { label: "Cenových změn/den", value: "85K+" },
      { label: "Průměrný nárůst marže", value: "+12%" },
    ],
  },
  {
    slug: "reviewboost",
    name: "ReviewBoost",
    tagline: "Správa recenzí a sběr UGC",
    description:
      "Automaticky sbírejte recenze od zákazníků, zobrazujte je na webu a využijte sílu sociálního důkazu. ReviewBoost posílá follow-up e-maily, moderuje obsah a generuje widgety pro váš e-shop.",
    price: 1490,
    priceFormatted: "1 490 Kč",
    icon: "★",
    color: "#7C6AE8",
    colorLight: "#EFEAFD",
    features: [
      "Automatický sběr recenzí",
      "Widgety pro e-shop",
      "Moderace a schvalování",
      "Fotky a videa od zákazníků",
      "Follow-up e-maily",
      "SEO rich snippets",
    ],
    detailFeatures: [
      {
        title: "Sběr recenzí",
        description:
          "Automatický e-mail 7 dní po doručení. Zákazník hodnotí jedním klikem — žádná registrace, žádné zdržování.",
        icon: "📧",
      },
      {
        title: "UGC galerie",
        description:
          "Zákazníci nahrávají fotky svých nákupů. Autentický obsah, který prodává lépe než stockové fotky.",
        icon: "📸",
      },
      {
        title: "Smart widgety",
        description:
          "Vložte recenze kamkoli na web. Karusel, grid, inline — vše responzivní, vše ve vašem brandu.",
        icon: "🧩",
      },
      {
        title: "SEO boost",
        description:
          "Automatické rich snippets pro Google. Hvězdičky ve výsledcích vyhledávání = vyšší proklikovost.",
        icon: "⭐",
      },
    ],
    stats: [
      { label: "Sesbíraných recenzí", value: "890K+" },
      { label: "Průměrné hodnocení", value: "4.6★" },
      { label: "Nárůst konverzí", value: "+23%" },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
