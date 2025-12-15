"use client"

import { useState, useMemo } from "react"
import { useLocale } from "@/lib/locale-context"
import { ProjectFilters } from "./project-filters"
import { ProjectCard } from "./project-card"
import { projects, type ProjectType } from "@/lib/projects-data"
import { motion, AnimatePresence } from "framer-motion"
import { Navigation } from "./navigation"
import { Button } from "./ui/button"
import { ArrowLeft } from "lucide-react"
import { navigateHome } from "@/lib/router-utils"

export function AllProjectsClient() {
  const { t, locale } = useLocale()
  const [activeFilter, setActiveFilter] = useState<ProjectType | "all">("all")

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects
    return projects.filter((project) => project.type === activeFilter)
  }, [activeFilter])

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
                  <span className="gradient-text">{t.projects.title}</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  {activeFilter === "all"
                    ? `${filteredProjects.length} proyectos en total`
                    : `${filteredProjects.length} proyectos de tipo ${activeFilter}`}
                </p>
              </div>
              <Button variant="ghost" className="gap-2 cursor-pointer" onClick={navigateHome}>
                <ArrowLeft className="h-4 w-4" />
                {t.projects.backButton}
              </Button>
            </motion.div>

            <ProjectFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} from="projects-page" />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
    </>
  )
}
