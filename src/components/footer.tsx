import { useLocale } from "@/lib/locale-context"
import { Github, Linkedin, Mail } from "lucide-react"
import { SiDiscord } from "@icons-pack/react-simple-icons"
import { useState, useEffect } from "react"

export function Footer() {
  const { locale, t } = useLocale()
  const currentYear = new Date().getFullYear()
  const [showFullName, setShowFullName] = useState(false)
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null)
  const [desktopHideTimeout, setDesktopHideTimeout] = useState<NodeJS.Timeout | null>(null)

  const handleInitialsClick = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout)
      setHideTimeout(null)
    }
    
    setShowFullName(!showFullName)
    
    if (!showFullName) {
      const timeout = setTimeout(() => {
        setShowFullName(false)
      }, 3000)
      setHideTimeout(timeout)
    }
  }

  const handleDesktopMouseEnter = () => {
    if (desktopHideTimeout) {
      clearTimeout(desktopHideTimeout)
      setDesktopHideTimeout(null)
    }
    setShowFullName(true)
  }

  const handleDesktopMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowFullName(false)
    }, 1000)
    setDesktopHideTimeout(timeout)
  }

  return (
    <footer className="border-t border-border/50 bg-card/30 py-8 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:gap-4 md:flex-row">
          <div className="text-sm text-muted-foreground flex flex-wrap justify-center md:justify-start gap-x-2">
            <span>© {currentYear}</span>
            <abbr
              className="hidden md:inline font-mono text-primary cursor-help transition-all duration-300 hover:text-primary/80 not-italic"
              style={{
                fontFamily: "'Courier New', monospace",
                fontWeight: 600,
                letterSpacing: '0.1em',
              }}
              onMouseEnter={handleDesktopMouseEnter}
              onMouseLeave={handleDesktopMouseLeave}
            >
              {showFullName ? 'Capria Franco' : 'CF'}
            </abbr>
            <abbr
              className="md:hidden font-mono text-primary cursor-pointer transition-all duration-300 active:text-primary/80 not-italic"
              style={{
                fontFamily: "'Courier New', monospace",
                fontWeight: 600,
                letterSpacing: '0.1em',
              }}
              onClick={handleInitialsClick}
            >
              {showFullName ? 'Capria Franco' : 'CF'}
            </abbr>
            <span>{t.contact.portfolio}</span>
            <div className="basis-full md:contents"></div>
            <span>{t.contact.copyright}</span>
            <span>&#x1F9C9;</span>
          </div>

          <div className="flex gap-8 mb-8 md:gap-4 md:mb-0">
            <a
              href="https://github.com/capriadev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-8 w-8 md:h-5 md:w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/franco-capria-a92172397"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-8 w-8 md:h-5 md:w-5" />
            </a>
            <a
              href="https://discord.gg/6TQ9vnjx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Discord"
            >
              <SiDiscord className="h-8 w-8 md:h-5 md:w-5" />
            </a>
            <a
              href="mailto:capriadeveloper@gmail.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-8 w-8 md:h-5 md:w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
