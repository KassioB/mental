import Image from "next/image"

export function AnxietyDepressionComparison() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
            Resumindo alguns sintomas comuns de <span className="text-[#2B7FBF]">Ansiedade</span> e{" "}
            <span className="text-[#E57A7A]">Depressão</span>
          </h2>
          {/* </CHANGE> */}
          <div className="relative w-full aspect-[16/9] md:aspect-[2/1] overflow-hidden">
            <Image
              src="/mental/anxiety-depression-comparison.png"
              alt="Comparação entre sintomas de ansiedade e depressão"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  )
}
