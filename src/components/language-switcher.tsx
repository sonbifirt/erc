"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { localeNames, locales, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const t = useTranslations("lang");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const switchLocale = (nextLocale: Locale) => {
    router.replace(pathname, { locale: nextLocale });
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-1 text-sm font-medium text-erc-slate transition-colors hover:text-erc-blue"
        aria-label={t("label")}
        aria-expanded={open}
      >
        {localeNames[locale]}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 min-w-[140px] overflow-hidden rounded-xl border border-gray-100 bg-white py-1 shadow-lg">
          {locales.map((loc) => (
            <button
              key={loc}
              type="button"
              onClick={() => switchLocale(loc)}
              className={cn(
                "block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-gray-50",
                loc === locale
                  ? "font-semibold text-erc-blue"
                  : "text-erc-slate"
              )}
            >
              {t(loc)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
