import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

export function BookletCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Quer saber mais sobre saúde mental?</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Baixe a cartilha completa com informações detalhadas sobre como cuidar da sua saúde mental
          </p>
          <a href="https://kassiob.github.io/Mente-Aberta/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-lg px-8 py-6 gap-2">
              <BookOpen className="w-5 h-5" />
              Acessar cartilha completa
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
