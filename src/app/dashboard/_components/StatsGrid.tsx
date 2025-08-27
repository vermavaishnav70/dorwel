// components/Dashboard/StatsGrid.tsx
import { Card } from "@/components/ui/card";
import { DollarSign, Folder, Users, Activity } from "lucide-react";
import { DashboardStats } from "@/types/dashboard";

interface StatsGridProps {
  stats: DashboardStats;
}

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  gradient: string;
  iconBg: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  gradient,
  iconBg,
}) => (
  <Card className={`p-4 ${gradient} border-opacity-50`}>
    <div className="flex items-center gap-3">
      <div
        className={`w-10 h-10 ${iconBg} rounded-xl flex items-center justify-center`}
      >
        {icon}
      </div>
      <div>
        <p className="text-2xl font-bold text-slate-900">{value}</p>
        <p className="text-xs text-slate-600">{title}</p>
      </div>
    </div>
  </Card>
);

export const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  const statItems = [
    {
      title: "Revenue",
      value: `$${stats.revenue.toLocaleString()}`,
      icon: <DollarSign className="w-5 h-5 text-white" />,
      gradient:
        "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100/50",
      iconBg: "bg-blue-500",
    },
    {
      title: "Active Projects",
      value: stats.activeProjects.toString(),
      icon: <Folder className="w-5 h-5 text-white" />,
      gradient:
        "bg-gradient-to-br from-green-50 to-emerald-50 border-green-100/50",
      iconBg: "bg-green-500",
    },
    {
      title: "Conversion",
      value: `${stats.conversionRate}%`,
      icon: <Users className="w-5 h-5 text-white" />,
      gradient:
        "bg-gradient-to-br from-purple-50 to-violet-50 border-purple-100/50",
      iconBg: "bg-purple-500",
    },
    {
      title: "Efficiency",
      value: `${stats.efficiency}%`,
      icon: <Activity className="w-5 h-5 text-white" />,
      gradient:
        "bg-gradient-to-br from-orange-50 to-amber-50 border-orange-100/50",
      iconBg: "bg-orange-500",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {statItems.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
};
