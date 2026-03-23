import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontakt — Modkit",
  description: "Ozvěte se nám. Rádi pomůžeme s výběrem nástroje pro váš e-shop.",
};

export default function KontaktPage() {
  return (
    <div className="min-h-screen pt-28 pb-24 md:pt-36">
      <div className="mx-auto max-w-4xl px-6">
        <nav className="mb-10 flex items-center gap-2 text-sm text-text-dim">
          <Link href="/" className="transition-colors hover:text-text-muted">
            Modkit
          </Link>
          <span>/</span>
          <span className="text-text-muted">Kontakt</span>
        </nav>

        <h1 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight md:text-4xl">
          Ozvěte se nám
        </h1>
        <p className="mt-3 max-w-lg text-text-muted">
          Máte otázku k produktům, potřebujete pomoc s integrací, nebo chcete
          individuální nabídku? Napište nám.
        </p>

        <div className="mt-12 grid gap-12 md:grid-cols-5">
          {/* Formulář */}
          <div className="md:col-span-3">
            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-sm text-text-muted">
                    Jméno
                  </label>
                  <input
                    type="text"
                    className="mt-1.5 w-full rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent"
                    placeholder="Jan Novák"
                  />
                </div>
                <div>
                  <label className="block text-sm text-text-muted">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="mt-1.5 w-full rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent"
                    placeholder="jan@eshop.cz"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-text-muted">
                  Předmět
                </label>
                <input
                  type="text"
                  className="mt-1.5 w-full rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent"
                  placeholder="Dotaz k produktu ShopSync Pro"
                />
              </div>
              <div>
                <label className="block text-sm text-text-muted">
                  Zpráva
                </label>
                <textarea
                  rows={6}
                  className="mt-1.5 w-full resize-none rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent"
                  placeholder="Napište nám, s čím vám můžeme pomoci..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-12 items-center rounded-xl bg-accent px-7 font-[family-name:var(--font-display)] text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98]"
              >
                Odeslat zprávu
              </button>
            </form>
          </div>

          {/* Kontaktní info */}
          <aside className="space-y-6 md:col-span-2">
            <div className="rounded-2xl border border-border bg-bg-card p-6">
              <h3 className="font-[family-name:var(--font-display)] font-semibold">
                E-mail
              </h3>
              <a
                href="mailto:info@modkit.co"
                className="mt-2 block text-sm text-accent transition-colors hover:text-accent-hover"
              >
                info@modkit.co
              </a>
              <p className="mt-1 text-xs text-text-dim">
                Odpovídáme ve všední dny, 9–18 h
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-bg-card p-6">
              <h3 className="font-[family-name:var(--font-display)] font-semibold">
                Fakturační adresa
              </h3>
              <div className="mt-2 space-y-0.5 text-sm text-text-muted">
                <p>Šárka Váňová</p>
                <p>IČO: 10817395</p>
                <p>Nová 1415/54, Střekov</p>
                <p>400 03 Ústí nad Labem</p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-bg-card p-6">
              <h3 className="font-[family-name:var(--font-display)] font-semibold">
                Doba odezvy
              </h3>
              <div className="mt-3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Běžné dotazy</span>
                  <span>do 24 h</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Technická podpora</span>
                  <span>do 4 h</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Kritické problémy</span>
                  <span>do 1 h</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
