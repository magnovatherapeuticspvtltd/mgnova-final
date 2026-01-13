"use client"

import HeroSection from "@/components/HeroSection"
import ProductShowcase from "@/components/ProductShowcase"
import FeatureSection from "@/components/FeatureSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductShowcase featuredOnly={true} />
      <FeatureSection />
    </>
  )
}
