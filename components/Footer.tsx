import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Footer = () => {
  return (
    <footer className="bg-secondary-beige/30 border-t border-primary-gold/20 pt-16 pb-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-gold/40 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">

          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-red/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image src="/logo.svg" alt="Magnova Therapeutics" width={64} height={64} className="w-16 h-16 relative z-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-primary-red font-heading text-2xl font-black tracking-tight leading-none group-hover:text-primary-red/80 transition-colors">Magnova</span>
                <span className="text-secondary-charcoal font-heading text-sm font-light tracking-wide leading-none">Therapeutics</span>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Pioneering the future of dermatological science. We blend advanced medical research with luxurious care to reveal your skin's true potential.
            </p>
            <div className="flex space-x-4 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-secondary-charcoal/70 hover:text-primary-red hover:border-primary-red/30 hover:shadow-md transition-all duration-300 group">
                  <Icon size={18} className="transform group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links (Span 2) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-playfair text-xl font-bold text-secondary-charcoal mb-6 relative inline-block">
              Company
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary-gold/50"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Careers", href: "/careers" },
                { name: "Research", href: "/research" },
                { name: "Press", href: "/press" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary-red hover:translate-x-1 transition-all duration-200 inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products/Legal (Span 2) */}
          <div className="lg:col-span-2">
            <h3 className="font-playfair text-xl font-bold text-secondary-charcoal mb-6 relative inline-block">
              Explore
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary-gold/50"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Shop All", href: "/products" },
                { name: "Best Sellers", href: "/products?category=best-sellers" },
                { name: "New Arrivals", href: "/products?category=new" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary-red hover:translate-x-1 transition-all duration-200 inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter (Span 4) */}
          <div className="lg:col-span-4 lg:pl-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-playfair text-xl font-bold text-secondary-charcoal mb-2">Join the Inner Circle</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Receive exclusive access to new launches, scientific breakthroughs, and member-only offers.
              </p>
              <form className="flex flex-col space-y-3">
                <Input
                  type="email"
                  placeholder="Email address"
                  className="bg-gray-50 border-gray-200 focus:border-primary-red/30 focus:ring-primary-red/10 rounded-xl px-4 py-5"
                />
                <Button className="w-full bg-primary-red text-white hover:bg-rose-800 rounded-xl py-6 font-bold tracking-wide shadow-lg shadow-primary-red/10 group">
                  Subscribe
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
              <p className="text-[10px] text-muted-foreground/60 mt-3 text-center">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </div>
          </div>
        </div>

        {/* Leaf Motif Divider */}
        <div className="leaf-divider my-8 opacity-20"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground pt-4">
          <p>&copy; {new Date().getFullYear()} Magnova Therapeutics. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="flex items-center">
              Built with <span className="text-primary-red mx-1">❤</span> for Science
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
