import React from "react";
import { Button } from "../ui/button";
import { Github } from "lucide-react";
import { OpenSourceSectionProps } from "./OpenSourceSection.ts";

const OpenSourceSection: React.FC<OpenSourceSectionProps> = () => {
  return (
    <section className="pt-4 pb-10 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-foreground mb-4">
          Our Open Source Contributions
        </h2>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-15 font-semibold">
          Visit our GitHub organization to explore our open-source projects,
          framework contributions, and technical demonstrations. The SpaceCorps
          team actively contributes to the developer community while building
          cutting-edge solutions for our clients.
        </p>
        <a
          href="https://github.com/spacecorps"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our GitHub organization"
        >
          <Button
            variant="default"
            size="lg"
            className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-100"
          >
            <Github className="h-5 w-5 stroke-3" />
            Visit Our GitHub
          </Button>
        </a>
      </div>
    </section>
  );
};

export { OpenSourceSection };
