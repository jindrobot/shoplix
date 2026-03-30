"use client";

import { useLocale, type Locale } from "@/lib/i18n";

const locales: { code: Locale; label: string; flag: string }[] = [
  { code: "cs", label: "CZ", flag: "🇨🇿" },
  { code: "pl", label: "PL", flag: "🇵🇱" },
];

export function LocaleSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center gap-1 rounded-lg border border-border bg-bg-elevated p-0.5">
      {locales.map((l) => (
        <button
          key={l.code}
          onClick={() => setLocale(l.code)}
          className={`flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium transition-all ${
            locale === l.code
              ? "bg-bg-card-hover text-text"
              : "text-text-dim hover:text-text-muted"
          }`}
          aria-label={`Switch to ${l.label}`}
        >
          <span className="text-sm">{l.flag}</span>
          {l.label}
        </button>
      ))}
    </div>
  );
}
