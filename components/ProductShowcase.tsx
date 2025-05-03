"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Product {
  id: number
  name: string
  category: string
  description: string
  featured: boolean
  image: string
  ingredients: string[]
  benefits: string[]
}

const products: Product[] = [
  {
    id: 1,
    name: "LuxGlow Brightening Serum",
    category: "Serum",
    description: "Advanced formula with vitamin C and niacinamide for brighter, more even skin tone.",
    featured: true,
    image: "/placeholder.svg?height=300&width=300",
    ingredients: ["Vitamin C", "Niacinamide", "Hyaluronic Acid", "Licorice Extract"],
    benefits: ["Brightens skin", "Reduces dark spots", "Evens skin tone", "Hydrates"],
  },
  {
    id: 2,
    name: "Hydra-Boost Moisturizer",
    category: "Moisturizer",
    description: "Lightweight, oil-free moisturizer that provides 24-hour hydration.",
    featured: false,
    image: "/placeholder.svg?height=300&width=300",
    ingredients: ["Hyaluronic Acid", "Ceramides", "Glycerin", "Aloe Vera"],
    benefits: ["Deep hydration", "Strengthens skin barrier", "Non-greasy formula", "Suitable for all skin types"],
  },
  {
    id: 3,
    name: "Gentle Cleansing Foam",
    category: "Cleanser",
    description: "Sulfate-free cleansing foam that removes impurities without stripping the skin.",
    featured: false,
    image: "/placeholder.svg?height=300&width=300",
    ingredients: ["Amino Acid Surfactants", "Glycerin", "Panthenol", "Green Tea Extract"],
    benefits: ["Gentle cleansing", "Maintains pH balance", "Soothes skin", "Removes makeup"],
  },
  {
    id: 4,
    name: "Overnight Repair Mask",
    category: "Mask",
    description: "Intensive treatment mask that works overnight to repair and rejuvenate skin.",
    featured: false,
    image: "/placeholder.svg?height=300&width=300",
    ingredients: ["Retinol", "Peptides", "Shea Butter", "Niacinamide"],
    benefits: ["Repairs skin overnight", "Reduces fine lines", "Improves texture", "Boosts collagen"],
  },
]

const ProductShowcase = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  return (
    <section className="py-16 bg-secondary-beige/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-charcoal mb-4">Our Skincare Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Scientifically formulated products designed to address various skin concerns and promote healthier skin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className={cn(
                "bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300",
                product.featured ? "ring-2 ring-primary-gold" : "hover:shadow-lg",
                hoveredProduct === product.id ? "transform scale-[1.02]" : "",
              )}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-48 w-full bg-secondary-white">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
                {product.featured && (
                  <div className="absolute top-2 right-2 bg-primary-gold text-secondary-charcoal text-xs font-medium px-2 py-1 rounded-full">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-4">
                <div className="text-xs text-primary-red font-medium mb-1">{product.category}</div>
                <h3 className="font-heading text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>

                {hoveredProduct === product.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.2 }}
                    className="mb-4"
                  >
                    <div className="mb-2">
                      <span className="text-xs font-medium text-primary-green">Key Ingredients:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {product.ingredients.map((ingredient, idx) => (
                          <span key={idx} className="text-xs bg-secondary-beige/50 px-2 py-1 rounded-full">
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                <Button className="w-full bg-primary-red text-white hover:bg-primary-red/90">View Details</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
