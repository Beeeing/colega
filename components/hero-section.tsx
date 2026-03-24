"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { SharedNavbar } from "@/components/shared-navbar"

function LineIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.07 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  )
}

export function HeroSection() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <div>
      <SharedNavbar />

      {/* ===== HERO ===== */}
      <section className="bg-[#0f172a] relative overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 opacity-20 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-40 h-40 sm:w-64 sm:h-64 opacity-10 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #0ea5e9 0%, transparent 70%)" }}
        />

        <div className="max-w-5xl mx-auto px-5 py-8 md:py-14 flex flex-col md:flex-row items-center relative z-10">
          {/* Left content */}
          <div className="flex-1 md:pr-10">
            <p className="text-lg sm:text-xl font-medium text-sky-400 mt-16 md:mt-0 mb-10 md:mb-5 tracking-wide">
              {h.tagline}
            </p>

            <div className="mb-10 md:mb-6">
              <h1 className="text-3xl sm:text-3xl md:text-4xl font-black leading-tight mb-2 md:mb-2 text-white">
                {h.h1_monthly}
                <span
                  className="text-4xl sm:text-4xl md:text-5xl font-black mx-1"
                  style={{
                    background: "linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {h.h1_price}
                </span>
                {h.h1_from}
              </h1>
              <h1 className="text-3xl sm:text-3xl md:text-4xl font-black leading-tight mb-2 md:mb-2 text-white">
                {h.h1_hire}
                <span
                  className="inline-block text-white font-black px-2 py-0.5 sm:px-3 sm:py-1 rounded mx-1"
                  style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)" }}
                >
                  Colega（コレガ）
                </span>
              </h1>
              <h1 className="text-3xl sm:text-3xl md:text-4xl font-black leading-tight text-white">
                {h.h1_service}
              </h1>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3 md:mb-7 max-w-md">
              {h.desc_normal}{" "}
              <span className="text-sky-300 font-bold">{h.desc_highlight}</span>
              {" "}{h.desc_end}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 mb-3 md:mb-7">
              {[
                { label: h.stat_initial, value: h.stat_initial_value, unit: h.stat_initial_unit },
                { label: h.stat_start, value: h.stat_start_value, unit: h.stat_start_unit },
                { label: h.stat_monthly, value: h.stat_monthly_value, unit: h.stat_monthly_unit },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-xs text-gray-400 mb-0.5">{stat.label}</p>
                  <p
                    className="text-lg sm:text-2xl font-black leading-none"
                    style={{
                      background: "linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{stat.unit}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 md:mt-0 space-y-2 md:space-y-3">
              {/* LINE誘導バッジ */}
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full text-white"
                  style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)" }}
                >
                  <LineIcon className="w-3.5 h-3.5" />
                  {h.line_badge}
                </span>
                <span className="text-xs text-gray-400">{h.line_accepting}</span>
              </div>

              <a
                href="https://lin.ee/YAoQueN"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full sm:w-auto font-bold py-3 md:py-4 px-6 md:px-8 rounded-full text-sm shadow-lg hover:opacity-90 active:scale-95 transition-all duration-150 text-white"
                style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)" }}
              >
                <LineIcon className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                <span className="leading-snug text-center md:text-left">
                  {h.cta_main}<br />
                  <span className="text-xs font-normal opacity-90">{h.cta_sub}</span>
                </span>
              </a>
            </div>

          </div>

          {/* Right — 担当者エリア */}
          <div className="flex-1 flex flex-col items-center justify-center gap-4 mt-10 md:mt-0">
            {/* 丸型写真 */}
            <div
              className="w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden ring-4 ring-sky-400 shadow-2xl flex-shrink-0"
            >
              <Image
                src="/images/ikeda.jpg"
                alt="担当者 イケダ"
                width={288}
                height={288}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* 紹介カード */}
            <div
              className="rounded-2xl px-5 py-4 text-center"
              style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(8px)" }}
            >
              <p className="text-xs text-sky-400 font-medium tracking-wide mb-1">{h.person_role}</p>
              <p className="text-xl font-black text-white whitespace-pre-line">{h.person_name}</p>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed whitespace-pre-line">
                {h.person_desc}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
