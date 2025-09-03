"use client"

import { skills } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"
import { Code, Layout, Server, Database, Wrench, Cloud, type LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  Code,
  Layout,
  Server,
  Database,
  Wrench,
  Cloud,
}

function ProgressBar({ value }: { value: number }) {
  const clamped = Math.max(0, Math.min(value, 100))
  return (
    <div
      className="h-2 w-full overflow-clip rounded-full bg-muted"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clamped}
    >
      <div className="h-full bg-accent" style={{ width: `${clamped}%` }} />
    </div>
  )
}

export function Skills() {
  return (
    <section aria-labelledby="skills">
      <SectionHeading title="Skills" subtitle="What I use to build modern, scalable apps" />
      <ul id="skills" className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {skills.map((s) => {
          const Icon = iconMap[s.icon] ?? Code
          return (
            <li key={s.category} className="rounded-lg border bg-card p-4">
              <div className="mb-2 flex items-center gap-2">
                <Icon className="h-5 w-5 text-primary" aria-hidden />
                <h3 className="text-sm font-semibold">{s.category}</h3>
              </div>
              <p className="mb-3 text-sm text-muted-foreground">{s.items.join(", ")}</p>
              <ProgressBar value={s.level} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
