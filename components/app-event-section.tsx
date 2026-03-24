"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"

export function AppEventSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { t } = useLanguage()
  const faq = t.faq

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm text-gray-500 mb-2">{faq.subtitle}</p>
          <h2 className="text-2xl font-black text-gray-900">
            {faq.title_pre}<span
              style={{
                background: "linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >{faq.title_highlight}</span>{faq.title_post}
          </h2>
        </div>

        <div className="space-y-3">
          {faq.items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-4 py-3 sm:px-6 sm:py-4 flex items-start justify-between gap-3 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="text-sm font-black flex-shrink-0 mt-0.5"
                    style={{
                      background: "linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Q.
                  </span>
                  <span className="text-sm font-bold text-gray-900 leading-relaxed">
                    {item.q}
                  </span>
                </div>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 flex-shrink-0 transition-transform mt-0.5 text-gray-400",
                    openIndex === i && "rotate-180"
                  )}
                />
              </button>
              {openIndex === i && (
                <div className="px-4 pb-4 sm:px-6 sm:pb-5 border-t border-gray-100">
                  <div className="flex items-start gap-3 pt-4">
                    <span className="text-sm font-black flex-shrink-0 text-sky-500">A.</span>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
