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
  badge?: "bestseller" | "novinka";
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
    slug: "quickcsv",
    name: "QuickCSV",
    tagline: "Export/import produktů do CSV pro Shoptet",
    description:
      "Potřebujete rychle dostat produkty z e-shopu do tabulky a zpět? QuickCSV zvládne hromadný export i import produktů, variant, cen a skladů přes jednoduché CSV soubory. Ideální pro sezónní aktualizace ceníků nebo migraci dat.",
    price: 49,
    priceFormatted: "49 Kč",
    icon: "📄",
    color: "#6B7280",
    colorLight: "#F3F4F6",
    features: [
      "Export produktů do CSV jedním klikem",
      "Import a hromadná aktualizace dat",
      "Podpora variant a skladových zásob",
      "Mapování sloupců podle potřeby",
      "Kompatibilní se Shoptet, WooCommerce",
      "Automatická detekce kódování",
    ],
    detailFeatures: [
      {
        title: "Rychlý export",
        description:
          "Exportujte tisíce produktů do CSV za pár sekund. Vyberte si sloupce, které potřebujete — ceny, popisy, skladové zásoby, varianty.",
        icon: "⚡",
      },
      {
        title: "Chytrý import",
        description:
          "Nahrajte CSV a systém automaticky rozpozná sloupce. Náhled změn před aplikací — žádné překvapení.",
        icon: "🔍",
      },
      {
        title: "Mapování sloupců",
        description:
          "Vlastní pojmenování sloupců? Žádný problém. Namapujte si je na pole v e-shopu a uložte šablonu pro příště.",
        icon: "🗂️",
      },
      {
        title: "Bezpečná aktualizace",
        description:
          "Před každou změnou se vytvoří záloha. Něco se nepovede? Vrátíte se jedním klikem.",
        icon: "🛡️",
      },
    ],
    integrations: ["Shoptet", "WooCommerce", "PrestaShop"],
    stats: [
      { label: "Exportovaných produktů", value: "3.1M+" },
      { label: "Aktivních uživatelů", value: "2 100+" },
      { label: "Průměrný čas exportu", value: "< 5s" },
    ],
  },
  {
    slug: "stockalert",
    name: "StockAlert",
    tagline: "Notifikace při nízkém skladu",
    description:
      "Už nikdy neprodávejte produkt, který nemáte skladem. StockAlert sleduje zásoby v reálném čase a upozorní vás e-mailem, SMS nebo přes Slack, když stav klesne pod nastavenou hranici. Předcházejte ztrátám z nedostupnosti.",
    price: 149,
    priceFormatted: "149 Kč",
    icon: "🔔",
    color: "#EF4444",
    colorLight: "#FEE2E2",
    badge: "novinka",
    features: [
      "Notifikace při nízkém skladu",
      "E-mail, SMS a Slack alerty",
      "Nastavitelné limity pro každý produkt",
      "Přehledný dashboard skladů",
      "Denní/týdenní reporty",
      "Podpora více skladových lokací",
    ],
    detailFeatures: [
      {
        title: "Chytré limity",
        description:
          "Nastavte si minimální skladovou zásobu pro každý produkt zvlášť. Bestsellery potřebují vyšší buffer než sezónní zboží.",
        icon: "📊",
      },
      {
        title: "Multi-kanálové alerty",
        description:
          "Notifikace tam, kde je potřebujete — e-mail pro účetní, Slack pro sklad, SMS pro šéfa. Každý dostane, co potřebuje.",
        icon: "📱",
      },
      {
        title: "Predikce",
        description:
          "Na základě historie prodejů odhadujeme, kdy dojde zásoba. Objednejte včas, ne až když je pozdě.",
        icon: "🔮",
      },
      {
        title: "Report skladu",
        description:
          "Týdenní přehled: co dochází, co se neprodává, co leží mrtvým skladem. Dělejte lepší nákupní rozhodnutí.",
        icon: "📋",
      },
    ],
    integrations: ["Shoptet", "WooCommerce", "Shopify", "Slack"],
    stats: [
      { label: "Sledovaných produktů", value: "580K+" },
      { label: "Odeslaných alertů/měsíc", value: "45K+" },
      { label: "Snížení výpadků skladu", value: "-62%" },
    ],
  },
  {
    slug: "seo-meta",
    name: "SEO Meta",
    tagline: "Hromadná editace meta tagů pro e-shop",
    description:
      "Editujte meta titulky, popisy a Open Graph tagy pro stovky produktů najednou. SEO Meta generuje optimalizované texty na základě šablon a dat produktu. Zlepšete pozice ve vyhledávačích bez hodin ruční práce.",
    price: 299,
    priceFormatted: "299 Kč",
    icon: "🏷️",
    color: "#10B981",
    colorLight: "#D1FAE5",
    features: [
      "Hromadná editace meta tagů",
      "Šablony pro auto-generování",
      "Open Graph a Twitter Cards",
      "Kontrola duplicit a chyb",
      "SEO skóre pro každý produkt",
      "Export/import meta dat",
    ],
    detailFeatures: [
      {
        title: "Šablony",
        description:
          "Nastavte šablonu: '{název} | Koupit za {cena} | {e-shop}' — a vygenerujte meta titulky pro celý katalog najednou.",
        icon: "📝",
      },
      {
        title: "SEO audit",
        description:
          "Automatická kontrola: příliš dlouhý titulek, chybějící popis, duplicitní meta — vše na jednom místě.",
        icon: "🔍",
      },
      {
        title: "Náhled ve vyhledávači",
        description:
          "Podívejte se, jak bude váš produkt vypadat ve výsledcích Googlu ještě před publikací.",
        icon: "👀",
      },
      {
        title: "Hromadné operace",
        description:
          "Vyberte 500 produktů, aplikujte šablonu, hotovo. Co by zabralo dny, zvládnete za minuty.",
        icon: "⚡",
      },
    ],
    integrations: ["Shoptet", "WooCommerce", "Shopify", "PrestaShop"],
    stats: [
      { label: "Optimalizovaných stránek", value: "1.2M+" },
      { label: "Průměrné zlepšení CTR", value: "+34%" },
      { label: "Aktivních e-shopů", value: "720+" },
    ],
  },
  {
    slug: "shopsync-lite",
    name: "ShopSync Lite",
    tagline: "Synchronizace produktů mezi 2 e-shopy",
    description:
      "Prodáváte na dvou platformách? ShopSync Lite automaticky synchronizuje produkty, ceny a skladové zásoby mezi dvěma e-shopy. Jednoduché nastavení, spolehlivý provoz. Pro větší objemy přejděte na ShopSync Pro.",
    price: 990,
    priceFormatted: "990 Kč",
    icon: "🔄",
    color: "#3B82F6",
    colorLight: "#DBEAFE",
    badge: "bestseller",
    features: [
      "Synchronizace mezi 2 e-shopy",
      "Automatická aktualizace cen a skladu",
      "Podpora Shoptet, WooCommerce, Shopify",
      "Jednosměrná i obousměrná sync",
      "Plánované synchronizace",
      "E-mailové notifikace při chybách",
    ],
    detailFeatures: [
      {
        title: "Snadné propojení",
        description:
          "Zadejte API klíče obou e-shopů a za 10 minut máte synchronizaci. Žádné složité konfigurace.",
        icon: "🔗",
      },
      {
        title: "Flexibilní směr",
        description:
          "Zvolte: hlavní e-shop → satelit (jednosměrně), nebo obousměrná sync kde změna kdekoli se promítne všude.",
        icon: "↔️",
      },
      {
        title: "Plánování",
        description:
          "Sync každých 15 minut, každou hodinu, nebo jen jednou denně — záleží na vašich potřebách a API limitech.",
        icon: "⏰",
      },
      {
        title: "Chybový monitoring",
        description:
          "Pokud sync selže (API timeout, neplatné data), dostanete upozornění a detailní log pro řešení.",
        icon: "🚨",
      },
    ],
    integrations: ["Shoptet", "WooCommerce", "Shopify"],
    stats: [
      { label: "Synchronizovaných produktů", value: "890K+" },
      { label: "Připojených e-shopů", value: "340+" },
      { label: "Uptime", value: "99.95%" },
    ],
  },
  {
    slug: "reviewboost",
    name: "ReviewBoost",
    tagline: "Správa a zobrazení recenzí",
    description:
      "Automaticky sbírejte recenze od zákazníků, zobrazujte je na webu a využijte sílu sociálního důkazu. ReviewBoost posílá follow-up e-maily, moderuje obsah a generuje widgety pro váš e-shop.",
    price: 1490,
    priceFormatted: "1 490 Kč",
    icon: "★",
    color: "#7C6AE8",
    colorLight: "#EFEAFD",
    badge: "bestseller",
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
    slug: "shopsync-pro",
    name: "ShopSync Pro",
    tagline: "Neomezená synchronizace produktů + API",
    description:
      "Propojte WooCommerce, Shoptet i Shopify do jednoho centrálního systému. ShopSync Pro automaticky synchronizuje katalogy, stavy skladu, ceny a popisy produktů v reálném čase. Až 5 e-shopů, plné API, webhooky a prioritní podpora.",
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
      "Plné REST API pro integraci",
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
        title: "REST API",
        description:
          "Plnohodnotné API pro vlastní integrace. Napojte ERP, PIM nebo cokoli dalšího. Dokumentace a SDK v balení.",
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
    slug: "priceguard",
    name: "PriceGuard",
    tagline: "Monitoring cen konkurence + auto úpravy",
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
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
