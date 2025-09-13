"use client";

import {
  Plus,
  Eye,
  Share2,
  Download,
  MoreHorizontal,
  Grid3X3,
  List,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface MoodboardImage {
  id: string;
  src: string;
  title: string;
  category: string;
  tags: string[];
}

const moodboardImages: MoodboardImage[] = [
  {
    id: "1",
    src: "/modern-living-room-with-sustainable-materials.jpg",
    title: "Modern Living Room",
    category: "Living Spaces",
    tags: ["Modern", "Sustainable", "Neutral"],
  },
  {
    id: "2",
    src: "/eco-friendly-kitchen-with-green-cabinets.jpg",
    title: "Eco Kitchen Design",
    category: "Kitchen",
    tags: ["Eco-friendly", "Green", "Natural"],
  },
  {
    id: "3",
    src: "/sustainable-wood-flooring-samples.jpg",
    title: "Sustainable Flooring",
    category: "Materials",
    tags: ["Wood", "Sustainable", "Flooring"],
  },
  {
    id: "4",
    src: "/modern-bathroom-with-natural-stone.jpg",
    title: "Natural Stone Bathroom",
    category: "Bathroom",
    tags: ["Stone", "Modern", "Luxury"],
  },
  {
    id: "5",
    src: "/contemporary-bedroom-with-organic-textures.jpg",
    title: "Organic Bedroom",
    category: "Bedroom",
    tags: ["Organic", "Contemporary", "Cozy"],
  },
  {
    id: "6",
    src: "/recycled-material-furniture-pieces.jpg",
    title: "Recycled Furniture",
    category: "Furniture",
    tags: ["Recycled", "Unique", "Statement"],
  },
];

export function MoodboardGallery() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(moodboardImages.map((img) => img.category))),
  ];

  const filteredImages =
    selectedCategory === "All"
      ? moodboardImages
      : moodboardImages.filter((img) => img.category === selectedCategory);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Moodboard</CardTitle>
          <Button variant="link" className="h-auto p-0 text-sm text-primary">
            View Full Moodboard
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center border rounded-md">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="rounded-r-none"
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="rounded-l-none"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Images
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : ""
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Images Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg border bg-muted"
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-1">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="h-8 w-8 p-0"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="h-8 w-8 p-0"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                  <h4 className="text-sm font-medium text-white">
                    {image.title}
                  </h4>
                  <p className="text-xs text-white/80">{image.category}</p>
                </div>
              </div>
            ))}
            {/* Add More Card */}
            <div className="aspect-[4/3] border-2 border-dashed border-muted-foreground/25 rounded-lg flex flex-col items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer">
              <Plus className="h-8 w-8 mb-2" />
              <span className="text-sm font-medium">Add More</span>
              <span className="text-xs">+8 more</span>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="flex items-center gap-4 p-3 border rounded-lg hover:bg-muted/50"
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  className="h-16 w-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="font-medium">{image.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {image.category}
                  </p>
                  <div className="flex gap-1 mt-1">
                    {image.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Moodboard Actions */}
        <div className="mt-6 pt-4 border-t">
          <div className="flex flex-wrap gap-2">
            <Button size="sm" variant="outline">
              <Share2 className="mr-2 h-4 w-4" />
              Share with Client
            </Button>
            <Button size="sm" variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export PDF
            </Button>
            <Button size="sm" variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              Create Collection
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
