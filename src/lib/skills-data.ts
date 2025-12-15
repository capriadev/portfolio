export interface SkillCategory {
  titleEs: string
  titleEn: string
  skills: string[]
}

export const skillsData: SkillCategory[] = [
  {
    titleEs: "Lenguajes",
    titleEn: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "HTML", "CSS", "SQL"],
  },
  {
    titleEs: "Frontend",
    titleEn: "Frontend",
    skills: ["React", "Next.js", "Vue", "Tailwind CSS", "Framer Motion", "Three.js"],
  },
  {
    titleEs: "Backend / APIs",
    titleEn: "Backend / APIs",
    skills: ["Node.js", "Express", "FastAPI", "REST", "GraphQL", "WebSockets"],
  },
  {
    titleEs: "Bases de datos",
    titleEn: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma"],
  },
  {
    titleEs: "DevOps",
    titleEn: "DevOps",
    skills: ["Docker", "Vercel", "GitHub Actions", "AWS", "Nginx"],
  },
  {
    titleEs: "Diseño",
    titleEn: "Design",
    skills: ["Figma", "UI/UX", "Design Systems", "Responsive Design", "Accessibility"],
  },
  {
    titleEs: "Herramientas",
    titleEn: "Tools",
    skills: ["Git", "VS Code", "Postman", "Jira", "Linear", "Notion"],
  },
]
