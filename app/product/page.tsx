import ProductShowcase from "@/components/ProductShowcase"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function ProductPage() {
  return (
    <main className="pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-charcoal">
            Our <span className="text-primary-red">Product Portfolio</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">
            Discover our range of scientifically formulated medicines designed for your health and well-being.
          </p>
        </div>

        {/* Product Showcase */}
        <ProductShowcase />
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-green/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-secondary-charcoal mb-4">Interested in our products?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact us for inquiries, distribution, or partnership opportunities.
          </p>

          <div className="flex justify-center">
            <Link href="/contact">
              <Button className="bg-primary-red text-white hover:bg-primary-red/90 rounded-full px-8 py-6 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
