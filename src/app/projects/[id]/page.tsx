import { projects } from "@/lib/projects-data"
import { ProjectDetailClient } from "@/components/project-detail-client"

export default function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = params
  const project = projects.find((p) => p.id === id)

  if (!project || !project.details) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Proyecto no encontrado</h1>
      </div>
    )
  }

  return <ProjectDetailClient project={project} />
}
