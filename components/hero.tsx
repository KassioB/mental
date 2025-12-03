import { Button } from "@/components/ui/button"
import { ChevronDown, MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"
import Logo from "@/assets/mente-aberta-logo.png"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/abstract-calm-meditation-waves-background.jpg')] opacity-5 bg-cover bg-center" />

      <div className="container mx-auto max-w-4xl relative z-10 px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-block">
            <div className="mx-auto mb-6">
              <Image
                src={Logo}
                alt="Mente Aberta"
                width={180}
                height={180}
                className="mx-auto"
                priority
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            Pare e Olhe
            <span className="block mt-2 text-primary">para Você</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Como está sua saúde mental? Já parou para pensar no assunto? Alguma vez refletiu se os seus pensamentos,
            ideias e sentimentos estão em harmonia?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="text-lg px-8 py-6 gap-2">
              <MapPin className="w-5 h-5" />
              Mapa de Saúde Mental
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
