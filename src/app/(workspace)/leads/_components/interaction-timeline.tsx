"use client";

import {
  Phone,
  Mail,
  MessageSquare,
  Star,
  FileText,
  Calendar,
  User,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface TimelineItem {
  id: string;
  type:
    | "phone"
    | "email"
    | "whatsapp"
    | "status_change"
    | "lead_created"
    | "meeting"
    | "proposal";
  title: string;
  description: string;
  author?: string;
  timestamp: string;
  status?: string;
  automated?: boolean;
}

const timelineData: TimelineItem[] = [
  {
    id: "1",
    type: "phone",
    title: "Phone Call",
    description:
      "Discussed project requirements and budget constraints. Client is interested in modern design with sustainable materials.",
    author: "Sarah Johnson",
    timestamp: "Today, 10:30 AM",
  },
  {
    id: "2",
    type: "email",
    title: "Email",
    description: "Sent initial project questionnaire and company portfolio.",
    timestamp: "Yesterday, 2:15 PM",
    automated: true,
  },
  {
    id: "3",
    type: "status_change",
    title: "Status Change",
    description: "Lead status changed from Contacted to Qualified.",
    timestamp: "Yesterday, 9:00 AM",
    status: "System",
  },
  {
    id: "4",
    type: "whatsapp",
    title: "WhatsApp",
    description:
      "Initial contact made. Client responded positively to our services.",
    author: "Sarah Johnson",
    timestamp: "Jul 30, 2023, 11:20 AM",
  },
  {
    id: "5",
    type: "lead_created",
    title: "Lead Created",
    description: "Lead created from Website Contact Form.",
    timestamp: "Jul 28, 2023, 3:45 PM",
    status: "System",
  },
];

const getTimelineIcon = (type: string) => {
  switch (type) {
    case "phone":
      return <Phone className="h-4 w-4 text-blue-600" />;
    case "email":
      return <Mail className="h-4 w-4 text-gray-600" />;
    case "whatsapp":
      return <MessageSquare className="h-4 w-4 text-green-600" />;
    case "status_change":
      return <Star className="h-4 w-4 text-emerald-600" />;
    case "lead_created":
      return <User className="h-4 w-4 text-gray-600" />;
    case "meeting":
      return <Calendar className="h-4 w-4 text-purple-600" />;
    case "proposal":
      return <FileText className="h-4 w-4 text-orange-600" />;
    default:
      return <CheckCircle className="h-4 w-4 text-gray-600" />;
  }
};

const getTimelineIconBg = (type: string) => {
  switch (type) {
    case "phone":
      return "bg-blue-100";
    case "email":
      return "bg-gray-100";
    case "whatsapp":
      return "bg-green-100";
    case "status_change":
      return "bg-emerald-100";
    case "lead_created":
      return "bg-gray-100";
    case "meeting":
      return "bg-purple-100";
    case "proposal":
      return "bg-orange-100";
    default:
      return "bg-gray-100";
  }
};

export function InteractionTimeline() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Interaction Timeline</CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {timelineData.map((item, index) => (
            <div key={item.id}>
              <div className="flex items-start gap-3">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${getTimelineIconBg(
                    item.type
                  )}`}
                >
                  {getTimelineIcon(item.type)}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.timestamp}
                    </p>
                  </div>
                  {item.author && (
                    <p className="text-sm text-muted-foreground">
                      by {item.author}
                    </p>
                  )}
                  {item.automated && (
                    <Badge variant="outline" className="text-xs">
                      Automated
                    </Badge>
                  )}
                  {item.status && (
                    <p className="text-sm text-muted-foreground">
                      {item.status}
                    </p>
                  )}
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
              {index < timelineData.length - 1 && (
                <Separator className="ml-11 mt-4" />
              )}
            </div>
          ))}
        </div>

        {/* Add New Interaction */}
        <div className="mt-6 pt-4 border-t">
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              className="flex-1 bg-transparent"
            >
              <Phone className="mr-2 h-4 w-4" />
              Log Call
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="flex-1 bg-transparent"
            >
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="flex-1 bg-transparent"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Meeting
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
