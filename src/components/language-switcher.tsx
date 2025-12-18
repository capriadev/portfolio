import { useLocale } from "@/lib/locale-context"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale()

  return (
    <div className="flex items-center gap-1 rounded-lg bg-secondary p-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLocale("es")}
        className={`relative px-3 py-1 text-sm transition-colors ${
          locale === "es" ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        {locale === "es" && (
          <motion.div
            layoutId="active-locale"
            className="absolute inset-0 rounded-md bg-primary/10"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">ES</span>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLocale("en")}
        className={`relative px-3 py-1 text-sm transition-colors ${
          locale === "en" ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        {locale === "en" && (
          <motion.div
            layoutId="active-locale"
            className="absolute inset-0 rounded-md bg-primary/10"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </Button>
    </div>
  )
}
