import { person } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

export function About() {
  return (
    <section aria-labelledby="about">
      <SectionHeading title="About Me" subtitle="A quick snapshot of who I am and how I work" />
      <p id="about" className="max-w-3xl text-pretty leading-relaxed">
        {person.about}
      </p>
    </section>
  )
}
