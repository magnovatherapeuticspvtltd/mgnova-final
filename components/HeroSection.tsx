"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-white to-gray-50/50">

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[30%] h-[30%] bg-primary-gold/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[30%] bg-primary-red/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">

          {/* Branding - Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-12"
          >
            <h1 className="flex flex-col items-center justify-center font-heading font-bold tracking-tight">
              <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-rose-600 mb-2">
                Magnova
              </span>
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-secondary-charcoal/90">
                Therapeutics
              </span>
            </h1>
          </motion.div>

          {/* Sub-headline / Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto mb-10"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-secondary-charcoal mb-4">
              Healthy Skin <span className="text-primary-red italic font-serif">Matters</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Discover scientifically formulated skincare solutions that deliver visible results.
              Elevate your daily ritual with medical-grade precision and luxurious care.
            </p>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button className="bg-primary-gold text-secondary-charcoal hover:bg-primary-gold/90 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Explore Products
            </Button>
            <Button
              variant="outline"
              className="border-primary-red/20 text-primary-red hover:bg-primary-red/5 hover:border-primary-red rounded-full px-8 py-6 text-lg transition-all duration-300"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Optional: Subtle product hint or scroll indicator below */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 sm:mt-24"
          >
            <div className="w-[1px] h-16 bg-gradient-to-b from-gray-300 to-transparent mx-auto"></div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
