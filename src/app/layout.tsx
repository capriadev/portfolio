import type React from "react"
import { LocaleProvider } from "@/lib/locale-context"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="font-sans antialiased">
      <LocaleProvider>{children}</LocaleProvider>
    </div>
  )
}
