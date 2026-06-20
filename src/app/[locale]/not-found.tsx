import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default async function NotFound() {
  const t = await getTranslations("errors.notFound");
  const tCommon = await getTranslations("common");

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-erc-blue">
        {t("code")}
      </p>
      <h1 className="mt-3 text-2xl font-bold text-erc-slate sm:text-3xl">
        {t("title")}
      </h1>
      <p className="mt-4 max-w-md text-erc-muted">{t("description")}</p>
      <Link
        href="/"
        className={cn(buttonVariants({ variant: "default", size: "lg" }), "mt-8")}
      >
        {tCommon("backHome")}
      </Link>
    </div>
  );
}
