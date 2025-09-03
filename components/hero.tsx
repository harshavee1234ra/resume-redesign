"use client"

import { person } from "@/lib/portfolio-data"
import { Button } from "@/components/ui/button"
import { Github, Mail, Phone } from "lucide-react"

export function Hero() {
  return (
    <section aria-labelledby="hero" className="relative isolate rounded-lg border bg-card px-6 py-10 md:px-10">
      <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h1 id="hero" className="font-display text-balance text-3xl font-semibold tracking-tight">
            {person.name}
          </h1>
          <p className="mt-1 text-lg font-medium text-primary">{person.title}</p>
          <p className="mt-3 max-w-xl text-pretty text-muted-foreground">{person.tagline}</p>
        </div>
        <div className="flex w-full max-w-md flex-col gap-2 md:w-auto">
          <a
            href={`mailto:${person.contact.email}`}
            className="inline-flex items-center gap-2 text-sm"
            aria-label="Email"
          >
            <Button className="w-full justify-start" variant="secondary">
              <Mail className="mr-2 h-4 w-4" />
              {person.contact.email}
            </Button>
          </a>
          <a href={person.contact.github} target="_blank" rel="noopener noreferrer" className="inline-flex">
            <Button className="w-full justify-start bg-transparent" variant="outline" aria-label="GitHub">
              <Github className="mr-2 h-4 w-4" />
              github.com/harsha33983
            </Button>
          </a>
          <div className="inline-flex">
            <Button className="w-full justify-start" variant="ghost" aria-label="Phone">
              <Phone className="mr-2 h-4 w-4" />
              {person.contact.phone}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
