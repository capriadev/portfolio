import { useLocale } from "@/lib/locale-context"
import { Card } from "./ui/card"
import { motion } from "framer-motion"
import { Search, Pencil, Users, Palette, Code2, MessageSquare } from "lucide-react"

export function ProcessSection() {
  const { t } = useLocale()

  const steps = [
    {
      icon: Search,
      key: "analysis" as const,
    },
    {
      icon: Pencil,
      key: "sketch" as const,
    },
    {
      icon: Users,
      key: "ux" as const,
    },
    {
      icon: Palette,
      key: "design" as const,
    },
    {
      icon: Code2,
      key: "implementation" as const,
    },
    {
      icon: MessageSquare,
      key: "feedback" as const,
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="gradient-text">{t.process.title}</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            const stepData = t.process.steps[step.key]

            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="relative h-full overflow-hidden border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/5" />
                  <div className="relative">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-xs font-medium text-muted-foreground">0{index + 1}</span>
                      <div className="h-px flex-1 bg-border" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{stepData.title}</h3>
                    <p className="text-sm text-muted-foreground">{stepData.description}</p>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
