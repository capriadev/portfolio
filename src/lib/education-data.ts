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
  
]

export function getFeaturedEducation(): Education[] {
  return educationData.filter((edu) => edu.featured)
}

export function getAllEducation(): Education[] {
  return educationData
}
