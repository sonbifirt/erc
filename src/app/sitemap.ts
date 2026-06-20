import type { MetadataRoute } from "next";

import { locales, type Locale } from "@/i18n/routing";
import { allPages, localizedPath, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of allPages) {
    for (const locale of locales) {
      const path = localizedPath(locale, page);
      const url = `${siteUrl}${path === "/" ? "" : path}`;

      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: page === "home" ? "weekly" : "monthly",
        priority: page === "home" ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((loc: Locale) => [
              loc,
              `${siteUrl}${localizedPath(loc, page) === "/" ? "" : localizedPath(loc, page)}`,
            ])
          ),
        },
      });
    }
  }

  return entries;
}
