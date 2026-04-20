"use client"

import { useState, useRef, useEffect } from "react"
import { Phone, Instagram, MessageCircle, Send, CheckCircle } from "lucide-react"

const contactItems = [
  {
    icon: Phone,
    label: "Call / WhatsApp",
    value: "9915728899",
    href: "tel:9915728899",
    color: "oklch(0.65 0.28 330)",
    glow: "oklch(0.65 0.28 330 / 0.2)",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@pixelfor_designs",
    href: "https://www.instagram.com/pixelfor_designs",
    color: "oklch(0.65 0.28 330)",
    glow: "oklch(0.65 0.28 330 / 0.2)",
  },
  {
    icon: MessageCircle,
    label: "DM Direct",
    value: "@japnoor1009",
    href: "https://www.instagram.com/japnoor1009",
    color: "oklch(0.75 0.18 195)",
    glow: "oklch(0.75 0.18 195 / 0.2)",
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3500)
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <section ref={sectionRef} id="contact" className="py-28 px-6 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 rounded-full bg-primary/8 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 -translate-y-1/2 rounded-full bg-accent/8 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary mb-4">
            <span className="w-6 h-px bg-primary" />
            Get In Touch
            <span className="w-6 h-px bg-primary" />
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground text-balance leading-tight">
            Ready to{" "}
            <span className="shimmer-text">Build Your Brand?</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-md mx-auto leading-relaxed">
            Drop us a message or reach out directly. We respond fast and get straight to work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold text-foreground">Reach Us Directly</h3>

            {contactItems.map((item, i) => {
              const Icon = item.icon
              return (
                <a
                  key={item.value}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-card/60 overflow-hidden relative transition-all duration-300"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.borderColor = item.color.replace(")", " / 0.5)").replace("oklch(", "oklch(")
                    el.style.transform = "translateX(6px)"
                    el.style.boxShadow = `0 0 30px ${item.glow}`
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.borderColor = ""
                    el.style.transform = ""
                    el.style.boxShadow = ""
                  }}
                >
                  {/* Bg sweep on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{ background: `linear-gradient(90deg, ${item.glow}, transparent)` }} />

                  <div
                    className="relative w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      background: `oklch(0.14 0 0)`,
                      border: `1px solid ${item.color.replace(")", " / 0.3)").replace("oklch(", "oklch(")}`,
                    }}
                  >
                    <Icon size={20} style={{ color: item.color }} />
                  </div>
                  <div className="relative z-10">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">{item.label}</p>
                    <p className="text-lg font-bold text-foreground mt-0.5 group-hover:text-primary transition-colors duration-200">{item.value}</p>
                  </div>
                  <div className="relative z-10 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-primary">
                    →
                  </div>
                </a>
              )
            })}

            {/* Banner */}
            <div
              className="relative p-6 rounded-2xl text-center overflow-hidden"
              style={{
                background: "linear-gradient(135deg, oklch(0.65 0.28 330 / 0.1), oklch(0.75 0.18 195 / 0.08))",
                border: "1px solid oklch(0.65 0.28 330 / 0.2)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, oklch(0.65 0.28 330 / 0.6), transparent)" }}
              />
              <p className="text-foreground font-black text-xl">DM Now for a Free Quote</p>
              <p className="text-muted-foreground text-sm mt-1">Fast replies · Custom packages · Real results</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {[
              { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
              { name: "email", label: "Email Address", type: "email", placeholder: "you@example.com" },
            ].map((field) => (
              <div key={field.name} className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-foreground">{field.label}</label>
                <div className="relative">
                  <input
                    type={field.type}
                    required
                    placeholder={field.placeholder}
                    value={form[field.name as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                    onFocus={() => setFocused(field.name)}
                    onBlur={() => setFocused(null)}
                    className="w-full px-4 py-3.5 rounded-xl bg-card border text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300"
                    style={{
                      borderColor: focused === field.name ? "oklch(0.65 0.28 330 / 0.6)" : "oklch(0.25 0 0)",
                      boxShadow: focused === field.name ? "0 0 20px oklch(0.65 0.28 330 / 0.12)" : "none",
                    }}
                  />
                  {focused === field.name && (
                    <div className="absolute bottom-0 left-4 right-4 h-px"
                      style={{ background: "linear-gradient(90deg, oklch(0.65 0.28 330), oklch(0.75 0.18 195))", animation: "line-grow 0.3s ease" }} />
                  )}
                </div>
              </div>
            ))}

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-foreground">Tell us about your project</label>
              <div className="relative">
                <textarea
                  required
                  rows={5}
                  placeholder="I need a logo and social media package for my new brand..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className="w-full px-4 py-3.5 rounded-xl bg-card border text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300 resize-none"
                  style={{
                    borderColor: focused === "message" ? "oklch(0.65 0.28 330 / 0.6)" : "oklch(0.25 0 0)",
                    boxShadow: focused === "message" ? "0 0 20px oklch(0.65 0.28 330 / 0.12)" : "none",
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              className="relative flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: sent
                  ? "linear-gradient(135deg, oklch(0.65 0.2 150), oklch(0.7 0.18 160))"
                  : "linear-gradient(135deg, oklch(0.65 0.28 330), oklch(0.6 0.22 290))",
                boxShadow: sent
                  ? "0 0 30px oklch(0.65 0.2 150 / 0.35)"
                  : "0 0 30px oklch(0.65 0.28 330 / 0.35)",
              }}
            >
              {/* Shimmer sweep */}
              <span className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(90deg, transparent 0%, oklch(1 0 0 / 0.1) 50%, transparent 100%)", animation: "shimmer 2s linear infinite" }} />

              {sent ? (
                <>
                  <CheckCircle size={18} />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send size={17} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
