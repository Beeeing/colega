"use client"

const CASES = [
  {
    industry: "製造業（従業員50名・3拠点）",
    title: "全社AI化ロードマップ策定で、年間1,200時間の業務を段階的に自動化",
    phases: [
      {
        label: "診断",
        text: "全5部門・32業務を棚卸しし、AI化優先度マップを作成。投資対効果の高い上位8業務を特定した。",
      },
      {
        label: "戦略設計",
        text: "Phase 1（経理・受発注）→ Phase 2（営業日報・在庫管理）→ Phase 3（品質検査レポート）の3段階ロードマップを策定。ツールスタックはn8n＋Claudeで統一し、拠点間のデータ連携基盤も設計。",
      },
      {
        label: "実装・定着",
        text: "Phase 1を2ヶ月で実装。経理担当2名にハンズオン研修を実施し、3ヶ月後に完全自走を確認。現在Phase 2に着手中。",
      },
    ],
    outcome: "Phase 1だけで月100時間の削減を達成。ロードマップ完了時には年間1,200時間の効率化を見込む。",
    color: "from-amber-500 to-orange-600",
  },
  {
    industry: "サービス業（従業員25名・多店舗展開）",
    title: "AI推進リーダー不在を「外部推進者」で解決し、6ヶ月で全店AI化を完了",
    phases: [
      {
        label: "診断",
        text: "社長との面談で「ChatGPTを入れたが定着しなかった」経緯を把握。問題はツールではなく推進体制と研修の欠如だった。",
      },
      {
        label: "戦略設計",
        text: "店舗間で業務手順がバラバラだったため、まず標準オペレーションを整理。その上で「問い合わせ自動応答」「シフト管理」「売上日報」の3領域を自動化対象に選定。",
      },
      {
        label: "実装・定着",
        text: "店長5名を対象にハンズオン研修を3回実施。各店舗で「AI推進係」を1名ずつ育成し、池田の伴走期間終了後も自走できる体制を構築。",
      },
    ],
    outcome: "全店の問い合わせ応答時間が4時間→15分に短縮。店長の管理業務が週10時間削減され、接客に集中できる環境を実現。",
    color: "from-orange-500 to-red-600",
  },
]

export function AxCasesSection() {
  return (
    <section className="py-12 md:py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-sm font-bold text-gray-500 mb-2">支援実績</p>
        <h2 className="text-center text-xl font-black text-gray-900 mb-2">
          「
          <span
            style={{
              background: "linear-gradient(90deg, #f59e0b 0%, #f97316 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            会社まるごとAI化
          </span>
          」の事例
        </h2>
        <p className="text-center text-xs text-gray-400 mb-10">
          ※ 個別業務の自動化事例は
          <a href="/" className="text-sky-500 underline hover:text-sky-600">Colega</a>
          をご覧ください。内容は実際の支援事例をもとに一部加工しています。
        </p>

        <div className="space-y-8">
          {CASES.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className={`h-1.5 w-full bg-gradient-to-r ${c.color}`} />
              <div className="p-6">
                <p className="text-xs text-gray-400 font-bold mb-1">{c.industry}</p>
                <h3 className="text-base font-black text-gray-900 mb-6">{c.title}</h3>
                <div className="relative pl-6 border-l-2 border-amber-200 space-y-5 mb-6">
                  {c.phases.map((phase, j) => (
                    <div key={j} className="relative">
                      <div
                        className="absolute -left-[calc(1.5rem+5px)] w-2.5 h-2.5 rounded-full top-1"
                        style={{ background: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)" }}
                      />
                      <p
                        className="text-xs font-black mb-1 inline-block px-2 py-0.5 rounded-full text-white"
                        style={{ background: "linear-gradient(90deg, #f59e0b 0%, #f97316 100%)" }}
                      >
                        {phase.label}
                      </p>
                      <p className="text-xs text-gray-600 leading-relaxed">{phase.text}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-amber-50 rounded-xl px-4 py-3 border border-amber-200">
                  <p className="text-xs font-black text-amber-800 mb-0.5">成果</p>
                  <p className="text-sm font-bold text-gray-800">{c.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
