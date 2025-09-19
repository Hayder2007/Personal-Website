"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { memo } from "react"

const projects = [
  {
    title: "ChainFlow",
    description:
      "One platform to track your personal growth and manage decentralized workstreams — all verified onchain.",
    image: "/chainflow-landing.png",
    demo: "https://www.chainflow.store/",
    status: "live",
  },
  {
    title: "Proof of Discipline",
    description: "Web3 staking project that gamifies discipline and rewards users for consistency.",
    image: "/proof-of-discipline-landing.png",
    demo: "https://podiscipline.vercel.app/",
    status: "live",
  },
  {
    title: "Token Scanner Bot",
    description: "Realtime alerts for new tokens on Base & Ethereum via Telegram.",
    image: "/telegram-crypto-bot.png",
    demo: "",
    status: "maintenance",
  },
  {
    title: "Psycho AI Trading Bot",
    description: "Humanized Ai Crypto trading bot",
    image: "/psycho-ai-trading-bot.png",
    demo: "",
    status: "coming-soon",
  },
]

const ProjectCard = memo(({ project, index }: { project: (typeof projects)[0]; index: number }) => (
  <Card
    key={index}
    className="glass-panel group transition-glow hover:glow-blue border-gray-700 overflow-hidden p-0 w-full"
  >
    <div
      className={`relative ${project.demo ? "cursor-pointer" : "cursor-default"}`}
      onClick={() => project.demo && window.open(project.demo, "_blank")}
    >
      <div className="relative overflow-hidden w-full">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={800}
          height={600}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          loading={index < 2 ? "eager" : "lazy"}
          priority={index < 2}
        />
        {/* Overlay text for non-live projects */}
        {project.status === "maintenance" && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white/70 text-xl font-mono font-semibold">Maintenance</span>
          </div>
        )}
        {project.status === "coming-soon" && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white/70 text-xl font-mono font-semibold">Coming Soon</span>
          </div>
        )}
        {project.demo && (
          <div className="absolute inset-0 bg-[#00aaff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <ExternalLink className="h-8 w-8 text-white" />
          </div>
        )}
      </div>
    </div>

    <CardHeader className="pb-4 p-6">
      <CardTitle className="text-xl text-white font-mono">{project.title}</CardTitle>
      <CardDescription className="text-gray-300 text-base leading-relaxed">{project.description}</CardDescription>
    </CardHeader>
  </Card>
))

ProjectCard.displayName = "ProjectCard"

export const Projects = memo(() => {
  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="content-max-width">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white font-mono">Projects</h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
})

Projects.displayName = "Projects"
