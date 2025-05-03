"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number
  name: string
  age: number
  location: string
  quote: string
  beforeImage: string
  afterImage: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah J.",
    age: 34,
    location: "New York",
    quote:
      "After struggling with hyperpigmentation for years, LuxGlow's Brightening Serum has made a remarkable difference in just 8 weeks. My skin tone is more even, and dark spots have significantly faded.",
    beforeImage: "/placeholder.svg?height=300&width=250",
    afterImage: "/placeholder.svg?height=300&width=250",
  },
  {
    id: 2,
    name: "Michael T.",
    age: 42,
    location: "Chicago",
    quote:
      "As someone with sensitive skin, I've always been cautious about trying new products. Magnova's Gentle Cleansing Foam is the first cleanser that doesn't irritate my skin while still providing a thorough cleanse.",
    beforeImage: "/placeholder.svg?height=300&width=250",
    afterImage: "/placeholder.svg?height=300&width=250",
  },
  {
    id: 3,
    name: "Priya K.",
    age: 29,
    location: "Los Angeles",
    quote:
      "The Overnight Repair Mask has transformed my skincare routine. I wake up with noticeably plumper, more radiant skin. It's like getting a facial while I sleep!",
    beforeImage: "/placeholder.svg?height=300&width=250",
    afterImage: "/placeholder.svg?height=300&width=250",
  },
]

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [showBefore, setShowBefore] = useState(false)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-10 sm:py-16 bg-secondary-beige/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-charcoal mb-2 sm:mb-4">Real Results</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            See the difference our products have made for our customers.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Before/After Images */}
            <div className="relative">
              <div className="relative h-[250px] sm:h-[300px] w-full overflow-hidden rounded-lg shadow-md">
                <Image
                  src={showBefore ? testimonials[activeIndex].beforeImage : testimonials[activeIndex].afterImage}
                  alt={`${testimonials[activeIndex].name} ${showBefore ? "Before" : "After"}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm sm:text-base font-medium">{showBefore ? "Before" : "After"}</span>
                </div>
              </div>

              <div className="flex justify-center mt-3 sm:mt-4">
                <Button
                  variant="outline"
                  className={cn(
                    "rounded-l-full border-r-0 text-xs sm:text-sm py-1 h-auto sm:h-9",
                    showBefore ? "bg-primary-red/10 text-primary-red" : "bg-white",
                  )}
                  onClick={() => setShowBefore(true)}
                >
                  Before
                </Button>
                <Button
                  variant="outline"
                  className={cn(
                    "rounded-r-full border-l-0 text-xs sm:text-sm py-1 h-auto sm:h-9",
                    !showBefore ? "bg-primary-green/10 text-primary-green" : "bg-white",
                  )}
                  onClick={() => setShowBefore(false)}
                >
                  After
                </Button>
              </div>
            </div>

            {/* Testimonial Content */}
            <motion.div
              key={testimonials[activeIndex].id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 relative"
            >
              <Quote className="text-primary-gold/30 absolute top-3 sm:top-4 left-3 sm:left-4 h-8 w-8 sm:h-12 sm:w-12" />

              <div className="relative z-10">
                <p className="font-accent text-sm sm:text-base md:text-lg mb-4 sm:mb-6 pt-6 sm:pt-8 pl-2 sm:pl-4">"{testimonials[activeIndex].quote}"</p>

                <div className="flex items-center">
                  <div>
                    <p className="font-medium text-secondary-charcoal text-sm sm:text-base">
                      {testimonials[activeIndex].name}, {testimonials[activeIndex].age}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{testimonials[activeIndex].location}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-4 sm:mt-8">
                <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full h-8 w-8 sm:h-9 sm:w-9">
                  <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={cn("w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full", index === activeIndex ? "bg-primary-red" : "bg-gray-300")}
                      onClick={() => setActiveIndex(index)}
                    />
                  ))}
                </div>

                <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full h-8 w-8 sm:h-9 sm:w-9">
                  <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
