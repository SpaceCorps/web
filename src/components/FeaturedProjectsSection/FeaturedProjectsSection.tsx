import React from "react";
import { Badge } from "../ui/badge";
import { Check } from "lucide-react";
import {
  FeaturedProjectsSectionProps,
  ProjectCardProps,
} from "./FeaturedProjectsSection.ts";

const ProjectCard: React.FC<ProjectCardProps & { index: number }> = ({
  title,
  description,
  category,
  traditionalCost,
  ourCost,
  features,
  technologies,
  image,
  index,
}) => {
  const isEven = index % 2 === 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
      {/* Project Image */}
      <div
        className={`${isEven ? "order-2 lg:order-1" : "order-2 lg:order-2"}`}
      >
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 aspect-video flex items-center justify-center relative overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center border border-gray-700">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-600 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💻</span>
                </div>
                <span className="text-gray-400 text-sm">
                  Enterprise Dashboard
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Project Details */}
      <div
        className={`${isEven ? "order-1 lg:order-2" : "order-1 lg:order-1"} space-y-6`}
      >
        <div>
          <Badge variant="secondary" className="mb-4">
            {category}
          </Badge>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {title}
          </h3>
          <p className="text-muted-foreground mb-6">{description}</p>
        </div>

        {/* Cost Comparison */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm text-muted-foreground mb-1">
              Traditional Cost
            </p>
            <p className="text-xl font-bold text-red-500">{traditionalCost}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Our Cost</p>
            <p className="text-xl font-bold text-green-500">{ourCost}</p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="font-semibold text-foreground mb-3">
            Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = () => {
  const projects: ProjectCardProps[] = [
    {
      title: "Enterprise Resource Planning Suite",
      description:
        "Complete enterprise resource planning system with inventory management, production scheduling, and financial reporting.",
      category: "Manufacturing",
      traditionalCost: "150,000 $",
      ourCost: "15,000 $",
      features: [
        "Full ERP functionality",
        "ISO compliance",
        "Real-time analytics",
        "Custom reporting",
        "Multi-user access",
      ],
      technologies: ["Ivy Framework", ".NET", "SQL", "React", "AI Tools"],
      image: "/src/assets/projectCardExample.jpg",
    },
    {
      title: "Healthcare Management Platform",
      description:
        "Comprehensive patient management system with appointment scheduling, medical records, and billing integration.",
      category: "Healthcare",
      traditionalCost: "200,000 $",
      ourCost: "25,000 $",
      features: [
        "Patient portal",
        "HIPAA compliance",
        "Appointment scheduling",
        "Electronic health records",
        "Insurance integration",
      ],
      technologies: [
        "Ivy Framework",
        "React",
        "Node.js",
        "MongoDB",
        "AI Tools",
      ],
      image: "/src/assets/projectCardExample.jpg",
    },
    {
      title: "E-Commerce Marketplace",
      description:
        "Multi-vendor marketplace with advanced analytics, payment processing, and inventory management.",
      category: "E-Commerce",
      traditionalCost: "100,000 $",
      ourCost: "12,000 $",
      features: [
        "Multi-vendor support",
        "Payment gateway integration",
        "Advanced analytics",
        "Inventory tracking",
        "Mobile responsive",
      ],
      technologies: [
        "Ivy Framework",
        "React",
        "Stripe API",
        "PostgreSQL",
        "AI Tools",
      ],
      image: "/src/assets/projectCardExample.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Featured Projects & Case Studies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real projects delivered to real clients with real results
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { FeaturedProjectsSection };
