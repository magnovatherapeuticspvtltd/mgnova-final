"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Search, Moon, Sun, Globe } from "lucide-react"
import Image from "next/image"
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
    { name: "Home", href: "/" },
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 py-3 border-b border-gray-100/50" : "bg-white/0 backdrop-blur-[2px] py-6",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">

        {/* Mobile Menu Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden p-1 mr-auto hover:bg-white/50">
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[85vw] sm:w-[380px] border-r-0 bg-white/95 backdrop-blur-xl">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col space-y-6 mt-10">
              <div className="flex items-center mb-4 px-2">
                <span className="text-primary-red font-heading text-2xl font-black tracking-tight">Magnova</span>
                <span className="text-secondary-charcoal font-heading text-xl font-light ml-1">Therapeutics</span>
              </div>

              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-lg font-medium text-secondary-charcoal hover:text-primary-red hover:bg-gray-50 px-4 py-3 rounded-lg transition-all",
                      pathname === link.href && "text-primary-red bg-primary-red/5 font-bold",
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="px-2 mt-4">
                <Button className="w-full bg-primary-red text-white hover:bg-primary-red/90 rounded-xl py-6 text-lg shadow-lg shadow-primary-red/10">
                  Shop Collection
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo - Desktop */}
        {/* Logo - Desktop - Larger */}
        <Link href="/" className="hidden md:flex absolute left-8 items-center transition-opacity hover:opacity-80">
          <Image src="/logo.svg" alt="Magnova Therapeutics" width={56} height={56} className="w-14 h-14" />
          <div className="ml-3 flex flex-col">
            <span className="text-primary-red font-heading text-2xl font-black tracking-tight leading-none">Magnova</span>
            <span className="text-secondary-charcoal font-heading text-sm font-light tracking-wide leading-none">Therapeutics</span>
          </div>
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center space-x-1 mx-auto bg-white/60 p-1.5 rounded-full border border-white/40 shadow-sm backdrop-blur-md hover:shadow-md transition-shadow duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 relative overflow-hidden group",
                pathname === link.href
                  ? "bg-primary-red text-white shadow-md shadow-primary-red/20 transform scale-105"
                  : "text-secondary-charcoal/80 hover:text-primary-red hover:bg-primary-red/5"
              )}
            >
              <span className="relative z-10">{link.name}</span>
            </Link>
          ))}
        </nav>

        {/* Utilities */}
        <div className="flex items-center space-x-3 md:absolute md:right-8">
          {/* Theme toggle removed for cleaner look */}

          <Button className="hidden md:flex bg-primary-red text-white hover:bg-rose-800 rounded-full px-7 py-5 text-sm font-bold tracking-wide shadow-lg shadow-primary-red/20 hover:shadow-primary-red/40 transition-all transform hover:-translate-y-0.5 btn-liquid border-none">
            Shop Now
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
