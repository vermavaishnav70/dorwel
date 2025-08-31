// components/Header/Header.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { Search, Settings, Bell, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Navigation } from "@/components/navigation/navigation";
import { NavigationItem } from "@/types/dashboard";

interface HeaderProps {
  navigationItems: NavigationItem[];
}

export const Header: React.FC<HeaderProps> = ({ navigationItems }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-lg shadow-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image src="/logo.svg" alt="Logo" width={40} height={40} />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">Dorwel</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <Navigation items={navigationItems} />

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="hidden md:flex relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search anything..."
                className="pl-10 w-64 h-10 bg-slate-50/50 border-slate-200/50 focus:bg-white focus:border-indigo-300 transition-all duration-200"
              />
            </div>

            {/* Action Buttons */}
            <Button
              variant="ghost"
              size="sm"
              className="w-10 h-10 rounded-xl hover:bg-slate-100/80"
            >
              <Bell className="w-4 h-4 text-slate-600" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-10 h-10 rounded-xl hover:bg-slate-100/80"
            >
              <Settings className="w-4 h-4 text-slate-600" />
            </Button>

            {/* Profile */}
            <Avatar className="w-10 h-10 ring-2 ring-white shadow-md">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white"></AvatarFallback>
            </Avatar>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden w-10 h-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/50">
          <div className="px-4 py-6 space-y-4">
            <div className="md:hidden pb-4 border-b border-slate-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Search..."
                  className="pl-10 w-full h-10 bg-slate-50"
                />
              </div>
            </div>
            <div className="space-y-3">
              {navigationItems.map((item) => (
                <span key={item.id} className="block text-sm text-slate-600">
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
