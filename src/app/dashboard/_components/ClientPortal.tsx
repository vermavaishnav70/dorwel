// components/Dashboard/ClientPortal.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";
import { Client } from "@/types/dashboard";

interface ClientPortalProps {
  clients: Client[];
}

export const ClientPortal: React.FC<ClientPortalProps> = ({ clients }) => {
  return (
    <div className="mt-8">
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-slate-200/50">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-indigo-600" />
            <div>
              <h2 className="text-xl font-bold text-slate-900">Client Portal</h2>
              <p className="text-sm text-slate-600">Manage your client relationships</p>
            </div>
          </div>
          <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
            View all clients
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {clients.map((client) => (
            <div
              key={client.id}
              className="p-4 rounded-xl bg-slate-50/80 border border-slate-100 hover:bg-slate-100/80 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 font-semibold text-sm">
                      {client.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{client.name}</h3>
                    <p className="text-xs text-slate-600">{client.email}</p>
                  </div>
                </div>
                <Badge
                  className={`text-xs px-2 py-1 ${
                    client.status === "Active"
                      ? "bg-green-100 text-green-700 border-green-200"
                      : "bg-orange-100 text-orange-700 border-orange-200"
                  }`}
                >
                  {client.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
