import React from "react"
import { createRoot } from "react-dom/client"
import RootLayout from "./app/layout"
import { AppRouter } from "./AppRouter"
import "./app/globals.css"

const container = document.getElementById("root")!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <RootLayout>
      <AppRouter />
    </RootLayout>
  </React.StrictMode>
)
