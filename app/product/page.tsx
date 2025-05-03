"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import SectionWrapper from "@/components/SectionWrapper"
import Card from "@/components/Card"
import Icon from "@/components/Icon"
import { Button } from "@/components/ui/button"

export default function ProductPage() {
  return (
    <>
      <SectionWrapper className="pt-32 md:pt-40">
        <h1 className="text-5xl font-bold text-center text-primary">GUTGOOD™</h1>
        <p className="text-xl text-center text-gray-700 mt-4 max-w-2xl mx-auto">
          India's first community-researched multi-strain probiotic for digestion & immunity
        </p>
        <div className="mt-8 flex justify-center">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="GUTGOOD™"
            width={800}
            height={400}
            className="rounded-xl shadow-md"
          />
        </div>
      </SectionWrapper>

      <SectionWrapper bg="surface">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-medium text-primary">Key Features</h2>
            <ul className="list-disc list-inside mt-4 text-base space-y-2 text-gray-700">
              {[
                "5 Clinically validated strains",
                "100% vegetarian",
                "Gluten-free",
                "Preservative-free",
                "1-month supply (30 capsules)",
              ].map((item) => (
                <li key={item} className="mt-2">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h3 className="text-2xl font-medium text-primary mb-4">How to Use</h3>
              <p className="text-gray-700">
                Take one capsule daily with water, preferably in the morning on an empty stomach or as directed by your
                healthcare professional.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-medium text-primary">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              {[
                {
                  title: "Gut flora balance",
                  description: "Restores and maintains healthy gut microbiome balance",
                },
                {
                  title: "Improved digestion",
                  description: "Helps with nutrient absorption and digestive comfort",
                },
                {
                  title: "Enhanced immunity",
                  description: "Strengthens immune response through gut-immune axis",
                },
              ].map((benefit) => (
                <Card
                  key={benefit.title}
                  title={benefit.title}
                  icon={<Icon name={benefit.title} size={28} className="text-accent" />}
                >
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </Card>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <motion.div whileHover={{ scale: 1.02 }}>
                <Button asChild className="bg-accent text-primary hover:bg-accent/90 rounded-full px-8">
                  <Link href="/contact">Contact for Purchase</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="bg-primary/5 rounded-2xl p-8">
          <h2 className="text-3xl font-medium text-primary text-center mb-6">Research & Development</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-center">
            GUTGOOD™ is the result of extensive research and development by our team of medical professionals and
            scientists. Each strain has been selected based on clinical evidence of its efficacy in improving gut health
            and immunity.
          </p>
          <div className="mt-8 flex justify-center">
            <motion.div whileHover={{ scale: 1.02 }}>
              <Button asChild className="bg-accent text-primary hover:bg-accent/90 rounded-full">
                <Link href="/contact">Request Research Information</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
