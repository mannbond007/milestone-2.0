"use client";

import React, { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import en from "@/messages/en.json";
import hi from "@/messages/hi.json";

export type Locale = "en" | "hi";

type TranslationTree = Record<string, any>;

const translations: Record<Locale, TranslationTree> = {
  en,
  hi,
};

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (
    key: string,
    fallbackOrParams?: string | Record<string, string | number>,
    params?: Record<string, string | number>
  ) => string;
  tRaw: <T = any>(key: string, fallback?: T) => T;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

const STORAGE_KEY = "milestone-locale";
const COOKIE_KEY = "NEXT_LOCALE";

export function LocaleProvider({
  children,
  defaultLocale = "en",
}: {
  children: ReactNode;
  defaultLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const router = useRouter();

  // Sync client state with cookie/localStorage on mount if different from defaultLocale
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored === "en" || stored === "hi") {
        if (stored !== locale) {
          setLocaleState(stored);
          document.cookie = `${COOKIE_KEY}=${stored}; path=/; max-age=31536000; SameSite=Lax`;
        }
        document.documentElement.lang = stored;
        return;
      }
      // Check cookie
      const match = document.cookie.match(new RegExp(`(^| )${COOKIE_KEY}=([^;]+)`));
      if (match && (match[2] === "en" || match[2] === "hi")) {
        const cookieLocale = match[2] as Locale;
        if (cookieLocale !== locale) {
          setLocaleState(cookieLocale);
          localStorage.setItem(STORAGE_KEY, cookieLocale);
        }
        document.documentElement.lang = cookieLocale;
      } else {
        document.documentElement.lang = defaultLocale;
      }
    } catch {
      // Ignore storage errors
    }
  }, [defaultLocale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
      document.cookie = `${COOKIE_KEY}=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
      document.documentElement.lang = newLocale;
      router.refresh();
    } catch {
      // Ignore
    }
  };

  const t = (
    key: string,
    fallbackOrParams?: string | Record<string, string | number>,
    params?: Record<string, string | number>
  ): string => {
    let fallbackText: string | undefined;
    let interpolationParams: Record<string, string | number> | undefined;

    if (typeof fallbackOrParams === "string") {
      fallbackText = fallbackOrParams;
      interpolationParams = params;
    } else if (typeof fallbackOrParams === "object" && fallbackOrParams !== null) {
      interpolationParams = fallbackOrParams;
    }

    const keys = key.split(".");
    let current: any = translations[locale];
    for (const k of keys) {
      if (current && typeof current === "object" && k in current) {
        current = current[k];
      } else {
        current = undefined;
        break;
      }
    }

    let result: string | undefined = typeof current === "string" ? current : undefined;

    // Fallback to English dictionary
    if (result === undefined) {
      let fallbackCurrent: any = translations.en;
      for (const k of keys) {
        if (fallbackCurrent && typeof fallbackCurrent === "object" && k in fallbackCurrent) {
          fallbackCurrent = fallbackCurrent[k];
        } else {
          fallbackCurrent = undefined;
          break;
        }
      }
      if (typeof fallbackCurrent === "string") {
        result = fallbackCurrent;
      }
    }

    if (result === undefined) {
      result = fallbackText || key;
    }

    if (interpolationParams && typeof result === "string") {
      for (const [pKey, pVal] of Object.entries(interpolationParams)) {
        result = result.replaceAll(`{${pKey}}`, String(pVal));
      }
    }

    return result;
  };

  const tRaw = <T = any>(key: string, fallback?: T): T => {
    const keys = key.split(".");
    let current: any = translations[locale];
    for (const k of keys) {
      if (current && typeof current === "object" && k in current) {
        current = current[k];
      } else {
        current = undefined;
        break;
      }
    }

    if (current !== undefined) return current as T;

    // Fallback to English
    let fallbackCurrent: any = translations.en;
    for (const k of keys) {
      if (fallbackCurrent && typeof fallbackCurrent === "object" && k in fallbackCurrent) {
        fallbackCurrent = fallbackCurrent[k];
      } else {
        fallbackCurrent = undefined;
        break;
      }
    }

    if (fallbackCurrent !== undefined) return fallbackCurrent as T;

    return fallback as T;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, tRaw }}>
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
