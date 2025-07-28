import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { GlassCard } from "./glass-card"

export interface PricingCardProps {
  title: string
  price: string
  period: string
  description: string
  features: string[]
  isPopular?: boolean
  className?: string
  delay?: number
}

const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  ({ title, price, period, description, features, isPopular = false, className, delay = 0 }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("animate-scale-in relative", className)}
        style={{ animationDelay: `${delay}ms` }}
      >
        {isPopular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
            <div className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
          </div>
        )}
        <GlassCard 
          variant="premium" 
          className={cn(
            "relative h-full flex flex-col",
            isPopular && "border-primary/50 shadow-glow"
          )}
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground mb-4">{description}</p>
            <div className="flex items-baseline justify-center">
              <span className="text-4xl font-bold text-foreground">{price}</span>
              <span className="text-muted-foreground ml-2">/{period}</span>
            </div>
          </div>
          
          <div className="flex-1 mb-6">
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Button 
            variant={isPopular ? "hero" : "outline"} 
            size="lg" 
            className="w-full"
          >
            Get Started
          </Button>
        </GlassCard>
      </div>
    )
  }
)
PricingCard.displayName = "PricingCard"

export { PricingCard }