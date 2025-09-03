"use client";
import { useState } from "react";

interface CanvasElement {
  id: string;
  type: "image" | "note" | "palette";
  x: number;
  y: number;
  width: number;
  height: number;
  src?: string;
  content?: string;
  colors?: string[];
}

const initialElements: CanvasElement[] = [
  {
    id: "main-image",
    type: "image",
    x: 40,
    y: 40,
    width: 256,
    height: 256,
    src: "https://api.builder.io/api/v1/image/assets/TEMP/1ec678230f024959ff77f9c1f5c7d3f9a9c71e22?width=512"
  },
  {
    id: "small-image-1",
    type: "image",
    x: 320,
    y: 80,
    width: 192,
    height: 128,
    src: "https://api.builder.io/api/v1/image/assets/TEMP/44e8c49ad57e372daeb750b77be680ecadc342be?width=384"
  },
  {
    id: "small-image-2",
    type: "image",
    x: 40,
    y: 320,
    width: 192,
    height: 128,
    src: "https://api.builder.io/api/v1/image/assets/TEMP/b9f47f13b78035bea71c346ec995511df1aa679f"
  },
  {
    id: "medium-image",
    type: "image",
    x: 400,
    y: 200,
    width: 160,
    height: 160,
    src: "https://api.builder.io/api/v1/image/assets/TEMP/8824f48b54b30bf7fb866e21e301553f5de21b20?width=320"
  },
  {
    id: "small-image-3",
    type: "image",
    x: 300,
    y: 300,
    width: 128,
    height: 128,
    src: "https://api.builder.io/api/v1/image/assets/TEMP/002709071b0b9a732388fb6f52418cc424ce9c4c?width=256"
  },
  {
    id: "client-notes",
    type: "note",
    x: 498,
    y: 158,
    width: 259,
    height: 196,
    content: "Prefers natural materials and neutral palette with occasional pops of muted blue. Wants a cozy yet sophisticated atmosphere."
  },
  {
    id: "color-palette",
    type: "palette",
    x: 597,
    y: 247,
    width: 165,
    height: 165,
    colors: ["#B08968", "#E6DFD4", "#F5F5F5", "#333333"]
  }
];

export function MoodboardCanvas() {
  const [elements, setElements] = useState<CanvasElement[]>(initialElements);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent, elementId: string) => {
    e.preventDefault();
    setSelectedElement(elementId);
    
    const element = elements.find(el => el.id === elementId);
    if (element) {
      const rect = e.currentTarget.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (selectedElement) {
      const rect = e.currentTarget.getBoundingClientRect();
      const newX = e.clientX - rect.left - dragOffset.x;
      const newY = e.clientY - rect.top - dragOffset.y;

      setElements(prev => prev.map(el => 
        el.id === selectedElement 
          ? { ...el, x: Math.max(0, newX), y: Math.max(0, newY) }
          : el
      ));
    }
  };

  const handleMouseUp = () => {
    setSelectedElement(null);
    setDragOffset({ x: 0, y: 0 });
  };

  const renderElement = (element: CanvasElement) => {
    const isSelected = selectedElement === element.id;
    const baseClasses = `absolute cursor-move transition-shadow ${
      isSelected ? "ring-2 ring-blue-500 shadow-lg" : "hover:shadow-md"
    }`;

    switch (element.type) {
      case "image":
        return (
          <div
            key={element.id}
            className={baseClasses}
            style={{
              left: element.x,
              top: element.y,
              width: element.width,
              height: element.height,
            }}
            onMouseDown={(e) => handleMouseDown(e, element.id)}
          >
            <img
              src={element.src}
              alt=""
              className="w-full h-full object-cover rounded-md shadow-md"
              draggable={false}
            />
            {element.id === "main-image" && (
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center">
                <svg className="w-3 h-3 text-amber-700" fill="currentColor" viewBox="0 0 12 13">
                  <path d="M12 6.125C12 8.81797 9.31409 11 6.00002 11C5.13049 11 4.30549 10.85 3.56018 10.5805C3.28127 10.7844 2.82659 11.0633 2.28752 11.2977C1.72502 11.5414 1.04768 11.75 0.375024 11.75C0.22268 11.75 0.0867424 11.6586 0.0281487 11.518C-0.0304451 11.3773 0.0023674 11.218 0.107836 11.1102L0.114867 11.1031C0.121899 11.0961 0.131274 11.0867 0.145336 11.0703C0.171117 11.0422 0.210961 10.9977 0.26018 10.9367C0.356274 10.8195 0.48518 10.6461 0.61643 10.4305C0.850805 10.0414 1.07346 9.53047 1.11799 8.95625C0.414867 8.15937 2.36547e-05 7.18203 2.36547e-05 6.125C2.36547e-05 3.43203 2.68596 1.25 6.00002 1.25C9.31409 1.25 12 3.43203 12 6.125Z"/>
                </svg>
              </div>
            )}
          </div>
        );

      case "note":
        return (
          <div
            key={element.id}
            className={`${baseClasses} bg-amber-100 bg-opacity-50 rounded-md p-4`}
            style={{
              left: element.x,
              top: element.y,
              width: element.width,
              height: element.height,
            }}
            onMouseDown={(e) => handleMouseDown(e, element.id)}
          >
            <h3 className="text-base font-medium text-gray-900 mb-3">Client Notes</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {element.content}
            </p>
          </div>
        );

      case "palette":
        return (
          <div
            key={element.id}
            className={`${baseClasses} bg-white rounded-md p-3 shadow-md`}
            style={{
              left: element.x,
              top: element.y,
              width: element.width,
              height: element.height,
            }}
            onMouseDown={(e) => handleMouseDown(e, element.id)}
          >
            <div className="space-y-2">
              {element.colors?.map((color, index) => (
                <div
                  key={index}
                  className="h-5 rounded-sm"
                  style={{ 
                    backgroundColor: color,
                    width: `${100 - index * 10}%`
                  }}
                />
              ))}
              <p className="text-xs text-gray-500 mt-3">Color Palette</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex-1 bg-gray-100">
      <div className="h-full flex items-center justify-center p-16">
        <div 
          className="bg-white rounded-xl shadow-lg relative overflow-hidden"
          style={{ width: 800, height: 600 }}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {elements.map(renderElement)}
          
          {/* Canvas background grid */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
          />
        </div>
      </div>
    </div>
  );
}
