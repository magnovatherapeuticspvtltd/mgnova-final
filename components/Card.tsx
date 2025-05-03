"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CardProps {
  title: string
  children?: React.ReactNode
  icon?: React.ReactNode
  className?: string
}

const Card = ({ title, children, icon, className }: CardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn("bg-white rounded-2xl shadow-md border border-primary/20 p-6 text-center", className)}
    >
      {icon && <div className="mb-4 flex justify-center">{icon}</div>}
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      {children}
    </motion.div>
  )
}

export default Card
