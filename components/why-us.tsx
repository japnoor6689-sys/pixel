"use client"

import { useEffect, useRef } from "react"

const reasons = [
  {
    num: "01",
    title: "Pixel Perfect",
    desc: "Every design is crafted with precision down to the last pixel.",
    icon: "✦",
  },
  {
    num: "02",
    title: "Fast Delivery",
    desc: "Quick turnaround without compromising on quality or creativity.",
    icon: "⚡",
  },
  {
    num: "03",
    title: "Unlimited Revisions",
    desc: "We iterate until you are 100% satisfied with the result.",
    icon: "♾",
  },
  {
    num: "04",
    title: "Brand-Focused",
    desc: "Designs built around your brand story and business goals.",
    icon: "◈",
  },
]

const marqueeItems = [
  "LOGOS", "ADS", "SOCIAL MEDIA", "DIGITAL MARKETING", "BRANDING", "UI DESIGN", "CREATIVES",
  "LOGOS", "ADS", "SOCIAL MEDIA", "DIGITAL MARKETING", "BRANDING", "UI DESIGN", "CREATIVES",
]

function ReasonCard({ r, index }: { r: typeof reasons[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    el.style.opacity = "0"
    el.style.transform = "translateY(50px)"
    el.style.transition = `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = "1"
        el.style.transform = "translateY(0)"
        observer.disconnect()
      }
    }, { threshold: 0.1 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={cardRef}
      className="group relative p-7 rounded-2xl border border-border bg-card/50 overflow-hidden cursor-default"
      style={{ transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s" }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.borderColor = "oklch(0.65 0.28 330 / 0.5)"
        el.style.transform = "translateY(-6px)"
        el.style.boxShadow = "0 20px 50px oklch(0.65 0.28 330 / 0.12)"
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.borderColor = ""
        el.style.transform = ""
        el.style.boxShadow = ""
      }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(circle at 20% 20%, oklch(0.65 0.28 330 / 0.06), transparent 60%)" }} />

      {/* Number */}
      <div className="text-6xl font-black leading-none mb-4 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1"
        style={{
          background: "linear-gradient(135deg, oklch(0.65 0.28 330 / 0.3), oklch(0.75 0.18 195 / 0.1))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {r.num}
      </div>

      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
        {r.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: "linear-gradient(90deg, oklch(0.65 0.28 330), oklch(0.75 0.18 195))" }} />
    </div>
  )
}

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden">
      {/* Top marquee */}
      <div className="overflow-hidden border-y border-primary/20 py-4 bg-primary/3">
        <div className="animate-marquee flex gap-10 whitespace-nowrap">
          {marqueeItems.map((item, i) => (
            <span key={i} className="flex items-center gap-10 text-xs font-black tracking-[0.3em] text-muted-foreground uppercase">
              {item}
              <span className="text-primary text-base" aria-hidden>✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="py-28 px-6 relative">
        {/* Bg orb */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary mb-4">
              <span className="w-6 h-px bg-primary" />
              Why Choose Us
              <span className="w-6 h-px bg-primary" />
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground text-balance leading-tight">
              The Pixelfor_{" "}
              <span className="shimmer-text">Difference</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reasons.map((r, i) => (
              <ReasonCard key={r.title} r={r} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom marquee (reverse) */}
      <div className="overflow-hidden border-y border-accent/20 py-4 bg-accent/3">
        <div className="flex gap-10 whitespace-nowrap" style={{ animation: "marquee 16s linear infinite reverse" }}>
          {marqueeItems.map((item, i) => (
            <span key={i} className="flex items-center gap-10 text-xs font-black tracking-[0.3em] text-muted-foreground uppercase">
              {item}
              <span className="text-accent text-base" aria-hidden>◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
