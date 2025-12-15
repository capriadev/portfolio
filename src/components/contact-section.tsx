"use client"

import { useLocale } from "@/lib/locale-context"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  const { t } = useLocale()

  const contactMethods = [
    {
      icon: Mail,
      label: t.contact.email,
      value: "capriadeveloper@gmail.com",
      href: "mailto:capriadeveloper@gmail.com",
      color: "text-blue-400",
    },
    {
      icon: Github,
      label: t.contact.github,
      value: "github.com/capriadev",
      href: "https://github.com/capriadev",
      color: "text-foreground",
    },
    {
      icon: Linkedin,
      label: t.contact.linkedin,
      value: "Franco Capria",
      href: "https://www.linkedin.com/in/franco-capria-a92172397",
      color: "text-blue-500",
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="gradient-text">{t.contact.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{t.contact.description}</p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-3">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a href={method.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <Card className="group h-full border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card/80">
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-transform group-hover:scale-110">
                          <Icon className={`h-8 w-8 ${method.color}`} />
                        </div>
                        <h3 className="mb-2 font-semibold">{method.label}</h3>
                        <p className="text-sm text-muted-foreground break-all">{method.value}</p>
                      </div>
                    </Card>
                  </a>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Card className="border-border/50 bg-card/50 p-8 backdrop-blur-sm">
              <Button size="lg" className="gradient-accent text-white" asChild>
                <a href="mailto:capriadeveloper@gmail.com">{t.contact.cta}</a>
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
