import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { Mail, Linkedin, Briefcase, MessageCircle, Phone, MapPin } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactSection = () => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Create mailto link with form data
    const subject = `Portfolio Contact: ${data.name}`;
    const body = `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`;
    const mailtoLink = `mailto:otarchargeishvili@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.open(mailtoLink);
    
    // Show success message
    toast({
      title: "Email client opened!",
      description: "Your message has been prepared in your email client. Please send it to complete the contact.",
    });
    
    // Reset form
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="font-body text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Ready to optimize your IT infrastructure? Let's discuss how I can help 
              your organization achieve greater efficiency and reliability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-primary-foreground/5 rounded-2xl p-8 backdrop-blur-sm border border-primary-foreground/10">
              <h3 className="font-heading text-2xl font-semibold mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 mr-3" />
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-primary-foreground font-body">Name</Label>
                  <Input 
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Your name"
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-primary-foreground font-body">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    placeholder="your.email@example.com"
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-primary-foreground font-body">Message</Label>
                  <Textarea 
                    id="message"
                    {...register("message", { required: "Message is required" })}
                    placeholder="Tell me about your project or how I can help..."
                    rows={5}
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 resize-none"
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                </div>
                
                <Button type="submit" variant="heroSecondary" size="lg" className="w-full">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-2xl font-semibold mb-6">
                  Get In Touch
                </h3>
                <p className="font-body text-primary-foreground/80 leading-relaxed mb-8">
                  I'm always interested in discussing new opportunities, challenging projects, 
                  and ways to help organizations improve their IT infrastructure.
                </p>
              </div>
              
              {/* Contact Methods */}
              <div className="space-y-6">
                <a 
                  href="mailto:otarchargeishvili@gmail.com"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold">Email</h4>
                    <p className="font-body text-primary-foreground/80">otarchargeishvili@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/otar-chargeishvili/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Linkedin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold">LinkedIn</h4>
                    <p className="font-body text-primary-foreground/80">Connect with me professionally</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.upwork.com/freelancers/otarchargeishvili?mp_source=share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Briefcase className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold">Upwork</h4>
                    <p className="font-body text-primary-foreground/80">Hire me for your projects</p>
                  </div>
                </a>
              </div>
              
              {/* Availability */}
              <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
                <h4 className="font-heading font-semibold mb-3 flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-accent" />
                  Availability
                </h4>
                <p className="font-body text-primary-foreground/80 text-sm">
                  Available for full-time positions, contract work, and consulting projects. 
                  Response time: Within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;