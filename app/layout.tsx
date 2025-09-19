import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Mono, Inter } from "next/font/google"
import "./globals.css"

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Hayder Sadik",
  description: "Personal portfolio of Hayder Sadik - A versatile professional who bridges technology and business",
  generator: "v0.app",
  icons: {
    icon: "/hayder-profile.png",
    shortcut: "/hayder-profile.png",
    apple: "/hayder-profile.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${inter.variable}`}>
      <body className="antialiased bg-black text-white">{children}</body>
    </html>
  )
}
