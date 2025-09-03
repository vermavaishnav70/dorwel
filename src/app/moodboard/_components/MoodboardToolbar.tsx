"use client";
import { useState } from "react";

export function MoodboardToolbar() {
  const [zoom, setZoom] = useState(100);
  const [autoSave, setAutoSave] = useState(true);

  const tools = [
    {
      name: "Hand Tool",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
          <path d="M9 1C9 0.446875 8.55312 0 8 0C7.44687 0 7 0.446875 7 1V7.5C7 7.775 6.775 8 6.5 8C6.225 8 6 7.775 6 7.5V2C6 1.44687 5.55312 1 5 1C4.44687 1 4 1.44687 4 2V10.5C4 10.5469 4 10.5969 4.00312 10.6438L2.1125 8.84375C1.6125 8.36875 0.821873 8.3875 0.343748 8.8875C-0.134377 9.3875 -0.112502 10.1781 0.387498 10.6562L3.9 14C5.24687 15.2844 7.0375 16 8.9 16H9.5C12.5375 16 15 13.5375 15 10.5V4C15 3.44688 14.5531 3 14 3C13.4469 3 13 3.44688 13 4V7.5C13 7.775 12.775 8 12.5 8C12.225 8 12 7.775 12 7.5V2C12 1.44687 11.5531 1 11 1C10.4469 1 10 1.44687 10 2V7.5C10 7.775 9.775 8 9.5 8C9.225 8 9 7.775 9 7.5V1Z"/>
        </svg>
      ),
      active: false,
    },
    {
      name: "Text Tool",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 14 16">
          <path d="M7.9375 1.65C7.79063 1.25937 7.41563 1 7 1C6.58437 1 6.20937 1.25937 6.0625 1.65L1.80625 13H1C0.446875 13 0 13.4469 0 14C0 14.5531 0.446875 15 1 15H4C4.55312 15 5 14.5531 5 14C5 13.4469 4.55312 13 4 13H3.94375L4.50625 11.5H9.49375L10.0562 13H10C9.44687 13 9 13.4469 9 14C9 14.5531 9.44687 15 10 15H13C13.5531 15 14 14.5531 14 14C14 13.4469 13.5531 13 13 13H12.1938L7.9375 1.65ZM8.74375 9.5H5.25625L7 4.84688L8.74375 9.5Z"/>
        </svg>
      ),
      active: false,
    },
    {
      name: "Save Tool",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 14 16">
          <path d="M2 1C0.896875 1 0 1.89688 0 3V13C0 14.1031 0.896875 15 2 15H9V11.5C9 10.6719 9.67188 10 10.5 10H14V3C14 1.89688 13.1031 1 12 1H2ZM14 11H12.5844H10.5C10.225 11 10 11.225 10 11.5V13.5844V15L11 14L13 12L14 11Z"/>
        </svg>
      ),
      active: false,
    },
    {
      name: "Edit Tool",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11.3344 0.603516L9.8219 2.11602L13.8844 6.17852L15.3969 4.66602C16.1782 3.88477 16.1782 2.61914 15.3969 1.83789L14.1657 0.603516C13.3844 -0.177734 12.1188 -0.177734 11.3375 0.603516H11.3344ZM9.11565 2.82227L1.83128 10.1098C1.50628 10.4348 1.26878 10.8379 1.13753 11.2785L0.0312776 15.0379C-0.0468474 15.3035 0.0250276 15.5879 0.218778 15.7816C0.412528 15.9754 0.696903 16.0473 0.959403 15.9723L4.71878 14.866C5.1594 14.7348 5.56253 14.4973 5.88753 14.1723L13.1782 6.88477L9.11565 2.82227Z"/>
        </svg>
      ),
      active: false,
    },
    {
      name: "Crop Tool",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
          <path d="M14 3.41563L15.7063 1.70938C16.0969 1.31875 16.0969 0.684375 15.7063 0.29375C15.3156 -0.096875 14.6812 -0.096875 14.2906 0.29375L12.5844 2H5V4H10.5844L4 10.5844V1C4 0.446875 3.55312 0 3 0C2.44688 0 2 0.446875 2 1V2H1C0.446875 2 0 2.44688 0 3C0 3.55312 0.446875 4 1 4H2V12C2 13.1031 2.89687 14 4 14H11V12H5.41563L12 5.41563V15C12 15.5531 12.4469 16 13 16C13.5531 16 14 15.5531 14 15V14H15C15.5531 14 16 13.5531 16 13C16 12.4469 15.5531 12 15 12H14V3.41563Z"/>
        </svg>
      ),
      active: false,
    },
    {
      name: "Add",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 14 16">
          <path d="M8 2.5C8 1.94687 7.55312 1.5 7 1.5C6.44688 1.5 6 1.94687 6 2.5V7H1.5C0.946875 7 0.5 7.44688 0.5 8C0.5 8.55312 0.946875 9 1.5 9H6V13.5C6 14.0531 6.44688 14.5 7 14.5C7.55312 14.5 8 14.0531 8 13.5V9H12.5C13.0531 9 13.5 8.55312 13.5 8C13.5 7.44688 13.0531 7 12.5 7H8V2.5Z"/>
        </svg>
      ),
      active: false,
    },
    {
      name: "Remove",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 14 16">
          <path d="M13.5 8C13.5 8.55313 13.0531 9 12.5 9H1.5C0.946875 9 0.5 8.55313 0.5 8C0.5 7.44687 0.946875 7 1.5 7H12.5C13.0531 7 13.5 7.44687 13.5 8Z"/>
        </svg>
      ),
      active: false,
    },
  ];

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Left side - Tools */}
        <div className="flex items-center">
          <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm">
            {tools.map((tool, index) => (
              <div key={tool.name} className="flex">
                <button
                  className={`p-2 hover:bg-gray-50 transition-colors ${
                    index === 0 ? "rounded-l-lg" : ""
                  } ${index === tools.length - 1 ? "rounded-r-lg" : ""}`}
                  title={tool.name}
                >
                  <div className="text-gray-600">{tool.icon}</div>
                </button>
                {index === 4 && (
                  <div className="w-px bg-gray-200 my-2"></div>
                )}
              </div>
            ))}
          </div>

          {/* Zoom Control */}
          <div className="ml-4 flex items-center text-sm text-gray-600">
            <span>{zoom}%</span>
          </div>
        </div>

        {/* Right side - Status and History */}
        <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <button
            onClick={() => setAutoSave(!autoSave)}
            className={`px-4 py-2 text-sm font-medium border-r border-gray-200 transition-colors ${
              autoSave
                ? "text-amber-700 bg-amber-50"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Auto-Save {autoSave ? "On" : "Off"}
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
            History
          </button>
        </div>
      </div>
    </div>
  );
}
