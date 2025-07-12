import { Navbar } from "@/components/common/navbar"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <HeroSection />
        <AboutSection />
        {/* Placeholder sections */}
        <section id="experience" className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
        </section>
        <section id="projects" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
        </section>
        <section id="skills" className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
        </section>
        <section id="contact" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
        </section>
      </main>
    </>
  )
}