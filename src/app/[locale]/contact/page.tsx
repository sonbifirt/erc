import { setRequestLocale } from "next-intl/server";

import {
  ContactContent,
  ContactHero,
} from "@/components/contact/contact-content";
import { type Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/seo";

type Props = {
  params: { locale: Locale };
};

export async function generateMetadata({ params }: Props) {
  return buildPageMetadata(params.locale, "contact");
}

export default function ContactPage({ params }: Props) {
  setRequestLocale(params.locale);

  return (
    <>
      <ContactHero />
      <ContactContent />
    </>
  );
}
