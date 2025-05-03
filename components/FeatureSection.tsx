"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Microscope, Sparkles, Users } from "lucide-react"

const FeatureSection = () => {
  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-primary-red" />,
      title: "Virtual Skin Consultation",
      description: "Book a personalized virtual consultation with our skincare experts.",
    },
    {
      icon: <Microscope className="h-8 w-8 text-primary-red" />,
      title: "Ingredient Glossary",
      description: "Explore our comprehensive guide to skincare ingredients and their benefits.",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary-red" />,
      title: "Customized Routine Builder",
      description: "Create a personalized skincare routine tailored to your specific needs.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary-red" />,
      title: "Loyalty Program",
      description: "Join our rewards program and earn points with every purchase.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-charcoal mb-4">Special Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the additional services and tools we offer to enhance your skincare journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border border-secondary-beige/50 hover:border-primary-gold transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-center mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">{feature.description}</p>
              <div className="flex justify-center">
                <Button variant="link" className="text-primary-red hover:text-primary-red/80">
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-secondary-beige/20 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-primary-red mb-4">Skin Analysis Tool</h3>
              <p className="text-muted-foreground mb-6">
                Our advanced skin analysis tool uses AI technology to assess your skin concerns and recommend the
                perfect products for your unique needs.
              </p>
              <Button className="bg-primary-gold text-secondary-charcoal hover:bg-primary-gold/90">
                Try Skin Analysis
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Skin Analysis Tool"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
