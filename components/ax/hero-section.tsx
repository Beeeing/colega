"use client"

import Image from "next/image"
import { SharedNavbar } from "@/components/shared-navbar"

export function AxHeroSection() {
  return (
    <div>
      <SharedNavbar />

      <section className="bg-[#0a1020] relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 opacity-20 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-40 h-40 sm:w-64 sm:h-64 opacity-10 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #f97316 0%, transparent 70%)" }}
        />

        <div className="max-w-5xl mx-auto px-5 py-8 md:py-14 flex flex-col md:flex-row items-center relative z-10">
          {/* Left */}
          <div className="flex-1 md:pr-10">
            <p className="text-lg sm:text-xl font-medium text-amber-400 mt-16 md:mt-0 mb-6 md:mb-4 tracking-wide">
              経営者の皆さまへ
            </p>

            <div className="mb-8 md:mb-6">
              <h1 className="text-3xl sm:text-3xl md:text-4xl font-black leading-tight mb-3 text-white">
                AI化を本気でやりたいなら、
              </h1>
              <h1 className="text-3xl sm:text-3xl md:text-4xl font-black leading-tight mb-3 text-white">
                まず
                <span
                  className="inline-block font-black px-2 py-0.5 sm:px-3 sm:py-1 rounded mx-1"
                  style={{ background: "linear-gradient(90deg, #f59e0b 0%, #f97316 100%)" }}
                >
                  「推進者」
                </span>
                を外注しなさい。
              </h1>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3 md:mb-7 max-w-md">
              社内にAI専門家がいなくても大丈夫。
              <span className="text-amber-300 font-bold">「何から始めるか」の戦略立案から、実装、社員への定着まで</span>
              、池田 航平が御社のAI化推進リーダーとしてまるごと伴走します。
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 mb-3 md:mb-7">
              {[
                { label: "相談実績", value: "100+", unit: "件" },
                { label: "初回診断", value: "無料", unit: "" },
                { label: "対応形態", value: "完全", unit: "伴走型" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-xs text-gray-400 mb-0.5">{stat.label}</p>
                  <p
                    className="text-lg sm:text-2xl font-black leading-none"
                    style={{
                      background: "linear-gradient(90deg, #f59e0b 0%, #f97316 100%)",
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
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full text-white"
                  style={{ background: "linear-gradient(90deg, #f59e0b 0%, #f97316 100%)" }}
                >
                  無料診断
                </span>
                <span className="text-xs text-gray-400">受付中</span>
              </div>
              <a
                href="https://lin.ee/YAoQueN"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full sm:w-auto font-bold py-3 md:py-4 px-6 md:px-8 rounded-full text-sm shadow-lg hover:opacity-90 active:scale-95 transition-all duration-150 text-white"
                style={{ background: "linear-gradient(90deg, #f59e0b 0%, #f97316 100%)" }}
              >
                <span className="leading-snug text-center md:text-left">
                  【無料】AI化診断を予約する（60〜90分）<br />
                  <span className="text-xs font-normal opacity-90">― LINEで「AX診断希望」と送ってください →</span>
                </span>
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 flex flex-col items-center justify-center gap-4 mt-10 md:mt-0">
            <div className="w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden ring-4 ring-amber-400 shadow-2xl flex-shrink-0">
              <Image
                src="/images/ikeda.jpg"
                alt="池田 航平"
                width={288}
                height={288}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div
              className="rounded-2xl px-5 py-4 text-center"
              style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(8px)" }}
            >
              <p className="text-xs text-amber-400 font-medium tracking-wide mb-1">全社AI化の伴走パートナー</p>
              <p className="text-xl font-black text-white whitespace-pre-line">
                バルセロナ在住{"\n"}池田 航平
              </p>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                n8n公認クリエイター / AI自動化 実績100件超{"\n"}「AI化したい」を「AI化できた」に変える推進者{"\n"}スペインから日本全国の企業のAI化戦略を支援中
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
