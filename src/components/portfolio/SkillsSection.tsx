import { 
  Server, 
  Shield, 
  Database, 
  Cloud, 
  Network, 
  Monitor, 
  Code, 
  Settings,
  HardDrive,
  Cpu,
  Workflow,
  Lock
} from "lucide-react";

const skills = [
  { name: "Windows Server", icon: Server, category: "Systems" },
  { name: "Linux", icon: Server, category: "Systems" },
  { name: "VMware ESXi", icon: Cpu, category: "Virtualization" },
  { name: "Active Directory", icon: Database, category: "Identity" },
  { name: "Microsoft 365", icon: Cloud, category: "Cloud" },
  { name: "Google Workspace", icon: Cloud, category: "Cloud" },
  { name: "Network Management & Monitoring", icon: Network, category: "Networking" },
  { name: "Firewall Management & Optimization", icon: Shield, category: "Security" },
  { name: "Zabbix", icon: Monitor, category: "Monitoring" },
  { name: "PRTG", icon: Monitor, category: "Monitoring" },
  { name: "Veeam Backup", icon: HardDrive, category: "Backup" },
  { name: "Python", icon: Code, category: "Automation" },
  { name: "PowerShell", icon: Code, category: "Automation" },
  { name: "Bash", icon: Code, category: "Automation" },
  { name: "IP Cameras & NVR", icon: Monitor, category: "Security" },
  { name: "Tourniquet Access System", icon: Lock, category: "Security" },
  { name: "VoIP Systems", icon: Network, category: "Communication" }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Technical Skills
          </h2>
          <p className="font-body text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Comprehensive expertise across enterprise IT infrastructure, cloud technologies, and automation tools.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  key={skill.name}
                  className="group bg-card rounded-xl p-6 shadow-professional hover:shadow-card transition-all duration-300 hover:scale-105 border border-border"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">
                        {skill.name}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">
                        {skill.category}
                      </p>
                    </div>
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

export default SkillsSection;