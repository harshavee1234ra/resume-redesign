import { cn } from "@/lib/utils"

export function SectionHeading({
  title,
  subtitle,
  className,
}: {
  title: string
  subtitle?: string
  className?: string
}) {
  return (
    <header className={cn("mb-6", className)}>
      <h2 className="font-display text-balance text-2xl font-semibold tracking-tight text-primary">{title}</h2>
      {subtitle ? <p className="mt-1 text-sm text-muted-foreground text-pretty">{subtitle}</p> : null}
    </header>
  )
}
