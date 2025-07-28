import * as React from "react"
import { cn } from "@/lib/utils"

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: "default" | "premium" | "minimal"
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, variant = "default", ...props }, ref) => {
    const variantClasses = {
      default: "glass-card p-6",
      premium: "glass-card p-8 hover-lift hover-glow",
      minimal: "glass border border-white/10 rounded-lg p-4"
    }

    return (
      <div
        ref={ref}
        className={cn(variantClasses[variant], className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
GlassCard.displayName = "GlassCard"

export { GlassCard }