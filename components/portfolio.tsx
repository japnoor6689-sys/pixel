"use client"

import { useState, useEffect, useRef } from "react"
import { Play, ExternalLink, Eye } from "lucide-react"

const categories = ["All", "Logos", "Social Media", "Ads", "Branding"]

const works = [
  {
    id: 1, category: "Social Media",
    title: "Social Media Conversion Rate",
    subtitle: "Before vs After Campaign",
    bg: "#1a0a2e",
    accent: "#ff3cac",

    type: "video",
    size: "large",
  },
  {
    id: 2, category: "Ads",
    title: "YOU'RE LOSING CLIENTS",
    subtitle: "No Website · No Trust",
    bg: "#080808",
    accent: "#00d4ff",

    type: "video",
    size: "normal",
  },
  {
    id: 3, category: "Branding",
    title: "GROW YOUR SMALL BUSINESS",
    subtitle: "Brand Growth Strategy",
    bg: "#e8eaf6",
    accent: "#5c35d9",

    type: "image",
    size: "normal",
  },
  {
    id: 4, category: "Social Media",
    title: "DIGITAL MARKETING",
    subtitle: "Keeping brands at the forefront",
    bg: "#0a1628",
    accent: "#00d4ff",

    type: "video",
    size: "normal",
  },
  {
    id: 5, category: "Logos",
    title: "Geometric Logo Mark",
    subtitle: "Minimalist brand identity",
    bg: "#c9a882",
    accent: "#1a1a1a",

    type: "video",
    size: "normal",
  },
  {
    id: 6, category: "Branding",
    title: "Product Lifestyle",
    subtitle: "Brand photography & styling",
    bg: "#1a2e20",
    accent: "#90c8a0",

    type: "video",
    size: "normal",
  },
]

export default function Portfolio() {
  const [active, setActive] = useState("All")
  const [hovered, setHovered] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const filtered = active === "All" ? works : works.filter((w) => w.category === active)

  return (
    <section ref={sectionRef} id="portfolio" className="py-28 px-6 relative overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-accent/8 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary mb-4">
            <span className="w-6 h-px bg-primary" />
            Our Work
            <span className="w-6 h-px bg-primary" />
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground text-balance leading-tight">
            Featured{" "}
            <span className="shimmer-text">Portfolio</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            Real projects. Real results. Scroll through our latest creative work.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex items-center gap-2 justify-center flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                background: active === cat ? "linear-gradient(135deg, oklch(0.65 0.28 330), oklch(0.6 0.22 290))" : "transparent",
                color: active === cat ? "white" : "oklch(0.55 0 0)",
                border: active === cat ? "1px solid transparent" : "1px solid oklch(0.25 0 0)",
                boxShadow: active === cat ? "0 0 20px oklch(0.65 0.28 330 / 0.3)" : "none",
                transform: active === cat ? "scale(1.05)" : "scale(1)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="relative group aspect-square rounded-2xl overflow-hidden cursor-pointer"
              style={{
                backgroundColor: item.bg,
                animation: `stagger-in 0.5s ease ${i * 0.08}s both`,
                transitionProperty: "transform, box-shadow",
                transitionDuration: "0.3s",
              }}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Design preview content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                {/* Decorative circles */}
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${item.accent}, transparent 70%)`,
                  }}
                />
                <p
                  className="relative text-sm md:text-base font-extrabold leading-tight text-balance z-10 transition-transform duration-300"
                  style={{
                    color: item.accent,
                    transform: hovered === item.id ? "scale(1.05)" : "scale(1)",
                  }}
                >
                  {item.title}
                </p>
                <p className="relative text-xs mt-1.5 text-white/60 z-10">{item.subtitle}</p>
              </div>

              {/* Video badge */}
              {item.type === "video" && (
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center z-20">
                  <Play size={11} className="text-white fill-white" />
                </div>
              )}

              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-all duration-300 z-30"
                style={{
                  background: "oklch(0 0 0 / 0.72)",
                  opacity: hovered === item.id ? 1 : 0,
                  backdropFilter: hovered === item.id ? "blur(4px)" : "none",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center transition-transform duration-300"
                  style={{ transform: hovered === item.id ? "scale(1)" : "scale(0.6)" }}
                >
                  <Eye size={18} className="text-white" />
                </div>
                <div className="text-center">
                  <p className="text-white/50 text-[10px] uppercase tracking-widest mt-0.5">{item.category}</p>
                </div>
              </div>

              {/* Neon border on hover */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
                style={{
                  boxShadow: `inset 0 0 0 1.5px ${item.accent}`,
                  opacity: hovered === item.id ? 0.6 : 0,
                }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="https://www.instagram.com/pixelfor_designs"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105"
            style={{
              border: "1px solid oklch(0.65 0.28 330 / 0.5)",
              color: "oklch(0.65 0.28 330)",
              boxShadow: "0 0 0 oklch(0.65 0.28 330 / 0)",
            }}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, {
                background: "oklch(0.65 0.28 330)",
                color: "white",
                boxShadow: "0 0 30px oklch(0.65 0.28 330 / 0.35)",
              })
            }}
            onMouseLeave={(e) => {
              Object.assign(e.currentTarget.style, {
                background: "transparent",
                color: "oklch(0.65 0.28 330)",
                boxShadow: "none",
              })
            }}
          >
            <ExternalLink size={16} />
            View All on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
