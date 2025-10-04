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
      value: "VAT: EE102897221",
      icon: null,
    },
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="w-full py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 px-8 max-w-7xl mx-auto">
          {/* Company Info */}
          <div className="flex-shrink-0 text-center md:text-left">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              SpaceCorps Technology
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed max-w-sm">
              Building the future of business software with AI-powered
              development. Delivering enterprise-grade applications in days, not
              months.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="mailto:info@spacecorpstechnology.com"
                aria-label="Email us"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/spacecorps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our GitHub"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://spacecorpstechnology.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our website"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="flex-shrink-0 text-center md:text-left">
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
          <div className="flex-shrink-0 text-center md:text-left">
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
        <div className="mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 SpaceCorps Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
