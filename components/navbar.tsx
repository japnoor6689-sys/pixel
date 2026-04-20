"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("#home")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "oklch(0.1 0 0 / 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid oklch(0.25 0 0)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 30px oklch(0 0 0 / 0.3)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            style={{ background: "linear-gradient(135deg, oklch(0.65 0.28 330), oklch(0.75 0.18 195))" }}
          >
            PF
          </div>
          <span className="text-xl font-black tracking-tight text-foreground">
            Pixel<span className="text-primary">for_</span>
          </span>
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest hidden sm:block">Studio</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 group"
              style={{ color: activeLink === link.href ? "oklch(0.65 0.28 330)" : "oklch(0.55 0 0)" }}
            >
              <span className="relative z-10 group-hover:text-foreground transition-colors duration-200">
                {link.label}
              </span>
              {/* Hover underline */}
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-primary transition-all duration-300 group-hover:w-4/5"
                style={{ width: activeLink === link.href ? "80%" : "0%" }}
              />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="tel:9915728899"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-primary-foreground transition-all duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, oklch(0.65 0.28 330), oklch(0.6 0.22 290))",
            boxShadow: "0 0 20px oklch(0.65 0.28 330 / 0.35)",
          }}
        >
          <Phone size={14} />
          Call Now
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-lg border border-border text-foreground hover:border-primary transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="transition-all duration-300" style={{ opacity: open ? 0 : 1, position: open ? "absolute" : "relative" }}>
            <Menu size={18} />
          </span>
          <span className="transition-all duration-300" style={{ opacity: open ? 1 : 0, position: open ? "relative" : "absolute" }}>
            <X size={18} />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight: open ? "320px" : "0",
          opacity: open ? 1 : 0,
        }}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-1 border-b border-border bg-card/90 backdrop-blur-xl">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
              style={{ animationDelay: `${i * 0.05}s` }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:9915728899"
            className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-primary-foreground"
            style={{ background: "linear-gradient(135deg, oklch(0.65 0.28 330), oklch(0.6 0.22 290))" }}
            onClick={() => setOpen(false)}
          >
            <Phone size={16} />
            Call 9915728899
          </a>
        </div>
      </div>
    </header>
  )
}
