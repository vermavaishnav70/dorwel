// components/Dashboard/ProjectInsights.tsx
import { Calendar, ChevronDown, ArrowUp } from "lucide-react";
import { ChartData } from "@/types/dashboard";
import { ChartBarInteractive } from "./Chart";

interface ProjectInsightsProps {
  chartData: ChartData[];
}

export const ProjectInsights: React.FC<ProjectInsightsProps> = ({
  chartData,
}) => {
  return (
    <div className="xl:col-span-2">
        <ChartBarInteractive />
    </div>
  );
};
