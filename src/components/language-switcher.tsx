"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { localeNames, locales, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  variant?: "dropdown" | "inline";
};

export function LanguageSwitcher({ variant = "dropdown" }: LanguageSwitcherProps) {
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

  const toggleButtonClass =
    variant === "inline"
      ? "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-erc-slate transition-colors hover:bg-gray-50"
      : "flex items-center gap-1 text-sm font-medium text-erc-slate transition-colors hover:text-erc-blue";

  return (
    <div ref={ref} className={variant === "dropdown" ? "relative" : undefined}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={toggleButtonClass}
        aria-label={t("label")}
        aria-expanded={open}
      >
        <span>{variant === "inline" ? t("label") : localeNames[locale]}</span>
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
        />
      </button>

      {open &&
        (variant === "inline" ? (
          <div className="mt-1 flex flex-col gap-1 pl-3">
            {locales.map((loc) => (
              <button
                key={loc}
                type="button"
                onClick={() => switchLocale(loc)}
                className={cn(
                  "rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-gray-50",
                  loc === locale
                    ? "font-semibold text-erc-blue"
                    : "text-erc-slate"
                )}
              >
                {t(loc)}
              </button>
            ))}
          </div>
        ) : (
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
        ))}
    </div>
  );
}
