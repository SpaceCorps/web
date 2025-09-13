import React from "react";
import { Card, CardContent } from "../ui/card";
import { Zap, DollarSign, Shield, CheckCircle, Terminal } from "lucide-react";
import { FeaturesSectionProps } from "./FeaturesSection.ts";

const FeaturesSection: React.FC<FeaturesSectionProps> = ({}) => {
  const features = [
    {
      icon: Zap,
      title: "10x Faster Development",
      description: "Minutes instead of months",
      detail: "Reduced labor costs passed to you",
    },
    {
      icon: DollarSign,
      title: "90% Cost Reduction",
      description: "Guaranteed 50% savings",
      detail: "Typical savings of 90% off market rates",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Fully secure, self-owned solutions",
      detail: "Built-in compliance from day one",
    },
    {
      icon: CheckCircle,
      title: "ISO Compliant",
      description: "Built-in compliance from day one",
      detail: "Every application meets enterprise compliance standards",
    },
    {
      icon: Terminal,
      title: "AI-Powered",
      description: "Leveraging cutting-edge AI development tools",
      detail:
        "Cutting-edge artificial intelligence for automated code generation",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose SpaceCorps Technology?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the next generation of business software development
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {feature.description}
                  </p>
                  <p className="text-xs text-muted-foreground/80">
                    {feature.detail}
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

export { FeaturesSection };
