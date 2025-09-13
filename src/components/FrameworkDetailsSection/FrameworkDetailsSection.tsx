import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Check } from "lucide-react";
import {
  FrameworkDetailsSectionProps,
  CapabilityListProps,
} from "./FrameworkDetailsSection.ts";

const CapabilityList: React.FC<CapabilityListProps> = ({
  title,
  capabilities,
}) => {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {capabilities.map((capability, index) => (
          <div key={index} className="flex items-center gap-3">
            <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
            <span className="text-muted-foreground text-sm">{capability}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

const FrameworkDetailsSection: React.FC<FrameworkDetailsSectionProps> = () => {
  const capabilityGroups: CapabilityListProps[] = [
    {
      title: "Ivy Framework Capabilities",
      capabilities: [
        "Rapid prototyping and development",
        "Cross-platform compatibility",
        "Built-in security features",
        "Automated testing and validation",
        "Scalable architecture patterns",
      ],
    },
    {
      title: "AI Development Tools",
      capabilities: [
        "Intelligent code generation",
        "Automated optimization",
        "Pattern recognition and implementation",
        "Quality assurance automation",
        "Documentation generation",
      ],
    },
    {
      title: "Infrastructure Services",
      capabilities: [
        "Cloud-native deployment",
        "Automatic scaling",
        "Security monitoring",
        "Performance optimization",
        "Backup and recovery",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Framework & Technology Details
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Deep dive into the technology that powers our rapid development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilityGroups.map((group, index) => (
            <CapabilityList key={index} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { FrameworkDetailsSection };
