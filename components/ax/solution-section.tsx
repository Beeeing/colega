"use client"

const COMPARISON = [
  { label: "個別の業務を自動化したい", colega: true, ax: false, note: "→ Colegaが最適" },
  { label: "どの業務からAI化すべきか判断したい", colega: false, ax: true, note: "" },
  { label: "全社のAI化ロードマップを策定したい", colega: false, ax: true, note: "" },
  { label: "ツール選定・技術スタックを設計したい", colega: false, ax: true, note: "" },
  { label: "社員がAIを使いこなせるよう研修したい", colega: false, ax: true, note: "" },
  { label: "推進リーダー不在を外部で補いたい", colega: false, ax: true, note: "" },
]

const FLOW = [
  {
    step: "STEP 1",
    title: "AI化診断（60〜90分・無料）",
    desc: "オンライン面談で御社の全業務をヒアリング。AI化優先度マップと上位業務の概算ROIをその場でお見せします。",
    detail: "「うちの会社、何から始めればいい？」という疑問に、1回の面談で答えを出します。",
    paid: false,
  },
  {
    step: "STEP 2",
    title: "AX戦略設計＋ツール選定",
    desc: "御社専用の「全社AI化ロードマップ」を作成。どの順番で・どのツールで・いくらで実装するか、すべて明示します。",
    detail: "投資対効果のシミュレーション付き。納得いただけなければ、ここで終了しても構いません。",
    paid: true,
  },
  {
    step: "STEP 3",
    title: "実装＋社員研修＋定着サポート",
    desc: "戦略に基づきシステムを構築。社員向けハンズオン研修で「AI推進係」を育成し、自走できる状態になるまで伴走します。",
    detail: "池田の伴走が終わった後も、御社の中でAI化が続く体制を作ることがゴールです。",
    paid: true,
  },
]

export function AxSolutionSection() {
  return (
    <section className="py-12 md:py-16 px-4 bg-[#0a1020]">
      <div className="max-w-4xl mx-auto">

        {/* Arrow */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-col items-center">
            <div
              className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent"
              style={{ borderTopColor: "#f59e0b" }}
            />
            <p className="text-amber-400 font-bold text-sm mt-2">
              Colegaとの違い、すぐわかります。
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-14">
          <h3 className="text-center text-white font-black text-lg mb-6">
            「どっちに頼むべき？」が一目でわかる比較表
          </h3>
          <div className="rounded-2xl overflow-hidden border border-gray-700">
            <table className="w-full text-xs sm:text-sm">
              <thead>
                <tr className="bg-gray-800">
                  <th className="text-left px-4 py-3 text-gray-400 font-bold">やりたいこと</th>
                  <th className="px-3 py-3 text-center">
                    <span className="text-sky-400 font-black">Colega</span>
                    <span className="block text-[10px] text-gray-500 font-normal">AI作業員派遣</span>
                  </th>
                  <th className="px-3 py-3 text-center">
                    <span
                      className="font-black"
                      style={{
                        background: "linear-gradient(90deg, #f59e0b 0%, #f97316 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      AX導入サポート
                    </span>
                    <span className="block text-[10px] text-gray-500 font-normal">全社AI化伴走</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-900/50" : "bg-gray-900/30"}>
                    <td className="px-4 py-3 text-gray-300 font-medium">
                      {row.label}
                      {row.note && <span className="block text-[10px] text-sky-400 mt-0.5">{row.note}</span>}
                    </td>
                    <td className="px-3 py-3 text-center">
                      {row.colega ? (
                        <span className="text-sky-400 font-black text-base">●</span>
                      ) : (
                        <span className="text-gray-600">−</span>
                      )}
                    </td>
                    <td className="px-3 py-3 text-center">
                      {row.ax ? (
                        <span className="text-amber-400 font-black text-base">●</span>
                      ) : (
                        <span className="text-gray-600">−</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 text-center mt-3">
            ※ AX導入サポートで策定した戦略の中に、Colegaの活用が含まれることもあります。
          </p>
        </div>

        {/* Vertical Timeline Flow */}
        <div className="mb-10">
          <h3 className="text-center text-white font-black text-lg mb-2">導入フロー</h3>
          <p className="text-center text-xs text-gray-400 mb-8">
            STEP 1は無料。「何から始めればいいか」だけでも持ち帰れます。
          </p>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-amber-500/50 to-transparent hidden sm:block" />
            <div className="space-y-6">
              {FLOW.map((step, i) => (
                <div key={i} className="relative sm:pl-14">
                  <div
                    className="hidden sm:block absolute left-[14px] top-5 w-3 h-3 rounded-full ring-2 ring-amber-400/30"
                    style={{ background: step.paid ? "rgba(255,255,255,0.2)" : "#f59e0b" }}
                  />
                  <div
                    className="rounded-2xl p-5"
                    style={{
                      background: step.paid ? "rgba(255,255,255,0.04)" : "rgba(245,158,11,0.08)",
                      border: step.paid ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(245,158,11,0.4)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="text-xs font-black px-2 py-0.5 rounded-full text-white"
                        style={{
                          background: step.paid
                            ? "rgba(255,255,255,0.15)"
                            : "linear-gradient(90deg, #f59e0b 0%, #f97316 100%)",
                        }}
                      >
                        {step.step}
                      </span>
                      {!step.paid && (
                        <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded-full">
                          無料
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-black text-white mb-1">{step.title}</p>
                    <p className="text-xs text-gray-400 leading-relaxed mb-2">{step.desc}</p>
                    <p className="text-xs text-gray-500 italic">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center space-y-2">
          <a
            href="https://lin.ee/YAoQueN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto text-white font-bold py-4 px-10 rounded-full text-sm shadow-lg hover:opacity-90 transition-opacity"
            style={{ background: "linear-gradient(90deg, #f59e0b 0%, #f97316 100%)" }}
          >
            【無料】STEP 1 のAI化診断を予約する
          </a>
          <p className="text-xs text-gray-500">※ LINEアプリが開きます。60〜90分のオンライン面談です。</p>
        </div>
      </div>
    </section>
  )
}
