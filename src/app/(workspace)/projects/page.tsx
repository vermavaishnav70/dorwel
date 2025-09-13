"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Calendar,
  Plus,
  Search,
  Filter,
  ArrowUpDown,
  Clock,
  CheckCircle,
  AlertTriangle,
  User,
  CalendarDays,
} from "lucide-react";

interface Project {
  id: string;
  name: string;
  description: string;
  client: string;
  value: number;
  progress: number;
  status: "active" | "completed" | "delayed";
  stage: string;
  dueDate?: string;
  completedDate?: string;
  overdueDays?: number;
}

const mockProjects: Project[] = [
  {
    id: "1",
    name: "Oceanview Residence",
    description: "Modern Living Room",
    client: "John Carter",
    value: 24500,
    progress: 65,
    status: "active",
    stage: "Design Stage",
    dueDate: "Due in 14 days",
  },
  {
    id: "2",
    name: "Urban Loft",
    description: "Kitchen Remodeling",
    client: "Sarah Miller",
    value: 18200,
    progress: 40,
    status: "delayed",
    stage: "Delivery Stage",
    overdueDays: 3,
  },
  {
    id: "3",
    name: "Maple Estate",
    description: "Master Bedroom",
    client: "Robert Johnson",
    value: 32750,
    progress: 100,
    status: "completed",
    stage: "Delivered",
    completedDate: "Completed on May 12",
  },
  {
    id: "4",
    name: "Riverside Cottage",
    description: "Full Home Redesign",
    client: "Emily Watson",
    value: 56000,
    progress: 25,
    status: "active",
    stage: "Deal Stage",
    dueDate: "Due in 45 days",
  },
  {
    id: "5",
    name: "Skyline Apartment",
    description: "Bathroom Renovation",
    client: "Michael Brown",
    value: 12800,
    progress: 80,
    status: "active",
    stage: "Delivery Stage",
    dueDate: "Due in 5 days",
  },
  {
    id: "6",
    name: "Hillside Retreat",
    description: "Home Office Design",
    client: "Jennifer Smith",
    value: 9500,
    progress: 100,
    status: "completed",
    stage: "Delivered",
    completedDate: "Completed on June 3",
  },
];

