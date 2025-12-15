"use client"

import { useState, useMemo } from "react"
import { useLocale } from "@/lib/locale-context"
import { ProjectFilters } from "./project-filters"
import { ProjectCard } from "./project-card"
import { getHomeProjects, type ProjectType } from "@/lib/projects-data"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { navigate } from "@/lib/router-utils"

export function ProjectsSection() {
  const { t } = useLocale()
  const [activeFilter, setActiveFilter] = useState<ProjectType | "all">("all")

  const homeProjects = getHomeProjects()

  const filteredProjects = useMemo(() => {
    return activeFilter === "all" ? homeProjects : homeProjects.filter((project) => project.type === activeFilter)
  }, [activeFilter, homeProjects])

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="gradient-text">{t.projects.title}</span>
          </h2>
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
              <ProjectCard key={project.id} project={project} index={index} from="home" />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={() => navigate("/projects", { from: "home" })}
            className="inline-flex items-center gap-2 rounded-md border border-input bg-transparent px-8 py-3 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground select-none group cursor-pointer"
          >
            {t.projects.viewAll}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
