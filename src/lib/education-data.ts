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
    id: "tecnico-programacion",
    title: "Técnico en Programación",
    titleEn: "Programming Technician",
    institution: "Escuela Técnica",
    institutionEn: "Technical School",
    year: "2015-2018",
    type: "degree",
    description: "Título técnico en programación con enfoque en desarrollo de software",
    descriptionEn: "Technical degree in programming with focus on software development",
    featured: true,
    pdfUrl: "/pdfs/KanbanEssentialswithAICertified-FrancoCapria-1133114.pdf"
  },
  {
    id: "ingenieria-sistemas",
    title: "Ingeniería en Sistemas",
    titleEn: "Systems Engineering",
    institution: "Universidad Nacional",
    institutionEn: "National University",
    year: "2019-2023",
    type: "degree",
    description: "Grado universitario en ingeniería de sistemas de información",
    descriptionEn: "University degree in information systems engineering",
    featured: true,
  },
  {
    id: "scrum-master",
    title: "Certified Scrum Master",
    titleEn: "Certified Scrum Master",
    institution: "Scrum Alliance",
    institutionEn: "Scrum Alliance",
    year: "2022",
    type: "certification",
    description: "Certificación oficial en metodología Scrum y gestión ágil de proyectos",
    descriptionEn: "Official certification in Scrum methodology and agile project management",
    validationId: "CSM-123456",
    validationUrl: "https://www.scrumalliance.org/community/profile/example",
    featured: true,
  },
  {
    id: "uxui-bootcamp",
    title: "UX/UI Design Bootcamp",
    titleEn: "UX/UI Design Bootcamp",
    institution: "Design Institute",
    institutionEn: "Design Institute",
    year: "2021",
    type: "course",
    description: "Bootcamp intensivo de diseño UX/UI con proyectos reales",
    descriptionEn: "Intensive UX/UI design bootcamp with real projects",
    featured: true,
  },
  {
    id: "react-advanced",
    title: "React Avanzado",
    titleEn: "Advanced React",
    institution: "Frontend Masters",
    institutionEn: "Frontend Masters",
    year: "2023",
    type: "course",
    description: "Curso avanzado de React con hooks, context y optimización de rendimiento",
    descriptionEn: "Advanced React course with hooks, context and performance optimization",
  },
  {
    id: "typescript-pro",
    title: "TypeScript Profesional",
    titleEn: "Professional TypeScript",
    institution: "Platzi",
    institutionEn: "Platzi",
    year: "2022",
    type: "course",
    description: "Curso profesional de TypeScript con tipos avanzados y arquitectura",
    descriptionEn: "Professional TypeScript course with advanced types and architecture",
  },
  {
    id: "docker-kubernetes",
    title: "Docker y Kubernetes",
    titleEn: "Docker and Kubernetes",
    institution: "Udemy",
    institutionEn: "Udemy",
    year: "2023",
    type: "certification",
    description: "Certificación en containerización y orquestación con Docker y Kubernetes",
    descriptionEn: "Certification in containerization and orchestration with Docker and Kubernetes",
    validationUrl: "https://www.udemy.com/certificate/example",
  },
  {
    id: "aws-cloud",
    title: "AWS Cloud Practitioner",
    titleEn: "AWS Cloud Practitioner",
    institution: "Amazon Web Services",
    institutionEn: "Amazon Web Services",
    year: "2023",
    type: "certification",
    description: "Certificación fundamental de AWS Cloud",
    descriptionEn: "AWS Cloud foundational certification",
    validationId: "AWS-CP-123456",
    validationUrl: "https://aws.amazon.com/verification",
  },
]

export function getFeaturedEducation(): Education[] {
  return educationData.filter((edu) => edu.featured)
}

export function getAllEducation(): Education[] {
  return educationData
}
