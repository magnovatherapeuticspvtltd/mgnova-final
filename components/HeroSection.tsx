"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-mesh min-h-[90vh] flex items-center">

      {/* Background Decorative Elements - Refined Pulses */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-1/4 w-[40rem] h-[40rem] bg-primary-gold/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-[-5%] w-[35rem] h-[35rem] bg-primary-red/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 md:mb-12"
          >
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-primary-red/10 text-xs font-semibold tracking-widest text-primary-red uppercase shadow-sm">
              Advanced Clinical Skincare
            </div>

            <h1 className="flex flex-col items-center justify-center font-heading font-black tracking-tight leading-none">
              <span className="text-[13vw] sm:text-8xl md:text-9xl lg:text-[10rem] text-transparent bg-clip-text bg-gradient-to-b from-primary-red to-[#590d18] filter drop-shadow-sm pb-2">
                MAGNOVA
              </span>
              <span className="text-[8vw] sm:text-5xl md:text-6xl lg:text-[7rem] text-secondary-charcoal font-light -mt-2 sm:-mt-6 md:-mt-8">
                THERAPEUTICS
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-secondary-charcoal/80 leading-relaxed font-light">
              Where <span className="font-playfair italic font-medium text-primary-red">pharmaceutical precision</span> meets
              <span className="font-playfair italic font-medium text-primary-gold"> uncompromising luxury</span>.
              <br className="hidden md:block" /> Formulated for results you can see and feel.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Button className="bg-primary-red text-white hover:bg-primary-red/90 rounded-full px-10 py-7 text-lg shadow-xl shadow-primary-red/25 hover:shadow-2xl hover:scale-105 transition-all duration-300 btn-liquid w-full sm:w-auto">
              Explore Collection
            </Button>
            <Button
              variant="outline"
              className="border-primary-red/20 text-secondary-charcoal hover:bg-primary-red/5 hover:border-primary-red/40 rounded-full px-10 py-7 text-lg w-full sm:w-auto transition-all duration-300"
            >
              Our Science
            </Button>
          </motion.div>



        </div>
      </div>
    </section>
  )
}

export default HeroSection
