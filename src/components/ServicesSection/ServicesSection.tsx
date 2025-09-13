import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Rocket, Lock, Users, Database, Cloud, Wrench } from "lucide-react";
import { ServicesSectionProps } from "./ServicesSection.ts";

const ServicesSection: React.FC<ServicesSectionProps> = () => {
  const services = [
    {
      icon: Rocket,
      title: "Rapid Application Development",
      description:
        "Transform your business processes into fully-functional applications in minutes. Our AI-powered Ivy Framework handles everything from user interface design to backend architecture.",
    },
    {
      icon: Lock,
      title: "Enterprise Security & Compliance",
      description:
        "Every application we build includes enterprise-grade security features and ISO compliance standards built-in from day one. Your data stays yours.",
    },
    {
      icon: Users,
      title: "Authentication & User Management",
      description:
        "Complete authentication systems with role-based access control, multi-factor authentication, and seamless user management.",
    },
    {
      icon: Database,
      title: "Database Design & Management",
      description:
        "Optimized database architectures designed for performance, scalability, and security. We handle everything from design to deployment.",
    },
    {
      icon: Cloud,
      title: "Hosting & Infrastructure",
      description:
        "Reliable, secure hosting solutions with automatic scaling, backup systems, and 99.9% uptime guarantee.",
    },
    {
      icon: Wrench,
      title: "Ongoing Support & Maintenance",
      description:
        "Comprehensive support packages ensuring your applications stay current, secure, and optimized.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for modern business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { ServicesSection };
