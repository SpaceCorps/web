import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About SpaceCorps Technology
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Coming soon - Learn more about our team, mission, and vision for
              the future of rapid application development.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export { About };
