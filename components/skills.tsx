import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, TrendingUp, Users, Target } from "lucide-react"

const skillCategories = [
  {
    icon: Code,
    title: "Technology & Development",
    skills: ["Front-End Development", "JavaScript / TypeScript", "API Integration", "Web3 Integration"],
  },
  {
    icon: TrendingUp,
    title: "Trading & Market Analysis",
    skills: ["Technical Analysis", "Fundamental Analysis", "Strategy Development", "Portfolio Design"],
  },
  {
    icon: Users,
    title: "Project & Program Management",
    skills: ["Team Coordination", "Resource Planning", "Program Scaling", "Project Delivery"],
  },
  {
    icon: Target,
    title: "Business & Growth",
    skills: ["Strategic Partnerships", "Process Optimization", "Community Building", "Brand Advocacy"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white font-mono">
          Skills & Contributions
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-panel transition-glow hover:glow-blue border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-white">
                  <category.icon className="h-6 w-6 text-[#00aaff]" />
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-2 bg-[#00aaff]/10 text-gray-300 rounded-md text-sm text-center border border-[#00aaff]/20 transition-glow hover:glow-blue hover:text-[#00aaff]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <div className="glass-panel rounded-2xl p-8 transition-glow hover:glow-blue">
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              I'm a versatile operator who bridges gaps and delivers results. Whether it's building tools that solve
              real problems, managing complex programs, or contributing to projects that need both technical depth and
              business acumen, I focus on what matters most: creating value and driving outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
