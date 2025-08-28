import professionalPhoto from "@/assets/professional-photo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                With over 5 years of experience in IT system administration and infrastructure management, 
                I specialize in optimizing enterprise IT environments, implementing robust security solutions, 
                and automating critical business processes.
              </p>
              
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                My expertise spans across Windows Server environments, Linux systems, virtualization platforms, 
                and cloud technologies. I have successfully managed and supported IT infrastructure for companies 
                with over 600 users across multiple locations, ensuring seamless operations and optimal performance.
              </p>
              
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-semibold text-foreground">Core Strengths:</h3>
                <ul className="font-body text-muted-foreground space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span>Problem-solving and analytical thinking for complex IT challenges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span>Mentoring junior team members and knowledge sharing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span>Clear communication with technical and non-technical stakeholders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span>Project management and cross-functional collaboration</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Professional Photo */}
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src={professionalPhoto} 
                  alt="Otar Chargeishvili - Professional Photo" 
                  className="w-80 h-80 object-cover rounded-2xl shadow-card"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;