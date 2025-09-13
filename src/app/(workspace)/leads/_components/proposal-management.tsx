"use client";

import {
  FileText,
  Eye,
  Edit,
  Download,
  Send,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface Proposal {
  id: string;
  proposalId: string;
  date: string;
  amount: number;
  status: "draft" | "sent" | "under_review" | "accepted" | "declined";
  description: string;
  items: number;
  validUntil?: string;
}

const proposalData: Proposal[] = [
  {
    id: "1",
    proposalId: "PRO-2023-0042",
    date: "Jul 31, 2023",
    amount: 62500,
    status: "under_review",
    description: "Complete residential renovation with sustainable materials",
    items: 12,
    validUntil: "Aug 15, 2023",
  },
  {
    id: "2",
    proposalId: "PRO-2023-0036",
    date: "Jul 29, 2023",
    amount: 58750,
    status: "declined",
    description: "Initial renovation proposal with premium finishes",
    items: 10,
  },
  {
    id: "3",
    proposalId: "PRO-2023-0028",
    date: "Jul 20, 2023",
    amount: 45000,
    status: "draft",
    description: "Budget-friendly renovation options",
    items: 8,
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "draft":
      return (
        <Badge
          variant="outline"
          className="bg-gray-50 text-gray-700 border-gray-200"
        >
          Draft
        </Badge>
      );
    case "sent":
      return (
        <Badge
          variant="outline"
          className="bg-blue-50 text-blue-700 border-blue-200"
        >
          Sent
        </Badge>
      );
    case "under_review":
      return (
        <Badge
          variant="secondary"
          className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
        >
          Under Review
        </Badge>
      );
    case "accepted":
      return (
        <Badge
          variant="outline"
          className="bg-green-50 text-green-700 border-green-200"
        >
          Accepted
        </Badge>
      );
    case "declined":
      return (
        <Badge
          variant="destructive"
          className="bg-red-100 text-red-700 hover:bg-red-100"
        >
          Declined
        </Badge>
      );
    default:
      return <Badge variant="outline">Unknown</Badge>;
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "draft":
      return <Edit className="h-4 w-4 text-gray-500" />;
    case "sent":
      return <Send className="h-4 w-4 text-blue-500" />;
    case "under_review":
      return <Clock className="h-4 w-4 text-yellow-500" />;
    case "accepted":
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    case "declined":
      return <XCircle className="h-4 w-4 text-red-500" />;
    default:
      return <FileText className="h-4 w-4 text-gray-500" />;
  }
};

export function ProposalManagement() {
  const totalProposals = proposalData.length;
  const acceptedProposals = proposalData.filter(
    (p) => p.status === "accepted"
  ).length;
  const pendingProposals = proposalData.filter(
    (p) => p.status === "under_review" || p.status === "sent"
  ).length;
  const totalValue = proposalData.reduce((sum, p) => sum + p.amount, 0);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Proposal History</CardTitle>
          <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
            <span>{totalProposals} Total</span>
            <span>{pendingProposals} Pending</span>
            <span>{acceptedProposals} Accepted</span>
            <span>${totalValue.toLocaleString()} Total Value</span>
          </div>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <FileText className="mr-2 h-4 w-4" />
          Create Proposal
        </Button>
      </CardHeader>
      <CardContent>
        {/* Proposal Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Conversion Rate</span>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </div>
            <div className="text-2xl font-bold">33%</div>
            <Progress value={33} className="mt-2" />
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Avg. Response Time</span>
              <Clock className="h-4 w-4 text-blue-500" />
            </div>
            <div className="text-2xl font-bold">2.5 days</div>
            <p className="text-xs text-muted-foreground mt-1">
              Industry avg: 5 days
            </p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Avg. Proposal Value</span>
              <FileText className="h-4 w-4 text-purple-500" />
            </div>
            <div className="text-2xl font-bold">
              ${(totalValue / totalProposals).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              +12% from last month
            </p>
          </div>
        </div>

        {/* Proposals Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-3 text-sm font-medium text-muted-foreground">
                  Proposal
                </th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">
                  Date
                </th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">
                  Amount
                </th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">
                  Status
                </th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">
                  Valid Until
                </th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {proposalData.map((proposal) => (
                <tr key={proposal.id} className="border-b hover:bg-muted/50">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(proposal.status)}
                      <div>
                        <Button
                          variant="link"
                          className="h-auto p-0 text-primary font-medium"
                        >
                          {proposal.proposalId}
                        </Button>
                        <p className="text-xs text-muted-foreground">
                          {proposal.description}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {proposal.items} items
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-sm">{proposal.date}</td>
                  <td className="py-4 text-sm font-medium">
                    ${proposal.amount.toLocaleString()}
                  </td>
                  <td className="py-4">{getStatusBadge(proposal.status)}</td>
                  <td className="py-4 text-sm">
                    {proposal.validUntil ? (
                      <span
                        className={
                          proposal.status === "under_review"
                            ? "text-orange-600 font-medium"
                            : "text-muted-foreground"
                        }
                      >
                        {proposal.validUntil}
                      </span>
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </td>
                  <td className="py-4">
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Download className="h-4 w-4" />
                      </Button>
                      {proposal.status === "draft" && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-primary"
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 pt-4 border-t">
          <div className="flex flex-wrap gap-2">
            <Button size="sm" variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Duplicate Last Proposal
            </Button>
            <Button size="sm" variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export All Proposals
            </Button>
            <Button size="sm" variant="outline">
              <Send className="mr-2 h-4 w-4" />
              Send Reminder
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
