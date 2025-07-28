import { TestimonialCard } from "@/components/ui/testimonial-card"
import { SectionHeader } from "@/components/ui/section-header"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechStart Inc",
    content: "ADmyBRAND AI Suite transformed our marketing ROI by 340% in just 3 months. The predictive analytics are incredibly accurate and the automation saves us 15+ hours per week.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b512ee7d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Marcus Johnson",
    role: "CEO",
    company: "Growth Labs",
    content: "The AI insights helped us identify new market opportunities we never would have discovered. Our customer acquisition cost dropped by 60% while increasing quality leads.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Digital",
    company: "BrandForward",
    content: "Seamless integration with our existing tools and the team collaboration features are outstanding. The platform is intuitive yet incredibly powerful.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
]

export const TestimonialsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          subtitle="Testimonials"
          title="Loved by marketing teams worldwide"
          description="Join thousands of businesses that have transformed their marketing with ADmyBRAND AI Suite."
          className="mb-16"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}