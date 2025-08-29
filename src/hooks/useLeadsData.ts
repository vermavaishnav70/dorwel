"use client";
import { useState, useEffect } from "react";

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  source: string;
  budget: number;
  location: string;
  projectType: string;
  createdAt: string;
  lastContact: string;
  nextFollowUp?: string;
  notes?: string;
}

export interface LeadsStats {
  totalLeads: number;
  activeLeads: number;
  convertedLeads: number;
  averageResponseTime: string;
  conversionRate: number;
  newThisWeek: number;
}

// Mock data for demonstration
const mockLeads: Lead[] = [
  {
    id: "1",
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 98765 43210",
    status: "new",
    source: "website",
    budget: 500000,
    location: "Mumbai, Maharashtra",
    projectType: "Residential - Full Home",
    createdAt: "2024-01-15",
    lastContact: "2024-01-15",
    nextFollowUp: "2024-01-18",
    notes: "Interested in modern minimalist design for 3BHK apartment"
  },
  {
    id: "2",
    name: "Rajesh Kumar",
    email: "rajesh.kumar@business.com",
    phone: "+91 87654 32109",
    status: "contacted",
    source: "referral",
    budget: 1200000,
    location: "Delhi, NCR",
    projectType: "Commercial - Office",
    createdAt: "2024-01-14",
    lastContact: "2024-01-16",
    nextFollowUp: "2024-01-19",
    notes: "Looking for corporate office interiors, 5000 sq ft space"
  },
  {
    id: "3",
    name: "Anita Patel",
    email: "anita.patel@email.com",
    phone: "+91 76543 21098",
    status: "qualified",
    source: "social",
    budget: 300000,
    location: "Ahmedabad, Gujarat",
    projectType: "Residential - Partial",
    createdAt: "2024-01-13",
    lastContact: "2024-01-17",
    nextFollowUp: "2024-01-20",
    notes: "Kitchen and living room renovation required"
  },
  {
    id: "4",
    name: "Vikram Singh",
    email: "vikram.singh@email.com",
    phone: "+91 65432 10987",
    status: "proposal",
    source: "advertisement",
    budget: 800000,
    location: "Jaipur, Rajasthan",
    projectType: "Residential - Full Home",
    createdAt: "2024-01-12",
    lastContact: "2024-01-17",
    nextFollowUp: "2024-01-21",
    notes: "Traditional Rajasthani style preferred, 4BHK villa"
  },
  {
    id: "5",
    name: "Sunita Reddy",
    email: "sunita.reddy@email.com",
    phone: "+91 54321 09876",
    status: "converted",
    source: "referral",
    budget: 600000,
    location: "Hyderabad, Telangana",
    projectType: "Commercial - Restaurant",
    createdAt: "2024-01-10",
    lastContact: "2024-01-17",
    notes: "South Indian restaurant design completed successfully"
  },
  {
    id: "6",
    name: "Amit Gupta",
    email: "amit.gupta@email.com",
    phone: "+91 43210 98765",
    status: "new",
    source: "website",
    budget: 250000,
    location: "Pune, Maharashtra",
    projectType: "Renovation",
    createdAt: "2024-01-16",
    lastContact: "2024-01-16",
    nextFollowUp: "2024-01-19",
    notes: "Bedroom and bathroom renovation for apartment"
  },
  {
    id: "7",
    name: "Meera Nair",
    email: "meera.nair@email.com",
    phone: "+91 32109 87654",
    status: "contacted",
    source: "direct",
    budget: 150000,
    location: "Kochi, Kerala",
    projectType: "Consultation",
    createdAt: "2024-01-15",
    lastContact: "2024-01-17",
    nextFollowUp: "2024-01-20",
    notes: "Design consultation for new home construction"
  },
  {
    id: "8",
    name: "Karan Malhotra",
    email: "karan.malhotra@company.com",
    phone: "+91 21098 76543",
    status: "lost",
    source: "social",
    budget: 400000,
    location: "Chandigarh, Punjab",
    projectType: "Commercial - Retail",
    createdAt: "2024-01-11",
    lastContact: "2024-01-15",
    notes: "Lost to competitor due to budget constraints"
  }
];

const mockStats: LeadsStats = {
  totalLeads: 8,
  activeLeads: 6,
  convertedLeads: 1,
  averageResponseTime: "2.4 hrs",
  conversionRate: 12.5,
  newThisWeek: 3,
};

export function useLeadsData() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [stats, setStats] = useState<LeadsStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const loadLeadsData = async () => {
      setLoading(true);
      
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setLeads(mockLeads);
      setStats(mockStats);
      setLoading(false);
    };

    loadLeadsData();
  }, []);

  const addLead = async (newLead: Omit<Lead, "id" | "createdAt" | "lastContact">) => {
    const lead: Lead = {
      ...newLead,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split('T')[0],
      lastContact: new Date().toISOString().split('T')[0],
    };
    
    setLeads((prev) => [lead, ...prev]);
    
    // Update stats
    setStats((prev) => prev ? {
      ...prev,
      totalLeads: prev.totalLeads + 1,
      activeLeads: prev.activeLeads + 1,
      newThisWeek: prev.newThisWeek + 1,
    } : null);
  };

  const updateLead = async (leadId: string, updates: Partial<Lead>) => {
    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === leadId
          ? { ...lead, ...updates, lastContact: new Date().toISOString().split('T')[0] }
          : lead
      )
    );
  };

  const deleteLead = async (leadId: string) => {
    setLeads((prev) => prev.filter((lead) => lead.id !== leadId));
    
    // Update stats
    setStats((prev) => prev ? {
      ...prev,
      totalLeads: prev.totalLeads - 1,
      activeLeads: prev.activeLeads - 1,
    } : null);
  };

  return {
    leads,
    stats,
    loading,
    addLead,
    updateLead,
    deleteLead,
  };
}
