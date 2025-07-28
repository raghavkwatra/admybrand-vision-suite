import * as React from "react"
import { cn } from "@/lib/utils"

export interface AnimatedCounterProps {
  value: number
  duration?: number
  className?: string
}

const AnimatedCounter = React.forwardRef<HTMLSpanElement, AnimatedCounterProps>(
  ({ value, duration = 2000, className }, ref) => {
    const [displayValue, setDisplayValue] = React.useState(0)

    React.useEffect(() => {
      let startTime: number
      let animationFrame: number

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        
        setDisplayValue(Math.floor(progress * value))
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      
      return () => cancelAnimationFrame(animationFrame)
    }, [value, duration])

    return (
      <span ref={ref} className={cn("font-bold", className)}>
        {displayValue.toLocaleString()}
      </span>
    )
  }
)
AnimatedCounter.displayName = "AnimatedCounter"

export { AnimatedCounter }