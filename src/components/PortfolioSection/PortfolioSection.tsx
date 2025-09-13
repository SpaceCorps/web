import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { PortfolioSectionProps } from "./PortfolioSection.ts";

const PortfolioSection: React.FC<PortfolioSectionProps> = () => {
  const projects = [
    {
      title: "Dog shelter management system",
      category: "Animal Shelter",
      developmentTime: "10 hours",
      ourCost: "1,000",
      traditionalCost: "5,000",
      features: "Dashboard, Inventory Management, Donation Management",
      savings: "80%",
    },
    {
      title: "Medical clinic record management system",
      category: "Professional Services",
      developmentTime: "2 weeks",
      ourCost: "5,000",
      traditionalCost: "50,000",
      features:
        "Patient record tracking, AI assisted diagnosis and voice transcription",
      savings: "90%",
    },
    {
      title: "Several payment providers integration",
      category: "Accounting",
      developmentTime: "40 hours",
      ourCost: "10,000",
      traditionalCost: "80,000",
      features:
        "Dashboard, Invoice Management, Syncronization between multiple providers",
      savings: "87.5%",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Work Speaks for Itself
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our growing portfolio of successful business applications
            delivered across various industries
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  >
                    {project.savings} savings
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground">
                      Development Time
                    </div>
                    <div className="font-semibold text-foreground">
                      {project.developmentTime}
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Our Cost</div>
                    <div className="font-semibold text-green-600 dark:text-green-400">
                      ${project.ourCost}
                    </div>
                  </div>
                </div>

                <div className="text-sm">
                  <div className="text-muted-foreground mb-1">
                    Traditional Cost
                  </div>
                  <div className="font-semibold text-red-600 dark:text-red-400 line-through">
                    ${project.traditionalCost}
                  </div>
                </div>

                <div className="text-sm">
                  <div className="text-muted-foreground mb-2">Key Features</div>
                  <p className="text-foreground leading-relaxed">
                    {project.features}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="px-8">
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export { PortfolioSection };
