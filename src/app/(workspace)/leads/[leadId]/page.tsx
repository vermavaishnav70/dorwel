"use client";

import {
  ArrowLeft,
  Edit,
  MoreHorizontal,
  MessageSquare,
  Calendar,
  User,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { InteractionTimeline } from "../_components/interaction-timeline";
import { ProposalManagement } from "../_components/proposal-management";
import { MoodboardGallery } from "../_components/moodboard-gallery";

export default function LeadPage() {
  return (
    <div className="p-4 min-h-screen">
      <div className=" bg-secondary shadow-sm rounded-md border">
        {/* Header */}
        <header className=" rounded-sm border-b bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-xl font-semibold">James Donovan</h1>
                  <Badge
                    variant="secondary"
                    className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
                  >
                    Qualified
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Edit className="h-4 w-4" />
                Edit
              </Button>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        <div className="flex">
          {/* Main Content */}
          <div className="flex-1 p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">
                      james.d@example.com
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">
                      +1 (555) 123-4567
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Address</p>
                    <p className="text-sm text-muted-foreground">
                      123 Main St, San Francisco, CA
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Source Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Source Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium">Source</p>
                    <p className="text-sm text-muted-foreground">
                      Website Contact Form
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Campaign</p>
                    <p className="text-sm text-muted-foreground">Summer 2023</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Date Added</p>
                    <p className="text-sm text-muted-foreground">
                      July 25, 2023
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Project Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Project Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium">Type</p>
                    <p className="text-sm text-muted-foreground">
                      Residential Renovation
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Budget Range</p>
                    <p className="text-sm text-muted-foreground">
                      $50,000 - $75,000
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Timeline</p>
                    <p className="text-sm text-muted-foreground">3-6 months</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Interaction Timeline */}
            <div className="mb-6">
              <InteractionTimeline />
            </div>

            {/* Proposal Management */}
            <div className="mb-6">
              <ProposalManagement />
            </div>

            {/* Moodboard Gallery */}
            <div className="mb-6">
              <MoodboardGallery />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 border-l bg-card p-6">
            {/* Action Buttons */}
            <div className="space-y-3 mb-6">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <FileText className="mr-2 h-4 w-4" />
                Create Proposal
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                <FileText className="mr-2 h-4 w-4" />
                Send Estimate
              </Button>
              <Button
                variant="outline"
                className="w-full bg-green-50 text-green-700 border-green-200 hover:bg-green-100"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
              <Button
                variant="outline"
                className="w-full bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100"
              >
                <User className="mr-2 h-4 w-4" />
                Convert to Client
              </Button>
            </div>

            {/* Assigned To */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">
                Assigned To
              </h3>
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    SJ
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Sarah Johnson</p>
                  <p className="text-xs text-muted-foreground">
                    Interior Designer
                  </p>
                </div>
                <Button variant="ghost" size="sm" className="ml-auto">
                  <Edit className="h-3 w-3" />
                </Button>
              </div>
            </div>

            {/* Status */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">
                Status
              </h3>
              <div className="flex items-center justify-between">
                <Badge
                  variant="secondary"
                  className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
                >
                  Qualified
                </Badge>
                <Button variant="ghost" size="sm">
                  <Edit className="h-3 w-3" />
                </Button>
              </div>
              <div className="flex gap-4 mt-3 text-xs text-muted-foreground">
                <span className="border-b border-emerald-500 pb-1">Lead</span>
                <span>Prospect</span>
                <span>Client</span>
              </div>
            </div>

            {/* Tags */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Tags
                </h3>
                <Button variant="ghost" size="sm" className="text-primary">
                  + Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="bg-blue-50 text-blue-700 border-blue-200"
                >
                  High Budget
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-purple-50 text-purple-700 border-purple-200"
                >
                  Renovation
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200"
                >
                  Ready to Start
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-emerald-50 text-emerald-700 border-emerald-200"
                >
                  Eco-friendly
                </Badge>
              </div>
            </div>

            {/* Next Follow-up */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Next Follow-up
                </h3>
                <Button variant="ghost" size="sm" className="text-primary">
                  Edit
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="font-medium">Aug 5, 2023, 2:00 PM</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Schedule a video call to discuss proposal revisions and material
                options
              </p>
            </div>

            {/* Internal Notes */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Internal Notes
                </h3>
                <Button variant="ghost" size="sm" className="text-primary">
                  + Add
                </Button>
              </div>
              <div className="space-y-3">
                <div className="text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">Sarah Johnson</span>
                    <span className="text-xs text-muted-foreground">
                      Aug 1, 2023
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    Client has specific preferences for sustainable materials.
                    Should emphasize our eco-friendly options in the proposal.
                  </p>
                </div>
                <Separator />
                <div className="text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">Michael Chen</span>
                    <span className="text-xs text-muted-foreground">
                      Jul 29, 2023
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    Initial budget discussion suggests flexibility up to $75K.
                    Previous proposal was declined due to material choices, not
                    price point.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
