import React from "react";
import { PortfolioHero } from "../components/PortfolioHero";
import { OpenSourceSection } from "../components/OpenSourceSection";
import { FeaturedProjectsSection } from "../components/FeaturedProjectsSection";
import { TechnologyDemosSection } from "../components/TechnologyDemosSection";
import { FrameworkDetailsSection } from "../components/FrameworkDetailsSection";

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-16">
        <PortfolioHero />
        <OpenSourceSection />
        <FeaturedProjectsSection />
        <TechnologyDemosSection />
        <FrameworkDetailsSection />
      </main>
    </div>
  );
};

export { Portfolio };
