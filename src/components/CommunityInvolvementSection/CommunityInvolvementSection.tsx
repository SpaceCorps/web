import React from "react";
import { CheckCircle } from "lucide-react";
import {
  CommunityInvolvementSectionProps,
  ContributionItemProps,
} from "./CommunityInvolvementSection.ts";

const ContributionItem: React.FC<ContributionItemProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex items-start gap-4">
      <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
      <div>
        <h3 className="text-white font-semibold mb-1">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
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
      title: "Development automation tools",
      description: "CI/CD pipelines and deployment automation",
    },
    {
      title: "Security and compliance utilities",
      description: "Open-source security scanning and compliance tools",
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
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Community Involvement
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The SpaceCorps team actively contributes to the open-source
            community, sharing tools, libraries, and frameworks that benefit
            developers worldwide.
          </p>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold text-foreground">
            Our Contributions:
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contributions.map((contribution, index) => (
            <ContributionItem
              key={index}
              title={contribution.title}
              description={contribution.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { CommunityInvolvementSection };
