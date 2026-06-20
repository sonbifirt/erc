import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/reveal";
import { galleryImages } from "@/lib/images";

export async function GallerySection() {
  const t = await getTranslations("home.gallery");
  const tImages = await getTranslations("images");

  return (
    <section className="bg-white pb-8 pt-20 sm:pb-10 sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-erc-slate sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-base leading-7 text-erc-muted sm:text-lg">
              {t("subtitle")}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {galleryImages.map((item, index) => (
            <Reveal key={item.src} delay={index * 70}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5">
                <Image
                  src={item.src}
                  alt={tImages(item.altKey)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{ objectPosition: item.position }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-erc-slate/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
