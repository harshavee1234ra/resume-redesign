import { person } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"
import { Button } from "@/components/ui/button"
import { Github, Mail, Phone } from "lucide-react"

export function Contact() {
  return (
    <section aria-labelledby="contact">
      <SectionHeading title="Contact" subtitle="Let’s collaborate or talk about opportunities" />
      <div
        id="contact"
        className="flex flex-col gap-3 rounded-lg border bg-card p-6 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <p className="text-sm text-muted-foreground">
            I’m open to internships and full‑time roles. Reach out via email or connect on GitHub.
          </p>
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <Button asChild>
            <a href={`mailto:${person.contact.email}`}>
              <Mail className="mr-2 h-4 w-4" />
              Email
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={`tel:${person.contact.phone.replace(/[^+\d]/g, "")}`}>
              <Phone className="mr-2 h-4 w-4" />
              Call
            </a>
          </Button>
          <Button asChild variant="secondary">
            <a href={person.contact.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
