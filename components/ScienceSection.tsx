"use client"

import { motion } from "framer-motion"
import { FlaskConical, Atom, Microscope, ArrowUpRight } from "lucide-react"

const ScienceSection = () => {

    const stats = [
        { label: "Clinical Efficacy", value: "94", suffix: "%", description: "Participants saw brighter skin in 4 weeks" },
        { label: "Active Absorption", value: "3.5", suffix: "x", description: "Better penetration than standard serums" },
        { label: "Natural Origin", value: "88", suffix: "%", description: "Ingredients derived from sustainable sources" },
    ]

    return (
        <section className="py-20 md:py-32 bg-secondary-charcoal text-white relative overflow-hidden">
            {/* Abstract Molecular Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <motion.svg
                    viewBox="0 0 800 800"
                    className="w-full h-full text-primary-gold"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                >
                    <circle cx="400" cy="400" r="300" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="10 20" />
                    <circle cx="400" cy="400" r="200" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="5 15" />
                    <path d="M400 100 L400 700 M100 400 L700 400" stroke="currentColor" strokeWidth="0.5" />
                </motion.svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">

                    {/* Text Content */}
                    <div className="md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-2 text-primary-gold mb-6 font-medium tracking-wide text-sm uppercase">
                                <Microscope size={18} />
                                <span>Evidence-Based Formulation</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium mb-6 leading-tight">
                                Science beneath <br />
                                <span className="text-primary-gold font-playfair italic">the surface.</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
                                We don't just guess; we engineer. Our proprietary lipid-delivery system ensures active ingredients reach the cellular level where repair actually happens.
                            </p>
                            <div className="flex items-center gap-6">
                                <button className="flex items-center gap-2 text-white border-b border-primary-gold pb-1 hover:text-primary-gold transition-colors">
                                    View Clinical Study <ArrowUpRight size={16} />
                                </button>
                                <button className="flex items-center gap-2 text-white border-b border-gray-600 pb-1 hover:text-gray-300 transition-colors">
                                    Our Ingredients
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Stats Grid */}
                    <div className="md:w-1/2 w-full">
                        <div className="grid grid-cols-1 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl relative group hover:bg-white/10 transition-colors"
                                >
                                    <div className="absolute top-4 right-4 text-primary-gold/20 group-hover:text-primary-gold/40 transition-colors">
                                        <Atom size={40} />
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-playfair text-white mb-2 font-bold">
                                        {stat.value}<span className="text-primary-gold text-2xl md:text-3xl ml-1 font-sans font-light">{stat.suffix}</span>
                                    </h3>
                                    <div className="text-lg font-medium text-primary-gold mb-1">{stat.label}</div>
                                    <p className="text-sm text-gray-400">{stat.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ScienceSection
