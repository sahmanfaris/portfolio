"use client";

import { createContext, useContext, useCallback, type ReactNode } from "react";
import { type Locale, type Translations, translations, defaultLocale } from "./i18n";

interface LocaleContextType {
  locale: Locale;
  t: Translations;
  getLocalizedHref: (path: string) => string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  const t = translations[locale];

  const getLocalizedHref = useCallback(
    (path: string) => {
      // Default locale (en) has no prefix
      if (locale === defaultLocale) {
        return path;
      }
      // Non-default locales have prefix
      return `/${locale}${path}`;
    },
    [locale]
  );

  return (
    <LocaleContext.Provider value={{ locale, t, getLocalizedHref }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
