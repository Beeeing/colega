"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const PROBLEMS = [
  {
    title: "個別の自動化は進んだが、全社で見るとバラバラ",
    desc: "部署ごとに別々のツールを入れた結果、データが連携せず「自動化の孤島」が乱立。全体最適が見えない。",
    icon: "🏝️",
  },
  {
    title: "AI推進プロジェクトを立ち上げたが、リーダー不在で頓挫",
    desc: "経営層はやる気があるのに、技術と現場の両方がわかる推進者がおらず、議論だけで半年が過ぎた。",
    icon: "🚧",
  },
  {
    title: "どの部署・業務から手をつければROIが最大か判断できない",
    desc: "全社に自動化可能な業務が50個あっても、優先順位をつけられる人がいなければ動けない。",
    icon: "🎯",
  },
  {
    title: "ツールを導入したが、社員が使いこなせず元の手作業に戻った",
    desc: "研修なし・フォローなしで現場に放り込んだ結果、「結局Excelのほうが早い」と定着しない。",
    icon: "🔄",
  },
]

export function AxProblemSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-10 md:py-14 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <p className="text-center text-sm font-bold text-gray-500 mb-2">
          「1つの作業を自動化する」だけでは解決しない課題
        </p>
        <h2 className="text-center text-xl font-black text-gray-900 mb-3">
          AI化の「次の壁」にぶつかっていませんか？
        </h2>
        <p className="text-center text-xs text-gray-400 mb-8">
          ※ 個別業務の自動化は
          <a href="/" className="text-sky-500 underline hover:text-sky-600">Colega（AI作業員派遣）</a>
          で対応可能です。以下は「全社レベルのAI化」に特有の課題です。
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mb-10">
          {PROBLEMS.map((problem, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "text-left px-5 py-4 rounded-2xl border transition-all",
                activeIndex === i
                  ? "bg-amber-50 border-amber-300 shadow-sm"
                  : "bg-white border-gray-200 hover:border-amber-200 hover:bg-amber-50/30"
              )}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">{problem.icon}</span>
                <div>
                  <p className={cn(
                    "text-sm font-black mb-1",
                    activeIndex === i ? "text-amber-800" : "text-gray-800"
                  )}>
                    {problem.title}
                  </p>
                  <p className={cn(
                    "text-xs leading-relaxed",
                    activeIndex === i ? "text-amber-700" : "text-gray-400"
                  )}>
                    {problem.desc}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-5 sm:p-6 text-center">
          <p className="text-sm text-gray-300 leading-relaxed mb-3">
            これらは「ツールの問題」ではなく
            <span className="text-amber-300 font-bold">「推進者の不在」</span>という組織の問題です。
          </p>
          <p className="text-white font-bold text-sm leading-relaxed">
            個別の自動化なら月額1万円台のColegaで十分。でも<br />
            <span
              className="text-lg font-black"
              style={{
                background: "linear-gradient(90deg, #f59e0b 0%, #f97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              「会社全体のAI化」を本気で進めるなら、
            </span>
            <br />戦略を描ける推進者が必要です。
          </p>
        </div>
      </div>
    </section>
  )
}
