"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "@/lib/i18n";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight"
        >
          <span className="text-accent">shop</span>lix
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/#produkty"
            className="text-sm text-text-muted transition-colors hover:text-text"
          >
            {t.header.products}
          </Link>
          <Link
            href="/kontakt"
            className="text-sm text-text-muted transition-colors hover:text-text"
          >
            {t.header.contact}
          </Link>
          <Link
            href="/obchodni-podminky"
            className="text-sm text-text-muted transition-colors hover:text-text"
          >
            {t.header.terms}
          </Link>
          <LocaleSwitcher />
        </nav>

        {/* Mobile: switcher + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <LocaleSwitcher />
          <button
            className="flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className={`block h-0.5 w-6 bg-text transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-text transition-opacity ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-text transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="animate-fade-in border-t border-border bg-bg-elevated px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/#produkty"
              onClick={() => setMenuOpen(false)}
              className="text-text-muted transition-colors hover:text-text"
            >
              {t.header.products}
            </Link>
            <Link
              href="/kontakt"
              onClick={() => setMenuOpen(false)}
              className="text-text-muted transition-colors hover:text-text"
            >
              {t.header.contact}
            </Link>
            <Link
              href="/obchodni-podminky"
              onClick={() => setMenuOpen(false)}
              className="text-text-muted transition-colors hover:text-text"
            >
              {t.header.terms}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
