import React from "react";
import { Mail, Github, Globe } from "lucide-react";
import { FooterProps } from "./Footer.ts";

const Footer: React.FC<FooterProps> = ({}) => {
  const services = [
    "Rapid App Development",
    "Enterprise Security",
    "Authentication Systems",
    "Database Management",
  ];

  const contactInfo = [
    { label: "Email", value: "info@spacecorpstechnology.com", icon: Mail },
    { label: "Website", value: "spacecorpstechnology.com", icon: Globe },
    {
      label: "VAT",
      value: "ID: 17317965, VAT: EE102897221",
      icon: null,
    },
    { label: "Bank", value: "IBAN: EE687700771012100272", icon: null },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              SpaceCorps Technology
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Building the future of business software with AI-powered
              development. Delivering enterprise-grade applications in days, not
              months.
            </p>
            <div className="flex space-x-4">
              <Mail className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              <Globe className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-2">
                  {contact.icon && (
                    <contact.icon className="w-4 h-4 text-muted-foreground" />
                  )}
                  <span className="text-muted-foreground">{contact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 SpaceCorps Technology OÜ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
