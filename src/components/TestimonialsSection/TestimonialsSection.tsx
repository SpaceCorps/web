import React from "react";
import { Card, CardContent } from "../ui/card";
import { Star } from "lucide-react";
import { TestimonialsSectionProps } from "./TestimonialsSection.ts";

const TestimonialsSection: React.FC<TestimonialsSectionProps> = () => {
  const testimonials = [
    {
      rating: 5,
      text: "SpaceCorps Technology delivered our complete business management system in under an hour. What would have taken our development team 6 months was completed in 45 minutes.",
      author: "Tech Startup CEO",
      company: "Tech Startup",
    },
    {
      rating: 5,
      text: "The cost savings were incredible. We got enterprise-grade software for a fraction of what we budgeted. The Ivy Framework approach is revolutionary.",
      author: "Manufacturing Director",
      company: "Manufacturing Company",
    },
    {
      rating: 5,
      text: "Not only did they deliver fast, but the application has been rock-solid in production. The built-in ISO compliance saved us months of additional work.",
      author: "Healthcare Administrator",
      company: "Healthcare Organization",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? "text-foreground fill-foreground"
            : "text-gray-300 dark:text-gray-600"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">
                    — {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { TestimonialsSection };
