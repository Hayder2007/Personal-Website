import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { CryptoExperience } from "@/components/crypto-experience"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { FloatingParticles } from "@/components/floating-particles"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <FloatingParticles />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <CryptoExperience />
      <Projects />
      <Contact />
    </main>
  )
}
