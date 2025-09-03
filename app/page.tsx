import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { EducationTimeline } from "@/components/education-timeline"
import { Experience } from "@/components/experience"
import { ProjectsGrid } from "@/components/projects-grid"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl space-y-10 px-4 py-10">
      <Hero />
      <About />
      <Skills />
      <EducationTimeline />
      <Experience />
      <ProjectsGrid />
      <Contact />
      <footer className="pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Harshavardhan Bodapati — Built with Next.js & shadcn/ui
      </footer>
    </main>
  )
}
