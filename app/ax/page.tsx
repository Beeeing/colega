import type { Metadata } from "next"
import { AxHeroSection } from "@/components/ax/hero-section"
import { AxProblemSection } from "@/components/ax/problem-section"
import { AxSolutionSection } from "@/components/ax/solution-section"
import { AxCasesSection } from "@/components/ax/cases-section"
import { AxPricingSection } from "@/components/ax/pricing-section"
import { AxCtaSection } from "@/components/ax/cta-section"
import { AxFooterSection } from "@/components/ax/footer-section"

export const metadata: Metadata = {
  title: "AX導入サポート by 池田 航平（Colega） ― AI化したい経営者へ",
  description:
    "社内にAI推進者がいなくても大丈夫。戦略設計から実装・定着まで、n8n公認クリエイター 池田 航平がまるごと伴走します。まずは無料AI化診断から。",
}

export default function AxPage() {
  return (
    <main className="min-h-screen font-sans">
      <AxHeroSection />
      <AxProblemSection />
      <AxSolutionSection />
      <AxCasesSection />
      <AxPricingSection />
      <AxCtaSection />
      <AxFooterSection />
    </main>
  )
}
