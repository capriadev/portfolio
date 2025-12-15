"use client"

import type React from "react"

import { useLocale } from "@/lib/locale-context"
import { skillsData } from "@/lib/skills-data"
import { Card } from "./ui/card"
import { motion } from "framer-motion"
import { useState } from "react"

export function SkillsSection() {
  const { locale, t } = useLocale()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="gradient-text">{t.skills.title}</span>
          </h2>
        </motion.div>

        <div
          className="relative"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={
            {
              "--mouse-x": `${mousePosition.x}px`,
              "--mouse-y": `${mousePosition.y}px`,
            } as React.CSSProperties
          }
        >
          {/* Efecto glow global que sigue el mouse */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
            style={{
              opacity: isHovering ? 1 : 0,
              background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.15), transparent 40%)`,
            }}
          />

          <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillsData.map((category, index) => (
              <motion.div
                key={category.titleEn}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group ${index === 0 ? "md:col-span-2 lg:col-span-3" : ""}`}
              >
                <Card className="relative h-full border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50">
                  <h3 className="mb-4 text-xl font-semibold text-primary">
                    {locale === "es" ? category.titleEs : category.titleEn}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-border bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
