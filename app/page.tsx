import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import WhyUs from "@/components/why-us"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Services />
        <Portfolio />
        <WhyUs />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
