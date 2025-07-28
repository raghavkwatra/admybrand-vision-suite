import * as React from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { GlassCard } from "./glass-card"

export interface TestimonialCardProps {
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
  className?: string
}

const TestimonialCard = React.forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ name, role, company, content, rating, avatar, className }, ref) => {
    return (
      <GlassCard 
        ref={ref}
        variant="premium" 
        className={cn("h-full flex flex-col", className)}
      >
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-5 h-5",
                i < rating ? "text-yellow-400 fill-current" : "text-gray-600"
              )}
            />
          ))}
        </div>
        
        <blockquote className="flex-1 text-foreground mb-6 italic leading-relaxed">
          "{content}"
        </blockquote>
        
        <div className="flex items-center">
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-4"
            onError={(e) => {
              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=6366f1&color=fff&size=48`
            }}
          />
          <div>
            <div className="font-semibold text-foreground">{name}</div>
            <div className="text-sm text-muted-foreground">{role} at {company}</div>
          </div>
        </div>
      </GlassCard>
    )
  }
)
TestimonialCard.displayName = "TestimonialCard"

export { TestimonialCard }