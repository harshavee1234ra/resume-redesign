import { education, achievements } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

export function EducationTimeline() {
  return (
    <section aria-labelledby="education">
      <SectionHeading title="Education & Certifications" subtitle="Academic milestones and key achievements" />
      <ol id="education" className="relative ml-4 border-l pl-6">
        {education.map((e) => (
          <li key={e.school} className="mb-6">
            <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full border-2 border-background bg-primary" />
            <div className="rounded-md border bg-card p-4">
              <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center">
                <h3 className="text-sm font-semibold">{e.school}</h3>
                <span className="text-xs text-primary">{e.period}</span>
              </div>
              <p className="mt-1 text-sm italic text-muted-foreground">{e.degree}</p>
              <p className="mt-1 text-sm">{e.detail}</p>
            </div>
          </li>
        ))}
      </ol>
      {achievements?.length ? (
        <div className="mt-4 rounded-md border bg-muted/30 p-4">
          <h4 className="mb-2 text-sm font-medium text-foreground">Highlights</h4>
          <ul className="list-disc space-y-1 pl-5 text-sm">
            {achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  )
}
