import React from "react";
import { PortfolioHeroProps } from "./PortfolioHero.ts";

const PortfolioHero: React.FC<PortfolioHeroProps> = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 tracking-tight">
          SpaceCorps Technology Portfolio
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Showcasing Innovation in Rapid Business Application Development
        </p>
      </div>
    </section>
  );
};

export { PortfolioHero };
