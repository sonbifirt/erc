import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/reveal";
import { companyAddress } from "@/lib/company";
import { contactImage } from "@/lib/images";

export async function ContactHero() {
  const t = await getTranslations("contact.hero");
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
              {tNav("contact")}
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

export async function ContactContent() {
  const t = await getTranslations("contact.info");
  const tImages = await getTranslations("images");

  const contactDetails = [
    {
      icon: MapPin,
      title: t("address"),
      content: companyAddress,
    },
    {
      icon: Clock,
      title: t("hours"),
      content: t("hoursValue"),
    },
    {
      icon: Phone,
      title: t("phone"),
      content: "+373 76 963 253",
      href: "tel:+37376963253",
    },
    {
      icon: Mail,
      title: t("email"),
      content: "info@erc.md",
      href: "mailto:info@erc.md",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right">
            <div>
              <h2 className="text-2xl font-bold text-erc-slate sm:text-3xl">
                {t("title")}
              </h2>
              <p className="mt-4 text-base leading-8 text-erc-muted sm:text-lg">
                {t("subtitle")}
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {contactDetails.map((item, index) => (
                  <Reveal key={item.title} delay={index * 80}>
                    <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-erc-blue/10">
                        <item.icon className="h-5 w-5 text-erc-blue" />
                      </div>
                      <h3 className="mt-4 font-semibold text-erc-slate">
                        {item.title}
                      </h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-2 block whitespace-pre-line text-sm leading-6 text-erc-muted transition-colors hover:text-erc-blue"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="mt-2 whitespace-pre-line text-sm leading-6 text-erc-muted">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={120}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl lg:aspect-[3/4]">
              <Image
                src={contactImage.src}
                alt={tImages(contactImage.altKey)}
                fill
                className="object-cover grayscale-[20%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
