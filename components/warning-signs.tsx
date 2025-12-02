import { Card } from "@/components/ui/card"
import { AlertTriangle, Eye } from "lucide-react"

const warningSigns = [
  {
    category: "Emocionais",
    signs: [
      "Tristeza persistente ou vazio",
      "Irritabilidade ou ansiedade excessiva",
      "Mudanças bruscas de humor",
      "Sentimento de culpa ou desesperança",
      "Perda de interesse em atividades",
    ],
  },
  {
    category: "Comportamentais",
    signs: [
      "Isolamento social",
      "Alterações no sono ou apetite",
      "Dificuldade de concentração",
      "Uso excessivo de álcool ou drogas",
      "Falar sobre morte ou suicídio",
    ],
  },
  {
    category: "Físicos",
    signs: [
      "Fadiga ou falta de energia constante",
      "Dores sem causa aparente",
      "Tensão muscular",
      "Problemas gastrointestinais",
      "Alterações no peso",
    ],
  },
]

export function WarningSigns() {
  return (
    <section className="py-20 bg-destructive/5">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10 mb-6">
              <Eye className="w-10 h-10 text-destructive" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Sinais de Alerta</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Fique atento aos sinais que podem indicar problemas com a saúde mental
            </p>
          </div>

          <Card className="p-8 mb-8 bg-destructive/10 border-destructive/20">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Importante</h3>
                <p className="text-muted-foreground text-balance leading-relaxed">
                  A presença de um ou mais desses sinais não significa necessariamente um transtorno mental, mas indica
                  que é importante buscar avaliação profissional. Quanto mais cedo o diagnóstico, melhores os resultados
                  do tratamento.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            {warningSigns.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 mb-4 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-destructive">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.category}</h3>
                <ul className="space-y-2">
                  {item.signs.map((sign, signIndex) => (
                    <li key={signIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-destructive/60 flex-shrink-0 mt-2" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{sign}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
