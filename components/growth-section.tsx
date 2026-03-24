"use client"

import { TrendingDown, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

function LineIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.07 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  )
}

export function GrowthSection() {
  const { t } = useLanguage()
  const g = t.growth

  return (
    <section className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm text-sky-400 mb-2">{g.subtitle}</p>
          <h2 className="text-2xl md:text-3xl font-black">
            {g.title_pre}
            <span className="hidden sm:inline"><br /></span>
            <span
              style={{
                background: "linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {g.title_highlight}
            </span>
            {g.title_post && <>{g.title_post}</>}
          </h2>
          <p className="text-sm text-gray-400 mt-4 leading-relaxed whitespace-pre-line">
            {g.desc}
          </p>
        </div>

        {/* Simulation */}
        <div className="bg-gray-800 rounded-2xl p-4 sm:p-6 mb-8 border border-gray-700">
          <p className="text-xs text-sky-400 font-bold uppercase mb-4">{g.sim_label}</p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-900 rounded-xl p-4 border border-red-900/40">
              <p className="text-xs text-red-400 font-bold mb-2">{g.current_label}</p>
              <p className="text-xl sm:text-2xl font-black text-white">{g.current_value}</p>
              <p className="text-xs text-gray-400 mt-1">{g.current_note}</p>
            </div>
            <div
              className="rounded-xl p-4"
              style={{ background: "linear-gradient(135deg, #0c4a6e 0%, #1e1b4b 100%)" }}
            >
              <p className="text-xs text-sky-300 font-bold mb-2">{g.colega_label}</p>
              <p
                className="text-3xl sm:text-4xl font-black"
                style={{
                  background: "linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {g.colega_value}
              </p>
            </div>
          </div>

          <div className="bg-sky-950/60 border border-sky-700/40 rounded-xl p-4">
            <p className="text-xs text-sky-300 font-bold mb-3">{g.benefit_label}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3">
                <TrendingDown className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <p className="text-sm font-bold text-white">
                  {g.benefit_cost}<span className="text-sky-300 text-lg">{g.benefit_cost_value}</span>{g.benefit_cost_end}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <p className="text-sm font-bold text-white">
                  {g.benefit_time}<span className="text-indigo-300 text-lg">{g.benefit_time_value}</span>{g.benefit_time_end}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-2">
          <a
            href="https://lin.ee/YAoQueN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto text-white font-bold py-4 px-10 rounded-full text-sm shadow-lg hover:opacity-90 transition-opacity"
            style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)" }}
          >
            <LineIcon className="w-5 h-5 flex-shrink-0" />
            {g.cta}
          </a>
          <p className="text-xs text-gray-500">{g.cta_note}</p>
        </div>
      </div>
    </section>
  )
}
