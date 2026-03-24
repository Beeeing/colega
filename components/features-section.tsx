"use client"

import { CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function FeaturesSection() {
  const { t } = useLanguage()
  const f = t.features

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm text-gray-500 mb-2">{f.subtitle}</p>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900">
            {f.title_pre}<span
              style={{
                background: "linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >{f.title_highlight}</span>{f.title_post}
          </h2>
        </div>

        <div className="space-y-6">
          {f.cases.map((c, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
              <div className={`bg-gradient-to-r ${c.color} px-4 py-3 sm:px-6 sm:py-4`}>
                <h3 className="text-sm font-black text-white">{f.case_label}{i + 1}：{c.title}</h3>
              </div>
              <div className="p-4 sm:p-6 grid md:grid-cols-3 gap-3 md:gap-4">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase mb-2">{f.before_label}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{c.before}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-sky-500 uppercase mb-2">{f.ai_label}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{c.ai}</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <p className="text-xs font-bold text-indigo-500 uppercase mb-2">{f.result_label}</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 leading-relaxed">{c.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