export default function ProjectsDashboard() {
  const [activeTab, setActiveTab] = useState<
    "active" | "completed" | "delayed"
  >("active");
  const [searchQuery, setSearchQuery] = useState("");

  const activeProjects = mockProjects.filter((p) => p.status === "active");
  const completedProjects = mockProjects.filter(
    (p) => p.status === "completed"
  );
  const delayedProjects = mockProjects.filter((p) => p.status === "delayed");

  const filteredProjects = mockProjects.filter((project) => {
    const matchesTab =
      activeTab === "active"
        ? project.status === "active"
        : activeTab === "completed"
        ? project.status === "completed"
        : project.status === "delayed";
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <Clock className="h-4 w-4 text-blue-500" />;
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "delayed":
        return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (project: Project) => {
    switch (project.status) {
      case "active":
        return (
          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
            In Progress
          </Badge>
        );
      case "completed":
        return (
          <Badge variant="secondary" className="bg-green-100 text-green-700">
            Completed
          </Badge>
        );
      case "delayed":
        return (
          <Badge variant="secondary" className="bg-orange-100 text-orange-700">
            Delayed
          </Badge>
        );
      default:
        return null;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
      <div className="container grid  h-full mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-balance">
              Projects Dashboard
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Manage and track all your interior design projects
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 bg-transparent"
            >
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">View Timeline</span>
              <span className="sm:hidden">Timeline</span>
            </Button>
            <Button className="flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800">
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Add Project</span>
              <span className="sm:hidden">Add</span>
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <div className="space-y-1">
                <p className="text-xs sm:text-sm font-medium text-gray-600">
                  Active Projects
                </p>
                <p className="text-2xl sm:text-3xl font-bold">
                  {activeProjects.length}
                </p>
              </div>
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center text-xs sm:text-sm">
                <span className="text-green-600 font-medium">↑ 8%</span>
                <span className="text-gray-500 ml-2">vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <div className="space-y-1">
                <p className="text-xs sm:text-sm font-medium text-gray-600">
                  Completed Projects
                </p>
                <p className="text-2xl sm:text-3xl font-bold">
                  {completedProjects.length}
                </p>
              </div>
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center text-xs sm:text-sm">
                <span className="text-green-600 font-medium">↑ 12%</span>
                <span className="text-gray-500 ml-2">vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <div className="space-y-1">
                <p className="text-xs sm:text-sm font-medium text-gray-600">
                  Delayed Projects
                </p>
                <p className="text-2xl sm:text-3xl font-bold">
                  {delayedProjects.length}
                </p>
              </div>
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center text-xs sm:text-sm">
                <span className="text-red-600 font-medium">↑ 2%</span>
                <span className="text-gray-500 ml-2">vs last month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col xl:flex-row gap-4 items-stretch xl:items-center justify-between mb-6">
          <div className="relative w-full xl:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 xl:gap-2">
            <div className="flex bg-white rounded-lg p-1 border overflow-x-auto">
              <Button
                variant={activeTab === "active" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("active")}
                className={`whitespace-nowrap ${
                  activeTab === "active"
                    ? "bg-amber-700 hover:bg-amber-800"
                    : ""
                }`}
              >
                Active
              </Button>
              <Button
                variant={activeTab === "completed" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("completed")}
                className={`whitespace-nowrap ${
                  activeTab === "completed"
                    ? "bg-amber-700 hover:bg-amber-800"
                    : ""
                }`}
              >
                Completed
              </Button>
              <Button
                variant={activeTab === "delayed" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("delayed")}
                className={`whitespace-nowrap ${
                  activeTab === "delayed"
                    ? "bg-amber-700 hover:bg-amber-800"
                    : ""
                }`}
              >
                Delayed
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 bg-transparent flex-1 sm:flex-none justify-center"
              >
                <Filter className="h-4 w-4" />
                <span className="hidden sm:inline">Filter</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 bg-transparent flex-1 sm:flex-none justify-center"
              >
                <ArrowUpDown className="h-4 w-4" />
                <span className="hidden sm:inline">Sort</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 mb-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="hover:shadow-lg transition-all duration-200 flex flex-col "
            >
              <CardHeader className="space-y-4 flex-shrink-0">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1 min-w-0 flex-1">
                    <h3 className="font-semibold text-base sm:text-lg text-balance leading-tight">
                      {project.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 text-pretty">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">{getStatusBadge(project)}</div>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                  <User className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate flex-1">{project.client}</span>
                  <span className="font-semibold text-gray-900 whitespace-nowrap">
                    {formatCurrency(project.value)}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 flex-1 flex flex-col justify-end">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm gap-2">
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    {getStatusIcon(project.status)}
                    <span className="text-gray-600 truncate">
                      {project.stage}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-gray-500 flex-shrink-0">
                    <CalendarDays className="h-4 w-4" />
                    {project.status === "completed" &&
                      project.completedDate && (
                        <span className="text-green-600 text-xs whitespace-nowrap">
                          {project.completedDate}
                        </span>
                      )}
                    {project.status === "active" && project.dueDate && (
                      <span className="text-xs whitespace-nowrap">
                        {project.dueDate}
                      </span>
                    )}
                    {project.status === "delayed" && project.overdueDays && (
                      <span className="text-red-600 text-xs whitespace-nowrap">
                        Overdue by {project.overdueDays} days
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
            Showing  of {mockProjects.length} projects
          </p>
          <div className="flex items-center gap-2 ml-auto">
            <Button
              variant="outline"
              size="sm"
              disabled
              className="px-3 bg-transparent"
            >
              ←
            </Button>
            <Button
              variant="default"
              size="sm"
              className="bg-amber-700 hover:bg-amber-800 px-3"
            >
              1
            </Button>
            <Button variant="outline" size="sm" className="px-3 bg-transparent">
              2
            </Button>
            <Button variant="outline" size="sm" className="px-3 bg-transparent">
              →
            </Button>
          </div>
        </div>
      </div>
  );
}
