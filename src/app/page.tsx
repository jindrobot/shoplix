"use client";

import { getLocalizedProducts } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { useTranslations } from "@/lib/i18n";

export default function Home() {
  const t = useTranslations();
  const products = getLocalizedProducts(t);

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
              {t.hero.badge}
            </div>

            <h1 className="animate-fade-in-up delay-100 font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              {t.hero.title1}
              <br />
              <span className="bg-gradient-to-r from-accent via-gold to-purple bg-clip-text text-transparent">
                {t.hero.title2}
              </span>
            </h1>

            <p className="animate-fade-in-up delay-200 mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-muted md:text-xl">
              {t.hero.subtitle}
            </p>

            <div className="animate-fade-in-up delay-300 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#produkty"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-accent px-7 font-[family-name:var(--font-display)] text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98]"
              >
                {t.hero.ctaProducts}
                <span className="text-lg">↓</span>
              </a>
              <a
                href="/kontakt"
                className="inline-flex h-12 items-center rounded-xl border border-border px-7 text-sm font-medium text-text-muted transition-all hover:border-border-light hover:text-text"
              >
                {t.hero.ctaContact}
              </a>
            </div>
          </div>

          {/* Stats row */}
          <div className="animate-fade-in-up delay-500 mx-auto mt-24 grid max-w-2xl grid-cols-3 gap-8 pb-4">
            {t.hero.stats.map((stat) => (
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
      <section id="produkty" className="py-28 md:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-4xl">
              {t.productsSection.title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-text-muted">
              {t.productsSection.subtitle}
            </p>
          </div>

          <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
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
              {t.testimonials.title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-text-muted">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {t.testimonials.items.map((item) => (
              <div
                key={item.name}
                className="flex flex-col rounded-2xl border border-border bg-bg-card p-7 md:p-8"
              >
                <p className="flex-1 text-sm leading-relaxed text-text-muted">
                  &ldquo;{item.text}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-bg-elevated font-[family-name:var(--font-display)] text-xs font-bold text-accent">
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{item.name}</div>
                    <div className="text-xs text-text-dim">{item.role}</div>
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
              {t.faq.title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-text-muted">
              {t.faq.subtitle}
            </p>
          </div>

          <div className="mt-16 space-y-5">
            {t.faq.items.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-border bg-bg-card transition-colors open:bg-bg-card-hover"
              >
                <summary className="flex cursor-pointer items-center justify-between px-7 py-6 font-[family-name:var(--font-display)] text-sm font-semibold [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="ml-4 flex-shrink-0 text-text-dim transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-7 pb-6 text-sm leading-relaxed text-text-muted">
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
            {t.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-text-muted">
            {t.cta.subtitle}
          </p>
          <a
            href="#produkty"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-accent px-7 font-[family-name:var(--font-display)] text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98]"
          >
            {t.cta.button}
          </a>
        </div>
      </section>
    </div>
  );
}
