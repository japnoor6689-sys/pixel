"use client"

import { useEffect, useRef } from "react"
import { Diamond, CheckCircle2, Sparkles } from "lucide-react"

const highlights = [
  "Logo & Brand Identity Design",
  "Social Media Content Creation",
  "Paid Ad Creatives (Meta, Google)",
  "Digital Marketing Strategy",
  "Brand Voice & Positioning",
  "Fast Turnaround, Unlimited Revisions",
]

export default function About() {
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = [
      { el: leftRef.current, dir: "-60px" },
      { el: rightRef.current, dir: "60px" },
    ]
    els.forEach(({ el, dir }) => {
      if (!el) return
      el.style.opacity = "0"
      el.style.transform = `translateX(${dir})`
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease"
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1"
          el.style.transform = "translateX(0)"
          observer.disconnect()
        }
      }, { threshold: 0.1 })
      observer.observe(el)
    })
  }, [])

  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-primary/8 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-accent/8 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left: visual card */}
        <div ref={leftRef} className="relative">
          {/* Spinning accent rings */}
          <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full border border-dashed border-primary/30 animate-spin-slow pointer-events-none" />
          <div className="absolute -bottom-8 -right-8 w-12 h-12 rounded-full border border-dashed border-accent/30 pointer-events-none"
            style={{ animation: "spin-slow 8s linear infinite reverse" }} />

          <div
            className="relative rounded-3xl p-8 border border-primary/20 flex flex-col gap-6 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, oklch(0.14 0 0), oklch(0.12 0.04 330))",
              boxShadow: "0 0 60px oklch(0.65 0.28 330 / 0.08), inset 0 1px 0 oklch(1 0 0 / 0.05)",
            }}
          >
            {/* Animated gradient top bar */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, oklch(0.65 0.28 330), oklch(0.75 0.18 195), transparent)" }}
            />

            {/* Logo mark */}
            <div className="flex items-center gap-3">
              <div
                className="relative w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl text-white"
                style={{
                  background: "linear-gradient(135deg, oklch(0.65 0.28 330), oklch(0.75 0.18 195))",
                  boxShadow: "0 0 25px oklch(0.65 0.28 330 / 0.4)",
                }}
              >
                PF
                {/* Pulse rings */}
                <span className="absolute inset-0 rounded-2xl border border-primary/40 animate-pulse-ring" style={{ animationDelay: "0s" }} />
              </div>
              <div>
                <p className="font-bold text-foreground text-lg leading-tight">Pixelfor_ Studio</p>
                <p className="text-xs text-muted-foreground">@pixelfor_designs</p>
              </div>
              <Sparkles size={16} className="text-primary ml-auto animate-pulse" />
            </div>



            {/* Bio */}
            <div className="text-sm text-muted-foreground leading-relaxed space-y-1">
              <p className="text-foreground font-semibold text-base">Creative Design Solutions</p>
              <p>Logos | Ads | Social Media</p>
              <p className="flex items-center gap-1.5">
                Building brands that stand out
                <Diamond size={13} className="text-primary fill-primary" />
              </p>
              <a href="https://www.instagram.com/japnoor1009" target="_blank" rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors underline underline-offset-2 block">
                @japnoor1009
              </a>
            </div>

            {/* CTA */}
            <a
              href="tel:9915728899"
              className="flex items-center justify-center gap-2 py-3.5 rounded-xl text-primary-foreground font-bold text-sm transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, oklch(0.65 0.28 330), oklch(0.6 0.22 290))",
                boxShadow: "0 0 25px oklch(0.65 0.28 330 / 0.35)",
              }}
            >
              DM now — 9915728899
            </a>
          </div>
        </div>

        {/* Right: text */}
        <div ref={rightRef} className="flex flex-col gap-7">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary mb-4">
              <span className="w-6 h-px bg-primary" />
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground text-balance leading-tight">
              We Build Brands That{" "}
              <span className="shimmer-text">Get Noticed</span>
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Pixelfor_ Studio is a creative design powerhouse dedicated to helping businesses build powerful digital identities. From small startups to growing brands, we craft visual solutions that communicate, convert, and captivate.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our team combines creative artistry with marketing strategy — because great design should not just look good, it should drive real results for your business.
          </p>

          {/* Animated checklist */}
          <ul className="flex flex-col gap-3">
            {highlights.map((h, i) => (
              <li
                key={h}
                className="flex items-center gap-3 text-sm text-foreground group"
                style={{ animation: `stagger-in 0.4s ease ${i * 0.07 + 0.2}s both` }}
              >
                <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-125"
                  style={{ background: "oklch(0.65 0.28 330 / 0.15)", border: "1px solid oklch(0.65 0.28 330 / 0.4)" }}>
                  <CheckCircle2 size={12} className="text-primary" />
                </div>
                <span className="group-hover:text-primary transition-colors duration-200">{h}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-2 self-start px-8 py-3.5 rounded-full font-bold text-primary-foreground transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, oklch(0.65 0.28 330), oklch(0.6 0.22 290))",
              boxShadow: "0 0 30px oklch(0.65 0.28 330 / 0.3)",
            }}
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  )
}
