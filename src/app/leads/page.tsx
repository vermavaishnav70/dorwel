"use client";
import { Header } from "@/components/header/header";
import { LeadsStats } from "@/app/leads/_components/LeadsStats";
import { LeadsTable } from "@/app/leads/_components/LeadsTable";
import { LeadsFilters } from "@/app/leads/_components/LeadsFilters";
import { AddLeadModal } from "@/app/leads/_components/AddLeadModal";
import { useLeadsData } from "@/hooks/useLeadsData";
import { NavigationItem } from "@/types/dashboard";
import { useState } from "react";

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

export default function LeadsPage() {
  const { leads, stats, loading } = useLeadsData();
  const [showAddModal, setShowAddModal] = useState(false);
  const [filters, setFilters] = useState({
    status: "all",
    source: "all",
    dateRange: "all",
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-gray-600">Loading leads...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header navigationItems={navigationItems} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Leads Management</h1>
            <p className="text-gray-600 mt-2">
              Track and manage your potential clients efficiently
            </p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 mt-4 sm:mt-0"
          >
            + Add New Lead
          </button>
        </div>

        {/* Stats Grid */}
        <LeadsStats stats={stats} />

        {/* Filters */}
        <LeadsFilters filters={filters} onFiltersChange={setFilters} />

        {/* Leads Table */}
        <LeadsTable leads={leads} filters={filters} />

        {/* Add Lead Modal */}
        {showAddModal && (
          <AddLeadModal
            isOpen={showAddModal}
            onClose={() => setShowAddModal(false)}
          />
        )}
      </main>
    </div>
  );
}
