import { FeatureCard } from "@/components/ui/feature-card"
import { SectionHeader } from "@/components/ui/section-header"
import { 
  Brain, 
  BarChart3, 
  Target, 
  Zap, 
  Shield, 
  Users 
} from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Advanced machine learning algorithms analyze your data to provide actionable insights and optimize your marketing campaigns automatically."
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Forecast market trends, customer behavior, and campaign performance with our cutting-edge predictive models."
  },
  {
    icon: Target,
    title: "Smart Targeting",
    description: "Reach the right audience at the right time with AI-driven customer segmentation and personalized messaging."
  },
  {
    icon: Zap,
    title: "Automation Engine",
    description: "Streamline your workflow with intelligent automation that handles repetitive tasks and optimizes performance 24/7."
  },
  {
    icon: Shield,
    title: "Privacy Compliant",
    description: "Built with privacy-first architecture ensuring GDPR, CCPA compliance while maintaining powerful analytics capabilities."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless collaboration tools with real-time sharing, comments, and approval workflows for marketing teams."
  }
]

export const FeaturesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          subtitle="Features"
          title="Everything you need to succeed"
          description="Powerful AI tools designed to transform your marketing strategy and drive unprecedented growth for your brand."
          className="mb-16"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}