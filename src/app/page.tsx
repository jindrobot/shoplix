import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

const testimonials = [
  {
    name: "Martin Dvořák",
    role: "Majitel, ElektroShop.cz",
    text: "ShopSync Pro nám ušetří minimálně 15 hodin týdně. Dřív jsme ručně přepisovali produkty mezi Shoptetem a WooCommerce — teď se to děje automaticky.",
    product: "ShopSync Pro",
  },
  {
    name: "Tereza Nováková",
    role: "E-commerce manažerka, ModaCZ",
    text: "ReviewBoost nám zvýšil konverzní poměr o 18 %. Automatické follow-up e-maily fungují skvěle — zákazníci recenzují, aniž bychom je museli prosit.",
    product: "ReviewBoost",
  },
  {
    name: "Jakub Procházka",
    role: "COO, FitnessPro",
    text: "PriceGuard je game changer. Vidíme cenové pohyby konkurence v reálném čase a reagujeme dřív než oni. Marže nám vzrostla o 11 %.",
    product: "PriceGuard",
  },
];

const faqs = [
  {
    q: "Pro jaké platformy Shoplix funguje?",
    a: "Naše nástroje podporují WooCommerce, Shoptet, Shopify, PrestaShop a Magento. Na dalších integracích průběžně pracujeme.",
  },
  {
    q: "Jak dlouho trvá nastavení?",
    a: "Většinu pluginů zprovozníte do 30 minut. Stačí propojit API klíče a nakonfigurovat základní pravidla. Pokud potřebujete pomoc, náš tým vás provede celým procesem.",
  },
  {
    q: "Můžu si nástroje vyzkoušet před nákupem?",
    a: "Ano, ke každému produktu nabízíme 14denní trial zdarma bez zadání karty. Po skončení se nic automaticky neúčtuje.",
  },
  {
    q: "Jak funguje fakturace?",
    a: "Platíte měsíčně, vždy na začátku období. Přijímáme platby kartou i bankovním převodem. Faktury vystavujeme automaticky.",
  },
  {
    q: "Nabízíte slevu pro více produktů najednou?",
    a: "Při kombinaci 2 a více produktů poskytujeme slevu 15 % z celkové ceny. Kontaktujte nás pro individuální nabídku.",
  },
  {
    q: "Poskytujete technickou podporu?",
    a: "Samozřejmě. E-mailová podpora je dostupná ve všední dny 9–18 h. U dražších plánů nabízíme prioritní support s dobou odezvy do 2 hodin.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
        {/* Background glow */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] opacity-20 blur-[120px] pointer-events-none bg-gradient-to-b from-accent via-purple to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-4 py-1.5 text-xs font-medium text-text-muted">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-green animate-pulse" />
              Nové: PriceGuard 2.0 s AI predikcí cen
            </div>

            <h1 className="animate-fade-in-up delay-100 font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              E-shop nástroje,
              <br />
              <span className="bg-gradient-to-r from-accent via-gold to-purple bg-clip-text text-transparent">
                které skutečně fungují
              </span>
            </h1>

            <p className="animate-fade-in-up delay-200 mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-muted md:text-xl">
              Synchronizace, automatizace, monitoring cen a správa recenzí.
              Čtyři nástroje navržené pro český e-commerce trh.
            </p>

            <div className="animate-fade-in-up delay-300 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#produkty"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-accent px-7 font-[family-name:var(--font-display)] text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98]"
              >
                Prozkoumat produkty
                <span className="text-lg">↓</span>
              </a>
              <a
                href="/kontakt"
                className="inline-flex h-12 items-center rounded-xl border border-border px-7 text-sm font-medium text-text-muted transition-all hover:border-border-light hover:text-text"
              >
                Kontaktovat nás
              </a>
            </div>
          </div>

          {/* Stats row */}
          <div className="animate-fade-in-up delay-500 mx-auto mt-20 grid max-w-2xl grid-cols-3 gap-8">
            {[
              { value: "850+", label: "E-shopů" },
              { value: "4.2M", label: "Produktů" },
              { value: "99.97%", label: "Uptime" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-[family-name:var(--font-display)] text-2xl font-bold md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-text-dim uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRODUKTY ═══ */}
      <section id="produkty" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-4xl">
              Čtyři nástroje, jeden cíl
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-text-muted">
              Každý řeší konkrétní bolest. Kombinujte je, nebo začněte s jedním
              — fungují skvěle samostatně i dohromady.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product, i) => (
              <ProductCard key={product.slug} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-4xl">
              Co říkají naši zákazníci
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-text-muted">
              Reálné výsledky od reálných e-shopařů.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-2xl border border-border bg-bg-card p-6"
              >
                <p className="flex-1 text-sm leading-relaxed text-text-muted">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-bg-elevated font-[family-name:var(--font-display)] text-xs font-bold text-accent">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-text-dim">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-4xl">
              Časté dotazy
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-text-muted">
              Odpovědi na to, co nás zákazníci ptají nejčastěji.
            </p>
          </div>

          <div className="mt-16 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-border bg-bg-card transition-colors open:bg-bg-card-hover"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-[family-name:var(--font-display)] text-sm font-semibold [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="ml-4 text-text-dim transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm leading-relaxed text-text-muted">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-4xl">
            Připraveni růst?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-text-muted">
            Vyzkoušejte jakýkoli nástroj 14 dní zdarma. Bez karty, bez
            závazků.
          </p>
          <a
            href="#produkty"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-accent px-7 font-[family-name:var(--font-display)] text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98]"
          >
            Vybrat nástroj
          </a>
        </div>
      </section>
    </div>
  );
}
