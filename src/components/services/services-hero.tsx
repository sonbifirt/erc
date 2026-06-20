import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/reveal";

export async function ServicesHero() {
  const t = await getTranslations("services.hero");
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
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              {tCommon("brand")}
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
              {tNav("services")}
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
