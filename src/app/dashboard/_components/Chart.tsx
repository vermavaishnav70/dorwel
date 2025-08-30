"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An interactive bar chart";

const chartData = [
  { date: "2024-04-01", projects: 1, revenue: 150 },
  { date: "2024-04-02", projects: 2, revenue: 300 },
  { date: "2024-04-03", projects: 4, revenue: 750 },
  { date: "2024-04-04", projects: 2, revenue: 400 },
  { date: "2024-04-05", projects: 3, revenue: 600 },
  { date: "2024-04-06", projects: 1, revenue: 120 },
  { date: "2024-04-07", projects: 2, revenue: 500 },
];

const chartConfig = {
  views: {
    label: "views",
    color: "var(--chart-3)",
  },
  projects: {
    label: "Projects",
    color: "var(--chart-2)",
  },
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function ChartBarInteractive() {
  const [range, setRange] = React.useState<"week" | "month" | "year">("week");

  const week = ["S", "M", "T", "W", "T", "F", "S"];

  const weekly = React.useMemo(() => {
    // Map existing chartData dates into day-of-week buckets
    const buckets = new Array(7).fill(0).map(() => ({ projects: 0, revenue: 0 }));
    chartData.forEach((d) => {
      const idx = new Date(d.date).getDay();
      buckets[idx] = { projects: d.projects, revenue: d.revenue };
    });
    return buckets.map((b, i) => ({ day: week[i], ...b }));
  }, []);

  const activeSeries: "projects" | "revenue" = "projects"; // Design emphasizes projects dots
  const maxVal = Math.max(...weekly.map((d) => d[activeSeries]));
  const highlightIndex = weekly.reduce(
    (maxI, d, i) => (d[activeSeries] > weekly[maxI][activeSeries] ? i : maxI),
    0
  );

  const weeklyRevenueTotal = weekly.reduce((sum, d) => sum + d.revenue, 0);
  const revenueEstimate =
    range === "week"
      ? weeklyRevenueTotal
      : range === "month"
      ? weeklyRevenueTotal * 4
      : weeklyRevenueTotal * 52;

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  return (
    <Card className="py-0">
      <CardHeader className="flex flex-col items-stretch border-b !p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:!py-0">
          <CardTitle>Project Insights</CardTitle>
          <CardDescription>
            Track how many tasks were completed and total hours logged each week. This gives you an overview of your workload distribution.
          </CardDescription>
        </div>
        <div className="flex items-center gap-3 px-6 py-4 sm:py-6">
          <label className="sr-only" htmlFor="insights-range">Range</label>
          <select
            id="insights-range"
            value={range}
            onChange={(e) => setRange(e.target.value as typeof range)}
            className="rounded-full border border-slate-200 px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
          >
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
        </div>
      </CardHeader>

      <CardContent className="px-2 sm:p-6">
        <div className="rounded-2xl bg-slate-50 p-4 sm:p-6">
          <div className="grid grid-cols-7 gap-6 items-end h-56 relative">
            {weekly.map((d, i) => {
              const pct = maxVal ? d[activeSeries] / maxVal : 0;
              const dotOffset = Math.max(8, Math.round(pct * 160)); // px from bottom
              const isHighlight = i === highlightIndex;
              return (
                <div key={i} className="relative flex h-full flex-col items-center justify-end">
                  {/* Highlight track */}
                  {isHighlight && (
                    <div className="absolute bottom-9 top-2 w-10 rounded-full bg-slate-200" />
                  )}

                  {/* Vertical track */}
                  <div className="relative mb-3 flex h-40 w-0.5 items-end rounded-full bg-slate-300">
                    {/* Dot */}
                    <div
                      className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-indigo-500"
                      style={{ bottom: `${dotOffset}px` }}
                    />
                  </div>

                  {/* Day pill */}
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs ${
                      isHighlight ? "bg-black text-white" : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {d.day}
                  </div>

                  {/* Bubble label */}
                  {isHighlight && (
                    <div className="absolute -top-3 rounded-full bg-black px-2 py-1 text-[10px] font-medium text-white">
                      {d.projects} Projects
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer info */}
          <div className="mt-6 flex items-start gap-2">
            <div className="text-2xl font-semibold text-slate-900">{formatCurrency(revenueEstimate)}</div>
            <div className="text-slate-500 text-sm leading-6">{range === "week" ? "Weekly revenue" : "Monthly revenue"} (estimated)</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
