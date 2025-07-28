import * as React from "react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { GlassCard } from "./glass-card"

export interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
  delay?: number
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ icon: Icon, title, description, className, delay = 0 }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("animate-fade-in", className)}
        style={{ animationDelay: `${delay}ms` }}
      >
        <GlassCard variant="premium" className="text-center group cursor-pointer">
          <div className="mx-auto mb-4 w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </GlassCard>
      </div>
    )
  }
)
FeatureCard.displayName = "FeatureCard"

export { FeatureCard }