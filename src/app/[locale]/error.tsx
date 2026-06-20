"use client";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("errors.generic");
  const tCommon = useTranslations("common");

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-2xl font-bold text-erc-slate sm:text-3xl">
        {t("title")}
      </h1>
      <p className="mt-4 max-w-md text-erc-muted">{t("description")}</p>
      <Button onClick={reset} className="mt-8">
        {tCommon("tryAgain")}
      </Button>
    </div>
  );
}
