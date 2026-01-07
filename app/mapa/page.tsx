"use client"

import { useState } from "react"
import Header from "@/components/Header"
import { Breadcrumb } from "@/components/Breadcrumb"
import { MapContainer } from "@/components/map-container"
import { MapNavigation } from "@/components/map-navigation"
import { Footer } from "@/components/footer"

export default function InstitutionsPage() {
  const [activeCategory, setActiveCategory] = useState("mapa")

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumb />
      
      <main className="flex-1 px-4 md:px-8 lg:px-16 xl:px-24 py-8 bg-background">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold tracking-tight">Mapa da Saúde Mental</h2>
            <p className="text-muted-foreground">
              Encontre instituições e serviços de saúde mental próximos a você em Alagoas.
            </p>
          </div>

          <MapNavigation activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
          <MapContainer activeCategory={activeCategory} />
        </div>
      </main>

      <Footer />
    </div>
  )
}
