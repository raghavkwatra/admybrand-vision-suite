import { PricingCard } from "@/components/ui/pricing-card"
import { SectionHeader } from "@/components/ui/section-header"

const pricingPlans = [
  {
    title: "Starter",
    price: "$29",
    period: "month",
    description: "Perfect for small businesses and startups",
    features: [
      "Up to 10,000 monthly contacts",
      "Basic AI insights",
      "Email marketing automation",
      "Social media scheduling",
      "Basic analytics dashboard",
      "Email support"
    ]
  },
  {
    title: "Professional",
    price: "$99",
    period: "month",
    description: "Ideal for growing marketing teams",
    features: [
      "Up to 100,000 monthly contacts",
      "Advanced AI predictions",
      "Multi-channel automation",
      "A/B testing suite",
      "Custom reporting",
      "Priority support",
      "Team collaboration tools",
      "API access"
    ],
    isPopular: true
  },
  {
    title: "Enterprise",
    price: "$299",
    period: "month",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited contacts",
      "Custom AI model training",
      "White-label solutions",
      "Advanced integrations",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom onboarding",
      "SLA guarantee"
    ]
  }
]

export const PricingSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          subtitle="Pricing"
          title="Simple, transparent pricing"
          description="Choose the perfect plan for your business. All plans include our core AI features with no hidden fees."
          className="mb-16"
        />
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              delay={index * 150}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="text-sm text-muted-foreground">
            Need a custom solution? <a href="#contact" className="text-primary hover:underline">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  )
}