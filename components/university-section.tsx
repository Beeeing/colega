"use client"

import { Search, Calculator, PlayCircle, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

function LineIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.07 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  )
}

const stepIcons = [Search, Calculator, PlayCircle, CheckCircle2]

export function UniversitySection() {
  const { t } = useLanguage()
  const u = t.university

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm text-gray-500 mb-2">{u.subtitle}</p>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 whitespace-pre-line">
            {u.title_pre}
            <span
              className="mx-1"
              style={{
                background: "linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {u.title_highlight}
            </span>
            {u.title_post}
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-sky-400 to-indigo-500 hidden md:block" />

          <div className="space-y-6">
            {u.steps.map((step, i) => {
              const Icon = stepIcons[i]
              return (
                <div key={i} className="flex gap-3 sm:gap-5 items-start">
                  {/* Icon circle */}
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0 flex items-center justify-center text-white font-black text-xs shadow-lg relative z-10"
                    style={{ background: "linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)" }}
                  >
                    {i + 1}
                  </div>
                  <div
                    className={`flex-1 rounded-2xl p-4 sm:p-5 border ${
                      step.paid
                        ? "bg-indigo-50 border-indigo-200"
                        : "bg-sky-50/60 border-sky-100"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-gray-400">{step.step}</span>
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          step.paid
                            ? "bg-indigo-100 text-indigo-600"
                            : "bg-sky-100 text-sky-600"
                        }`}
                      >
                        {step.paid ? u.badge_paid : u.badge_free}
                      </span>
                    </div>
                    <h3 className="text-sm font-black text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="text-center mt-10 space-y-2">
          <a
            href="https://lin.ee/YAoQueN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto text-white font-bold py-4 px-10 rounded-full text-sm shadow-lg hover:opacity-90 transition-opacity"
            style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)" }}
          >
            <LineIcon className="w-5 h-5 flex-shrink-0" />
            {u.cta}
          </a>
          <p className="text-xs text-gray-400">{u.cta_note}</p>
        </div>
      </div>
    </section>
  )
}
