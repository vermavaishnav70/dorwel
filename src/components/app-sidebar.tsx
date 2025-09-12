"use client";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { useSidebar } from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronUp, User2 } from "lucide-react";
import {
  Gauge,
  Zap,
  Briefcase,
  Image as ImageIcon,
  Calculator,
  FileText,
  MessageCircle,
  Settings,
} from "lucide-react";
import { Separator } from "./ui/separator";
import Image from "next/image";
// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Gauge,
  },
  {
    title: "Leads",
    url: "/leads",
    icon: Zap,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: Briefcase,
  },
  {
    title: "Moodboard",
    url: "/moodboard",
    icon: ImageIcon,
  },
  {
    title: "Estimation",
    url: "/estimation",
    icon: Calculator,
  },
  {
    title: "Proposal Builder",
    url: "/proposal-builder",
    icon: FileText,
  },
  {
    title: "WhatsApp",
    url: "/whatsapp",
    icon: MessageCircle,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const { open, setOpen, openMobile, setOpenMobile, isMobile, toggleSidebar } =
    useSidebar();
  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader className="flex flex-row items-center justify-between">
        <div
          onClick={() => {
            setOpen(!open); 
          }}
          className="flex flex-row items-center space-x-2"
        >
          <Image
            src="/logo.svg"
            className="flex-1"
            alt="logo"
            width={30}
            height={30}
          />
          {open && <h2 className="text-xl font-semibold">Dorwel</h2>}
        </div>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
