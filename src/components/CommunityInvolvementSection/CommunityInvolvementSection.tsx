import React from "react";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import {
  CommunityInvolvementSectionProps,
  ContributionItemProps,
} from "./CommunityInvolvementSection.ts";

const ContributionItem: React.FC<ContributionItemProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex items-center gap-4">
      <CheckCircle className="h-6 w-6 text-white flex-shrink-0 stroke-3" />
      <div>
        <h3 className="text-white mb-1">{title}</h3>
        <p className="text-gray-400 text-xs">{description}</p>
      </div>
    </div>
  );
};

const CommunityInvolvementSection: React.FC<
  CommunityInvolvementSectionProps
> = () => {
  const contributions: ContributionItemProps[] = [
    {
      title: "Framework optimizations and plugins",
      description: "Performance improvements and extended functionality",
    },
    {
      title: "Security and compliance utilities",
      description: "Open-source security scanning and compliance tools",
    },
    {
      title: "Development automation tools",
      description: "CI/CD pipelines and deployment automation",
    },
    {
      title: "Documentation and best practices",
      description: "Comprehensive guides and development standards",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-6">
            Community Involvement
          </h2>
          <p className="text-lg font-semibold text-muted-foreground max-w-170 mx-auto">
            The SpaceCorps team actively contributes to the open-source
            community, sharing tools, libraries, and frameworks that benefit
            developers worldwide.
          </p>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-foreground">
            Our Contributions:
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-60 gap-y-8 max-w-6xl mx-auto">
          {contributions.map((contribution, index) => (
            <ContributionItem
              key={index}
              title={contribution.title}
              description={contribution.description}
            />
          ))}
        </div>

        {/* Get Involved Card */}
        <div className="py-30 bg-background">
          <Card>
            <CardContent className="pt-12 pb-12 text-center">
              <h3 className="text-3xl font-semibold text-foreground mb-6">
                Get Involved
              </h3>
              <p className="text-lg font-semibold text-muted-foreground mb-8 max-w-3xl mx-auto">
                Join our growing community of developers and contributors.
                Whether you're looking to use our tools or contribute to their
                development, we welcome collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-x-10 gap-y-4 justify-center items-center">
                <a href="https://github.com/spacecorps">
                  <button className="bg-white text-black px-11 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Explore GitHub
                  </button>
                </a>

                <a href="#" className="text-primary">
                  Join Our Community
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { CommunityInvolvementSection };
