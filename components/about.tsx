export function About() {
  return (
    <section id="about" className="section-padding relative z-10">
      <div className="content-max-width">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white font-mono">About Me</h2>
        <div className="glass-panel rounded-2xl p-8 transition-glow hover:glow-blue text-max-width">
          <div className="space-y-6 text-lg leading-relaxed text-gray-300">
            <p>
              I’m a crypto trader and Web3 builder. I dive deep into market fundamentals, technicals, and macro trends and share my insights on my{" "}
              <a href="https://x.com/0xHayder"><span className="text-[#00aaff] font-semibold">X(Twitter)</span></a> page. Beyond trading, I build projects and contribute to the Web3 ecosystem. Always open for collaboration and meaningful discussion.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
