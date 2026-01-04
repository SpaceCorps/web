import React, { useState } from "react";
import { GlassPane } from "@rorychad/gilect";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { HeaderProps } from "./Header.ts";

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
  ];

  return (
    <GlassPane className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 mr-8">
            <Link
              to="/"
              className="text-foreground hover:text-foreground/80 transition-colors"
              style={{
                fontWeight: 600,
                fontSize: "20px",
              }}
            >
              SpaceCorps Technology
            </Link>
          </div>

          {/* Desktop Navigation - positioned to the right */}
          <div className="flex-1 flex justify-end items-center">
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`transition-colors duration-200 ${
                    location.pathname === item.href
                      ? `underline decoration-2 underline-offset-4 ${
                          isDark ? "text-white" : "text-black"
                        }`
                      : `hover:opacity-70 ${
                          isDark ? "text-white" : "text-black"
                        }`
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4 ml-8">
              <Button size="sm">Get Started</Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-muted-foreground hover:text-foreground cursor-pointer"
              >
                {isDark ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-foreground cursor-pointer"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`block px-3 py-2 transition-colors duration-200 ${
                    location.pathname === item.href
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    fontWeight: 500,
                    fontSize: "14px",
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button variant="outline" size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </GlassPane>
  );
};

export { Header };
