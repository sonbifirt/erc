import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/reveal";
import { serviceProjectImages } from "@/lib/images";
import { cn } from "@/lib/utils";

const projectKeys = ["wind", "solar"] as const;

export async function ServiceProjectsSection() {
  const t = await getTranslations("services.projects");
  const tImages = await getTranslations("images");

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-erc-slate sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-base leading-8 text-erc-muted sm:text-lg">
              {t("subtitle")}
            </p>
          </div>
        </Reveal>

        <div className="space-y-8">
          {projectKeys.map((key, index) => (
            <Reveal key={key} delay={index * 120}>
              <article
                className={cn(
                  "overflow-hidden rounded-2xl bg-gray-50 shadow-md ring-1 ring-black/5",
                  "grid md:grid-cols-2",
                  index % 2 === 1 && "md:[direction:rtl]"
                )}
              >
                <div className="relative min-h-[260px] md:min-h-[320px] md:[direction:ltr]">
                  <Image
                    src={serviceProjectImages[key].src}
                    alt={tImages(serviceProjectImages[key].altKey)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-10 md:[direction:ltr]">
                  <h3 className="text-2xl font-bold text-erc-slate">
                    {t(`${key}.title`)}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-erc-muted">
                    {t(`${key}.description`)}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
