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
        "We offer fastest development time with industry leading security and quality. We can both create new applications from scratch or update existing ones towards modern standards.",
    },
    {
      icon: Lock,
      title: "Enterprise Security & Compliance",
      description:
        "Every application we build includes enterprise-grade security features and ISO compliance standards built-in from day one. You manage your own data.",
    },
    {
      icon: Users,
      title: "Authentication & User Management",
      description:
        "We support various authentication and authorization solutions. Seamplessly integrate with your existing systems and databases.",
    },
    {
      icon: Database,
      title: "Database Design & Management",
      description:
        "We use AI to ~100x faster understand your data and design the best applications for your business. Our tools allow us to easily connect several data sources together.",
    },
    {
      icon: Cloud,
      title: "Tool Hosting & Infrastructure",
      description:
        "With us, you have full flexibility to choose your own hosting and infrastructure. We support various cloud providers and self-hosted solutions. We can also host for you.",
    },
    {
      icon: Wrench,
      title: "Ongoing Support & Maintenance",
      description:
        "We will be your dedicated team of developers and maintainers. We will be available to you for any questions or updates you need. We also give you full ownership of your source code.",
    },
  ];

  return (
    <section className="py-20 bg-transparent">
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
                className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50"
              >
                <CardHeader className="pb-4">
                  <IconComponent className="w-10 h-10 text-primary" />
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
