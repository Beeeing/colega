"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import { translations, type Language } from "@/lib/translations"

type LanguageContextType = {
  lang: Language
  setLang: (lang: Language) => void
  t: typeof translations["ja"]
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "ja",
  setLang: () => {},
  t: translations["ja"],
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("ja")

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang)
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
