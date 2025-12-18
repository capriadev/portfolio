export interface Education {
  id: string
  title: string
  titleEn: string
  institution: string
  institutionEn: string
  year: string
  type: "degree" | "certification" | "course"
  description: string
  descriptionEn: string
  pdfUrl?: string
  validationId?: string
  validationUrl?: string
  featured?: boolean
}

export const educationData: Education[] = [
  {
    id: "sfc",
    title: "Scrum Fundamentals Certified (SFC)",
    titleEn: "Scrum Fundamentals Certified (SFC)",
    institution: "SCRUMstudy",
    institutionEn: "SCRUMstudy",
    year: "2025",
    type: "certification",
    description: "Fundamentos de Scrum: roles, eventos y artefactos. Enfoque en trabajo ágil y colaborativo.",
    descriptionEn: "Scrum fundamentals: roles, events, and artifacts. Focused on agile and collaborative work.",
    pdfUrl: "/pdfs/ScrumFundamentalsCertified-FrancoCapria-1124214.pdf",
    validationId: "1124214",
    validationUrl: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1124214",
    featured: true
  },
  {
    id: "kec",
    title: "Kanban Essentials with AI Certified (KEC)",
    titleEn: "Kanban Essentials with AI Certified (KEC)",
    institution: "SCRUMstudy",
    institutionEn: "SCRUMstudy",
    year: "2025",
    type: "certification",
    description: "Principios de Kanban aplicados a flujos de trabajo modernos y uso de IA para optimización.",
    descriptionEn: "Kanban principles applied to modern workflows and AI usage for optimization.",
    pdfUrl: "/pdfs/KanbanEssentialswithAICertified-FrancoCapria-1133114.pdf",
    validationId: "1133114",
    validationUrl: "https://www.scrumstudy.com/certification/verify?type=KEC&number=1133114",
    featured: true
  }
]

export function getFeaturedEducation(): Education[] {
  return educationData.filter((edu) => edu.featured)
}

export function getAllEducation(): Education[] {
  return educationData
}
