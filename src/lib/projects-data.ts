export type ProjectType = "web" | "api" | "bot" | "tool"

export interface ProjectDetails {
  problem: string
  problemEn: string
  uxDecisions: string[]
  uxDecisionsEn: string[]
  uiDecisions: string[]
  uiDecisionsEn: string[]
  result: string
  resultEn: string
  screenshots: string[]
  // Para APIs
  apiExample?: {
    input: string
    output: string
    endpoint: string
    docsUrl?: string
  }
  // Para Bots
  botArchitecture?: {
    modules: string[]
    useCases: string[]
    tags: string[]
  }
  // Para Tools
  toolInfo?: {
    purpose: string
    purposeEn: string
    marketplaceUrl?: string
  }
}

export interface Project {
  id: string
  type: ProjectType
  name: string
  nameEn: string
  description: string
  descriptionEn: string
  stack: string[]
  preview: string
  github?: string
  live?: string
  featured?: boolean
  showInHome?: boolean // Si es true, se muestra en los 6 de la página principal
  details?: ProjectDetails
}

export function getHomeProjects(): Project[] {
  return projects.filter((project) => project.showInHome).slice(0, 6)
}

export function getAllProjects(): Project[] {
  return projects
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    type: "web",
    name: "Plataforma E-commerce",
    nameEn: "E-commerce Platform",
    description: "Plataforma completa de comercio electrónico con gestión de productos, carrito y pagos",
    descriptionEn: "Complete e-commerce platform with product management, cart and payments",
    stack: ["React", "TypeScript", "Next.js", "Stripe", "Tailwind CSS"],
    preview: "/test/img2.png",
    github: "https://github.com",
    live: "https://demo.com",
    featured: true,
    showInHome: true, // Mostrar en página principal
    details: {
      problem:
        "Los pequeños negocios necesitan una solución accesible para vender online sin costos prohibitivos de desarrollo.",
      problemEn: "Small businesses need an accessible solution to sell online without prohibitive development costs.",
      uxDecisions: [
        "Flujo de compra simplificado en 3 pasos",
        "Búsqueda predictiva con filtros avanzados",
        "Carrito persistente entre sesiones",
        "Checkout como invitado opcional",
      ],
      uxDecisionsEn: [
        "Simplified 3-step purchase flow",
        "Predictive search with advanced filters",
        "Persistent cart between sessions",
        "Optional guest checkout",
      ],
      uiDecisions: [
        "Grid responsivo con lazy loading de imágenes",
        "Micro-interacciones en acciones clave (agregar al carrito)",
        "Sistema de diseño consistente con tokens",
        "Estados de carga skeleton para mejor percepción de velocidad",
      ],
      uiDecisionsEn: [
        "Responsive grid with image lazy loading",
        "Micro-interactions on key actions (add to cart)",
        "Consistent design system with tokens",
        "Skeleton loading states for better perceived speed",
      ],
      result: "Plataforma lista para producción con 95+ en Lighthouse y 40% más de conversión en tests A/B",
      resultEn: "Production-ready platform with 95+ Lighthouse score and 40% more conversion in A/B tests",
      screenshots: [
        "/images/projects/webs/ecommerce-platform/screenshot-1.webp",
        "/images/projects/webs/ecommerce-platform/screenshot-2.webp",
        "/images/projects/webs/ecommerce-platform/screenshot-3.webp",
      ],
    },
  },
  {
    id: "task-management-api",
    type: "api",
    name: "API de Gestión de Tareas",
    nameEn: "Task Management API",
    description: "API RESTful para gestión de proyectos y tareas con autenticación JWT",
    descriptionEn: "RESTful API for project and task management with JWT authentication",
    stack: ["Node.js", "Express", "PostgreSQL", "JWT"],
    preview: "",
    github: "https://github.com",
    featured: true,
    showInHome: true, // Mostrar en página principal
    details: {
      problem: "Necesidad de una API escalable para gestionar proyectos y tareas en equipos distribuidos.",
      problemEn: "Need for a scalable API to manage projects and tasks in distributed teams.",
      uxDecisions: [
        "Versionado de API para compatibilidad retroactiva",
        "Rate limiting para prevenir abuso",
        "Paginación consistente en todos los endpoints",
        "Errores descriptivos con códigos HTTP apropiados",
      ],
      uxDecisionsEn: [
        "API versioning for backward compatibility",
        "Rate limiting to prevent abuse",
        "Consistent pagination across all endpoints",
        "Descriptive errors with appropriate HTTP codes",
      ],
      uiDecisions: [
        "Documentación interactiva con Swagger",
        "Ejemplos de respuesta para cada endpoint",
        "SDK generado automáticamente para TypeScript",
      ],
      uiDecisionsEn: [
        "Interactive documentation with Swagger",
        "Response examples for each endpoint",
        "Auto-generated SDK for TypeScript",
      ],
      result: "API con 99.9% uptime manejando 10k+ requests/min",
      resultEn: "API with 99.9% uptime handling 10k+ requests/min",
      screenshots: ["/images/projects/apis/task-management-api/screenshot-1.webp"],
      apiExample: {
        endpoint: "POST /api/v1/tasks",
        input: `{
          "title": "Implementar autenticación",
          "description": "Agregar JWT auth",
          "priority": "high",
          "assignee_id": "user_123"
        }`,
        output: `{
          "id": "task_456",
          "title": "Implementar autenticación",
          "status": "todo",
          "created_at": "2024-01-15T10:30:00Z"
        }`,
        docsUrl: "https://docs.api.example.com",
      },
    },
  },
  {
    id: "discord-moderation-bot",
    type: "bot",
    name: "Bot de Moderación Discord",
    nameEn: "Discord Moderation Bot",
    description: "Bot avanzado para moderación automática y gestión de comunidades",
    descriptionEn: "Advanced bot for automatic moderation and community management",
    stack: ["Discord.js", "TypeScript", "MongoDB"],
    preview: "",
    github: "https://github.com",
    showInHome: true, // Mostrar en página principal
    details: {
      problem: "Las comunidades grandes necesitan herramientas automatizadas para mantener el orden.",
      problemEn: "Large communities need automated tools to maintain order.",
      uxDecisions: [
        "Sistema de permisos granular por rol",
        "Logs detallados de todas las acciones",
        "Configuración mediante comandos slash",
      ],
      uxDecisionsEn: [
        "Granular permission system per role",
        "Detailed logs of all actions",
        "Configuration via slash commands",
      ],
      uiDecisions: ["Dashboard web para visualizar estadísticas", "Notificaciones en tiempo real"],
      uiDecisionsEn: ["Web dashboard to view statistics", "Real-time notifications"],
      result: "Bot activo en 500+ servidores moderando 50k+ usuarios",
      resultEn: "Bot active in 500+ servers moderating 50k+ users",
      screenshots: ["/images/projects/bots/discord-moderation-bot/screenshot-1.webp"],
      botArchitecture: {
        modules: ["Auto-moderation", "Logging", "Welcome system", "Role management", "Custom commands"],
        useCases: [
          "Detección automática de spam y contenido inapropiado",
          "Sistema de warnings y bans temporales",
          "Verificación de nuevos miembros",
          "Estadísticas de actividad del servidor",
        ],
        tags: ["Moderación", "Administración", "Automatización", "Registros"],
      },
    },
  },
  {
    id: "vscode-theme",
    type: "tool",
    name: "Tema Minimalista VSCode",
    nameEn: "Minimalist VSCode Theme",
    description: "Tema oscuro para Visual Studio Code enfocado en productividad",
    descriptionEn: "Dark theme for Visual Studio Code focused on productivity",
    stack: ["JSON", "VSCode Extensions"],
    preview: "",
    live: "https://marketplace.visualstudio.com",
    featured: true,
    showInHome: true, // Mostrar en página principal
    details: {
      problem: "Los desarrolladores pasan horas frente al código y necesitan un tema que reduzca fatiga visual.",
      problemEn: "Developers spend hours in front of code and need a theme that reduces eye strain.",
      uxDecisions: [
        "Contraste optimizado para lectura prolongada",
        "Colores semánticos por tipo de token",
        "Soporte para todos los lenguajes populares",
      ],
      uxDecisionsEn: [
        "Optimized contrast for extended reading",
        "Semantic colors by token type",
        "Support for all popular languages",
      ],
      uiDecisions: [
        "Paleta de 8 colores cuidadosamente seleccionados",
        "UI consistente con la sintaxis",
        "Variantes para diferentes preferencias de contraste",
      ],
      uiDecisionsEn: [
        "Carefully selected 8-color palette",
        "UI consistent with syntax",
        "Variants for different contrast preferences",
      ],
      result: "10k+ instalaciones con 4.8★ de rating",
      resultEn: "10k+ installs with 4.8★ rating",
      screenshots: [
        "/images/projects/tools/vscode-theme/screenshot-1.webp",
        "/images/projects/tools/vscode-theme/screenshot-2.webp",
      ],
      toolInfo: {
        purpose: "Tema oscuro minimalista diseñado para reducir fatiga visual durante largas sesiones de código",
        purposeEn: "Minimalist dark theme designed to reduce eye strain during long coding sessions",
        marketplaceUrl: "https://marketplace.visualstudio.com/items?itemName=example.minimalist-theme",
      },
    },
  },
  {
    id: "portfolio-generator",
    type: "web",
    name: "Generador de Portfolios",
    nameEn: "Portfolio Generator",
    description: "Herramienta para crear portfolios profesionales de forma rápida",
    descriptionEn: "Tool to create professional portfolios quickly",
    stack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    preview: "",
    github: "https://github.com",
    live: "https://demo.com",
    showInHome: true, // Mostrar en página principal
    details: {
      problem: "Desarrolladores sin conocimientos de diseño necesitan portfolios profesionales.",
      problemEn: "Developers without design skills need professional portfolios.",
      uxDecisions: [
        "Wizard de 3 pasos para configuración",
        "Templates pre-diseñados personalizables",
        "Preview en tiempo real",
        "Exportación a código listo para desplegar",
      ],
      uxDecisionsEn: [
        "3-step wizard for configuration",
        "Customizable pre-designed templates",
        "Real-time preview",
        "Export to ready-to-deploy code",
      ],
      uiDecisions: ["Editor visual drag & drop", "Paletas de colores predefinidas", "Responsive design automático"],
      uiDecisionsEn: ["Visual drag & drop editor", "Predefined color palettes", "Automatic responsive design"],
      result: "1000+ portfolios generados en los primeros 3 meses",
      resultEn: "1000+ portfolios generated in the first 3 months",
      screenshots: [
        "/images/projects/webs/portfolio-generator/screenshot-1.webp",
        "/images/projects/webs/portfolio-generator/screenshot-2.webp",
      ],
    },
  },
  {
    id: "weather-api",
    type: "api",
    name: "API del Clima",
    nameEn: "Weather API",
    description: "API de pronóstico del tiempo con datos en tiempo real",
    descriptionEn: "Weather forecast API with real-time data",
    stack: ["Python", "FastAPI", "Redis", "Docker"],
    preview: "",
    github: "https://github.com",
    showInHome: true, // Mostrar en página principal
    details: {
      problem: "Necesidad de una API de clima confiable con caché eficiente para reducir costos.",
      problemEn: "Need for a reliable weather API with efficient caching to reduce costs.",
      uxDecisions: [
        "Caché inteligente con Redis (TTL 15 minutos)",
        "Múltiples unidades de medida (metric/imperial)",
        "Geolocalización automática",
      ],
      uxDecisionsEn: [
        "Smart caching with Redis (TTL 15 minutes)",
        "Multiple measurement units (metric/imperial)",
        "Automatic geolocation",
      ],
      uiDecisions: ["Documentación OpenAPI 3.0", "Ejemplos interactivos", "SDKs para JavaScript y Python"],
      uiDecisionsEn: ["OpenAPI 3.0 documentation", "Interactive examples", "SDKs for JavaScript and Python"],
      result: "API procesando 1M+ requests/mes con latencia < 100ms",
      resultEn: "API processing 1M+ requests/month with latency < 100ms",
      screenshots: ["/images/projects/apis/weather-api/screenshot-1.webp"],
      apiExample: {
        endpoint: "GET /api/v1/weather/:city",
        input: "GET /api/v1/weather/Madrid?units=metric",
        output: `{
          "location": "Madrid, ES",
          "temperature": 24,
          "feels_like": 23,
          "humidity": 45,
          "condition": "Sunny",
          "forecast": [...]
        }`,
        docsUrl: "https://docs.weather-api.example.com",
      },
    },
  },




]
