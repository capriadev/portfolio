import { useLocale } from "@/lib/locale-context"
import { Card } from "./ui/card"
import { motion } from "framer-motion"
import { User, Target, Briefcase, GraduationCap, ArrowRight } from "lucide-react"
import { getFeaturedEducation } from "@/lib/education-data"
import { navigate } from "@/lib/router-utils"

export function AboutSection() {
  const { t, locale } = useLocale()

  const sections = [
    {
      icon: User,
      title: t.about.profile.title,
      description: t.about.profile.description,
    },
    {
      icon: Target,
      title: t.about.projects.title,
      description: t.about.projects.description,
    },
    {
      icon: Briefcase,
      title: t.about.work.title,
      description: t.about.work.description,
    },
  ]

  const featuredEducation = getFeaturedEducation()

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="gradient-text">{t.about.title}</span>
          </h2>
        </motion.div>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 bg-card/50 p-6 backdrop-blur-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold">{section.title}</h3>
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="border-border/50 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">{t.about.education.title}</h3>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {featuredEducation.map((item, index) => {
                const title = locale === "es" ? item.title : item.titleEn
                const institution = locale === "es" ? item.institution : item.institutionEn
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-lg border border-border bg-muted/30 p-4"
                  >
                    <div className="mb-1 flex items-center justify-between">
                      <h4 className="font-semibold">{title}</h4>
                      <span className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">{item.year}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{institution}</p>
                  </motion.div>
                )
              })}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 flex justify-center"
            >
              <button
                onClick={() => navigate("/education", { from: "home" })}
                className="inline-flex items-center gap-2 rounded-md border border-input bg-transparent px-6 py-2 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground select-none group cursor-pointer"
              >
                {t.about.education.viewAll}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
