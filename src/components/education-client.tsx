"use client"

import { useState } from "react"
import { useLocale } from "@/lib/locale-context"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { Navigation } from "./navigation"
import { educationData } from "@/lib/education-data"
import { GraduationCap, Award, BookOpen, FileText, CheckCircle, ArrowLeft } from "lucide-react"
import { navigateBack, getQueryParam } from "@/lib/router-utils"

export function EducationClient() {
  const { locale, t } = useLocale()
  const [filter, setFilter] = useState<"all" | "degree" | "certification" | "course">("all")
  const fromParam = getQueryParam("from")

  const filteredEducation = filter === "all" ? educationData : educationData.filter((item) => item.type === filter)

  const getIcon = (type: string) => {
    switch (type) {
      case "degree":
        return GraduationCap
      case "certification":
        return Award
      case "course":
        return BookOpen
      default:
        return GraduationCap
    }
  }

  const getTypeLabel = (type: string) => {
    const labels = {
      es: { degree: "Título", certification: "Certificación", course: "Curso" },
      en: { degree: "Degree", certification: "Certification", course: "Course" },
    }
    return labels[locale][type as keyof typeof labels.es] || type
  }

  const handleBackClick = () => {
    navigateBack("about", fromParam || undefined)
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 flex items-start justify-between"
            >
              <div>
                <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                  <span className="gradient-text">
                    {t.education.title}
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  {locale === "es"
                    ? "Todos mis títulos, certificados y diplomas profesionales"
                    : "All my professional degrees, certificates and diplomas"}
                </p>
              </div>
              <Button variant="ghost" className="gap-2 cursor-pointer" onClick={handleBackClick}>
                <ArrowLeft className="h-4 w-4" />
                {t.education.backButton}
              </Button>
            </motion.div>

            {/* Filtros */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 flex flex-wrap justify-center gap-3"
            >
              {["all", "degree", "certification", "course"].map((type) => (
                <Button
                  key={type}
                  variant={filter === type ? "default" : "outline"}
                  onClick={() => setFilter(type as typeof filter)}
                  className="capitalize"
                >
                  {type === "all" ? (locale === "es" ? "Todos" : "All") : getTypeLabel(type)}
                </Button>
              ))}
            </motion.div>

            {/* Grid de educación */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredEducation.map((item, index) => {
                const Icon = getIcon(item.type)
                const title = locale === "es" ? item.title : item.titleEn
                const institution = locale === "es" ? item.institution : item.institutionEn
                const description = locale === "es" ? item.description : item.descriptionEn

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="relative h-full border-border/50 bg-card/50 p-6 backdrop-blur-sm">
                      

                      <div className="mb-2 flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>

                        <div className="flex flex-col gap-2">
                          {item.featured && (
                            <span className="rounded-full bg-primary/90 w-[7rem] px-3 py-1 text-xs font-medium capitalize text-primary-foreground">
                              {t.education.featured}
                            </span>
                          )}

                          <span className="rounded-full bg-secondary w-[7rem] px-3 py-1 text-xs font-medium capitalize text-secondary-foreground">
                            {getTypeLabel(item.type)}
                          </span>
                        </div>
                      </div>

                      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
                      <p className="mb-1 text-sm text-muted-foreground">{institution}</p>
                      <p className="mb-3 text-xs text-primary">{item.year}</p>
                      <p className="mb-4 text-sm text-muted-foreground">{description}</p>

                      {/* Enlaces y validación */}
                      <div className="flex flex-wrap gap-2">
                        {item.pdfUrl && (
                          <Button size="sm" variant="outline" className="gap-2 bg-transparent" asChild>
                            <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer">
                              <FileText className="h-4 w-4" />
                              PDF
                            </a>
                          </Button>
                        )}
                        {item.validationUrl && (
                          <Button size="sm" variant="outline" className="gap-2 bg-transparent" asChild>
                            <a href={item.validationUrl} target="_blank" rel="noopener noreferrer">
                              <CheckCircle className="h-4 w-4" />
                              {t.education.verify}
                            </a>
                          </Button>
                        )}
                        {item.validationId && (
                          <div className="flex w-full items-center gap-2 rounded border border-border bg-muted/30 px-2 py-1 text-xs text-muted-foreground">
                            <span className="font-mono">{item.validationId}</span>
                          </div>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
