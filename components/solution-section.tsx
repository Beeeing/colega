"use client"

import { useLanguage } from "@/contexts/language-context"

function LineIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.07 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  )
}

export function SolutionSection() {
  const { t } = useLanguage()
  const s = t.solution

  return (
    <section className="py-12 md:py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Arrow */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-col items-center">
            <div
              className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent"
              style={{ borderTopColor: "#0ea5e9" }}
            />
            <p className="text-sky-500 font-bold text-sm mt-2">
              {s.arrow_text}
            </p>
          </div>
        </div>

        <div className="text-center mb-10">
          <p className="text-sm text-gray-500 mb-2">
            {s.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {s.zeros.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 text-center hover:shadow-md transition-shadow"
            >
              <div
                className="text-4xl font-black mb-4 block"
                style={{
                  background: "linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {item.icon}
              </div>
              <h3 className="text-base font-black text-gray-900 mb-3">{item.label}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
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
            {s.cta}
          </a>
          <p className="text-xs text-gray-400">{s.cta_note}</p>
        </div>
      </div>
    </section>
  )
}
