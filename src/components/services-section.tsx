import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/reveal";
import { serviceImages } from "@/lib/images";
import { serviceKeys } from "@/lib/services-data";

type ServicesGridProps = {
  showHeading?: boolean;
};

export async function ServicesGrid({ showHeading = true }: ServicesGridProps) {
  const t = await getTranslations("home.services");
  const tItems = await getTranslations("services.items");
  const tImages = await getTranslations("images");

  const topRow = serviceKeys.slice(0, 3);
  const bottomRow = serviceKeys.slice(3);

  return (
    <section id="services" className="bg-erc-blue py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <Reveal>
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {t("title")}
              </h2>
              <p className="mt-4 text-base leading-7 text-white/85 sm:text-lg">
                {t("subtitle")}
              </p>
            </div>
          </Reveal>
        )}

        <div className="grid gap-6 md:grid-cols-3">
          {topRow.map((key, index) => (
            <Reveal key={key} delay={index * 100} className="h-full">
              <ServiceCard
                title={tItems(`${key}.title`)}
                description={tItems(`${key}.description`)}
                src={serviceImages[key].src}
                alt={tImages(serviceImages[key].altKey)}
                position={serviceImages[key].position}
              />
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-6 grid max-w-5xl gap-6 md:grid-cols-2">
          {bottomRow.map((key, index) => (
            <Reveal
              key={key}
              delay={(index + 3) * 100}
              className="h-full"
            >
              <ServiceCard
                title={tItems(`${key}.title`)}
                description={tItems(`${key}.description`)}
                src={serviceImages[key].src}
                alt={tImages(serviceImages[key].altKey)}
                position={serviceImages[key].position}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
  src,
  alt,
  position,
}: {
  title: string;
  description: string;
  src: string;
  alt: string;
  position: string;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[16/10] shrink-0 overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 hover:scale-[1.03]"
          style={{ objectPosition: position }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="text-xl font-bold text-erc-slate">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-erc-muted sm:text-base">
          {description}
        </p>
      </div>
    </article>
  );
}
