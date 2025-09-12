"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Filter, Download } from "lucide-react";

interface LeadsFiltersProps {
  filters: {
    status: string;
    source: string;
    dateRange: string;
  };
  onFiltersChange: (filters: any) => void;
}

export function LeadsFilters({ filters, onFiltersChange }: LeadsFiltersProps) {
  const handleFilterChange = (key: string, value: string) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    });
  };

  return (
    <Card className="border-0 shadow-lg mb-6">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search leads by name, email, or phone..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 items-center">
            {/* Status Filter */}
            <select
              value={filters.status}
              onChange={(e) => handleFilterChange("status", e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="qualified">Qualified</option>
              <option value="proposal">Proposal Sent</option>
              <option value="converted">Converted</option>
              <option value="lost">Lost</option>
            </select>

            {/* Source Filter */}
            <select
              value={filters.source}
              onChange={(e) => handleFilterChange("source", e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Sources</option>
              <option value="website">Website</option>
              <option value="social">Social Media</option>
              <option value="referral">Referral</option>
              <option value="advertisement">Advertisement</option>
              <option value="direct">Direct</option>
            </select>

            {/* Date Range Filter */}
            <select
              value={filters.dateRange}
              onChange={(e) => handleFilterChange("dateRange", e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
            </select>

            {/* Action Buttons */}
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              More Filters
            </Button>

            <Button variant="outline" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
