import { useLocale } from "@/lib/locale-context"
import { LanguageSwitcher } from "./language-switcher"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { scrollToSection, navigateHome } from "@/lib/router-utils"
import { Briefcase, Zap, User, Mail } from "lucide-react"

export function Navigation() {
  const { t } = useLocale()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: t.nav.projects, href: "projects", icon: Briefcase },
    { label: t.nav.skills, href: "skills", icon: Zap },
    { label: t.nav.about, href: "about", icon: User },
    { label: t.nav.contact, href: "contact", icon: Mail },
  ]

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigateHome()
  }

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-effect shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.button
            onClick={handleLogoClick}
            className="text-xl font-semibold tracking-tight cursor-pointer border-none bg-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="gradient-text">Capria Franco</span>
          </motion.button>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground border-none bg-transparent cursor-pointer group"
                >
                  <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </div>

          <LanguageSwitcher />
        </div>
      </div>
    </motion.nav>
  )
}
