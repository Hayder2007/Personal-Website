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
      <body className="antialiased bg-black text-white">
        <div id="desktop-only-message" className="desktop-only-overlay">
          <div className="desktop-only-content">
            <svg
              className="desktop-only-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <h1 className="desktop-only-title">Desktop Only</h1>
            <p className="desktop-only-text">
              This website is optimized for desktop viewing only.
              <br />
              Please switch to a desktop device to access the full experience.
            </p>
          </div>
        </div>
        <div id="main-content">{children}</div>
      </body>
    </html>
  )
}
