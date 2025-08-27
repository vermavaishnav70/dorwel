// components/Dashboard/PremiumUpgrade.tsx
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, ArrowRight } from "lucide-react";

export const PremiumUpgrade: React.FC = () => {
  return (
    <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200/50">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
          <Crown className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Upgrade to Premium</h3>
          <p className="text-sm text-slate-600">Unlock advanced features</p>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2 text-sm text-slate-700">
          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
          <span>Advanced analytics & reporting</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-700">
          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
          <span>Unlimited projects & clients</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-700">
          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
          <span>Priority support</span>
        </div>
      </div>

      <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white">
        <span>Upgrade Now</span>
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </Card>
  );
};
