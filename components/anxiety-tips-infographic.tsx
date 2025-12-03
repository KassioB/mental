import Image from "next/image"

// O "@" significa "raiz do projeto". É muito mais seguro.
import infograficoImg from "@/assets/anxiety-tips-infographic.jpg" 

export function AnxietyTipsInfographic() {
  return (
    <section className="py-16 px-4 bg-[#FFE5E4] to-muted/20">
      {/* ... o resto do código continua igual ... */}
        <div className="overflow-hidden">
          <Image
            src={infograficoImg}
            alt="Infográfico com dicas para ansiedade"
            className="w-full h-auto"
            priority
            placeholder="blur"
          />
        </div>
      {/* ... */}
    </section>
  )
}