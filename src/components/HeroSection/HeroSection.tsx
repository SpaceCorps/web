import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { HeroSectionProps } from "./HeroSection.ts";
import heroImage from "../../assets/hero.JPEG";

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-background/90 ${className || ""}`}
    >
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
      </div>

      {/* Subtle animated overlay elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="mb-8">
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
              Building the Future of Business Software
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Revolutionize Your Business
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              with AI-Powered
            </span>
            <br />
            Development
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get fully secure, self-owned, ISO-compliant business applications
            delivered in{" "}
            <span className="font-semibold text-white">
              minutes, not months
            </span>
            . Our cutting-edge Ivy Framework combined with advanced AI tools
            delivers enterprise-grade software at 50% of competitor pricing —
            often just 10% of traditional costs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="px-8 py-3 text-lg font-semibold">
              Get Started Today
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg font-semibold"
            >
              View Portfolio
            </Button>
          </div>

          {/* Stats or Additional Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                10x
              </div>
              <div className="text-sm text-gray-300">Faster Development</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                90%
              </div>
              <div className="text-sm text-gray-300">Cost Reduction</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                100%
              </div>
              <div className="text-sm text-gray-300">ISO Compliant</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
