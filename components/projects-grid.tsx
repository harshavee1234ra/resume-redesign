import { projects } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export function ProjectsGrid() {
  return (
    <section aria-labelledby="projects">
      <SectionHeading title="Projects" subtitle="Selected work showcasing my skills and process" />
      <div id="projects" className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.name} className="flex flex-col justify-between rounded-lg border bg-card p-4">
            <div>
              <h3 className="text-base font-semibold">{p.name}</h3>
              <p className="text-sm text-primary">{p.subtitle}</p>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              {p.tech?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge key={t} variant="secondary">
                      {t}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.links?.map((l) => (
                <Button key={l.label} asChild variant="outline" size="sm">
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label} <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
