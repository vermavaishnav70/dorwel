"use client";
import { LeadsStats } from "@/app/(workspace)/leads/_components/LeadsStats";
import { LeadsTable } from "@/app/(workspace)/leads/_components/LeadsTable";
import { LeadsFilters } from "@/app/(workspace)/leads/_components/LeadsFilters";
import { AddLeadModal } from "@/app/(workspace)/leads/_components/AddLeadModal";
import { useLeadsData } from "@/hooks/useLeadsData";
import { useState } from "react";
import { Loader2 } from "lucide-react";

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
        <Loader2 className="animate-spin h-8 w-8 text-gray-600" />
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Leads Management
            </h1>
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
