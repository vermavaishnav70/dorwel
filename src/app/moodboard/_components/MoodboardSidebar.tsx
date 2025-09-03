"use client";
import { useState } from "react";

const categories = [
  { id: "furniture", name: "Furniture", count: 42, active: true },
  { id: "finishes", name: "Finishes", count: 28, active: false },
  { id: "flooring", name: "Flooring", count: 16, active: false },
  { id: "lighting", name: "Lighting", count: 23, active: false },
  { id: "textiles", name: "Textiles", count: 19, active: false },
];

const assetImages = [
  "https://api.builder.io/api/v1/image/assets/TEMP/44ea5fdebaf4bde701c51a9b43903c3b23a25fd1?width=219",
  "https://api.builder.io/api/v1/image/assets/TEMP/4616322b1d2ff5a19c787ded57ce4135aa907a61?width=219",
  "https://api.builder.io/api/v1/image/assets/TEMP/aefdbee7a04f097a1386fe4ec2e16016bb73a131?width=219",
  "https://api.builder.io/api/v1/image/assets/TEMP/47287864497257969f8c45228786afa1e2ef8d91?width=219",
  "https://api.builder.io/api/v1/image/assets/TEMP/47d94654a9f7c3a40adc68d2dc70062ae27d8cf2?width=219",
  "https://api.builder.io/api/v1/image/assets/TEMP/1d06241792d069d0fd28eb0f5f256f0f35d6295f?width=219",
];

export function MoodboardSidebar() {
  const [activeTab, setActiveTab] = useState("stock");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-full">
      {/* Library Header */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Library</h2>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("stock")}
          className={`flex-1 py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "stock"
              ? "border-amber-700 text-amber-700"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          Stock
        </button>
        <button
          onClick={() => setActiveTab("uploads")}
          className={`flex-1 py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "uploads"
              ? "border-amber-700 text-amber-700"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          Uploads
        </button>
      </div>

      {/* Search Bar */}
      <div className="p-3">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13 6.5C13 7.93437 12.5344 9.25938 11.75 10.3344L15.7063 14.2937C16.0969 14.6844 16.0969 15.3188 15.7063 15.7094C15.3156 16.1 14.6812 16.1 14.2906 15.7094L10.3344 11.75C9.25938 12.5375 7.93437 13 6.5 13C2.90937 13 0 10.0906 0 6.5C0 2.90937 2.90937 0 6.5 0C10.0906 0 13 2.90937 13 6.5Z"/>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search assets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-3 pb-3">
        <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
          Categories
        </h3>
        <div className="space-y-1">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors ${
                category.active
                  ? "bg-gray-100 text-gray-900 font-medium"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <span>{category.name}</span>
              <span className="text-xs text-gray-400">{category.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Asset Grid */}
      <div className="flex-1 px-3 overflow-y-auto">
        <div className="grid grid-cols-2 gap-3">
          {assetImages.map((image, index) => (
            <div key={index} className="relative group">
              <div className="aspect-square bg-gray-100 rounded-md overflow-hidden">
                <img
                  src={image}
                  alt={`Asset ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Hover overlay with add button */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-md flex items-center justify-center">
                <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50">
                  <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 2C8.55312 2 9 2.44688 9 3V7H13C13.5531 7 14 7.44688 14 8C14 8.55312 13.5531 9 13 9H9V13C9 13.5531 8.55312 14 8 14C7.44688 14 7 13.5531 7 13V9H3C2.44688 9 2 8.55312 2 8C2 7.44688 2.44688 7 3 7H7V3C7 2.44688 7.44688 2 8 2Z"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Upload New Button */}
        <div className="mt-4 mb-6">
          <button className="w-full border-2 border-dashed border-gray-300 rounded-lg py-3 flex items-center justify-center text-sm text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 15 15">
              <path d="M8.03125 3.73896V10.3753C8.03125 10.8593 7.64023 11.2503 7.15625 11.2503C6.67227 11.2503 6.28125 10.8593 6.28125 10.3753V3.73896L4.27422 5.746C3.93242 6.08779 3.37734 6.08779 3.03555 5.746C2.69375 5.4042 2.69375 4.84912 3.03555 4.50732L6.53555 1.00732C6.87734 0.665527 7.43242 0.665527 7.77422 1.00732L11.2742 4.50732C11.616 4.84912 11.616 5.4042 11.2742 5.746C10.9324 6.08779 10.3773 6.08779 10.0355 5.746L8.03125 3.73896Z"/>
            </svg>
            Upload New
          </button>
        </div>
      </div>
    </div>
  );
}
