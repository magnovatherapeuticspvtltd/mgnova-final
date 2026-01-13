"use client"

import { Metadata } from "next"

// Since this is a client component, we can't export metadata directly.
// However, the layout.tsx metadata acts as the default for the home page.
// If we wanted specific metadata for the home page different from layout, 
// we would need to convert this to a server component or use a layout specific to this route.
// Given the current structure where page.tsx is "use client", the root layout metadata serves as the home page metadata.

import HeroSection from "@/components/HeroSection"
import ProductShowcase from "@/components/ProductShowcase"
import FeatureSection from "@/components/FeatureSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductShowcase featuredOnly={false} />
      <FeatureSection />
    </>
  )
}
