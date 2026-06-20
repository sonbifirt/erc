import { defineRouting } from "next-intl/routing";

export const locales = ["ro", "en", "ru", "tr"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "ro",
  localePrefix: "as-needed",
});

export const localeNames: Record<Locale, string> = {
  ro: "RO",
  en: "EN",
  ru: "RU",
  tr: "TR",
};
