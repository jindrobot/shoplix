"use client";

import Link from "next/link";
import { products } from "@/lib/products";
import { useTranslations } from "@/lib/i18n";

export default function PokladnaPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen pt-28 pb-24 md:pt-36">
      <div className="mx-auto max-w-4xl px-6">
        <nav className="mb-10 flex items-center gap-2 text-sm text-text-dim">
          <Link href="/" className="transition-colors hover:text-text-muted">
            Modkit
          </Link>
          <span>/</span>
          <span className="text-text-muted">{t.pokladna.breadcrumb}</span>
        </nav>

        <h1 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight md:text-4xl">
          {t.pokladna.title}
        </h1>
        <p className="mt-3 text-text-muted">
          {t.pokladna.subtitle}
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-5">
          {/* Formulář */}
          <div className="md:col-span-3">
            {/* Výběr produktu */}
            <fieldset>
              <legend className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-widest text-text-dim">
                {t.pokladna.selectProduct}
              </legend>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {products.map((p) => (
                  <label
                    key={p.slug}
                    className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-bg-card p-4 transition-colors hover:bg-bg-card-hover has-[:checked]:border-accent"
                  >
                    <input
                      type="radio"
                      name="product"
                      value={p.slug}
                      className="accent-accent"
                      defaultChecked={p.slug === "shopsync-lite"}
                    />
                    <div>
                      <div className="text-sm font-medium">{p.name}</div>
                      <div className="text-xs text-text-dim">
                        {p.priceFormatted}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Fakturační údaje */}
            <fieldset className="mt-10">
              <legend className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-widest text-text-dim">
                {t.pokladna.billingDetails}
              </legend>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="block text-sm text-text-muted">
                    {t.pokladna.companyLabel}
                  </label>
                  <input
                    type="text"
                    className="mt-1.5 w-full rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent"
                    placeholder={t.pokladna.companyPlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-sm text-text-muted">
                    {t.pokladna.icoLabel}
                  </label>
                  <input
                    type="text"
                    className="mt-1.5 w-full rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent"
                    placeholder={t.pokladna.icoPlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-sm text-text-muted">
                    {t.pokladna.dicLabel}
                  </label>
                  <input
                    type="text"
                    className="mt-1.5 w-full rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent"
                    placeholder={t.pokladna.dicPlaceholder}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-text-muted">
                    {t.pokladna.emailLabel}
                  </label>
                  <input
                    type="email"
                    className="mt-1.5 w-full rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent"
                    placeholder={t.pokladna.emailPlaceholder}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-text-muted">
                    {t.pokladna.addressLabel}
                  </label>
                  <input
                    type="text"
                    className="mt-1.5 w-full rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent"
                    placeholder={t.pokladna.addressPlaceholder}
                  />
                </div>
              </div>
            </fieldset>

            {/* Submit */}
            <div className="mt-10">
              <button
                type="button"
                className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-accent font-[family-name:var(--font-display)] text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:scale-[1.01] active:scale-[0.99] sm:w-auto sm:px-8"
              >
                {t.pokladna.submitButton}
              </button>
              <p className="mt-3 text-xs text-text-dim">
                {t.pokladna.submitNote}{" "}
                <Link
                  href="/kontakt"
                  className="text-accent transition-colors hover:text-accent-hover"
                >
                  {t.pokladna.submitNoteLink}
                </Link>{" "}
                {t.locale === "cs" ? "pro objednávku." : "w celu złożenia zamówienia."}
              </p>
            </div>
          </div>

          {/* Souhrn */}
          <aside className="md:col-span-2">
            <div className="sticky top-28 rounded-2xl border border-border bg-bg-card p-6">
              <h3 className="font-[family-name:var(--font-display)] font-semibold">
                {t.pokladna.summaryTitle}
              </h3>
              <div className="mt-6 space-y-3 border-b border-border pb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-muted">{t.pokladna.licenseType}</span>
                  <span>{t.pokladna.licenseValue}</span>
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <span className="text-text-muted">{t.pokladna.total}</span>
                <span className="font-[family-name:var(--font-display)] text-xl font-bold">
                  {t.pokladna.totalValue}
                </span>
              </div>
              <p className="mt-4 text-xs text-text-dim">
                {t.pokladna.totalNote}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
