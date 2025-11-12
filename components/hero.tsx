"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, SendIcon } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative z-10 pt-24">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center space-y-12">
        <div className="glass-panel rounded-2xl p-8 max-w-4xl w-full transition-glow hover:glow-blue">
          <div className="flex items-center space-x-8 mb-8">
            {/* Profile Picture */}
            <div className="relative group flex-shrink-0">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#00aaff] transition-glow hover:glow-blue-strong animate-pulse-glow">
                <Image
                  src="/hayder-profile.png"
                  alt="Hayder Sadik"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-2 text-left flex-1">
              <h1 className="text-4xl md:text-6xl font-bold font-mono tracking-tight text-white">Hayder Sadik</h1>
              <p className="text-lg font-sans italic text-gray-300">
                "Building the future of technology and digital markets."
              </p>
            </div>
          </div>

          <div className="space-y-6 text-left">
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl text-[#00aaff] font-semibold">
                Innovator & Executor
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                A Versatile professional bridging technology and business, delivering impactful solutions &amp; turning complex ideas into reality.
              </p>
            </div>

            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="border-[#00aaff] text-[#00aaff] hover:bg-[#00aaff] hover:text-black transition-glow hover:glow-blue bg-transparent"
                onClick={() => window.open("https://github.com/Hayder2007", "_blank")}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-[#00aaff] text-[#00aaff] hover:bg-[#00aaff] hover:text-black transition-glow hover:glow-blue bg-transparent"
                onClick={() => window.open("https://t.me/hayderx0", "_blank")}
              >
                <SendIcon className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-[#00aaff] text-[#00aaff] hover:bg-[#00aaff] hover:text-black transition-glow hover:glow-blue bg-transparent"
                onClick={() => window.open("https://x.com/0xHayder", "_blank")}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        <Button
          onClick={scrollToAbout}
          variant="ghost"
          size="icon"
          className="text-[#00aaff] hover:text-white animate-bounce transition-glow hover:glow-blue"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}
