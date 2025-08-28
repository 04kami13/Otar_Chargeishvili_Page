import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero text-primary-foreground">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBanner})` }}
      />
      <div className="absolute inset-0 bg-primary/80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Otar Chargeishvili
          </h1>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium mb-8 text-primary-foreground/90">
            IT System & Infrastructure Administrator
          </h2>
          <p className="font-body text-xl md:text-2xl mb-12 text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Optimizing IT systems, automating workflows, and delivering reliable IT solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => window.open('/src/assets/resume.pdf', '_blank')}
                >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                View My Resume
                </Button>
            <Button 
              variant="heroSecondary" 
              size="lg" 
              className="group"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;