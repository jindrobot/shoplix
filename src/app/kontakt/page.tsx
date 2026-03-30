"use client";

import Link from "next/link";
import { useTranslations } from "@/lib/i18n";

export default function KontaktPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen pt-28 pb-24 md:pt-36">
      <div className="mx-auto max-w-4xl px-6">
        <nav className="mb-10 flex items-center gap-2 text-sm text-text-dim">
          <Link href="/" className="transition-colors hover:text-text-muted">
            Modkit
          </Link>
          <span>/</span>
          <span className="text-text-muted">{t.kontakt.breadcrumb}</span>
        </nav>

        <h1 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight md:text-4xl">
          {t.kontakt.title}
        </h1>
        <p className="mt-3 max-w-lg text-text-muted">
          {t.kontakt.subtitle}
        </p>

        <div className="mt-12 grid gap-12 md:grid-cols-5">
          {/* Formulář */}
          <div className="md:col-span-3">
            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-sm text-text-muted">
                    {t.kontakt.nameLabel}
                  </label>
                  <input
                    type="text"
                    className="mt-1.5 w-full rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent"
                    placeholder={t.kontakt.namePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-sm text-text-muted">
                    {t.kontakt.emailLabel}
                  </label>
                  <input
                    type="email"
                    className="mt-1.5 w-full rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent"
                    placeholder={t.kontakt.emailPlaceholder}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-text-muted">
                  {t.kontakt.subjectLabel}
                </label>
                <input
                  type="text"
                  className="mt-1.5 w-full rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent"
                  placeholder={t.kontakt.subjectPlaceholder}
                />
              </div>
              <div>
                <label className="block text-sm text-text-muted">
                  {t.kontakt.messageLabel}
                </label>
                <textarea
                  rows={6}
                  className="mt-1.5 w-full resize-none rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent"
                  placeholder={t.kontakt.messagePlaceholder}
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-12 items-center rounded-xl bg-accent px-7 font-[family-name:var(--font-display)] text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98]"
              >
                {t.kontakt.submit}
              </button>
            </form>
          </div>

          {/* Kontaktní info */}
          <aside className="space-y-6 md:col-span-2">
            <div className="rounded-2xl border border-border bg-bg-card p-6">
              <h3 className="font-[family-name:var(--font-display)] font-semibold">
                {t.kontakt.emailHeading}
              </h3>
              <a
                href="mailto:info@modkit.co"
                className="mt-2 block text-sm text-accent transition-colors hover:text-accent-hover"
              >
                info@modkit.co
              </a>
              <p className="mt-1 text-xs text-text-dim">
                {t.kontakt.emailNote}
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-bg-card p-6">
              <h3 className="font-[family-name:var(--font-display)] font-semibold">
                {t.kontakt.addressHeading}
              </h3>
              <div className="mt-2 space-y-0.5 text-sm text-text-muted">
                {t.kontakt.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-bg-card p-6">
              <h3 className="font-[family-name:var(--font-display)] font-semibold">
                {t.kontakt.responseHeading}
              </h3>
              <div className="mt-3 space-y-2">
                {t.kontakt.responseItems.map((item) => (
                  <div key={item.label} className="flex justify-between text-sm">
                    <span className="text-text-muted">{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
