import TestimonialsSection from "@/components/TestimonialsSection"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Star, Quote, PenLine } from "lucide-react"

export default function TestimonialsPage() {
  return (
    <main className="pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-charcoal">
            Customer <span className="text-primary-red">Success Stories</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">
            Real experiences and transformations from our valued customers.
          </p>
        </div>
      </section>

      {/* Main Testimonials Section */}
      <TestimonialsSection />

      {/* Featured Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-charcoal mb-4">Featured Transformations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These remarkable skin transformations highlight the effectiveness of our skincare solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Rebecca T., 35",
                title: "Hyperpigmentation Journey",
                quote: "After years of struggling with dark spots from sun damage, I finally found a solution that actually works. LuxGlow's Brightening Cream has transformed my skin in just 10 weeks of consistent use.",
                stars: 5
              },
              {
                name: "David M., 42",
                title: "Mature Skin Transformation",
                quote: "As someone dealing with the early signs of aging, finding products that actually deliver on their promises isn't easy. The difference in my skin's texture and firmness since using Magnova products has been remarkable.",
                stars: 5
              },
              {
                name: "Jasmine K., 28",
                title: "Acne Scarring Improvement",
                quote: "The post-acne marks that I've struggled with for years have significantly faded since using the Brightening Cream. I'm finally comfortable going makeup-free and my confidence has soared!",
                stars: 5
              },
              {
                name: "Michael L., 45",
                title: "Sensitive Skin Solution",
                quote: "With sensitive skin, I've always been cautious about trying new products. Not only did Magnova products not irritate my skin, but they actually improved its overall resilience and appearance.",
                stars: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-0 pt-6">
                  <Quote className="text-primary-gold h-8 w-8 mb-2 opacity-30" />
                  <CardTitle className="text-lg font-medium">{testimonial.title}</CardTitle>
                  <div className="flex mt-1 mb-2">
                    {Array(testimonial.stars).fill(0).map((_, i) => (
                      <Star key={i} size={16} className="text-primary-gold fill-primary-gold" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <p className="text-sm font-medium text-secondary-charcoal">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 bg-secondary-beige/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-charcoal mb-4">Video Testimonials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear directly from our customers about their experiences with our products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-video relative bg-gray-100">
                  <Image
                    src="/placeholder.svg"
                    alt="Video Thumbnail"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary-red/90 flex items-center justify-center cursor-pointer hover:bg-primary-red transition-colors">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">Customer Story #{index + 1}</h3>
                  <p className="text-sm text-muted-foreground">See the real transformation and hear the experience directly.</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button className="bg-primary-gold text-secondary-charcoal hover:bg-primary-gold/90">
                Share Your Story <PenLine className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}