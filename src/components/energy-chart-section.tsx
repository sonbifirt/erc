"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useTranslations } from "next-intl";

import { Reveal } from "@/components/reveal";

const capacityData = [
  { year: "2019", solar: 18, wind: 24 },
  { year: "2020", solar: 28, wind: 31 },
  { year: "2021", solar: 42, wind: 38 },
  { year: "2022", solar: 58, wind: 52 },
  { year: "2023", solar: 74, wind: 68 },
  { year: "2024", solar: 92, wind: 85 },
];

export function EnergyChartSection() {
  const t = useTranslations("home.chart");

  return (
    <section className="border-y border-gray-100 bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-erc-slate sm:text-3xl">
              {t("title")}
            </h2>
            <p className="mt-3 text-erc-muted">{t("description")}</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="h-72 rounded-2xl bg-white p-4 shadow-sm sm:h-80 sm:p-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={capacityData} barGap={4}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E5E7EB"
                />
                <XAxis
                  dataKey="year"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6B7280", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6B7280", fontSize: 12 }}
                  unit=" MW"
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid #E5E7EB",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  }}
                />
                <Bar
                  dataKey="solar"
                  name={t("solar")}
                  fill="#4A7C96"
                  radius={[6, 6, 0, 0]}
                />
                <Bar
                  dataKey="wind"
                  name={t("wind")}
                  fill="#3D6679"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
