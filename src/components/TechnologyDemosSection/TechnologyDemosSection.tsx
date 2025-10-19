import React from "react";
import { Card, CardContent } from "../ui/card";
import { Zap, Database, Shield, Code, Upload, Users } from "lucide-react";
import {
  TechnologyDemosSectionProps,
  TechDemoCardProps,
} from "./TechnologyDemosSection.ts";

const TechDemoCard: React.FC<TechDemoCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Card>
      <CardContent className="p-6 text-center">
        <div className="mb-4 flex justify-center">
          <div className="p-3 rounded-full bg-primary/10 text-primary">
            {icon}
          </div>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

const TechnologyDemosSection: React.FC<TechnologyDemosSectionProps> = () => {
  const demos: TechDemoCardProps[] = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-time Application Generation",
      description: "Watch applications come to life in real-time",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Schema Creation",
      description: "Automated database design and optimization",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Authentication System Implementation",
      description: "Complete security implementation in minutes",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "API Development & Documentation",
      description: "Automatic API creation with full documentation",
    },
    {
      icon: <Upload className="h-6 w-6" />,
      title: "Deployment & Hosting Automation",
      description: "One-click deployment to production",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "User Management Systems",
      description: "Complete user lifecycle management",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-2">
            Technology Demonstrations
          </h2>
          <p className="text-lg text-muted-foreground max-w-108 mx-auto">
            Experience the power of our Ivy Framework through interactive
            demonstrations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demos.map((demo, index) => (
            <TechDemoCard key={index} {...demo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { TechnologyDemosSection };
