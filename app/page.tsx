import { Hero } from "@/components/hero"
import { AnxietyTipsInfographic } from "@/components/anxiety-tips-infographic"
import { AnxietyDepressionComparison } from "@/components/anxiety-depression-comparison"
import { BookletCTA } from "@/components/booklet-cta"
import { StatsSection } from "@/components/stats-section"
import { WarningSigns } from "@/components/warning-signs"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AnxietyTipsInfographic />
      <AnxietyDepressionComparison />
      <BookletCTA />
      <StatsSection />
      <WarningSigns />
      <Footer />
    </main>
  )
}
