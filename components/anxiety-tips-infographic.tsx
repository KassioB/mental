import Image from "next/image"

// Importando direto da pasta assets que aparece no seu print
// O "../../" serve para sair de 'ui', sair de 'components' e chegar na raiz
import infograficoImg from "../../assets/anxiety-tips-infographic.jpg"

export function AnxietyTipsInfographic() {
  return (
    <section className="py-16 px-4 bg-[#FFE5E4] to-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Dicas para Ansiedade</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Práticas diárias que podem ajudar a gerenciar a ansiedade
          </p>
        </div>

        <div className="overflow-hidden">
          <Image
            src={infograficoImg} // <--- AQUI: Usamos a variável importada!
            alt="Infográfico com dicas para ansiedade..."
            className="w-full h-auto"
            priority
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  )
}