import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, BarChart3, Shield, Coins } from "lucide-react"

const highlights = [
  {
    icon: TrendingUp,
    title: "Profitable Trading",
    description: "1.5+ years of consistent profitability through disciplined strategy execution and risk management.",
  },
  {
    icon: BarChart3,
    title: "Technical & Fundamental Analysis",
    description:
      "Deep market research combining on-chain metrics, technical indicators, and fundamental project analysis.",
  },
  {
    icon: Shield,
    title: "Blockchain & Web3 Development",
    description:
      "Hands-on experience integrating blockchain solutions, smart contracts, and decentralized applications into practical use cases.",
  },
  {
    icon: Coins,
    title: "DeFi Strategies",
    description:
      "Extensive understanding of decentralized finance protocols, liquidity provision, and yield optimization strategies.",
  },
]

export function CryptoExperience() {
  return (
    <section id="crypto" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white font-mono">Crypto Experience</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="glass-panel border-l-4 border-l-[#00aaff] transition-glow hover:glow-blue border-gray-700"
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-white">
                  <item.icon className="h-6 w-6 text-[#00aaff]" />
                  <span>{item.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-gray-300">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <div className="glass-panel rounded-2xl p-8 transition-glow hover:glow-blue">
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              My crypto journey is built on analytical precision and adaptable execution. I combine technical expertise,
              blockchain development skills, and market insight to navigate evolving ecosystems, identify opportunities
              early, and deliver measurable results across trading and decentralized solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
