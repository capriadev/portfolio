import { useLocale } from "@/lib/locale-context"
import type { Project } from "@/lib/projects-data"
import { motion } from "framer-motion"
import { ArrowLeft, Github, ExternalLink, Code2, Package } from "lucide-react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { navigateBack, getQueryParam } from "@/lib/router-utils"

interface ProjectDetailClientProps {
  project: Project
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const { locale, t } = useLocale()
  const fromParam = getQueryParam("from")

  const name = locale === "es" ? project.name : project.nameEn
  const details = project.details!

  const problem = locale === "es" ? details.problem : details.problemEn
  const uxDecisions = locale === "es" ? details.uxDecisions : details.uxDecisionsEn
  const uiDecisions = locale === "es" ? details.uiDecisions : details.uiDecisionsEn
  const result = locale === "es" ? details.result : details.resultEn

  const handleBackClick = () => {
    navigateBack("projects", fromParam || undefined)
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Button variant="ghost" className="mb-8 gap-2 cursor-pointer" onClick={handleBackClick}>
            <ArrowLeft className="h-4 w-4" />
            {t.projectDetail.backButton}
          </Button>

          <div className="mb-8">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-md bg-secondary px-3 py-1 text-sm font-medium capitalize text-secondary-foreground">
                {project.type}
              </span>
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-muted/50 px-3 py-1 text-sm text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              <span className="gradient-text">{name}</span>
            </h1>

            <div className="flex flex-wrap gap-3">
              {project.github && (
                <Button variant="outline" asChild className="gap-2 bg-transparent">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    Ver código
                  </a>
                </Button>
              )}
              {project.live && (
                <Button asChild className="gap-2">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Ver proyecto
                  </a>
                </Button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            {/* Problema */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="p-6">
                <h2 className="mb-4 text-2xl font-semibold">{t.projectDetail.problem}</h2>
                <p className="text-muted-foreground">{problem}</p>
              </Card>
            </motion.div>

            {/* Decisiones UX */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-6">
                <h2 className="mb-4 text-2xl font-semibold">{t.projectDetail.uxDecisions}</h2>
                <ul className="space-y-2">
                  {uxDecisions.map((decision, index) => (
                    <li key={index} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary">•</span>
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Decisiones UI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="p-6">
                <h2 className="mb-4 text-2xl font-semibold">{t.projectDetail.uiDecisions}</h2>
                <ul className="space-y-2">
                  {uiDecisions.map((decision, index) => (
                    <li key={index} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary">•</span>
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Información específica según el tipo */}
            {project.type === "api" && details.apiExample && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="p-6">
                  <h2 className="mb-4 text-2xl font-semibold flex items-center gap-2">
                    <Code2 className="h-6 w-6 text-primary" />
                    {t.projectDetail.usageExample}
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <p className="mb-2 text-sm font-medium text-muted-foreground">Endpoint</p>
                      <code className="block rounded-md bg-muted p-3 text-sm">{details.apiExample.endpoint}</code>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-medium text-muted-foreground">Input</p>
                      <pre className="rounded-md bg-muted p-3 text-sm overflow-x-auto">{details.apiExample.input}</pre>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-medium text-muted-foreground">Output</p>
                      <pre className="rounded-md bg-muted p-3 text-sm overflow-x-auto">{details.apiExample.output}</pre>
                    </div>
                    {details.apiExample.docsUrl && (
                      <Button variant="outline" asChild className="gap-2 bg-transparent">
                        <a href={details.apiExample.docsUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          {t.projectDetail.documentation}
                        </a>
                      </Button>
                    )}
                  </div>
                </Card>
              </motion.div>
            )}

            {project.type === "bot" && details.botArchitecture && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="p-6">
                  <h2 className="mb-4 text-2xl font-semibold flex items-center gap-2">
                    <Package className="h-6 w-6 text-primary" />
                    {t.projectDetail.architecture}
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-3 font-semibold">{t.projectDetail.modules}</h3>
                      <div className="flex flex-wrap gap-2">
                        {details.botArchitecture.modules.map((module) => (
                          <span key={module} className="rounded-md bg-primary/10 px-3 py-1 text-sm text-primary">
                            {module}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-3 font-semibold">{t.projectDetail.useCases}</h3>
                      <ul className="space-y-2">
                        {details.botArchitecture.useCases.map((useCase, index) => (
                          <li key={index} className="flex gap-3 text-muted-foreground">
                            <span className="text-primary">•</span>
                            <span>{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-3 font-semibold">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {details.botArchitecture.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-border bg-muted/50 px-3 py-1 text-sm text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}

            {project.type === "tool" && details.toolInfo && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="p-6">
                  <h2 className="mb-4 text-2xl font-semibold">{t.projectDetail.purpose}</h2>
                  <p className="mb-4 text-muted-foreground">
                    {locale === "es" ? details.toolInfo.purpose : details.toolInfo.purposeEn}
                  </p>
                  {details.toolInfo.marketplaceUrl && (
                    <Button variant="outline" asChild className="gap-2 bg-transparent">
                      <a href={details.toolInfo.marketplaceUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        {t.projectDetail.marketplace}
                      </a>
                    </Button>
                  )}
                </Card>
              </motion.div>
            )}

            {/* Resultado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="p-6 gradient-accent">
                <h2 className="mb-4 text-2xl font-semibold text-white">{t.projectDetail.result}</h2>
                <p className="text-white/90">{result}</p>
              </Card>
            </motion.div>
          </div>

          {/* Screenshots sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="mb-4 text-2xl font-semibold">{t.projectDetail.screenshots}</h2>
              <div className="space-y-4">
                {details.screenshots.map((screenshot, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative aspect-video">
                      <img
                        src={screenshot || "/placeholder.svg"}
                        alt={`Screenshot ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
