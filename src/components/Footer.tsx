import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight"
            >
              <span className="text-accent">shop</span>lix
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-muted">
              Prémiové nástroje pro české e-shopy. Automatizujte, synchronizujte
              a rostěte — bez kompromisů.
            </p>
          </div>

          {/* Navigace */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-widest text-text-dim">
              Produkty
            </h4>
            <ul className="mt-4 space-y-2.5">
              {[
                { name: "ShopSync Pro", href: "/produkt/shopsync-pro" },
                { name: "OrderFlow", href: "/produkt/orderflow" },
                { name: "PriceGuard", href: "/produkt/priceguard" },
                { name: "ReviewBoost", href: "/produkt/reviewboost" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-muted transition-colors hover:text-accent"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Právní */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-widest text-text-dim">
              Informace
            </h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/kontakt"
                  className="text-sm text-text-muted transition-colors hover:text-accent"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="/obchodni-podminky"
                  className="text-sm text-text-muted transition-colors hover:text-accent"
                >
                  Obchodní podmínky
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Spodní lišta */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-text-dim md:flex-row">
          <p>© {new Date().getFullYear()} Shoplix. Všechna práva vyhrazena.</p>
          <p>
            Provozovatel: Šárka Váňová · IČO: 10817395
          </p>
        </div>
      </div>
    </footer>
  );
}
