import React from "react";
import { Button } from "../ui/button";
import { CTASectionProps } from "./CTASection.ts";

const CTASection: React.FC<CTASectionProps> = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how SpaceCorps Technology can deliver your next
            business application in minutes, not months.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-8 py-3 text-lg font-semibold">
              Schedule Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg font-semibold"
            >
              Get Instant Quote
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-foreground mb-2">
                Free
              </div>
              <div className="text-sm text-muted-foreground">
                Initial Consultation
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground mb-2">24h</div>
              <div className="text-sm text-muted-foreground">
                Quote Turnaround
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground mb-2">
                100%
              </div>
              <div className="text-sm text-muted-foreground">
                Satisfaction Guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CTASection };
