import { Calendar, Users, TrendingDown, DollarSign, Shield, Workflow } from "lucide-react";

const projects = [
  {
    title: "Exchange Migration to Microsoft 365 Hybrid",
    description: "Led the migration of on-premises Exchange Server to Microsoft 365 hybrid environment, ensuring seamless email continuity and enhanced collaboration capabilities.",
    impact: "600+ users",
    icon: Users,
    highlights: [
      "Zero email downtime during migration",
      "Improved collaboration tools access",
      "Enhanced security and compliance",
      "Cost optimization through cloud services"
    ]
  },
  {
    title: "VMware Infrastructure Optimization",
    description: "Redesigned and optimized VMware ESXi infrastructure, improving resource utilization and system performance across the organization.",
    impact: "20% downtime reduction",
    icon: TrendingDown,
    highlights: [
      "Consolidated server resources",
      "Implemented high availability",
      "Automated backup strategies",
      "Enhanced disaster recovery planning"
    ]
  },
  {
    title: "Comprehensive Monitoring Implementation",
    description: "Deployed and configured enterprise monitoring solutions using Zabbix and PRTG to proactively identify and resolve infrastructure issues.",
    impact: "20% downtime reduction",
    icon: TrendingDown,
    highlights: [
      "Real-time infrastructure monitoring",
      "Automated alert systems",
      "Performance trend analysis",
      "Proactive issue resolution"
    ]
  },
  {
    title: "IT Process Automation",
    description: "Developed comprehensive automation solutions using PowerShell, Python, and Bash scripts to streamline routine IT tasks and reduce manual workload.",
    impact: "15% cost reduction",
    icon: DollarSign,
    highlights: [
      "Automated user provisioning with PowerShell",
      "System health monitoring with Bash scripts",
      "Python-based backup verification automation",
      "Cross-platform report generation automation"
    ]
  },
  {
    title: "Network Security & Firewall Management",
    description: "Implemented and managed comprehensive firewall solutions and network security protocols to protect organizational assets.",
    impact: "Enhanced security posture",
    icon: Shield,
    highlights: [
      "Multi-layer security implementation",
      "VPN infrastructure setup",
      "Security policy enforcement",
      "Incident response procedures"
    ]
  },
  {
    title: "Comprehensive Access Control System",
    description: "Implemented and managed multi-layered access control systems including tourniquet access systems, IP cameras, and NVR solutions for enhanced security.",
    impact: "Enhanced security posture",
    icon: Workflow,
    highlights: [
      "Tourniquet access system deployment",
      "IP camera network implementation",
      "NVR system configuration and monitoring",
      "Integrated security management platform"
    ]
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Key Projects & Achievements
          </h2>
          <p className="font-body text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Proven track record of delivering impactful IT solutions that drive business value and operational excellence.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div 
                  key={project.title}
                  className="bg-card rounded-xl p-8 shadow-professional hover:shadow-card transition-all duration-300 border border-border group"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full font-body text-sm font-medium">
                        {project.impact}
                      </div>
                    </div>
                  </div>
                  
                  <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="font-body text-sm text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;