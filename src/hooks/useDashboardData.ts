// hooks/useDashboardData.ts
"use client";
import { useEffect } from "react";
import { useDashboard } from "./useDashboard";

export const useDashboardData = () => {
  const {
    stats,
    projects,
    tasks,
    clients,
    chartData,
    loading,
    fetchDashboardData,
  } = useDashboard();

  useEffect(() => {
    fetchDashboardData();
  }, []); // Only run once on mount

  return { stats, projects, tasks, clients, chartData, loading };
};
