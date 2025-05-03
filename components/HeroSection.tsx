"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-charcoal leading-tight mb-4">
              Healthy Skin <span className="text-primary-red">Matters</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-lg">
              Discover scientifically formulated skincare solutions that deliver visible results for radiant, healthier
              skin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary-gold text-secondary-charcoal hover:bg-primary-gold/90 rounded-full px-8 py-6">
                Explore Products
              </Button>
              <Button
                variant="outline"
                className="border-primary-red text-primary-red hover:bg-primary-red/10 rounded-full px-8 py-6"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Right Content */}
            <motion.div
            className="md:w-1/2 relative circular-pattern"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            >
            <div className="relative h-[500px] md:h-[600px] w-full max-w-md mx-auto overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-radial from-transparent to-white/20 pointer-events-none z-10"></div>
              <Image
              src="/hero.png"
              alt="LuxGlow Skincare Product"
              fill
              className="object-cover object-center"
              style={{
                maskImage: 'radial-gradient(circle at center, black 85%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 85%, transparent 100%)'
              }}
              priority
              />
            </div>
            </motion.div>
          </div>

        {/* Gradient Line */}
        <div className="gradient-line mt-12 w-full"></div>
      </div>
    </section>
  )
}

export default HeroSection
