"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  bg?: "white" | "surface"
}

const SectionWrapper = ({ children, className, id, bg = "white" }: SectionWrapperProps) => {
  return (
    <section id={id} className={cn("py-16", bg === "surface" ? "bg-surface" : "bg-white", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="container mx-auto px-4"
      >
        {children}
      </motion.div>
    </section>
  )
}

export default SectionWrapper
