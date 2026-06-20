"use client";

import Image from "next/image";
import { Menu, Search, User, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { LanguageSwitcher } from "@/components/language-switcher";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", key: "home" as const },
  { href: "/about", key: "about" as const },
  { href: "/services", key: "services" as const },
  { href: "/contact", key: "contact" as const },
];

export function Header() {
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-white"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo.webp"
            alt={tCommon("brand")}
            width={140}
            height={56}
            className="h-12 w-auto object-contain sm:h-14"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-erc-slate transition-colors hover:text-erc-blue"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
          <button
            type="button"
            className="rounded-full p-2 text-erc-slate transition-colors hover:bg-gray-100 hover:text-erc-blue"
            aria-label={tCommon("account")}
          >
            <User className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="rounded-full p-2 text-erc-slate transition-colors hover:bg-gray-100 hover:text-erc-blue"
            aria-label={tCommon("search")}
          >
            <Search className="h-5 w-5" />
          </button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-erc-slate lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? tCommon("closeMenu") : tCommon("openMenu")}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-erc-slate hover:bg-gray-50"
                onClick={() => setMobileOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
          <div className="mt-4 border-t border-gray-100 pt-4">
            <LanguageSwitcher variant="inline" />
          </div>
        </div>
      )}
    </header>
  );
}
