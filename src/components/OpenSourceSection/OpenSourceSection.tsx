import React from "react";
import { Button } from "../ui/button";
import { Github } from "lucide-react";
import { OpenSourceSectionProps } from "./OpenSourceSection.ts";

const OpenSourceSection: React.FC<OpenSourceSectionProps> = () => {
  return (
    <section className="pt-4 pb-10 px-4 sm:px-6 lg:px-8 bg-muted/20">
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
        <Button
          variant="default"
          size="lg"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90"
        >
          <Github className="h-5 w-5" />
          Visit Our GitHub
        </Button>
      </div>
    </section>
  );
};

export { OpenSourceSection };
