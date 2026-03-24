"use client"

import { useLanguage } from "@/contexts/language-context"
import type { Language } from "@/lib/translations"

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
  { code: "es", label: "Español", flag: "🇪🇸" },
]

export function PricingFooterSection() {
  const { t, lang, setLang } = useLanguage()
  const f = t.footer

  return (
    <>
      {/* Footer */}
      <footer className="bg-[#0a0f1e] text-white py-10 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
            <div>
              <h3
                className="text-lg font-black mb-2"
                style={{
                  background: "linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Colega（コレガ）
              </h3>
              <p className="text-xs text-gray-500 mt-1 mb-3">{f.subtitle}</p>
              <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
                {f.desc}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-bold mb-3 text-gray-300">{f.services_title}</h4>
                <ul className="space-y-2">
                  {f.services.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-3 text-gray-300">{f.contact_title}</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://lin.ee/YAoQueN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-opacity hover:opacity-90 text-white"
                      style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)" }}
                    >
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white flex-shrink-0" aria-hidden="true">
                        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.07 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                      </svg>
                      {f.line_cta}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                      {f.faq}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="border-t border-gray-800 pt-6 mb-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <span className="text-xs text-gray-500 font-medium flex-shrink-0">{f.lang_label}</span>
              <div className="flex gap-2">
                {LANGUAGES.map((lng) => (
                  <button
                    key={lng.code}
                    onClick={() => setLang(lng.code)}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg border transition-all ${
                      lang === lng.code
                        ? "border-sky-500 text-white bg-sky-900/40"
                        : "border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-200"
                    }`}
                  >
                    <span>{lng.flag}</span>
                    <span>{lng.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
            <p className="text-xs text-gray-600">{f.copyright}</p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              {f.terms.map((item) => (
                <a key={item} href="#" className="text-xs text-gray-600 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
