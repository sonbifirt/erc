import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { aboutPageImages } from "@/lib/images";
import { cn } from "@/lib/utils";

export async function OurProjectsSection() {
  const t = await getTranslations("about.projects");
  const tCommon = await getTranslations("common");
  const tImages = await getTranslations("images");

  const projects = [
    {
      titleKey: "energySolutions.title" as const,
      descriptionKey: "energySolutions.description" as const,
      image: aboutPageImages.aerialSolar,
      cta: tCommon("learnMore"),
      href: "/services" as const,
      pattern: false,
    },
    {
      titleKey: "sustainableProjects.title" as const,
      descriptionKey: "sustainableProjects.description" as const,
      image: aboutPageImages.sustainable,
      cta: tCommon("view"),
      href: "/services" as const,
      pattern: true,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
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

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.titleKey} delay={index * 120} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image.src}
                    alt={tImages(project.image.altKey)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {project.pattern && (
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-erc-slate">
                    {t(project.titleKey)}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-erc-muted sm:text-base">
                    {t(project.descriptionKey)}
                  </p>
                  <Link
                    href={project.href}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "default" }),
                      "mt-6 w-fit gap-2"
                    )}
                  >
                    {project.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 overflow-hidden rounded-2xl bg-erc-blue shadow-lg">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[220px] md:min-h-[280px]">
                <Image
                  src={aboutPageImages.windBlueSky.src}
                  alt={tImages(aboutPageImages.windBlueSky.altKey)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <h3 className="text-2xl font-bold text-white">
                  {t("expertise.title")}
                </h3>
                <p className="mt-4 leading-7 text-white/85">
                  {t("expertise.description")}
                </p>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: "white", size: "default" }),
                    "mt-6 w-fit"
                  )}
                >
                  {tCommon("getInTouch")}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
