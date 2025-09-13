export interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  traditionalCost: string;
  ourCost: string;
  features: string[];
  technologies: string[];
  image?: string;
}

export interface FeaturedProjectsSectionProps {
  // No props needed for now
}
