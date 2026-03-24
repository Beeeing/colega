"use client"

import Link from "next/link"

export function AxFooterSection() {
  return (
    <footer className="bg-[#060c18] text-white py-10 px-4 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          <div>
            <h3
              className="text-lg font-black mb-1"
              style={{
                background: "linear-gradient(90deg, #f59e0b 0%, #f97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Colega AX導入サポート
            </h3>
            <p className="text-[10px] text-gray-600 mb-0.5">AX = AI Transformation（全社AI化）</p>
            <p className="text-xs text-gray-500 mt-1 mb-3">by 池田 航平（n8n公認クリエイター）</p>
            <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
              「個別の自動化」ではなく「会社まるごとのAI化」を支援。戦略立案から実装・社員研修・定着まで、御社のAI推進リーダーとして伴走します。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-bold mb-3 text-gray-300">サービス</h4>
              <ul className="space-y-2">
                {["サービス概要", "支援事例", "料金体系", "導入フロー"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-3 text-gray-300">お問い合わせ</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://lin.ee/YAoQueN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-opacity hover:opacity-90 text-white"
                    style={{ background: "linear-gradient(90deg, #f59e0b 0%, #f97316 100%)" }}
                  >
                    無料AI化診断を予約（LINE）
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">よくある質問</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cross-link */}
        <div className="border-t border-gray-800 pt-6 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500">池田 航平の他サービス：</span>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg border border-sky-800 text-sky-400 hover:border-sky-500 hover:text-sky-300 transition-all"
            >
              Colega（AI作業員派遣）→
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-600">© 2025 Colega AX導入サポート. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            {["利用規約", "プライバシーポリシー", "特定商取引法"].map((item) => (
              <a key={item} href="#" className="text-xs text-gray-600 hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
