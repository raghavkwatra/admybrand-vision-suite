import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionHeader } from "@/components/ui/section-header"
import { GlassCard } from "@/components/ui/glass-card"

const faqs = [
  {
    question: "How does the AI prediction accuracy work?",
    answer: "Our AI models are trained on millions of marketing data points and achieve 92% accuracy in campaign performance predictions. The system continuously learns from your data to improve accuracy over time."
  },
  {
    question: "Can I integrate with my existing marketing tools?",
    answer: "Yes! ADmyBRAND AI Suite integrates with 200+ popular marketing tools including HubSpot, Salesforce, Google Analytics, Facebook Ads, and more. Our API also allows custom integrations."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer 24/7 email support for all plans, priority support for Professional plans, and dedicated account managers for Enterprise customers. Plus comprehensive documentation and video tutorials."
  },
  {
    question: "Is my data secure and private?",
    answer: "Absolutely. We use enterprise-grade encryption, are SOC 2 Type II certified, and comply with GDPR and CCPA regulations. Your data is never shared with third parties and you maintain complete ownership."
  },
  {
    question: "How quickly can I see results?",
    answer: "Most customers see initial insights within 24 hours of setup. Significant performance improvements typically occur within 2-4 weeks as the AI learns your specific business patterns."
  },
  {
    question: "Do you offer custom AI model training?",
    answer: "Yes, Enterprise customers can access custom AI model training for industry-specific needs. Our data science team works with you to develop tailored algorithms for your unique requirements."
  }
]

export const FAQSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          subtitle="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about ADmyBRAND AI Suite."
          className="mb-16"
        />
        
        <div className="max-w-3xl mx-auto">
          <GlassCard variant="premium">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                  <AccordionTrigger className="text-left hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}