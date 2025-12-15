import { useLocale } from "@/lib/locale-context"
import { Hero3D } from "./hero-3d"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const { t } = useLocale()

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Hero3D />

      <div className="container relative z-10 px-4">
        {/* Mobile and Tablet Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center lg:hidden"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-6 flex justify-center md:mb-4"
          >
            <div className="mb-2 relative h-50 w-40 overflow-hidden rounded-[16px] border-2 border-primary/20 bg-card shadow-xl md:h-70 md:w-50 pt-5">
              <img
                src="/images/profile/cf-avatar.png"
                alt="Franco Capria"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8 inline-block md:mb-7"
          >
            <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary md:px-3 md:py-1.5 md:text-xs">
              {t.hero.role}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-12 text-3xl font-bold tracking-tight md:mb-11 md:text-4xl"
          >
            <span className="gradient-text">{t.hero.tagline}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:gap-3"
          >
            <Button
              size="lg"
              className="gradient-accent text-white transition-transform hover:scale-105
              text-xl px-8 py-6
              md:text-2xl md:px-8 md:py-6

              
              "
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              {t.hero.cta}
            </Button>
          </motion.div>
        </motion.div>

        {/* Desktop Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden lg:flex items-center justify-between max-w-6xl mx-auto mt-8"
        >
          {/* Left Side - Large Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex-1 flex items-center justify-center relative mt-8"
          >
            <div className="relative w-auto h-126">
              <img
                src="/images/profile/cf-person.png"
                alt="Franco Capria"
                className="w-full h-full object-contain drop-shadow(0 10px 30px rgba(0,0,0,.35)) "
              />
              
              {/* Reflejo invertido */}
              <div
                className="absolute top-full left-0 w-full h-[30px] overflow-hidden pointer-events-none"
              >
                <img
                  src="/images/profile/capria-franco-transparent.png"
                  alt=""
                  className="w-full h-full object-cover object-bottom"
                  style={{
                    transform: "scaleY(-1) skewX(-4deg) translateY(8px)",
                    opacity: 0.25,
                    filter: "blur(8px)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,0.25) 100%, rgba(0,0,0,0) 0%)",
                    maskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,0.25) 100%, rgba(0,0,0,0) 0%)",

                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 "
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6 inline-block"
            >
              <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                {t.hero.role}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-10 text-5xl font-bold tracking-tight"
            >
              <span className="gradient-text">{t.hero.tagline}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col gap-4"
            >
              <Button
                size="lg"
                className="gradient-accent text-white transition-transform hover:scale-105 w-fit"
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {t.hero.cta}
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

         {/* flecha */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-[-3rem] left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
