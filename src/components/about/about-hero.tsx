import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/reveal";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { aboutPageImages } from "@/lib/images";
import { cn } from "@/lib/utils";

export async function AboutHero() {
  const t = await getTranslations("about.hero");
  const tNav = await getTranslations("nav");
  const tCommon = await getTranslations("common");

  return (
    <section className="relative overflow-hidden bg-erc-blue pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-white blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-white blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              {tCommon("brand")}
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
              {tNav("about")}
            </h1>
            <p className="mt-5 text-lg leading-8 text-white/85">
              {t("subtitle")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export async function AboutStory() {
  const t = await getTranslations("about.story");
  const tCommon = await getTranslations("common");
  const tImages = await getTranslations("images");

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right">
            <div className="space-y-6 text-base leading-8 text-erc-muted sm:text-lg">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
              <p>{t("p3")}</p>
              <Link
                href="/contact"
                className={cn(buttonVariants({ variant: "default", size: "lg" }))}
              >
                {tCommon("contact")}
              </Link>
            </div>
          </Reveal>

          <Reveal direction="left" delay={120}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={aboutPageImages.solarField.src}
                  alt={tImages(aboutPageImages.solarField.altKey)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="relative -mt-16 ml-auto w-[75%] overflow-hidden rounded-2xl shadow-2xl ring-4 ring-white sm:-mt-20">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={aboutPageImages.windTurbine.src}
                    alt={tImages(aboutPageImages.windTurbine.altKey)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 75vw, 35vw"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
