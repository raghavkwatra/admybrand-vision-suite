import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { FAQSection } from "@/components/sections/faq-section"
import { FooterSection } from "@/components/sections/footer-section"
import { AIUsageReport } from "@/components/sections/ai-usage-report"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <AIUsageReport />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Index;
