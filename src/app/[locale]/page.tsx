import { setRequestLocale } from "next-intl/server";

import { AboutSection } from "@/components/about-section";
import { EnergyChartSection } from "@/components/energy-chart-section";
import { GallerySection } from "@/components/gallery-section";
import { HeroSection } from "@/components/hero-section";
import { ServicesGrid } from "@/components/services-section";
import { type Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/seo";

type Props = {
  params: { locale: Locale };
};

export async function generateMetadata({ params }: Props) {
  return buildPageMetadata(params.locale, "home");
}

export default function HomePage({ params }: Props) {
  setRequestLocale(params.locale);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <EnergyChartSection />
      <ServicesGrid />
      <GallerySection />
    </>
  );
}
