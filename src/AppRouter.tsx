import { useState, useEffect } from "react"
import HomePage from "./app/page"
import AllProjectsPage from "./app/projects/page"
import ProjectPage from "./app/projects/[id]/page"
import EducationPage from "./app/education/page"

export function AppRouter() {
  const [route, setRoute] = useState<string>(() => {
    return window.location.pathname
  })

  useEffect(() => {
    const handlePopState = () => {
      setRoute(window.location.pathname)
    }

    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [])

  // Scroll al tope cuando cambia la ruta
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [route])

  // Parse route
  if (route === "/" || route === "") {
    return <HomePage />
  }

  if (route === "/projects") {
    return <AllProjectsPage />
  }

  if (route.startsWith("/projects/")) {
    const id = route.split("/")[2]
    if (id) {
      return <ProjectPage params={{ id }} />
    }
    return <AllProjectsPage />
  }

  if (route === "/education") {
    return <EducationPage />
  }

  // 404
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
        <p className="text-muted-foreground mb-6">La ruta "{route}" no existe</p>
        <a href="/" className="text-primary hover:underline">
          Volver al inicio
        </a>
      </div>
    </div>
  )
}
