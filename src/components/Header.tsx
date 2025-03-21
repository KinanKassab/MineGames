
import React, { useState, useEffect } from "react";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-xl font-display font-bold">MineGames</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className="nav-link nav-link-active">
              Home
            </Link>
            <Link to="/games" className="nav-link">
              Games
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ButtonCustom variant="outline" size="sm">
              Sign In
            </ButtonCustom>
            <ButtonCustom variant="premium" size="sm">
              Get Started
            </ButtonCustom>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white/95 backdrop-blur-lg shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex flex-col space-y-4 py-4">
            <Link
              to="/"
              className="text-lg py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/games"
              className="text-lg py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Games
            </Link>
            <Link
              to="/about"
              className="text-lg py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/blog"
              className="text-lg py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-lg py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
          <div className="flex flex-col space-y-3 mt-6 mb-4">
            <ButtonCustom variant="outline" className="w-full">
              Sign In
            </ButtonCustom>
            <ButtonCustom variant="premium" className="w-full">
              Get Started
            </ButtonCustom>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
