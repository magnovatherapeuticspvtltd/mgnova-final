"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Search, Moon, Sun, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Research", href: "/research" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-sm py-2" : "bg-white py-4",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img src="/logo.svg" alt="Magnova Logo" className="h-8 w-auto mr-2" />
            <span className="text-primary-red font-heading text-xl font-bold">Magnova</span>
            <span className="text-primary-green font-heading text-xl font-bold">Therapeutics</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-secondary-charcoal hover:text-primary-red transition-colors font-medium",
                pathname === link.href && "text-primary-red",
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Utilities */}
        <div className="flex items-center space-x-4">
          <button className="text-secondary-charcoal hover:text-primary-red transition-colors">
            <Search size={20} />
          </button>

          <button
            className="text-secondary-charcoal hover:text-primary-red transition-colors"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="text-secondary-charcoal hover:text-primary-red transition-colors">
            <Globe size={20} />
          </button>

          <Button className="hidden md:flex bg-primary-gold text-secondary-charcoal hover:bg-primary-gold/90">
            Shop Skincare Solutions
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-secondary-charcoal hover:text-primary-red transition-colors py-2 font-medium",
                      pathname === link.href && "text-primary-red",
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button className="mt-4 bg-primary-gold text-secondary-charcoal hover:bg-primary-gold/90">
                  Shop Skincare Solutions
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header
