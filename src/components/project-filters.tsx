import { useLocale } from "@/lib/locale-context"
import { motion } from "framer-motion"
import type { ProjectType } from "@/lib/projects-data"

interface ProjectFiltersProps {
  activeFilter: ProjectType | "all"
  onFilterChange: (filter: ProjectType | "all") => void
}

export function ProjectFilters({ activeFilter, onFilterChange }: ProjectFiltersProps) {
  const { t } = useLocale()

  const filters: Array<{ value: ProjectType | "all"; label: string }> = [
    { value: "all", label: t.projects.filters.all },
    { value: "web", label: t.projects.filters.webs },
    { value: "api", label: t.projects.filters.apis },
    { value: "bot", label: t.projects.filters.bots },
    { value: "tool", label: t.projects.filters.tools },
  ]

  return (
    <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`relative px-6 py-2 text-sm font-medium transition-colors ${
            activeFilter === filter.value ? "text-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {activeFilter === filter.value && (
            <motion.div
              layoutId="active-filter"
              className="absolute inset-0 rounded-lg border border-primary/20 bg-primary/10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{filter.label}</span>
        </button>
      ))}
    </div>
  )
}
