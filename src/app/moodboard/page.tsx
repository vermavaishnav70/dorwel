"use client";
import { Header } from "@/components/header/header";
import { MoodboardSidebar } from "@/app/moodboard/_components/MoodboardSidebar";
import { MoodboardCanvas } from "@/app/moodboard/_components/MoodboardCanvas";
import { MoodboardToolbar } from "@/app/moodboard/_components/MoodboardToolbar";
import { NavigationItem } from "@/types/dashboard";

const navigationItems: NavigationItem[] = [
  { id: "dashboard", label: "Dashboard", href: "/dashboard" },
  { id: "crm", label: "CRM", href: "/crm" },
  { id: "leads", label: "Leads", href: "/leads" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "moodboard", label: "Moodboard", href: "/moodboard", isActive: true },
  { id: "estimation", label: "Estimation", href: "/estimation" },
  { id: "proposal-builder", label: "Proposal Builder", href: "/proposal-builder" },
  { id: "whatsapp", label: "WhatsApp", href: "/whatsapp" },
  { id: "settings", label: "Settings", href: "/settings" },
];

export default function MoodboardPage() {
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      {/* Header with breadcrumbs */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-gray-500">
            <span className="text-gray-500 font-medium">Projects</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500 font-medium">Modern Loft Redesign</span>
            <span className="text-gray-400">/</span>
            <span className="text-amber-700 font-medium">Moodboard</span>
          </nav>

          {/* Status badges and tools */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Design
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                Deal
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                Deliver
              </span>
            </div>
            
            <div className="w-px h-6 bg-gray-300"></div>
            
            <div className="flex items-center space-x-3">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z"/>
                </svg>
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3.78125 1C2.8625 1 2.0625 1.625 1.84063 2.51562L0.059375 9.6375C0.01875 9.79688 0 9.95937 0 10.1219V13C0 14.1031 0.896875 15 2 15H14C15.1031 15 16 14.1031 16 13V10.1219C16 9.95937 15.9812 9.79688 15.9406 9.6375L14.1594 2.51562C13.9375 1.625 13.1375 1 12.2188 1H3.78125Z"/>
                </svg>
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Left Sidebar Navigation */}
        <div className="w-64 bg-white border-r border-gray-200 shadow-lg">
          <div className="p-4 border-b border-gray-200">
            <h1 className="text-xl font-semibold text-gray-900">Dorwel</h1>
          </div>
          
          {/* Navigation Menu */}
          <nav className="p-2">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`flex items-center px-3 py-2 mb-1 text-sm font-medium rounded-md transition-colors ${
                  item.isActive
                    ? "bg-amber-100 text-amber-700"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {item.id === "moodboard" && (
                  <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 16 15">
                    <path d="M4.375 1.625C3.40977 1.625 2.625 2.40977 2.625 3.375V9.5C2.625 10.4652 3.40977 11.25 4.375 11.25H14C14.9652 11.25 15.75 10.4652 15.75 9.5V3.375C15.75 2.40977 14.9652 1.625 14 1.625H4.375Z"/>
                  </svg>
                )}
                {item.label}
              </a>
            ))}
          </nav>

          {/* User Profile */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full"
                src="https://api.builder.io/api/v1/image/assets/TEMP/bf5fe8dc00b506410e9646a00ebbe8973ae23ce3?width=80"
                alt="Alex Morgan"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Alex Morgan</p>
                <p className="text-xs text-gray-500">Interior Designer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Asset Library Sidebar */}
        <MoodboardSidebar />

        {/* Main Canvas Area */}
        <div className="flex-1 flex flex-col">
          <MoodboardToolbar />
          <MoodboardCanvas />
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-200 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="font-medium text-gray-900">Modern Loft Redesign</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              In Progress
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 15 15">
                <path d="M3.50469 10.9496C3.85743 10.6926 4.31407 10.627 4.72422 10.7746C5.44883 11.0371 6.26094 11.1875 7.12501 11.1875C10.5348 11.1875 12.8125 8.98633 12.8125 6.8125C12.8125 4.63867 10.5348 2.4375 7.12501 2.4375C3.71524 2.4375 1.43751 4.63867 1.43751 6.8125C1.43751 7.6875 1.77657 8.52969 2.41368 9.25156C2.64883 9.5168 2.76368 9.8668 2.73633 10.2223C2.69805 10.7172 2.58047 11.1711 2.42735 11.573C2.89219 11.357 3.27774 11.1164 3.50469 10.9523V10.9496Z"/>
              </svg>
              Comments (3)
            </button>
            
            <div className="w-px h-6 bg-gray-300"></div>
            
            <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
              Client Portal View
            </button>
            <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 15 15">
                <path d="M8.03125 3.73896V10.3753C8.03125 10.8593 7.64023 11.2503 7.15625 11.2503C6.67227 11.2503 6.28125 10.8593 6.28125 10.3753V3.73896L4.27422 5.746C3.93242 6.08779 3.37734 6.08779 3.03555 5.746C2.69375 5.4042 2.69375 4.84912 3.03555 4.50732L6.53555 1.00732C6.87734 0.665527 7.43242 0.665527 7.77422 1.00732L11.2742 4.50732C11.616 4.84912 11.616 5.4042 11.2742 5.746C10.9324 6.08779 10.3773 6.08779 10.0355 5.746L8.03125 3.73896Z"/>
              </svg>
              Download PDF
            </button>
            <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-amber-700 rounded-md hover:bg-amber-800">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 13 15">
                <path d="M10.3125 6.375C11.7617 6.375 12.9375 5.19922 12.9375 3.75C12.9375 2.30078 11.7617 1.125 10.3125 1.125C8.86328 1.125 7.6875 2.30078 7.6875 3.75C7.6875 3.85938 7.69297 3.96875 7.70664 4.07539L5.13359 5.36055C4.66328 4.90391 4.0207 4.625 3.3125 4.625C1.86328 4.625 0.6875 5.80078 0.6875 7.25C0.6875 8.69922 1.86328 9.875 3.3125 9.875C4.0207 9.875 4.66328 9.59609 5.13359 9.13945L7.70664 10.4246C7.69297 10.5312 7.6875 10.6379 7.6875 10.75C7.6875 12.1992 8.86328 13.375 10.3125 13.375C11.7617 13.375 12.9375 12.1992 12.9375 10.75C12.9375 9.30078 11.7617 8.125 10.3125 8.125Z"/>
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
