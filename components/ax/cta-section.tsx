"use client"

export function AxCtaSection() {
  return (
    <section className="py-14 md:py-20 px-4 bg-[#0a1020] relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)" }}
      />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <p className="text-lg text-gray-300 font-bold mb-2">
          「AI化したい」という意志は、もうあなたの中にあります。
        </p>
        <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-6">
          あとは、
          <span
            style={{
              background: "linear-gradient(90deg, #f59e0b 0%, #f97316 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            一緒に走る人間
          </span>
          がいるだけです。
        </h2>

        <div
          className="rounded-2xl px-6 py-5 mb-8 text-left"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(245,158,11,0.2)" }}
        >
          <p className="text-xs text-amber-400 font-black mb-3">無料AI化診断で持ち帰れるもの</p>
          <ul className="space-y-2">
            {[
              "御社の業務のうち「AI化すべき領域」の優先度マップ",
              "上位3業務の概算ROI（投資対効果）シミュレーション",
              "推奨ツール・アプローチの方向性",
              "「何から・いくらで・どのくらいで」の全体像",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-amber-400 font-black mt-0.5 flex-shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-500 mt-3">
            ※ 診断だけで終了しても費用はかかりません。営業はしません。
          </p>
        </div>

        <div className="space-y-3">
          <a
            href="https://lin.ee/YAoQueN"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full font-bold py-4 px-8 rounded-full text-sm shadow-lg hover:opacity-90 active:scale-95 transition-all duration-150 text-white"
            style={{ background: "linear-gradient(90deg, #f59e0b 0%, #f97316 100%)" }}
          >
            <span className="leading-snug text-center">
              【無料】AI化診断を予約する<br />
              <span className="text-xs font-normal opacity-90">
                ― LINEで「AX診断希望」とメッセージしてください →
              </span>
            </span>
          </a>
          <p className="text-xs text-gray-500">※ 60〜90分のオンライン面談。返信まで原則24時間以内。</p>
        </div>
      </div>
    </section>
  )
}
