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
  },
  {
    id: "testing-cfl403",
    title: "Testing de Aplicaciones",
    titleEn: "Application Testing",
    institution: "CFL N°403 Luz y Fuerza",
    institutionEn: "CFL N°403 Luz y Fuerza",
    year: "2025",
    type: "course",
    description: "Curso práctico de testing de aplicaciones. Pruebas manuales en sitios web y formularios, redacción de manuales de usuario, validación de funcionamiento y rendimiento, y fundamentos teóricos del testing.",
    descriptionEn: "Hands-on application testing course. Manual testing of websites and forms, user manual writing, functionality and performance validation, and testing fundamentals.",
    pdfUrl: "/pdfs/TestingDeAplicaciones-FrancoCapria-CFL403LyF.pdf",
    featured: true
  }

]

export function getFeaturedEducation(): Education[] {
  return educationData.filter((edu) => edu.featured)
}

export function getAllEducation(): Education[] {
  return educationData
}
