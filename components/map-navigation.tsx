"use client"

import { Button } from "@/components/ui/button"

interface MapNavigationProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

const categories = [
  { id: "mapa", label: "Mapa da Saúde Mental" },
  { id: "caps", label: "CAPS" },
  { id: "ubs", label: "UBS" },
  { id: "usf", label: "USF" },
]

export function MapNavigation({ activeCategory, onCategoryChange }: MapNavigationProps) {
  return (
    <div className="mb-6 overflow-x-auto">
      <div className="flex gap-1 min-w-max bg-sky-100 p-1 rounded-lg border border-sky-200">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "ghost"}
            className={
              activeCategory === category.id
                ? "bg-[#02629C] text-white hover:bg-[#02629C]/90 whitespace-nowrap shadow-sm"
                : "text-sky-700 hover:bg-sky-200 hover:text-sky-900 whitespace-nowrap"
            }
            onClick={() => onCategoryChange(category.id)}
          >
            {category.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
