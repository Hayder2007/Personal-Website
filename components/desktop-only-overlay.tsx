"use client"

import { useEffect, useState } from "react"
import { Monitor } from "lucide-react"

export function DesktopOnlyOverlay() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      // Check if device is mobile/tablet based on screen width and user agent
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      const isSmallScreen = window.innerWidth < 1024
      setIsMobile(isMobileDevice || isSmallScreen)
    }

    checkDevice()
    window.addEventListener("resize", checkDevice)

    return () => window.removeEventListener("resize", checkDevice)
  }, [])

  if (!isMobile) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl">
      <div className="text-center px-6 max-w-md">
        <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-400/50 animate-pulse-glow">
          <Monitor className="w-12 h-12 text-cyan-400" />
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
          Desktop Only
        </h1>

        <p className="text-lg text-gray-300 mb-6">This website is optimized for desktop viewing only.</p>

        <div className="inline-block px-6 py-3 rounded-lg bg-cyan-500/10 border border-cyan-400/30">
          <p className="text-cyan-400 font-medium">Please switch to a desktop device to access the full experience</p>
        </div>

        <div className="mt-8 text-sm text-gray-500">Minimum screen width: 1024px</div>
      </div>
    </div>
  )
}
