import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { type Locale, locales, routing } from "@/i18n/routing";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://erc.md";

type PageKey = "home" | "about" | "services" | "contact";

const pagePaths: Record<PageKey, string> = {
  home: "",
  about: "/about",
  services: "/services",
  contact: "/contact",
};

export function localizedPath(locale: Locale, page: PageKey): string {
  const path = pagePaths[page];
  if (locale === routing.defaultLocale) {
    return path || "/";
  }
  return `/${locale}${path}`;
}

export async function buildPageMetadata(
  locale: Locale,
  page: PageKey
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "seo" });
  const title = t(`${page}.title`);
  const description = t(`${page}.description`);
  const canonical = localizedPath(locale, page);

  const languages = Object.fromEntries(
    locales.map((loc) => [loc, localizedPath(loc, page)])
  );

  const ogLocaleMap: Record<Locale, string> = {
    ro: "ro_RO",
    en: "en_US",
    ru: "ru_RU",
    tr: "tr_TR",
  };

  return {
    title,
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "ERC International",
      locale: ogLocaleMap[locale],
      alternateLocale: locales
        .filter((loc) => loc !== locale)
        .map((loc) => ogLocaleMap[loc]),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const allPages: PageKey[] = ["home", "about", "services", "contact"];
