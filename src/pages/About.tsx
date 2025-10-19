import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-background/90">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            }}
          >
            <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                About SpaceCorps Technology
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
                SpaceCorps Technology was born from a simple idea: building
                business software should be fast and affordable.
              </p>
            </div>
          </div>

          {/* Overlay Text */}
          <div className="absolute bottom-20 right-20 z-10 max-w-md">
            <div className="bg-black/80 backdrop-blur-sm p-6 rounded-lg">
              <p className="text-white text-sm leading-relaxed">
                We saw software projects take months, cost a fortune, and miss
                the mark. Using AI tools and the Ivy Framework, we turn months
                of development into minutes. Today, teams worldwide launch
                secure, enterprise-grade apps faster than ever.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Speed Card */}
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Speed Without Sacrificing Quality
                  </h3>
                  <p className="text-muted-foreground">
                    Fast delivery without sacrificing quality or security
                    standards.
                  </p>
                </CardContent>
              </Card>

              {/* Transparent Pricing Card */}
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Transparent Pricing
                  </h3>
                  <p className="text-muted-foreground">
                    No hidden costs or surprise fees — clear, upfront pricing
                    always.
                  </p>
                </CardContent>
              </Card>

              {/* Client Ownership Card */}
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Client Ownership
                  </h3>
                  <p className="text-muted-foreground">
                    You own your code and data completely — no vendor lock-in.
                  </p>
                </CardContent>
              </Card>

              {/* Innovation First Card */}
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Innovation First
                  </h3>
                  <p className="text-muted-foreground">
                    Always pushing the boundaries of what's possible in software
                    development.
                  </p>
                </CardContent>
              </Card>

              {/* Community Focused Card */}
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Community Focused
                  </h3>
                  <p className="text-muted-foreground">
                    Contributing back to the developer community through open
                    source.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto">
            <div className="flex items-center gap-12">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                    Our Mission
                  </h2>
                </div>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    To democratize enterprise software development by making
                    high-quality, secure, ISO-compliant applications accessible
                    to businesses of all sizes through rapid, AI-powered
                    development.
                  </p>
                  <p>
                    We believe that every business deserves access to
                    enterprise-grade software solutions without the traditional
                    barriers of time, cost, and complexity. Our mission drives
                    us to continuously innovate and push the boundaries of
                    what's possible in software development.
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Laptop with data visualizations"
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Who We Serve
              </h2>
              <p className="text-xl text-muted-foreground">
                Supporting businesses across industries and scales
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Business Sizes
                  </h3>
                  <p className="text-muted-foreground">
                    Startups, Mid-Market, Enterprise, Government Agencies
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Industries
                  </h3>
                  <p className="text-muted-foreground">
                    Technology, Healthcare, Manufacturing, Professional
                    Services, E-commerce, Finance, Education, Government
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Global Reach
                  </h3>
                  <p className="text-muted-foreground">
                    Based in Estonia, Serving Clients Worldwide
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                Our Team
              </h2>
            </div>

            <div className="flex items-start gap-12 mb-12">
              <div className="flex-1">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Devon Lane"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Devon Lane
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-muted rounded-lg"
                ></div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Behind the Speed Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                The Technology Behind the Speed
              </h2>
              <p className="text-xl text-muted-foreground">
                Understanding the technical innovations that make rapid
                development possible
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-mono text-lg">
                    &lt; &gt;
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Ivy Framework (.NET)
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our core desktop-first framework built on Microsoft .NET for
                    building high-performance business applications. The Ivy
                    Framework enables rapid development of enterprise desktop
                    applications while maintaining the security and compliance
                    standards required for self-hosted environments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-mono text-lg">_&gt;</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    AI-Powered .NET Development
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our advanced AI development tools are specifically optimized
                    for .NET desktop application development, handling the heavy
                    lifting of code generation, optimization, and testing,
                    allowing us to deliver complex desktop applications in a
                    fraction of traditional timeframes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Flexible Deployment Solutions
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you need complete on-premises control with
                    self-hosted deployment or the convenience of cloud hosting,
                    our .NET applications are designed to work seamlessly in
                    both environments with optional cloud synchronization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Response Times Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                Response Times
              </h2>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center py-4 border-b border-border">
                  <span className="text-lg text-foreground">
                    Email inquiries
                  </span>
                  <span className="text-lg font-semibold text-foreground">
                    Within 4 hours
                  </span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-border">
                  <span className="text-lg text-foreground">
                    Project quotes
                  </span>
                  <span className="text-lg font-semibold text-foreground">
                    Within 24 hours
                  </span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-border">
                  <span className="text-lg text-foreground">
                    Emergency support
                  </span>
                  <span className="text-lg font-semibold text-foreground">
                    Within 1 hour
                  </span>
                </div>
              </div>

              <div className="text-center">
                <Button size="lg" className="px-8 py-3 text-lg font-semibold">
                  Contact Us Today
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export { About };
