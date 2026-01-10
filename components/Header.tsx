"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Search, Moon, Sun, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
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
    { name: "Products", href: "/product" },
    { name: "Research", href: "/research" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-2" : "bg-white/50 backdrop-blur-sm py-3",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* Mobile Menu Trigger (Left aligned on mobile) */}
        <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden p-1 mr-auto">
                <Menu size={22} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80vw] sm:w-[350px]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center mb-6">
                   {/* Kept logo for mobile context inside drawer */}
                  <span className="text-primary-red font-heading text-xl font-bold">Magnova</span>
                  <span className="text-primary-green font-heading text-xl font-bold">Therapeutics</span>
                </div>
                
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-secondary-charcoal hover:text-primary-red transition-colors py-2 font-medium border-b border-gray-100",
                      pathname === link.href && "text-primary-red",
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                
                 <Button className="mt-4 bg-primary-gold text-secondary-charcoal hover:bg-primary-gold/90 w-full">
                  Shop Skincare
                </Button>
              </div>
            </SheetContent>
          </Sheet>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center space-x-2 mx-auto bg-gray-100/50 p-1 rounded-full border border-gray-200/50 backdrop-blur-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                pathname === link.href 
                  ? "bg-white text-primary-red shadow-sm scale-105" 
                  : "text-secondary-charcoal hover:bg-white/50 hover:text-primary-red"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Utilities */}
        <div className="flex items-center space-x-2 sm:space-x-3 md:absolute md:right-8">
          <button 
             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
             className="p-2 rounded-full hover:bg-gray-100 text-secondary-charcoal transition-colors"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Button className="hidden md:flex bg-primary-gold text-secondary-charcoal hover:bg-primary-gold/90 rounded-full px-6 text-sm font-semibold shadow-md hover:shadow-lg transition-all">
            Shop Now
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
