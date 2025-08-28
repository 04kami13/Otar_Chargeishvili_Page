import { Linkedin, Mail, Briefcase, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-footer text-footer-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="font-heading text-2xl font-bold">
                Otar Chargeishvili
              </h3>
              <p className="font-body text-footer-foreground/80 leading-relaxed">
                IT System & Infrastructure Administrator dedicated to optimizing enterprise 
                IT environments and delivering reliable technology solutions.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-heading text-lg font-semibold">Quick Links</h4>
              <nav className="space-y-2">
                <a href="#about" className="font-body text-footer-foreground/80 hover:text-footer-foreground transition-colors block">
                  About Me
                </a>
                <a href="#skills" className="font-body text-footer-foreground/80 hover:text-footer-foreground transition-colors block">
                  Technical Skills
                </a>
                <a href="#projects" className="font-body text-footer-foreground/80 hover:text-footer-foreground transition-colors block">
                  Projects & Achievements
                </a>
                <a href="#contact" className="font-body text-footer-foreground/80 hover:text-footer-foreground transition-colors block">
                  Contact
                </a>
              </nav>
            </div>
            
            {/* Professional Links */}
            <div className="space-y-4">
              <h4 className="font-heading text-lg font-semibold">Connect With Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/otar-chargeishvili/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-footer-foreground/10 rounded-lg flex items-center justify-center hover:bg-footer-foreground/20 transition-colors group"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5 text-footer-foreground group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://www.upwork.com/freelancers/otarchargeishvili?mp_source=share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-footer-foreground/10 rounded-lg flex items-center justify-center hover:bg-footer-foreground/20 transition-colors group"
                  aria-label="Upwork Profile"
                >
                  <Briefcase className="w-5 h-5 text-footer-foreground group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="mailto:otarchargeishvili@gmail.com"
                  className="w-10 h-10 bg-footer-foreground/10 rounded-lg flex items-center justify-center hover:bg-footer-foreground/20 transition-colors group"
                  aria-label="Email Contact"
                >
                  <Mail className="w-5 h-5 text-footer-foreground group-hover:scale-110 transition-transform" />
                </a>
              </div>
              
              <div className="pt-4">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={scrollToTop}
                  className="text-footer-foreground/80 hover:text-footer-foreground hover:bg-footer-foreground/10"
                >
                  <ArrowUp className="w-4 h-4 mr-2" />
                  Back to Top
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="border-t border-footer-foreground/10">
        <div className="container mx-auto px-6 py-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-body text-footer-foreground/60 text-sm text-center md:text-left">
              © 2025 Otar Chargeishvili – IT System & Infrastructure Administrator. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a 
                href="https://www.linkedin.com/in/otar-chargeishvili/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-body text-footer-foreground/60 hover:text-footer-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://www.upwork.com/freelancers/otarchargeishvili?mp_source=share" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-body text-footer-foreground/60 hover:text-footer-foreground transition-colors"
              >
                Upwork
              </a>
              <a 
                href="mailto:otarchargeishvili@gmail.com"
                className="font-body text-footer-foreground/60 hover:text-footer-foreground transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;