import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import type { Project } from "@/lib/projects-data"
import { useLocale } from "@/lib/locale-context"
import { navigateProjectDetail } from "@/lib/router-utils"

interface ProjectCardProps {
  project: Project
  index: number
  from?: "home" | "projects-page"
}

export function ProjectCard({ project, index, from = "home" }: ProjectCardProps) {
  const { locale, t } = useLocale()
  const name = locale === "es" ? project.name : project.nameEn
  const description = locale === "es" ? project.description : project.descriptionEn

  const handleCardClick = () => {
    navigateProjectDetail(project.id, from === "projects-page" ? "projects-page" : "home")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className="group flex h-full min-h-[440px] flex-col overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card/80 cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.preview || "/images/errors/sin-preview.svg"}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[102.5%]"
          />
          {project.featured && (
            <div className="grid place-items-center absolute right-0 top-0 rounded-bl-xl bg-background w-[7rem] h-[3rem]">
              <div className="rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                {t.projectDetail.featured}
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-3 p-4">
          <span className="w-fit rounded-md bg-secondary px-2.5 py-1 text-xs font-medium capitalize text-secondary-foreground">
            {project.type}
          </span>

          <div className="flex flex-col gap-1.5">
            <h3 className="text-lg font-semibold leading-tight">{name}</h3>
            <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 5 && (
              <span className="rounded-md border border-border bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground">
                +{project.stack.length - 5}
              </span>
            )}
          </div>

          <div className="mt-auto flex gap-2 pt-2">
            {project.github && (
              <Button
                variant="outline"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(project.github, "_blank", "noopener,noreferrer")
                }}
                className="gap-2"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            )}
            {project.live && (
              <Button
                size="sm"
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(project.live, "_blank", "noopener,noreferrer")
                }}
                className="gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                {t.projects.viewProject}
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
