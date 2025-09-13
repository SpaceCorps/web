import React from "react";
import { HeroSection } from "../components/HeroSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { DetailedFeaturesSection } from "../components/DetailedFeaturesSection";
import { ServicesSection } from "../components/ServicesSection";
import { PricingSection } from "../components/PricingSection";
import { PortfolioSection } from "../components/PortfolioSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { CTASection } from "../components/CTASection";

const Home: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <DetailedFeaturesSection />
      <ServicesSection />
      <PricingSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
};

export { Home };
