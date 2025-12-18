export interface Education {
  id: string
  title: string
  titleEn: string
  institution: string
  year: string
  type: number
  description: string
  descriptionEn: string
  pdfUrl?: string
  validationId?: string
  validationUrl?: string
  featured?: boolean
  mes?: number
  dia?: number
  institutionFull?: string
  nivel?: number
}

export const educationData: Education[] = [
  {
    id: "sfc",
    title: "Scrum Fundamentals Certified (SFC)",
    titleEn: "Scrum Fundamentals Certified (SFC)",
    institution: "SCRUMstudy",
    year: "2025",
    type: 1,
    description: "Fundamentos de Scrum: roles, eventos y artefactos. Enfoque en trabajo ágil y colaborativo.",
    descriptionEn: "Scrum fundamentals: roles, events, and artifacts. Focused on agile and collaborative work.",
    pdfUrl: "/pdfs/ScrumFundamentalsCertified-FrancoCapria-1124214.pdf",
    validationId: "1124214",
    validationUrl: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1124214",
    featured: true,
    mes: 0,
    dia: 15,
    nivel: 1,
  },
  {
    id: "kec",
    title: "Kanban Essentials with AI Certified (KEC)",
    titleEn: "Kanban Essentials with AI Certified (KEC)",
    institution: "SCRUMstudy",
    year: "2025",
    type: 1,
    description: "Principios de Kanban aplicados a flujos de trabajo modernos y uso de IA para optimización.",
    descriptionEn: "Kanban principles applied to modern workflows and AI usage for optimization.",
    pdfUrl: "/pdfs/KanbanEssentialswithAICertified-FrancoCapria-1133114.pdf",
    validationId: "1133114",
    validationUrl: "https://www.scrumstudy.com/certification/verify?type=KEC&number=1133114",
    featured: true,
    mes: 1,
    dia: 20,
    nivel: 1,
  },
  {
    id: "testing-cfl403",
    title: "Testing de Aplicaciones",
    titleEn: "Application Testing",
    institution: "CFL N°403 Luz y Fuerza",
    year: "2025",
    type: 2,
    description: "Curso práctico de testing de aplicaciones. Pruebas manuales en sitios web y formularios, redacción de manuales de usuario, validación de funcionamiento y rendimiento, y fundamentos teóricos del testing.",
    descriptionEn: "Hands-on application testing course. Manual testing of websites and forms, user manual writing, functionality and performance validation, and testing fundamentals.",
    pdfUrl: "/pdfs/TestingDeAplicaciones-FrancoCapria-CFL403LyF.pdf",
    featured: true,
    mes: 2,
    dia: 10,
    institutionFull: "Confederación Frente de Lucha N°403 Luz y Fuerza",
    nivel: 0,
  },
]

export function getFeaturedEducation(): Education[] {
  return educationData.filter((edu) => edu.featured)
}

export function getAllEducation(): Education[] {
  return educationData
}
