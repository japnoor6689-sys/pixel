"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, Instagram, ArrowDown, Sparkles } from "lucide-react"

const WORDS = ["Stand Out.", "Convert.", "Dominate.", "Inspire."]

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0)
  const [visible, setVisible] = useState(true)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  // Word cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setWordIdx((i) => (i + 1) % WORDS.length)
        setVisible(true)
      }, 400)
    }, 2600)
    return () => clearInterval(interval)
  }, [])

  // Parallax spotlight
  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      })
    }
    el.addEventListener("mousemove", handler)
    return () => el.removeEventListener("mousemove", handler)
  }, [])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Mouse spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, oklch(0.65 0.28 330 / 0.07), transparent 60%)`,
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-[140px] pointer-events-none animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-accent/15 blur-[140px] pointer-events-none"
        style={{ animation: "float 11s ease-in-out infinite 2s" }} />
      <div className="absolute top-2/3 left-1/3 w-64 h-64 rounded-full blur-[100px] pointer-events-none"
        style={{ background: "oklch(0.6 0.22 290 / 0.1)", animation: "float 14s ease-in-out infinite 4s" }} />

      {/* Spinning ring */}
      <div className="absolute top-20 right-20 w-32 h-32 opacity-20 pointer-events-none hidden lg:block">
        <div
          className="w-full h-full rounded-full border-2 border-dashed border-primary animate-spin-slow"
          style={{ borderStyle: "dashed" }}
        />
      </div>
      <div className="absolute bottom-32 left-16 w-20 h-20 opacity-15 pointer-events-none hidden lg:block">
        <div className="w-full h-full rounded-full border border-dashed border-accent animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "8s" }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-7">

        {/* Badge */}
        <div className="animate-fade-up delay-100">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/40 bg-primary/8 text-primary text-xs font-bold uppercase tracking-[0.2em]">
            <Sparkles size={12} className="animate-pulse" />
            Creative Design Studio
            <Sparkles size={12} className="animate-pulse delay-300" />
          </span>
        </div>

        {/* Heading */}
        <div className="animate-fade-up delay-200">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight text-balance">
            <span className="block text-foreground">Brands That</span>
            <span
              className="block shimmer-text mt-1 min-h-[1.1em] transition-all duration-400"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(12px)", transition: "opacity 0.35s ease, transform 0.35s ease" }}
            >
              {WORDS[wordIdx]}
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-up delay-300">
          Logos&nbsp;·&nbsp;Ads&nbsp;·&nbsp;Social Media&nbsp;·&nbsp;Digital Marketing
          <br />
          <span className="text-foreground font-semibold">From pixel to perfect — we build it all.</span>
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-1 animate-fade-up delay-400">
          <a
            href="tel:9915728899"
            className="group relative flex items-center gap-2.5 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-base transition-all duration-300 hover:scale-105 overflow-hidden"
            style={{ boxShadow: "0 0 40px oklch(0.65 0.28 330 / 0.45)" }}
          >
            {/* Button shimmer sweep */}
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.15), transparent)", animation: "shimmer 1.5s linear infinite" }} />
            <Phone size={18} />
            Call: 9915728899
          </a>
          <a
            href="https://www.instagram.com/pixelfor_designs"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-8 py-4 rounded-full border border-border text-foreground font-semibold text-base hover:border-primary hover:text-primary transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_oklch(0.65_0.28_330/0.2)]"
          >
            <Instagram size={18} className="group-hover:scale-110 transition-transform" />
            @pixelfor_designs
          </a>
        </div>

        {/* Stats row */}
        <div className="flex items-center gap-6 sm:gap-12 mt-4 pt-6 border-t border-border/40 animate-fade-up delay-500">
          {[
            { val: "50+", label: "Projects Done" },
            { val: "100%", label: "Satisfaction" },
            { val: "2K+", label: "Monthly Reach" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center animate-number-pop" style={{ animationDelay: `${0.6 + i * 0.12}s` }}>
              <p className="text-2xl sm:text-3xl font-black shimmer-text">{stat.val}</p>
              <p className="text-xs text-muted-foreground mt-0.5 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pulse ring on scroll button */}
      <a
        href="#services"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group animate-fade-in delay-700"
        aria-label="Scroll to services"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">Explore</span>
        <div className="relative w-8 h-8 flex items-center justify-center">
          <span className="absolute inset-0 rounded-full border border-primary/40 animate-pulse-ring" />
          <ArrowDown size={16} className="animate-bounce relative z-10" />
        </div>
      </a>
    </section>
  )
}
