"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Product {
  id: number
  name: string
  category: string
  description: string
  image: string
  composition: string
  form: string
  benefits: string[]
  featured?: boolean
}

const products: Product[] = [
  {
    id: 1,
    name: "LUXGLO Skin Brightening Cream",
    category: "Dermatology & Skincare",
    description: "LUXGLO is a premium skin brightening cream designed to restore your skin's natural radiance. It combines a powerful blend of active ingredients including Kojic Dipalmitate and Niacinamide to target uneven skin tone and pigmentation.",
    image: "/luxglo.jpg",
    composition: "Kojic Dipalmitate, Niacinamide, 4-Butylresorcinol, Mandelic Acid, Licorice Extract.",
    form: "Cream",
    benefits: ["Helps reduce the appearance of dark spots and hyperpigmentation.", "Promotes a brighter, more even complexion.", "Enriched with Mandelic Acid for gentle exfoliation."],
    featured: true,
  },
  {
    id: 2,
    name: "Cerafly Cream (Cerafly Bariera)",
    category: "Dermatology & Skincare",
    description: "Cerafly is a gentle, soothing moisturizer designed to hydrate and protect dry, sensitive skin. It creates a protective barrier that locks in moisture, making it ideal for managing dry skin conditions.",
    image: "/cerafly.jpg",
    composition: "White Soft Paraffin and Light Liquid Paraffin.",
    form: "Cream",
    benefits: ["Deeply hydrates and softens dry skin.", "Forms a protective layer to prevent moisture loss.", "Paraben-free formulation suitable for sensitive skin."],
    featured: true,
  },
  {
    id: 3,
    name: "MELIFRO Cream",
    category: "Dermatology & Skincare",
    description: "MELIFRO provides high-strength support for managing skin pigmentation. Formulated with Hydroquinone, it is designed to treat conditions related to hyperpigmentation and melanin overproduction.",
    image: "/melifro.jpg",
    composition: "Hydroquinone Cream USP 4% w/w.",
    form: "Cream (15 gm)",
    benefits: ["Effective management of melasma and dark patches.", "Helps lighten hyperpigmented skin areas."],
    featured: true,
  },
  {
    id: 4,
    name: "COBISTA-S Ointment",
    category: "Dermatological Treatments",
    description: "COBISTA-S is a specialized formulation combining the anti-inflammatory power of Clobetasol with the exfoliating properties of Salicylic Acid. It is typically used for managing inflammatory skin conditions associated with scaling.",
    image: "/cobista.jpg",
    composition: "Clobetasol Propionate and Salicylic Acid.",
    form: "Ointment",
    benefits: ["Reduces redness, itching, and swelling.", "Softens and removes scaling skin."],
  },
  {
    id: 5,
    name: "ZEKUTA-K Cream",
    category: "Dermatological Treatments",
    description: "ZEKUTA-K is a broad-spectrum antifungal cream containing Ketoconazole. It is effectively used to treat various fungal skin infections, providing relief from itching and irritation.",
    image: "/zekuta-k.jpg",
    composition: "Ketoconazole Cream 2% w/w.",
    form: "Cream",
    benefits: ["Treats fungal infections of the skin.", "Relieves itching and discomfort."],
  },
  {
    id: 6,
    name: "ZEKUTA 130 / ZEKUTA 100",
    category: "Systemic Anti-Fungal Support",
    description: "ZEKUTA capsules feature a Supra Bioavailable Formulation of Itraconazole, ensuring enhanced absorption for the effective management of fungal infections.",
    image: "/zekuta-130.jpg",
    composition: "Itraconazole IP 130 mg / 100 mg (Supra Bioavailable Formulation).",
    form: "Capsules",
    benefits: ["High bioavailability for better efficacy.", "Effective against a wide range of fungal pathogens."],
  },
  {
    id: 7,
    name: "Raviret-D",
    category: "Gastrointestinal Care",
    description: "Raviret-D combines a proton pump inhibitor with a prokinetic agent to provide comprehensive relief from gastrointestinal disorders. It is designed to manage acidity and reflux symptoms effectively.",
    image: "/raviret.jpg",
    composition: "Enteric-coated Rabeprazole Sodium & Sustained-release Domperidone.",
    form: "Capsules (10x10 pack)",
    benefits: ["Reduces stomach acid production.", "Relieves symptoms of GERD and acid reflux.", "Prevents nausea and bloating."],
  },
]

const ProductShowcase = ({ featuredOnly = false }: { featuredOnly?: boolean }) => {
  const displayProducts = featuredOnly ? products.filter((p) => p.featured) : products

  return (
    <section className="py-16 sm:py-24 bg-secondary-beige/30" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-charcoal mb-4">Our Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            High-quality pharmaceutical formulations researched and developed for better health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
              <div className="relative h-64 bg-gray-50 flex items-center justify-center p-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <span className="text-xs font-bold tracking-wider text-primary-red uppercase bg-primary-red/5 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-secondary-charcoal mb-2 leading-tight">
                  {product.name}
                </h3>

                <div className="text-sm font-medium text-gray-500 mb-4">
                  {product.composition}
                </div>

                <p className="text-gray-600 text-sm mb-6 flex-1">
                  {product.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-gray-100 mt-auto">
                  <div className="text-sm font-semibold text-secondary-charcoal">Key Benefits:</div>
                  <ul className="text-sm text-gray-500 list-disc pl-4 space-y-1">
                    {product.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <Link href="mailto:Magnovatherapeuticspvtltd@gmail.com">
                    <Button className="w-full bg-secondary-charcoal text-white hover:bg-black transition-colors">
                   Buy Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
