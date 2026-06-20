import { getTranslations } from "next-intl/server";
import { Instagram, Linkedin } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { companyAddress } from "@/lib/company";

const corporateItems = [
  { href: "/about", key: "about" as const },
  { href: "/services", key: "services" as const },
  { href: "/contact", key: "contact" as const },
];

export async function Footer() {
  const tNav = await getTranslations("nav");
  const tFooter = await getTranslations("footer");
  const tContact = await getTranslations("contact.info");
  const tCommon = await getTranslations("common");

  return (
    <footer className="bg-erc-blue text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          <div>
            <p className="text-lg font-bold tracking-wide text-white sm:text-xl">
              {tCommon("brand")}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/85">
              {tFooter("tagline")}
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.instagram.com/ercsistem/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 p-2 transition-colors hover:bg-white/10"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/ercglobalyenilenebilirenerji/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 p-2 transition-colors hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70">
              {tFooter("corporate")}
            </h3>
            <ul className="mt-4 space-y-2">
              {corporateItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/90 transition-colors hover:text-white"
                  >
                    {tNav(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70">
              {tFooter("contact")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-white/90">
              <li>
                <span className="block font-medium text-white">
                  {tContact("email")}
                </span>
                <a
                  href="mailto:info@erc.md"
                  className="transition-colors hover:text-white"
                >
                  info@erc.md
                </a>
              </li>
              <li>
                <span className="block font-medium text-white">
                  {tContact("phone")}
                </span>
                <a
                  href="tel:+37376963253"
                  className="transition-colors hover:text-white"
                >
                  +373 76 963 253
                </a>
              </li>
              <li>
                <span className="block font-medium text-white">
                  {tContact("address")}
                </span>
                {companyAddress}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/15 pt-6">
          <p className="text-center text-sm text-white/70">
            {tFooter("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
