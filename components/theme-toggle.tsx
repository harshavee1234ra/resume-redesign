"use client"

import * as React from "react"
import * as Popover from "@radix-ui/react-popover"
import { Sun, Moon, Laptop2, ChevronsUpDown } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function ThemeToggleOrb({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const holdTimer = React.useRef<number | null>(null)
  const held = React.useRef(false)

  React.useEffect(() => setMounted(true), [])

  const current = (resolvedTheme || theme) as "light" | "dark" | "system" | undefined

  function handlePointerDown() {
    held.current = false
    if (holdTimer.current) window.clearTimeout(holdTimer.current)
    // open popover if user holds > 400ms
    holdTimer.current = window.setTimeout(() => {
      held.current = true
      setOpen(true)
    }, 400)
  }

  function handlePointerUp() {
    if (holdTimer.current) {
      window.clearTimeout(holdTimer.current)
      holdTimer.current = null
    }
    // if not long-press, toggle light/dark quickly
    if (!held.current) {
      setTheme(current === "dark" ? "light" : "dark")
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      setTheme(current === "dark" ? "light" : "dark")
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      setOpen(true)
    }
  }

  if (!mounted) return null

  const Icon = current === "dark" ? Moon : current === "light" ? Sun : Laptop2
  const label =
    current === "dark"
      ? "Switch to light mode"
      : current === "light"
        ? "Switch to dark mode"
        : "Theme follows system (press to toggle)"

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          type="button"
          aria-label={label}
          title="Click to toggle • Hold to choose"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => {
            if (holdTimer.current) window.clearTimeout(holdTimer.current)
          }}
          onKeyDown={handleKeyDown}
          className={cn(
            "relative inline-flex h-10 w-10 items-center justify-center rounded-full",
            "bg-card text-foreground ring-1 ring-border hover:bg-accent transition",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            className,
          )}
        >
          {/* Icon swap with smooth fade */}
          <span className="grid place-items-center">
            <Icon className="h-[18px] w-[18px] transition-transform duration-300" />
          </span>

          {/* arc indicator showing mode at a glance */}
          <span
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-0 rounded-full ring-1 ring-border",
              'before:absolute before:inset-1 before:rounded-full before:content-[""]',
              current === "dark"
                ? "before:bg-black/40"
                : current === "light"
                  ? "before:bg-white/40"
                  : "before:bg-transparent",
            )}
          />
          <ChevronsUpDown aria-hidden="true" className="absolute -bottom-1 right-0 h-3 w-3 text-muted-foreground/60" />
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          side="bottom"
          align="end"
          className={cn("z-50 rounded-xl border border-border bg-popover p-3 shadow-lg", "grid grid-cols-3 gap-2")}
        >
          <Option active={current === "light"} label="Light" icon={Sun} onSelect={() => setTheme("light")} />
          <Option active={current === "dark"} label="Dark" icon={Moon} onSelect={() => setTheme("dark")} />
          <Option
            active={current === "system" || (!current && theme === "system")}
            label="System"
            icon={Laptop2}
            onSelect={() => setTheme("system")}
          />
          <Popover.Arrow className="fill-border" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

function Option({
  active,
  label,
  icon: Icon,
  onSelect,
}: {
  active?: boolean
  label: string
  icon: React.ComponentType<{ className?: string }>
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "flex flex-col items-center justify-center gap-1 rounded-md px-2 py-2",
        "transition hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        active ? "ring-1 ring-primary/60 bg-accent" : "ring-1 ring-transparent",
      )}
      aria-pressed={active}
      aria-label={label}
    >
      <Icon className="h-5 w-5" />
      <span className="text-xs">{label}</span>
    </button>
  )
}

export default ThemeToggleOrb
