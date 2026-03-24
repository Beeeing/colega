"use client"

import { useLanguage } from "@/contexts/language-context"

function LineIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.07 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  )
}

export function SubsidySection() {
  const { t } = useLanguage()
  const s = t.subsidy

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-sky-50 to-indigo-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span
            className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 text-white"
            style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)" }}
          >
            {s.badge}
          </span>
          <p className="text-sm text-sky-600 mb-2 font-medium">{s.subtitle}</p>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900">
            {s.title_pre}
            <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
              {s.title_highlight}
            </span>
            {s.title_post}
          </h2>
          <p className="text-sm text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            {s.desc}
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {s.cards.map((card, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 bg-white border border-indigo-100 shadow-sm"
            >
              <div className="text-2xl mb-3">{card.icon}</div>
              <h3 className="text-sm font-black text-gray-900 mb-2">{card.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Simulation Box */}
        <div className="rounded-2xl p-6 mb-8 bg-white border border-indigo-100 shadow-sm">
          <p className="text-xs font-bold text-sky-600 mb-4">{s.sim_label}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Before */}
            <div className="text-center flex-1">
              <p className="text-xs text-gray-400 mb-1">{s.sim_before_label}</p>
              <p className="text-xl font-black text-gray-700">{s.sim_before_value}</p>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg shadow-md"
                style={{ background: "linear-gradient(135deg, #0ea5e9, #6366f1)" }}
              >
                →
              </div>
            </div>

            {/* After */}
            <div className="text-center flex-1">
              <p className="text-xs text-gray-400 mb-1">{s.sim_after_label}</p>
              <p className="text-xl font-black">
                <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
                  {s.sim_after_value}
                </span>
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-400 text-center mt-4">{s.sim_note}</p>
        </div>

        {/* CTA */}
        <div className="text-center space-y-2">
          <a
            href="https://lin.ee/YAoQueN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto text-white font-bold py-4 px-10 rounded-full text-sm shadow-lg hover:opacity-90 transition-opacity"
            style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)" }}
          >
            <LineIcon className="w-5 h-5 flex-shrink-0" />
            {s.cta}
          </a>
          <p className="text-xs text-gray-400">{s.cta_note}</p>
        </div>
      </div>
    </section>
  )
}
