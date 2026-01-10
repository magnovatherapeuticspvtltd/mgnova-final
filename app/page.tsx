"use client"

import HeroSection from "@/components/HeroSection"
import ProductShowcase from "@/components/ProductShowcase"
import ResearchSection from "@/components/ResearchSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import FeatureSection from "@/components/FeatureSection"
import ScienceSection from "@/components/ScienceSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ScienceSection />
      <ProductShowcase />
      <ResearchSection />
      <TestimonialsSection />
      <FeatureSection />
    </>
  )
}
