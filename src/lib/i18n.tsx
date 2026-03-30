"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Locale = "cs" | "pl";

const LOCALE_KEY = "modkit-locale";
const DEFAULT_LOCALE: Locale = "cs";

function getStoredLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  try {
    const stored = localStorage.getItem(LOCALE_KEY);
    if (stored === "cs" || stored === "pl") return stored;
  } catch {}
  return DEFAULT_LOCALE;
}

function storeLocale(locale: Locale) {
  try {
    localStorage.setItem(LOCALE_KEY, locale);
    document.cookie = `${LOCALE_KEY}=${locale};path=/;max-age=31536000;SameSite=Lax`;
  } catch {}
}

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
}>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(getStoredLocale());
    setMounted(true);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    storeLocale(l);
    document.documentElement.lang = l;
  };

  // On first mount, sync lang attribute
  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = locale;
    }
  }, [mounted, locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}

// Translation helper
import { cs } from "@/lib/translations/cs";
import { pl } from "@/lib/translations/pl";
import type { Translations } from "@/lib/translations/types";

const translations: Record<Locale, Translations> = { cs, pl };

export function useTranslations(): Translations {
  const { locale } = useLocale();
  return translations[locale];
}
