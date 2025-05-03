import type React from "react"
import { Activity, Shield, Microscope, Droplet, Sparkles, Pill } from "lucide-react"

interface IconProps {
  name: string
  size?: number
  className?: string
}

const Icon = ({ name, size = 24, className }: IconProps) => {
  const icons: Record<string, React.ReactNode> = {
    "Clinical effectiveness": <Activity size={size} className={className} />,
    "Accessibility & affordability": <Shield size={size} className={className} />,
    "Evidence-based R&D": <Microscope size={size} className={className} />,
    "Gut flora balance": <Sparkles size={size} className={className} />,
    "Improved digestion": <Droplet size={size} className={className} />,
    "Enhanced immunity": <Shield size={size} className={className} />,
  }

  return icons[name] || <Pill size={size} className={className} />
}

export default Icon
