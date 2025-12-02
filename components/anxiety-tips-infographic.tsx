import Image from "next/image"

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

        <div className="overflow-hidden ">
          <Image
            src="/anxiety-tips-infographic.jpg"
            alt="Infográfico com dicas para ansiedade: exercício físico, meditar, sono adequado, socializar, autoconhecimento e alimentação saudável"
            width={1200}
            height={1200}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  )
}
