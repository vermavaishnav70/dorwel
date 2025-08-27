// components/Dashboard/TodaysTasks.tsx
import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { Task } from "@/types/dashboard";

interface TodaysTasksProps {
  tasks: Task[];
}

export const TodaysTasks: React.FC<TodaysTasksProps> = ({ tasks }) => {
  return (
    <Card className="p-6 bg-white/80 backdrop-blur-sm border-slate-200/50">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-indigo-600" />
        <h3 className="text-lg font-semibold text-slate-900">
          Today&apos;s Tasks
        </h3>
      </div>
      <div className="space-y-3">
        {tasks.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50/80 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-2 h-2 rounded-full ${
                  item.urgent ? "bg-red-500" : "bg-slate-300"
                }`}
              ></div>
              <span className="text-sm text-slate-700">{item.task}</span>
            </div>
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                item.urgent
                  ? "bg-red-50 text-red-700"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};
