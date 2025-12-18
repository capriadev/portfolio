import { useState } from "react"
import { useLocale } from "@/lib/locale-context"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { Navigation } from "./navigation"
import { educationData } from "@/lib/education-data"
import { GraduationCap, Award, BookOpen, FileText, CheckCircle, ArrowLeft , Sparkles } from "lucide-react"
import { navigateBack, getQueryParam } from "@/lib/router-utils"

export function EducationClient() {
  const { locale, t } = useLocale()
  const [filter, setFilter] = useState<"all" | 0 | 1 | 2>("all")
  const fromParam = getQueryParam("from")

  const filteredEducation = filter === "all" ? educationData : educationData.filter((item) => item.type === filter)

  const getIcon = (type: number) => {
    switch (type) {
      case 0:
        return GraduationCap
      case 1:
        return Award
      case 2:
        return BookOpen
      default:
        return GraduationCap
    }
  }

  const getTypeLabel = (type: number) => {
    return t.type_education[type as keyof typeof t.type_education] || ""
  }

  const getEducationLabel = (education?: number) => {
    if (education === undefined) return null
    return t.level_education?.[education as keyof typeof t.level_education] || null
  }

  const getDifficultyLabel = (nivel?: number) => {
    if (nivel === undefined) return null
    return t.level_difficulty?.[nivel as keyof typeof t.level_difficulty] || null
  }

  const formatDate = (year: string, mes?: number, dia?: number): string => {
    if (mes === undefined || dia === undefined) {
      return year
    }

    const monthName = t.months[mes as keyof typeof t.months]

    if (locale === "es") {
      return `${dia} de ${monthName}, ${year}`
    } else {
      // English format: "Month Day, Year"
      return `${monthName} ${dia}, ${year}`
    }
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
              {["all", 0, 1, 2].map((type) => (
                <Button
                  key={type}
                  variant={filter === type ? "default" : "outline"}
                  onClick={() => setFilter(type as typeof filter)}
                  className="capitalize"
                >
                  {type === "all" ? (locale === "es" ? "Todos" : "All") : getTypeLabel(type as number)}
                </Button>
              ))}
            </motion.div>

            {/* Grid de educación */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredEducation.map((item, index) => {
                const Icon = getIcon(item.type)
                const title = locale === "es" ? item.title : item.titleEn
                const institution = locale === "es" ? item.institution : item.institution
                const description = locale === "es" ? item.description : item.descriptionEn
                const institutionDisplay = item.institutionFull || institution
                const both = getEducationLabel(item.education) !== null && getDifficultyLabel(item.nivel) !== null

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="relative flex flex-col h-full border-border/50 bg-card/50 p-6 backdrop-blur-sm">
                      

                      <div className="mb-3 flex items-start justify-between">
                        <div className="flex gap-2">
                          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          {item.featured && (
                            <abbr title={t.education.featured}>
                              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/30">
                                <Sparkles className="h-6 w-6 text-chart-3" />
                              </div>
                            </abbr>
                          )}
                        </div>

                        <div className={`grid gap-2 ${both ? "grid-cols-2" : "grid-cols-1"}`}>
                          {getEducationLabel(item.education) && (
                            <span className="rounded-full bg-secondary w-[7rem] px-3 py-1 text-xs font-medium capitalize text-secondary-foreground">
                              {getEducationLabel(item.education)}
                            </span>
                          )}

                          <span className="rounded-full bg-secondary w-[7rem] px-3 py-1 text-xs font-medium capitalize text-secondary-foreground">
                            {getTypeLabel(item.type)}
                          </span>

                          {getDifficultyLabel(item.nivel) && (
                            <span className={`${both && "col-start-2 justify-self-end"} rounded-full bg-secondary w-[7rem] px-3 py-1 text-xs font-medium capitalize text-secondary-foreground`}>
                              {getDifficultyLabel(item.nivel)}
                            </span>
                          )}
                        </div>
                      </div>

                      <h3 className="mb-[-.5rem] text-lg font-semibold line-clamp-2">
                        {title}
                      </h3>

                      <div className="mb-1 line-clamp-1">
                        {item.institutionFull ? (
                          <abbr title={institutionDisplay} className="cursor-help border-b border-dotted border-muted-foreground/40 text-sm text-muted-foreground no-underline hover:border-muted-foreground/70">
                            {institution}
                          </abbr>
                        ) : (
                          <p className="text-sm text-muted-foreground">
                            {institution}
                          </p>
                        )}
                      </div>

                      <p className="mb-2 text-xs text-primary">
                        {formatDate(item.year, item.mes, item.dia)}
                      </p>

                      <div className="mb-4 flex-grow">
                        <p title={description} className="text-sm text-muted-foreground line-clamp-4 overflow-hidden">
                          {description}
                        </p>
                      </div>

                      {/* Enlaces y validación */}
                      <div className="flex flex-wrap gap-2 mt-auto">
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
