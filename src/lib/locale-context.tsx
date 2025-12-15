"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Locale, detectUserLocale, useTranslation } from "./i18n"

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: ReturnType<typeof useTranslation>
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const detectedLocale = detectUserLocale()
    setLocale(detectedLocale)
    setMounted(true)
  }, [])

  const t = useTranslation(locale)

  if (!mounted) {
    return null
  }

  return <LocaleContext.Provider value={{ locale, setLocale, t }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
