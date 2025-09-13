import React from "react";
import { Card, CardContent } from "../ui/card";
import { Code, Bot, Server, Shield } from "lucide-react";
import { DetailedFeaturesSectionProps } from "./DetailedFeaturesSection.ts";

const DetailedFeaturesSection: React.FC<DetailedFeaturesSectionProps> = () => {
  const features = [
    {
      icon: Code,
      title: "Ivy Framework",
      description:
        "Our core development framework optimized for speed and reliability",
    },
    {
      icon: Bot,
      title: "AI Development Tools",
      description:
        "Cutting-edge artificial intelligence for automated code generation",
    },
    {
      icon: Server,
      title: "Full-Service Infrastructure",
      description: "Complete authentication, database, and hosting solutions",
    },
    {
      icon: Shield,
      title: "ISO Compliance Built-In",
      description: "Every application meets enterprise compliance standards",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 overflow-hidden">
              {/* Placeholder for the shield/security image */}
              <div className="relative z-10 flex items-center justify-center h-96">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Shield className="w-24 h-24 text-primary" />
                </div>
              </div>

              {/* Background Pattern */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: "40px 40px",
                }}
              ></div>

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-primary/10 rounded-full animate-pulse delay-300"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary/10 rounded-full animate-pulse delay-700"></div>
              <div className="absolute top-1/2 left-4 w-8 h-8 bg-primary/10 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Transforming Business Software Development
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At SpaceCorps Technology, we've cracked the code on rapid
              enterprise application development. By combining our proprietary
              Ivy Framework with state-of-the-art AI development tools, we
              deliver what traditionally takes months in just minutes.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card
                    key={index}
                    className="border-border/50 bg-card/30 backdrop-blur-sm"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <IconComponent className="w-6 h-6 text-primary" />
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-muted/30 rounded-lg border border-border/50">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">
                  The SpaceCorps Advantage:
                </strong>{" "}
                We don't just build software faster — we build it better. Our
                clients receive fully-owned, secure applications with complete
                source code, enterprise-grade security, and ongoing support. No
                vendor lock-in, no hidden costs, no compromises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { DetailedFeaturesSection };
