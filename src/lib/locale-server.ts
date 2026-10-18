import { cookies } from "next/headers";
import en from "@/messages/en.json";
import hi from "@/messages/hi.json";
import type { Locale } from "@/components/providers/locale-provider";

export type TranslationTree = Record<string, any>;

const translations: Record<Locale, TranslationTree> = {
  en,
  hi,
};

export async function getServerLocale(): Promise<Locale> {
  try {
    const cookieStore = await cookies();
    const val = cookieStore.get("NEXT_LOCALE")?.value;
    if (val === "hi" || val === "en") return val;
  } catch {
    // Return default when running outside request context
  }
  return "en";
}

export function resolveTranslation(
  dict: TranslationTree,
  key: string,
  fallbackDict?: TranslationTree,
  fallback?: string,
  params?: Record<string, string | number>
): string {
  const keys = key.split(".");
  let current: any = dict;
  for (const k of keys) {
    if (current && typeof current === "object" && k in current) {
      current = current[k];
    } else {
      current = undefined;
      break;
    }
  }

  let result: string | undefined = typeof current === "string" ? current : undefined;

  if (result === undefined && fallbackDict) {
    let fallbackCurrent: any = fallbackDict;
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
    result = fallback || key;
  }

  if (params && typeof result === "string") {
    for (const [pKey, pVal] of Object.entries(params)) {
      result = result.replaceAll(`{${pKey}}`, String(pVal));
    }
  }

  return result;
}

export async function getServerTranslations() {
  const locale = await getServerLocale();
  const dict = translations[locale] || translations.en;

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

    return resolveTranslation(dict, key, translations.en, fallbackText, interpolationParams);
  };

  return { locale, t };
}
