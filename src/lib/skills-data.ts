export interface SkillCategory {
  titleEs: string
  titleEn: string
  skills: string[]
}

export const skillsData: SkillCategory[] = [
  {
    titleEs: "Lenguajes",
    titleEn: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "HTML5", "CSS2", "SASS", "LESS", "SQL", "PHP", "Markdown", "Json", "YALM"],
  },
  {
    titleEs: "Frontend",
    titleEn: "Frontend",
    skills: ["React", "Next.js", "Vite", "Tailwind CSS", "Framer Motion", "Three.js"],
  },
  {
    titleEs: "Backend / APIs",
    titleEn: "Backend / APIs",
    skills: ["Node.js", "Express", "WebSockets"],
  },
  {
    titleEs: "Bases de datos",
    titleEn: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Supabase", "Firebase", "Koyeb", "InfinityFree"],
  },
  {
    titleEs: "DevOps",
    titleEn: "DevOps",
    skills: ["Docker", "Vercel", "GitHub Actions", "Jest"],
  },
  {
    titleEs: "Diseño",
    titleEn: "Design",
    skills: ["Figma", "UI/UX", "Design Systems", "Responsive Design", "Accessibility"],
  },
  {
    titleEs: "Herramientas",
    titleEn: "Tools",
    skills: ["Git", "VS Code", "Cursor", "Notion"],
  },
]
