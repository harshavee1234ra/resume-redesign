import { ThemeToggleOrb } from "@/components/theme-toggle"

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="font-semibold tracking-tight">
          Harshavardhan Portfolio
        </a>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggleOrb />
        </div>
      </div>
    </header>
  )
}

export default Header
