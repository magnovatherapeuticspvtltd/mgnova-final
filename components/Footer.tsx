import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Information */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-primary-red font-heading text-xl font-bold">Magnova</span>
              <span className="text-primary-green font-heading text-xl font-bold">Therapeutics</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Professional skincare solutions backed by science and research for healthier, brighter skin.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-secondary-charcoal hover:text-primary-red transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-secondary-charcoal hover:text-primary-red transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-secondary-charcoal hover:text-primary-red transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-secondary-charcoal hover:text-primary-red transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/about" className="text-secondary-charcoal hover:text-primary-red transition-colors">
                About Us
              </Link>
              <Link href="/products" className="text-secondary-charcoal hover:text-primary-red transition-colors">
                Products
              </Link>
              <Link href="/research" className="text-secondary-charcoal hover:text-primary-red transition-colors">
                Research
              </Link>
              <Link href="/testimonials" className="text-secondary-charcoal hover:text-primary-red transition-colors">
                Testimonials
              </Link>
              <Link href="/contact" className="text-secondary-charcoal hover:text-primary-red transition-colors">
                Contact
              </Link>
              <Link href="/faq" className="text-secondary-charcoal hover:text-primary-red transition-colors">
                FAQ
              </Link>
              <Link href="/privacy" className="text-secondary-charcoal hover:text-primary-red transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-secondary-charcoal hover:text-primary-red transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest skincare tips and product updates.
            </p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="rounded-full" />
              <Button className="bg-primary-gold text-secondary-charcoal hover:bg-primary-gold/90 rounded-full">
                <Mail size={16} className="mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Leaf Motif Divider */}
        <div className="leaf-divider my-8"></div>

        {/* Bottom Bar */}
        <div className="border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Magnova Therapeutics & LuxGlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
