"use client"

import { useEffect, useRef } from "react"
import { Palette, Megaphone, Share2, TrendingUp, Globe, Layers } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Logo Design",
    desc: "Unique, memorable logos that capture your brand identity and leave a lasting impression.",
    gradient: "from-[oklch(0.65_0.28_330)] to-[oklch(0.6_0.22_290)]",
    glow: "oklch(0.65 0.28 330 / 0.25)",
    tag: "Identity",
  },
  {
    icon: Megaphone,
    title: "Ad Creatives",
    desc: "Eye-catching ad banners and creatives designed to convert and drive real results.",
    gradient: "from-[oklch(0.75_0.18_195)] to-[oklch(0.7_0.22_220)]",
    glow: "oklch(0.75 0.18 195 / 0.25)",
    tag: "Conversion",
  },
  {
    icon: Share2,
    title: "Social Media",
    desc: "Consistent, on-brand social media content that grows your audience and engagement.",
    gradient: "from-[oklch(0.65_0.28_330)] to-[oklch(0.75_0.18_195)]",
    glow: "oklch(0.65 0.28 330 / 0.2)",
    tag: "Growth",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    desc: "Data-driven campaigns that increase visibility, traffic, and conversions for your business.",
    gradient: "from-[oklch(0.75_0.18_195)] to-[oklch(0.65_0.28_330)]",
    glow: "oklch(0.75 0.18 195 / 0.2)",
    tag: "Results",
  },
  {
    icon: Globe,
    title: "Brand Strategy",
    desc: "Complete brand positioning, voice, and visual identity systems that differentiate you.",
    gradient: "from-[oklch(0.6_0.22_290)] to-[oklch(0.65_0.28_330)]",
    glow: "oklch(0.6 0.22 290 / 0.2)",
    tag: "Strategy",
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    desc: "Clean, modern digital designs for apps and websites that look great and convert.",
    gradient: "from-[oklch(0.65_0.28_330)] to-[oklch(0.6_0.22_290)]",
    glow: "oklch(0.65 0.28 330 / 0.2)",
    tag: "Design",
  },
]

function useScrollReveal(ref: React.RefObject<HTMLElement | null>, threshold = 0.15) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1"
          el.style.transform = "translateY(0)"
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, threshold])
}

function ServiceCard({ s, index }: { s: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    el.style.opacity = "0"
    el.style.transform = "translateY(40px)"
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1"
          el.style.transform = "translateY(0)"
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  const Icon = s.icon

  return (
    <div
      ref={cardRef}
      className="group relative p-6 rounded-2xl border border-border bg-card/60 cursor-pointer overflow-hidden"
      style={{ transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s" }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.borderColor = "oklch(0.65 0.28 330 / 0.5)"
        el.style.transform = "translateY(-8px)"
        el.style.boxShadow = `0 20px 50px ${s.glow}, 0 0 0 1px oklch(0.65 0.28 330 / 0.1)`
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.borderColor = ""
        el.style.transform = ""
        el.style.boxShadow = ""
      }}
    >
      {/* Background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 30% 30%, ${s.glow}, transparent 70%)` }}
      />

      {/* Tag */}
      <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground border border-border rounded-full px-2 py-0.5 group-hover:border-primary/40 group-hover:text-primary transition-colors duration-300">
        {s.tag}
      </span>

      {/* Icon */}
      <div
        className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `linear-gradient(135deg, ${s.gradient.split("from-")[1].split("]")[0].replace("[", "")}, ${s.gradient.split("to-")[1].split("]")[0].replace("[", "")})` }}
      >
        <Icon className="text-white" size={22} />
      </div>

      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{s.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>

      {/* Bottom line reveal */}
      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: `linear-gradient(90deg, oklch(0.65 0.28 330), oklch(0.75 0.18 195))` }}
      />
    </div>
  )
}

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null)
  useScrollReveal(headerRef)

  useEffect(() => {
    const el = headerRef.current
    if (el) {
      el.style.opacity = "0"
      el.style.transform = "translateY(30px)"
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease"
    }
  }, [])

  return (
    <section id="services" className="py-28 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary mb-4">
            <span className="w-6 h-px bg-primary" />
            What We Do
            <span className="w-6 h-px bg-primary" />
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground text-balance leading-tight">
            Creative Solutions for
            <span className="block shimmer-text">Every Brand</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            From concept to execution, we handle every aspect of your digital presence so you can focus on what you do best.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
