import { experience } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

export function Experience() {
  return (
    <section aria-labelledby="experience">
      <SectionHeading title="Work Experience" subtitle="Professional roles and impact" />
      <div id="experience" className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {experience.map((x) => (
          <article key={x.company} className="rounded-lg border bg-card p-4">
            <header className="flex items-center justify-between gap-2">
              <h3 className="text-sm font-semibold">{x.company}</h3>
              <span className="text-xs text-primary">{x.period}</span>
            </header>
            <p className="mt-1 text-sm text-muted-foreground">{x.role}</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
              {x.details.map((d: string) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
