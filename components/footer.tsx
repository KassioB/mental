import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, Phone, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-20 bg-muted/50">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h4 className="text-xl font-semibold mb-2">CVV - Centro de Valorização da Vida</h4>
              <p className="text-3xl font-bold text-primary mb-2">188</p>
              <p className="text-sm text-muted-foreground">Atendimento 24 horas, gratuito e sigiloso</p>
            </Card>

            <Card className="p-6 text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-destructive" />
              <h4 className="text-xl font-semibold mb-2">CAPS - Centro de Atenção Psicossocial</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Serviço gratuito do SUS para atendimento em saúde mental
              </p>
              <a href="https://cidadao.saude.al.gov.br/informacoes/mapa_saude/#caps" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">Encontrar CAPS</Button>
              </a>
            </Card>
          </div>

          <div className="text-center text-muted-foreground">
            <p className="mb-2">Conteúdo baseado em informações do Hospital Israelita Albert Einstein</p>
            <p className="text-sm">Conscientização em Saúde Mental • Cuide de Você</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
