import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { heroImage } from "@/lib/images";
import { cn } from "@/lib/utils";

export async function HeroSection() {
  const t = await getTranslations("home.hero");
  const tCommon = await getTranslations("common");
  const tImages = await getTranslations("images");

  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center overflow-hidden pt-20"
    >
      <Image
        src={heroImage.src}
        alt={tImages(heroImage.altKey)}
        fill
        priority
        className="animate-hero-zoom object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-erc-slate/90 via-erc-slate/70 to-erc-slate/30" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p
            className="animate-fade-up mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-erc-blue-light"
            style={{ animationDelay: "120ms" }}
          >
            {tCommon("brand")}
          </p>
          <h1
            className="animate-fade-up text-balance text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "240ms" }}
          >
            {t("title")}
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-white/85"
            style={{ animationDelay: "380ms" }}
          >
            {t("subtitle")}
          </p>
          <div
            className="animate-fade-up mt-10"
            style={{ animationDelay: "520ms" }}
          >
            <Link
              href="/about"
              className={cn(buttonVariants({ variant: "white", size: "lg" }))}
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
