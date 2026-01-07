"use client"

import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Maximize2, Minimize2, User } from "lucide-react"
import { RatingDialog } from "@/components/rating-dialog"
// Importação dinâmica do Leaflet é recomendada, mas mantendo a sua estrutura:
// import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet"
// import L from "leaflet"
import "leaflet/dist/leaflet.css"

type Institution = {
  id: number
  name: string
  latitude: number
  longitude: number
  type: string
}

interface MapContainerProps {
  activeCategory: string
}

export function MapContainer({ activeCategory }: MapContainerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [selectedFacility, setSelectedFacility] = useState<{ id: number; name: string } | null>(null)
  const [institutions, setInstitutions] = useState<Institution[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [rl, setRl] = useState<typeof import("react-leaflet") | null>(null)
  const [lf, setLf] = useState<typeof import("leaflet") | null>(null)

  const filteredInstitutions = useMemo(() => {
    if (activeCategory === "mapa") return institutions
    return institutions.filter(
      (inst) => inst.type.toLowerCase() === activeCategory.toLowerCase()
    )
  }, [institutions, activeCategory])

  useEffect(() => {
    let mounted = true
    Promise.all([import("react-leaflet"), import("leaflet")]).then(([reactLeaflet, leafletLib]) => {
      if (mounted) {
        setRl(reactLeaflet)
        setLf(leafletLib)
      }
    })
    return () => {
      mounted = false
    }
  }, [])

  // Configuração dos ícones (Corrige o bug de ícones invisíveis do Leaflet padrão)
  const defaultIcon = useMemo(() => {
    if (!lf) return null
    return lf.icon({
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    })
  }, [lf])

  useEffect(() => {
    let mounted = true
    async function load() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch("/api/mapa")
        if (!res.ok) throw new Error("failed")
        const data = await res.json()
        if (mounted) setInstitutions(data)
      } catch {
        if (mounted) setError("Não foi possível carregar os locais")
      } finally {
        if (mounted) setLoading(false)
      }
    }
    load()
    return () => {
      mounted = false
    }
  }, [])

  return (
    <div
      className={`bg-card border border-border rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
        isFullscreen ? "fixed inset-0 z-40" : "relative h-[600px] z-0"
      }`}
    >
      {/* Botões de Controle */}
      <div className="absolute top-4 right-4 z-[500] flex flex-col gap-2">
        <Button
          variant="secondary"
          size="icon"
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 shadow-md"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 shadow-md"
        >
          <User className="w-4 h-4" />
        </Button>
      </div>

      {/* Área do Mapa */}
      <div className="relative w-full h-full">
        {loading && (
          <div className="absolute inset-0 z-[1000] flex items-center justify-center bg-background/80 text-muted-foreground text-sm">
            Carregando mapa...
          </div>
        )}
        {error && (
          <div className="absolute inset-0 z-[1000] flex items-center justify-center bg-background/80 text-destructive text-sm">
            {error}
          </div>
        )}
        {rl && lf && (
          <rl.MapContainer 
            center={[-9.665, -35.735]} 
            zoom={13} 
            style={{ height: "100%", width: "100%", zIndex: 1 }}
        >
          <rl.TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filteredInstitutions.map((facility) => (
            <rl.Marker
              key={facility.id}
              position={[facility.latitude, facility.longitude]}
              icon={defaultIcon}
              eventHandlers={{
                click: () => {
                   // Ao clicar, o estado muda e aciona o modal abaixo
                   setSelectedFacility({ id: facility.id, name: facility.name })
                }
              }}
            >
              <rl.Popup>
                <div className="space-y-1">
                  <div className="font-semibold">{facility.name}</div>
                  <div className="text-xs text-muted-foreground">{facility.type}</div>
                  <Button 
                    size="sm" 
                    className="mt-2 w-full" 
                    onClick={() => setSelectedFacility({ id: facility.id, name: facility.name })}
                  >
                    Ver Detalhes e Avaliar
                  </Button>
                </div>
              </rl.Popup>
            </rl.Marker>
          ))}
        </rl.MapContainer>
        )}
      </div>

      {/* CORREÇÃO DO MODAL DE FEEDBACK (Z-INDEX FIX) */}
      {selectedFacility && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in">
            {/* O onClick no fundo fecha o modal se clicar fora */}
            <div className="absolute inset-0" onClick={() => setSelectedFacility(null)} />
            
            <div className="relative bg-card p-1 rounded-lg shadow-xl max-w-lg w-full z-[10000]">
                 <RatingDialog 
                    facilityId={selectedFacility.id} 
                    facilityName={selectedFacility.name} 
                    onClose={() => setSelectedFacility(null)} 
                 />
            </div>
        </div>
      )}

    </div>
  )
}