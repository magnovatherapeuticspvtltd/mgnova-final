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
            LuxGlow <span className="text-primary-red">Brightening Serum</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">
            Our signature product designed to address hyperpigmentation and achieve a radiant, even-toned complexion.
          </p>
        </div>
        
        {/* Product Showcase */}
        <ProductShowcase />
      </section>
      
      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-secondary-charcoal mb-8">Why Choose LuxGlow?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Scientifically Formulated",
                description: "Research-backed ingredients at optimal concentrations for visible results."
              },
              {
                title: "Safe for All Skin Types",
                description: "Gentle yet effective formula suitable for even the most sensitive skin."
              },
              {
                title: "Visible Results",
                description: "See improvements in as little as 4 weeks with consistent use."
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-secondary-beige/20 border-none shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg font-medium">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-primary-green" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-secondary-charcoal/80">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* How to Use Section */}
      <section className="py-12 bg-secondary-beige/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-secondary-charcoal mb-6">How to Use</h2>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-primary-red text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3">1</span>
                  <div>
                    <h3 className="font-medium">Cleanse</h3>
                    <p className="text-sm text-muted-foreground">Start with clean, dry skin. Use our Gentle Cleansing Foam for best results.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-red text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3">2</span>
                  <div>
                    <h3 className="font-medium">Apply Serum</h3>
                    <p className="text-sm text-muted-foreground">Dispense 3-4 drops onto fingertips and gently press into skin. Focus on areas with hyperpigmentation.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-red text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3">3</span>
                  <div>
                    <h3 className="font-medium">Moisturize</h3>
                    <p className="text-sm text-muted-foreground">Follow with your favorite moisturizer to lock in the active ingredients.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-red text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3">4</span>
                  <div>
                    <h3 className="font-medium">Sun Protection</h3>
                    <p className="text-sm text-muted-foreground">Always use SPF during daytime to protect your skin and enhance the serum's effects.</p>
                  </div>
                </li>
              </ol>
              
              <div className="mt-8 flex justify-center">
                <Button className="bg-primary-gold text-secondary-charcoal hover:bg-primary-gold/90">
                  <Link href="/contact">Purchase Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
