import { Card } from "@/components/ui/card"
import { Brain, Users, TrendingUp, AlertCircle } from "lucide-react"

const stats = [
  {
    icon: Brain,
    value: "1 em 4",
    label: "pessoas terão um transtorno mental ao longo da vida",
    color: "text-chart-1",
  },
  {
    icon: Users,
    value: "80%",
    label: "dos casos de transtornos mentais podem ser tratados com sucesso",
    color: "text-chart-2",
  },
  {
    icon: AlertCircle,
    value: "12 mil",
    label: "suicídios ocorrem por ano no Brasil",
    color: "text-chart-4",
  },
  {
    icon: TrendingUp,
    value: "30%",
    label: "das pessoas com depressão não buscam tratamento",
    color: "text-chart-3",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Dados que Precisamos Conhecer</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            A saúde mental é uma questão de saúde pública que afeta milhões de pessoas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center ${stat.color}`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold mb-2 text-balance">{stat.value}</div>
                <p className="text-sm text-muted-foreground text-balance leading-relaxed">{stat.label}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
