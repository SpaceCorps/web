import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Check, Clock, Bot, Zap, ArrowRight } from "lucide-react";
import { PricingSectionProps } from "./PricingSection.ts";

const PricingSection: React.FC<PricingSectionProps> = () => {
  const advantages = [
    {
      icon: Clock,
      title: "~10x Faster Development",
      description:
        "Reduced labor costs passed to you. We simply need a lot less time to do most of the tasks thanks to our stack.",
    },
    {
      icon: Bot,
      title: "AI Automation",
      description:
        "Minimal manual coding required. We use AI tools that adapt to your needs. We use smart automations to reduce all of our repetitive tasks.",
    },
    {
      icon: Zap,
      title: "Streamlined Process",
      description:
        "No lengthy requirement gathering or revision cycles. We have a rapid capability to deliver MVPs.",
    },
    {
      icon: ArrowRight,
      title: "Direct Delivery",
      description:
        "We love fun projects. We will deliver your project directly to you. No middlemen or markup chains.",
    },
  ];

  const guarantees = [
    "Minimum 50% savings compared to traditional development",
    "Typical savings of 90% off market rates",
    "Fixed-price quotes with no hidden costs",
    "Complete ownership of source code included",
    "Flexible maintanance and support packages",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Transparent, Competitive Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Why we're ~90% less expensive than traditional development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Why We're Less Expensive */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              How We Deliver ~90% Cost Savings:
            </h3>

            <div className="space-y-6">
              {advantages.map((advantage, index) => {
                const IconComponent = advantage.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {advantage.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Guaranteed Savings */}
          <div>
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Badge
                    variant="outline"
                    className="mb-4 border-primary/30 text-primary"
                  >
                    Guaranteed Savings:
                  </Badge>
                  <div className="text-4xl font-bold text-foreground mb-2">
                    Up to 90%
                  </div>
                  <p className="text-muted-foreground">
                    Less than traditional development costs
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {guarantees.map((guarantee, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {guarantee}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    Request Quote
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    Schedule Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Save 90% on Your Next Project?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Get Free Cost Analysis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PricingSection };
