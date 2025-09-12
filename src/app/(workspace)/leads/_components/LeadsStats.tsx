"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, Clock, CheckCircle } from "lucide-react";

interface LeadsStatsProps {
  stats: {
    totalLeads: number;
    activeLeads: number;
    convertedLeads: number;
    averageResponseTime: string;
    conversionRate: number;
    newThisWeek: number;
  };
}

export function LeadsStats({ stats }: LeadsStatsProps) {
  const statItems = [
    {
      title: "Total Leads",
      value: stats.totalLeads,
      change: `+${stats.newThisWeek} this week`,
      icon: Users,
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      title: "Active Leads",
      value: stats.activeLeads,
      change: "In pipeline",
      icon: Clock,
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      title: "Converted",
      value: stats.convertedLeads,
      change: `${stats.conversionRate}% rate`,
      icon: CheckCircle,
      color: "bg-green-500",
      bgColor: "bg-green-50",
    },
    {
      title: "Avg Response",
      value: stats.averageResponseTime,
      change: "Response time",
      icon: TrendingUp,
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statItems.map((item, index) => (
        <Card key={index} className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  {item.title}
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {typeof item.value === "number" ? item.value.toLocaleString() : item.value}
                </p>
                <p className="text-sm text-gray-500 mt-1">{item.change}</p>
              </div>
              <div className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center`}>
                <item.icon className={`w-6 h-6 ${item.color.replace('bg-', 'text-')}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
