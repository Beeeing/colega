"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"

export function ProblemSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { t } = useLanguage()
  const p = t.problem

  return (
    <section className="py-10 md:py-14 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <p className="text-center text-sm font-bold text-gray-500 mb-2">
          {p.subtitle}
        </p>
        <h2 className="text-center text-xl font-black text-gray-900 mb-8">
          {p.title}
        </h2>

        <div className="space-y-3 mb-10">
          {p.items.map((problem, i) => (
            <button
              key={i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className={cn(
                "w-full text-left px-4 py-3 sm:px-5 sm:py-4 rounded-xl border text-sm font-medium flex items-start justify-between gap-3 transition-all",
                openIndex === i
                  ? "bg-sky-50 border-sky-300 text-sky-800"
                  : "bg-white border-gray-200 text-foreground hover:border-sky-200 hover:bg-sky-50/40"
              )}
            >
              <span className="leading-relaxed">{problem}</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 flex-shrink-0 transition-transform mt-0.5",
                  openIndex === i ? "rotate-180 text-sky-500" : "text-gray-400"
                )}
              />
            </button>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-5 sm:p-6 text-center">
          <p className="text-sm text-gray-300 leading-relaxed mb-3">
            {p.closing_desc}
          </p>
          <p className="text-white font-bold text-sm leading-relaxed">
            {p.closing_highlight_pre}<br />
            <span
              className="text-lg font-black"
              style={{
                background: "linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {p.closing_highlight}
            </span>
            <br />{p.closing_highlight_post}
          </p>
        </div>
      </div>
    </section>
  )
}
