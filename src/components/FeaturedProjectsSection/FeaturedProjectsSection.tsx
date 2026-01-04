import React from "react";
import { Badge } from "../ui/badge";
import { CircleCheckBig } from "lucide-react";
import {
  FeaturedProjectsSectionProps,
  ProjectCardProps,
} from "./FeaturedProjectsSection.ts";
import { Card } from "../ui/card";

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
    <Card className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16 p-8 border-border/50">
      {/* Project Image */}
      <div
        className={`${isEven ? "order-2 lg:order-1" : "order-2 lg:order-2"}`}
      >
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 aspect-video flex items-center justify-center relative overflow-hidden rounded-xl">
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
          <Badge variant="secondary">{category}</Badge>
          <h3 className="font-semibold text-xl text-foreground mb-2 py-2">
            {title}
          </h3>
          <p className="text-muted-foreground mb-6">{description}</p>
        </div>

        {/* Cost Comparison */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-xs text-muted-foreground mb-1">
              Traditional Cost
            </p>
            <p className="text-md text-red-500 line-through">
              {traditionalCost}
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Our Cost</p>
            <p className="text-md text-green-500">{ourCost}</p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6 py-2">
          <h4 className="font-semibold text-lg text-foreground mb-3">
            Key Features:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CircleCheckBig className="h-6 w-6 text-green-500 stroke-3" />
                <span className="text-md text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="font-semibold text-lg text-foreground py-2">
            Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
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
