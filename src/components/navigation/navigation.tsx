// components/Navigation/Navigation.tsx
"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { NavigationItem } from "@/types/dashboard";

interface NavigationProps {
  items: NavigationItem[];
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  items,
  className = "hidden lg:flex items-center space-x-6",
}) => {
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set());
  const pathname = usePathname();

  const toggleDropdown = (itemId: string) => {
    setOpenDropdowns((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const isItemActive = (item: NavigationItem): boolean => {
    return pathname === item.href || pathname.startsWith(item.href + "/");
  };

  const renderNavigationItem = (item: NavigationItem) => {
    const isActive = isItemActive(item);
    const hasDropdown = item.hasDropdown && item.dropdownItems?.length;
    const isDropdownOpen = openDropdowns.has(item.id);

    if (hasDropdown) {
      return (
        <div key={item.id} className="relative">
          <div
            className={`flex items-center gap-1 text-sm transition-colors cursor-pointer ${
              isActive
                ? "font-semibold text-slate-900"
                : "text-slate-600 hover:text-slate-900"
            }`}
            onClick={() => toggleDropdown(item.id)}
          >
            <span>{item.label}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {isActive && (
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
          )}

          {isDropdownOpen && item.dropdownItems && (
            <div className="absolute top-full left-0 mt-2 py-2 bg-white border border-slate-200 rounded-lg shadow-lg min-w-48 z-50">
              {item.dropdownItems.map((dropdownItem) => (
                <Link
                  key={dropdownItem.id}
                  href={dropdownItem.href}
                  className="block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                >
                  {dropdownItem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={item.id}
        href={item.href}
        className={`text-sm transition-colors cursor-pointer relative ${
          isActive
            ? "font-semibold text-slate-900"
            : "text-slate-600 hover:text-slate-900"
        }`}
      >
        <span>
          {item.label}
          {isActive && (
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
          )}
        </span>
      </Link>
    );
  };

  return <div className={className}>{items.map(renderNavigationItem)}</div>;
};
