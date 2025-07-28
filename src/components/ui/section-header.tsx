import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  className?: string
  centered?: boolean
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ title, subtitle, description, className, centered = true }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "animate-fade-in",
          centered ? "text-center" : "text-left",
          className
        )}
      >
        {subtitle && (
          <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            {subtitle}
          </div>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          {title}
        </h2>
        {description && (
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    )
  }
)
SectionHeader.displayName = "SectionHeader"

export { SectionHeader }