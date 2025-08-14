"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, Github } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white font-mono">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="glass-panel rounded-2xl p-6 transition-glow hover:glow-blue">
              <h3 className="text-xl font-semibold mb-4 text-white">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed">
                Whether you're looking for a versatile developer, need help with a project, or want to discuss market
                opportunities, I'm always open to meaningful conversations.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-6 space-y-4 transition-glow hover:glow-blue">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#00aaff]" />
                <span className="text-gray-300">haydersadik2007@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Send className="h-5 w-5 text-[#00aaff]" />
                <span className="text-gray-300">@musl_im</span>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
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
                onClick={() => window.open("https://t.me/musl_im", "_blank")}
              >
                <Send className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-[#00aaff] text-[#00aaff] hover:bg-[#00aaff] hover:text-black transition-glow hover:glow-blue bg-transparent"
                onClick={() => window.open("https://x.com/hayder_sadik", "_blank")}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Button>
            </div>
          </div>

          <Card className="glass-panel border-gray-700 transition-glow hover:glow-blue">
            <CardHeader>
              <CardTitle className="text-white">Send a Message</CardTitle>
              <CardDescription className="text-gray-300">
                Drop me a line and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-black/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#00aaff] focus:ring-[#00aaff]"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-black/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#00aaff] focus:ring-[#00aaff]"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-black/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#00aaff] focus:ring-[#00aaff]"
                />
                <Button
                  type="submit"
                  className="w-full bg-[#00aaff] hover:bg-[#0088cc] text-black font-semibold transition-glow hover:glow-blue"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
