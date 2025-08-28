import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { put } from "@vercel/otar-chargeishvili-page-blob";

const ResumeSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card rounded-2xl p-12 shadow-professional border border-border">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-accent" />
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Download My Resume
            </h2>
            
            <p className="font-body text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Get a comprehensive overview of my technical expertise, professional experience, 
              and achievements in IT system administration and infrastructure management.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  <span className="font-body">5+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  <span className="font-body">Enterprise Projects</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  <span className="font-body">Proven Results</span>
                </div>
              </div>
            </div>
            
            <Button 
                  variant="hero" 
                  size="lg" 
                  className="group"
                  onClick={() => {
                  const link = document.createElement('a');
                  link.href = 'https://yibjmvstrsmsjkcq.public.blob.vercel-storage.com/resume.pdf';
                  link.download = 'Otar_Chargeishvili_Resume.pdf';
                  link.click();
                  }}
                  >
  <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
  Download Resume (PDF)
</Button>
            
            <p className="font-body text-sm text-muted-foreground mt-4">
              Updated January 2025 • PDF Format • 2 Pages
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
