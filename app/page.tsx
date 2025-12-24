import { Hero } from "@/components/hero"
import { AnxietyTipsInfographic } from "@/components/anxiety-tips-infographic"
import { AnxietyDepressionComparison } from "@/components/anxiety-depression-comparison"
import { BookletCTA } from "@/components/booklet-cta"
import { StatsSection } from "@/components/stats-section"
import { WarningSigns } from "@/components/warning-signs"
import { Footer } from "@/components/footer"
import { Header } from "@/components/Header"
import { Breadcrumb } from "@/components/Breadcrumb"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Breadcrumb />
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
