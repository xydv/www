"use client"

import { Link } from "next-view-transitions";
import { ModeToggle } from "@/components/mode-toggle"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b">
      <div className="mx-auto w-full px-4 max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[65%] xl:max-w-[50%]">
        <div className="flex h-14 md:h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="font-semibold">
              aditya yadav
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "close menu" : "open menu"}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-6">
              <Link href="/projects" className="text-sm font-medium">
                projects
              </Link>
              <Link href="/blogs" className="text-sm font-medium">
                blogs
              </Link>
            </nav>
            <ModeToggle />
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                home
              </Link>
              <Link href="/projects" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                projects
              </Link>
              <Link href="/blog" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                blog
              </Link>
              <div className="pt-2">
                <ModeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
