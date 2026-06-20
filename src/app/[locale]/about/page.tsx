import { setRequestLocale } from "next-intl/server";

import { AboutHero, AboutStory } from "@/components/about/about-hero";
import { OurProjectsSection } from "@/components/about/our-projects-section";
import { GallerySection } from "@/components/gallery-section";
import { type Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/seo";

type Props = {
  params: { locale: Locale };
};

export async function generateMetadata({ params }: Props) {
  return buildPageMetadata(params.locale, "about");
}

export default function AboutPage({ params }: Props) {
  setRequestLocale(params.locale);

  return (
    <>
      <AboutHero />
      <AboutStory />
      <OurProjectsSection />
      <GallerySection />
    </>
  );
}
