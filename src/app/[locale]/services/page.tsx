import { setRequestLocale } from "next-intl/server";

import { ServiceProjectsSection } from "@/components/services/service-projects-section";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesGrid } from "@/components/services-section";
import { type Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/seo";

type Props = {
  params: { locale: Locale };
};

export async function generateMetadata({ params }: Props) {
  return buildPageMetadata(params.locale, "services");
}

export default function ServicesPage({ params }: Props) {
  setRequestLocale(params.locale);

  return (
    <>
      <ServicesHero />
      <ServicesGrid showHeading={false} />
      <ServiceProjectsSection />
    </>
  );
}
