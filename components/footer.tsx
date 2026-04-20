"use client"

import { Instagram, Phone, Heart, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className="relative border-t border-border bg-background overflow-hidden">
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, oklch(0.65 0.28 330 / 0.6), oklch(0.75 0.18 195 / 0.6), transparent)" }}
      />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full bg-primary/6 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <a href="#home" className="flex items-center gap-2.5 group w-fit">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                style={{
                  background: "linear-gradient(135deg, oklch(0.65 0.28 330), oklch(0.75 0.18 195))",
                  boxShadow: "0 0 20px oklch(0.65 0.28 330 / 0.3)",
                }}
              >
                PF
              </div>
              <span className="text-2xl font-black text-foreground">
                Pixel<span className="text-primary">for_</span>
                <span className="text-muted-foreground font-normal text-base ml-1">Studio</span>
              </span>
            </a>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Creative Design Solutions. Logos · Ads · Social Media.
              <br />Building brands that stand out.
            </p>

            <div className="flex items-center gap-3">
              {[
                { href: "https://www.instagram.com/pixelfor_designs", icon: Instagram, label: "Instagram" },
                { href: "tel:9915728899", icon: Phone, label: "Phone" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="group w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:scale-110"
                  style={{ background: "oklch(0.14 0 0)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 20px oklch(0.65 0.28 330 / 0.3)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-black text-foreground uppercase tracking-[0.2em] mb-5">Services</p>
            <ul className="flex flex-col gap-2.5">
              {["Logo Design", "Ad Creatives", "Social Media", "Digital Marketing", "Brand Strategy", "UI/UX Design"].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-3" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick contact */}
          <div>
            <p className="text-sm font-black text-foreground uppercase tracking-[0.2em] mb-5">Quick Contact</p>
            <div className="flex flex-col gap-4">
              <a
                href="tel:9915728899"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2.5 group"
              >
                <Phone size={14} className="text-primary shrink-0" />
                9915728899
              </a>
              <a
                href="https://www.instagram.com/pixelfor_designs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2.5"
              >
                <Instagram size={14} className="text-primary shrink-0" />
                @pixelfor_designs
              </a>
              <a
                href="https://www.instagram.com/japnoor1009"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 pl-5"
              >
                DM: @japnoor1009
              </a>
            </div>

            {/* CTA button */}
            <a
              href="tel:9915728899"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, oklch(0.65 0.28 330), oklch(0.6 0.22 290))",
                boxShadow: "0 0 20px oklch(0.65 0.28 330 / 0.3)",
              }}
            >
              <Phone size={14} />
              Call Now
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Pixelfor_ Studio. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            Made with{" "}
            <Heart size={11} className="text-primary fill-primary animate-pulse" />
            {" "}for bold brands
          </p>
          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="group w-9 h-9 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
            style={{ background: "oklch(0.14 0 0)" }}
            aria-label="Back to top"
          >
            <ArrowUp size={15} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </footer>
  )
}
