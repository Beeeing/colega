"use client"

const PHASES = [
  {
    phase: "Phase 1",
    title: "AI化診断",
    price: "無料",
    priceNote: "60〜90分のオンライン面談",
    highlight: true,
    items: [
      "全業務のAI化可能性ヒアリング",
      "AI化優先度マップの作成",
      "上位3業務の概算ROIシミュレーション",
      "推奨ツール・アプローチの提案",
    ],
  },
  {
    phase: "Phase 2",
    title: "AX戦略設計",
    price: "個別見積もり",
    priceNote: "診断結果をもとに事前に提示",
    highlight: false,
    items: [
      "全社AI化ロードマップ作成",
      "ツールスタック設計",
      "詳細ROI・投資回収シミュレーション",
      "実装スコープ・スケジュールの確定",
    ],
  },
  {
    phase: "Phase 3",
    title: "実装＋定着サポート",
    price: "個別見積もり",
    priceNote: "スコープに応じて",
    highlight: false,
    items: [
      "AIシステムの構築・実装",
      "社員向けハンズオン研修（複数回）",
      "「AI推進係」の育成",
      "自走確認まで継続伴走",
    ],
  },
]

export function AxPricingSection() {
  return (
    <section className="py-12 md:py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-sm font-bold text-gray-500 mb-2">料金体系</p>
        <h2 className="text-center text-xl font-black text-gray-900 mb-2">
          まず
          <span
            style={{
              background: "linear-gradient(90deg, #f59e0b 0%, #f97316 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            無料診断
          </span>
          から。費用は納得してから。
        </h2>
        <p className="text-center text-xs text-gray-400 mb-10">
          Phase 2以降の費用は、診断結果をもとに事前に明示します。「高額な見積もりが突然来る」ことはありません。
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {PHASES.map((phase, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-6 relative ${
                phase.highlight ? "border-amber-400 shadow-lg shadow-amber-100" : "border-gray-200"
              }`}
            >
              {phase.highlight && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-black text-white px-4 py-1 rounded-full whitespace-nowrap"
                  style={{ background: "linear-gradient(90deg, #f59e0b 0%, #f97316 100%)" }}
                >
                  まずここから
                </div>
              )}
              <p
                className="text-xs font-bold mb-1"
                style={{
                  background: "linear-gradient(90deg, #f59e0b 0%, #f97316 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {phase.phase}
              </p>
              <h3 className="text-base font-black text-gray-900 mb-3">{phase.title}</h3>
              <div className="mb-4">
                <span
                  className="text-2xl font-black"
                  style={
                    phase.highlight
                      ? {
                          background: "linear-gradient(90deg, #f59e0b 0%, #f97316 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }
                      : { color: "#374151" }
                  }
                >
                  {phase.price}
                </span>
                <p className="text-xs text-gray-400 mt-0.5">{phase.priceNote}</p>
              </div>
              <ul className="space-y-2">
                {phase.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-gray-600">
                    <span className="text-amber-500 font-black mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Cross-link to Colega */}
        <div className="bg-sky-50 rounded-xl px-5 py-4 border border-sky-200 mb-6">
          <p className="text-xs text-sky-800 leading-relaxed">
            <span className="font-black">「1つの業務だけ自動化したい」なら、Colegaがおすすめです。</span>
            　月額1万円台〜、初期費用0円でスタートできます。
            <a href="/" className="text-sky-600 underline hover:text-sky-700 ml-1">Colegaの詳細はこちら →</a>
          </p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-5 sm:p-6 text-center">
          <p className="text-sm text-gray-300 leading-relaxed mb-1">
            「相談したら断れなくなりそう」という心配は不要です。
          </p>
          <p className="text-white font-bold text-sm">
            無料診断だけで終わっても、一切問題ありません。<br />
            <span
              className="text-base font-black"
              style={{
                background: "linear-gradient(90deg, #f59e0b 0%, #f97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              まず「うちの会社、何から始めればいい？」を知るところから。
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
