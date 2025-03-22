
import React, { useState, useEffect } from "react";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import ThemeLanguageToggle from "@/components/ThemeLanguageToggle";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, isRTL } = useLanguage();

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
          ? "bg-background/80 backdrop-blur-md shadow-sm py-4 dark:bg-background/70"
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
          <nav className={`hidden md:flex items-center space-x-1 ${isRTL ? "space-x-reverse" : ""}`}>
            <Link to="/" className="nav-link nav-link-active">
              {t("nav.home")}
            </Link>
            <Link to="/games" className="nav-link">
              {t("nav.games")}
            </Link>
            <Link to="/about" className="nav-link">
              {t("nav.about")}
            </Link>
            <Link to="/blog" className="nav-link">
              {t("nav.blog")}
            </Link>
            <Link to="/contact" className="nav-link">
              {t("nav.contact")}
            </Link>
          </nav>

          {/* Desktop CTA and Theme/Language Toggle */}
          <div className={`hidden md:flex items-center ${isRTL ? "space-x-reverse" : ""} space-x-4`}>
            <ThemeLanguageToggle />
            <ButtonCustom variant="outline" size="sm">
              {t("button.signin")}
            </ButtonCustom>
            <ButtonCustom variant="premium" size="sm">
              {t("button.getStarted")}
            </ButtonCustom>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeLanguageToggle />
            <button
              className="text-foreground"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-background/95 dark:bg-background/90 backdrop-blur-lg shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex flex-col space-y-4 py-4">
            <Link
              to="/"
              className="text-lg py-2 border-b border-border"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              to="/games"
              className="text-lg py-2 border-b border-border"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.games")}
            </Link>
            <Link
              to="/about"
              className="text-lg py-2 border-b border-border"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/blog"
              className="text-lg py-2 border-b border-border"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.blog")}
            </Link>
            <Link
              to="/contact"
              className="text-lg py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>
          </nav>
          <div className="flex flex-col space-y-3 mt-6 mb-4">
            <ButtonCustom variant="outline" className="w-full">
              {t("button.signin")}
            </ButtonCustom>
            <ButtonCustom variant="premium" className="w-full">
              {t("button.getStarted")}
            </ButtonCustom>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
