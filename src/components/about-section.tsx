import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/reveal";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { aboutImage } from "@/lib/images";
import { cn } from "@/lib/utils";

export async function AboutSection() {
  const t = await getTranslations("home.about");
  const tCommon = await getTranslations("common");
  const tImages = await getTranslations("images");

  return (
    <section id="about" className="bg-white pb-28 pt-20 sm:pb-32 sm:pt-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal direction="right">
          <div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-erc-slate sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {t("title")}
            </h2>
            <p className="mt-6 text-base leading-8 text-erc-muted sm:text-lg">
              {t("description")}
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                {tCommon("contact")}
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal direction="left" delay={120}>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={aboutImage.src}
                alt={tImages(aboutImage.altKey)}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="absolute -bottom-6 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-sm">
              <div className="grid grid-cols-2 gap-0 overflow-hidden rounded-xl bg-erc-blue shadow-2xl">
                <div className="border-r border-white/15 px-6 py-8 text-center sm:px-8">
                  <p className="text-4xl font-bold text-white sm:text-5xl">
                    200+
                  </p>
                  <p className="mt-2 text-sm leading-snug text-white/90">
                    {t("statsProjects")}
                  </p>
                </div>
                <div className="px-6 py-8 text-center sm:px-8">
                  <p className="text-4xl font-bold text-white sm:text-5xl">
                    15+
                  </p>
                  <p className="mt-2 text-sm leading-snug text-white/90">
                    {t("statsExperience")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
