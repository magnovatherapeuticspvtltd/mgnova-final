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
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 py-3 border-b border-gray-100/50"
          : "bg-white/0 backdrop-blur-[2px] py-4 lg:py-6",
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between relative">

        {/* Mobile/Tablet Menu Trigger */}
        <div className="flex items-center lg:hidden z-50">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="p-1 hover:bg-white/50 -ml-2">
                <Menu className="w-6 h-6 sm:w-8 sm:h-8 text-secondary-charcoal" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[85vw] sm:w-[400px] border-r-0 bg-white/95 backdrop-blur-xl p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full overflow-y-auto custom-scrollbar">

                {/* Mobile Header */}
                <div className="p-6 border-b border-gray-100 flex items-center space-x-3">
                  <Image src="/logo.svg" alt="Magnova" width={40} height={40} className="w-10 h-10" />
                  <div className="flex flex-col">
                    <span className="text-primary-red font-heading text-xl font-black tracking-tight leading-none">Magnova</span>
                    <span className="text-secondary-charcoal font-heading text-xs font-light tracking-wide leading-none">Therapeutics</span>
                  </div>
                </div>

                {/* Mobile Links */}
                <div className="flex-1 px-4 py-6 space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        "block px-4 py-3 rounded-xl text-lg font-medium transition-all duration-200",
                        pathname === link.href
                          ? "bg-primary-red/5 text-primary-red font-bold translate-x-1"
                          : "text-secondary-charcoal hover:bg-gray-50 hover:text-primary-red hover:translate-x-1"
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Footer */}
                <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                  <Button className="w-full bg-primary-red text-white hover:bg-primary-red/90 rounded-xl py-6 text-lg font-bold shadow-lg shadow-primary-red/20 transition-transform active:scale-95">
                    Shop Collection
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Mobile Logo (Centered on small screens if desired, or adjacent to menu) */}
          <Link href="/" className="flex items-center ml-3 lg:hidden">
            <Image src="/logo.svg" alt="Magnova" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10" />
            <div className="ml-2 flex flex-col">
              <span className="text-primary-red font-heading text-lg sm:text-xl font-black tracking-tight leading-none">Magnova</span>
            </div>
          </Link>
        </div>

        {/* Desktop Logo */}
        <Link href="/" className="hidden lg:flex items-center transition-opacity hover:opacity-80 z-50">
          <Image src="/logo.svg" alt="Magnova Therapeutics" width={56} height={56} className="w-12 h-12 xl:w-14 xl:h-14" />
          <div className="ml-3 flex flex-col">
            <span className="text-primary-red font-heading text-2xl font-black tracking-tight leading-none">Magnova</span>
            <span className="text-secondary-charcoal font-heading text-sm font-light tracking-wide leading-none">Therapeutics</span>
          </div>
        </Link>

        {/* Desktop Navigation - Centered Absolute */}
        <nav className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center bg-white/60 p-1.5 rounded-full border border-white/40 shadow-sm backdrop-blur-md hover:shadow-md transition-shadow duration-300">
          <ul className="flex items-center space-x-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    "block px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 relative overflow-hidden group whitespace-nowrap",
                    "xl:text-sm xl:px-5",
                    pathname === link.href
                      ? "bg-primary-red text-white shadow-md shadow-primary-red/20"
                      : "text-secondary-charcoal/80 hover:text-primary-red hover:bg-primary-red/5"
                  )}
                >
                  <span className="relative z-10">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Utilities */}
        <div className="hidden lg:flex items-center space-x-4 z-50">
          <Button className="bg-primary-red text-white hover:bg-rose-800 rounded-full px-6 xl:px-8 py-5 text-xs xl:text-sm font-bold tracking-wide shadow-lg shadow-primary-red/20 hover:shadow-primary-red/40 transition-all transform hover:-translate-y-0.5 border-none">
            Shop Now
          </Button>
        </div>

        {/* Mobile Shop Button (Optional: put on right side of header on mobile? No, menu is enough) */}
        {/* Keeping the header clean on mobile, only menu on left and logo next to it or center is fine. 
            Currently implementation puts logo next to menu.
        */}

      </div>
    </header>
  )
}

export default Header
