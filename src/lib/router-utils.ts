/**
 * Obtiene los query params de la URL actual
 */
export function getQueryParams(): URLSearchParams {
  return new URLSearchParams(window.location.search)
}

/**
 * Obtiene un parámetro específico de la URL
 */
export function getQueryParam(key: string): string | null {
  return getQueryParams().get(key)
}

/**
 * Navega a una ruta usando History API
 */
export function navigate(path: string, params?: Record<string, string>) {
  let finalPath = path
  if (params) {
    const searchParams = new URLSearchParams(params)
    finalPath = `${path}?${searchParams.toString()}`
  }
  window.history.pushState({}, "", finalPath)
  window.dispatchEvent(new PopStateEvent("popstate"))
}

/**
 * Navega a la página principal
 */
export function navigateHome() {
  if (window.location.pathname === "/") {
    // Si ya estás en home, scrollea al hero
    const heroElement = document.getElementById("hero")
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: "smooth" })
    }
  } else {
    navigate("/")
  }
}

/**
 * Navega a la página de proyectos
 */
export function navigateProjects(from?: "home") {
  navigate("/projects", from ? { from } : undefined)
}

/**
 * Navega a la página de educación
 */
export function navigateEducation(from?: "home") {
  navigate("/education", from ? { from } : undefined)
}

/**
 * Navega a un proyecto específico
 */
export function navigateProjectDetail(id: string, from?: "home" | "projects-page") {
  navigate(`/projects/${id}`, from ? { from } : undefined)
}

/**
 * Navega a una sección en la página principal (usando scroll)
 */
export function scrollToSection(sectionId: string) {
  if (window.location.pathname !== "/") {
    navigate("/")
  }
  setTimeout(() => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, 100)
}

/**
 * Vuelve desde una página de detalle/listado
 * Si vino desde home, vuelve a home con scroll
 * Si vino desde otro lado, vuelve a ese lugar
 */
export function navigateBack(defaultPath: string, fromParam?: string) {
  if (fromParam === "home") {
    // Vuelve a la página principal scrolleada a la sección correspondiente
    scrollToSection(defaultPath)
  } else if (defaultPath === "projects") {
    navigateProjects()
  } else if (defaultPath === "education") {
    navigateEducation()
  } else {
    navigate("/")
  }
}
