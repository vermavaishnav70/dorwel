// app/dashboard/page.tsx
"use client";
import { Header } from "@/components/header/header";
import { StatsGrid } from "@/app/dashboard/_components/StatsGrid";
import { ProjectInsights } from "@/app/dashboard/_components/ProjectInsights";
import { RecentProjects } from "@/app/dashboard/_components/RecentsBoard";
import { TodaysTasks } from "@/app/dashboard/_components/TodayTasks";
import { ClientPortal } from "@/app/dashboard/_components/ClientPortal";
import { PremiumUpgrade } from "@/app/dashboard/_components/PremiumUpgrade";
import { useDashboardData } from "@/hooks/useDashboardData";
import { NavigationItem } from "@/types/dashboard";

const navigationItems: NavigationItem[] = [
  { id: "dashboard", label: "Dashboard", href: "/dashboard" },
  { id: "leads", label: "Leads", href: "/leads" },
  { id: "projects", label: "Projects", href: "/projects" },
  {
    id: "proposals",
    label: "Proposals",
    href: "/proposals",
    hasDropdown: true,
    dropdownItems: [
      { id: "proposals", label: "All Proposals", href: "/proposals" },
      { id: "templates", label: "Templates", href: "/proposals/templates" },
      { id: "documents", label: "Documents", href: "/documents" },
    ],
  },
  { id: "clients-portal", label: "Clients Portal", href: "/clients" },
];

export default function DashboardPage() {
  const { stats, projects, tasks, clients, chartData, loading } =
    useDashboardData();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Error loading data
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header navigationItems={navigationItems} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StatsGrid stats={stats} />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <ProjectInsights chartData={chartData} />

          <div className="space-y-6">
            <RecentProjects projects={projects} />
            <TodaysTasks tasks={tasks} />
            <PremiumUpgrade />
          </div>
        </div>

        <ClientPortal clients={clients} />
      </main>
    </div>
  );
}
