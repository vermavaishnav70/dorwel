// types/dashboard.ts
export interface DashboardStats {
  revenue: number;
  activeProjects: number;
  conversionRate: number;
  efficiency: number;
}

export interface Project {
  id: string;
  name: string;
  rate: string;
  paymentStatus: "paid" | "pending";
  type: "remote" | "onsite";
  description: string;
  progress: number;
  icon: string;
}

export interface Task {
  id: string;
  task: string;
  time: string;
  urgent: boolean;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  status: string;
}

export interface ChartData {
  day: string;
  value: number;
  height: string;
  active?: boolean;
}

export interface DayData {
  /** Day label (e.g., 'M', 'T', 'W') */
  label: string;
  /** Full day name for accessibility */
  fullName: string;
  /** Number of projects for this day */
  projects: number;
  /** Optional metadata */
  meta?: Record<string, unknown>;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
  hasDropdown?: boolean;
  dropdownItems?: NavigationItem[];
}
