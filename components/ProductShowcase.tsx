"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

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

const featuredProduct: Product = {
  id: 1,
  name: "LuxGlow Brightening Cream",
  category: "Cream",
  description: "Advanced formula with vitamin C and niacinamide for brighter, more even skin tone. Our best-selling product designed to transform dull skin and reduce hyperpigmentation with consistent use.",
  featured: true,
  image: "/product.svg",
  ingredients: ["Vitamin C", "Niacinamide", "Hyaluronic Acid", "Licorice Extract"],
  benefits: ["Brightens skin", "Reduces dark spots", "Evens skin tone", "Hydrates"],
}

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState<'ingredients' | 'benefits'>('ingredients');

  return (
    <section className="py-10 sm:py-16 bg-secondary-beige/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-charcoal mb-2 sm:mb-4">Our Signature Product</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Experience our best-selling skincare solution designed to address hyperpigmentation and promote radiant skin.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Product Image - Left side on desktop, top on mobile */}
              <div className="md:w-1/2 relative h-[300px] md:h-[450px] bg-secondary-white">
                <div className="absolute top-3 left-3 bg-primary-gold text-secondary-charcoal text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full z-10 shadow-sm">
                  Best Seller
                </div>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={featuredProduct.image}
                    alt={featuredProduct.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-6 drop-shadow-xl"
                    priority
                  />
                </motion.div>
              </div>

              {/* Product Details - Right side on desktop, bottom on mobile */}
              <div className="md:w-1/2 p-5 sm:p-8">
                <div className="flex flex-col h-full">
                  <div>
                    <div className="text-sm text-primary-red font-medium mb-1">{featuredProduct.category}</div>
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold mb-2">{featuredProduct.name}</h3>

                    <div className="flex items-center mb-3">
                      {Array(5).fill(0).map((_, i) => (
                        <Star key={i} size={16} className="text-primary-gold fill-primary-gold" />
                      ))}
                      <span className="ml-2 text-sm text-muted-foreground">(128 reviews)</span>
                    </div>

                    <p className="text-muted-foreground mb-6">{featuredProduct.description}</p>

                    {/* Tabs for ingredients and benefits */}
                    <div className="mb-6">
                      <div className="flex border-b">
                        <button
                          className={cn(
                            "pb-2 px-4 text-sm font-medium border-b-2 -mb-px",
                            activeTab === 'ingredients'
                              ? "border-primary-red text-primary-red"
                              : "border-transparent hover:text-primary-red/70"
                          )}
                          onClick={() => setActiveTab('ingredients')}
                        >
                          Key Ingredients
                        </button>
                        <button
                          className={cn(
                            "pb-2 px-4 text-sm font-medium border-b-2 -mb-px",
                            activeTab === 'benefits'
                              ? "border-primary-red text-primary-red"
                              : "border-transparent hover:text-primary-red/70"
                          )}
                          onClick={() => setActiveTab('benefits')}
                        >
                          Benefits
                        </button>
                      </div>

                      <div className="pt-4">
                        {activeTab === 'ingredients' ? (
                          <div className="flex flex-wrap gap-2">
                            {featuredProduct.ingredients.map((ingredient, idx) => (
                              <span key={idx} className="text-sm bg-secondary-beige/50 px-3 py-1.5 rounded-full">
                                {ingredient}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <ul className="space-y-2 pl-5 list-disc">
                            {featuredProduct.benefits.map((benefit, idx) => (
                              <li key={idx} className="text-sm text-secondary-charcoal">
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <Button className="bg-primary-red text-white hover:bg-primary-red/90 sm:flex-1">
                        Add to Cart
                      </Button>
                      <Button variant="outline" className="border-primary-green text-primary-green hover:bg-primary-green/10 sm:flex-1">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
