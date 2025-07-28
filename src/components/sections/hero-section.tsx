import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import heroImage from "@/assets/hero-dashboard.jpg"

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center bg-gradient-secondary border border-white/10 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-foreground">
                🚀 Introducing AI-Powered Marketing
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Transform Your
              <span className="bg-gradient-primary bg-clip-text text-transparent block">
                Brand with AI
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              ADmyBRAND AI Suite revolutionizes marketing with intelligent automation, 
              predictive analytics, and personalized campaigns that drive real results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg" className="group">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start mt-8 space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                14-day free trial
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: "300ms" }}>
            <div className="relative">
              <img
                src={heroImage}
                alt="ADmyBRAND AI Dashboard"
                className="w-full h-auto rounded-2xl shadow-2xl hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-secondary rounded-2xl opacity-20" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full opacity-40 animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}