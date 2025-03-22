
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { initAnimations } from "@/utils/animations";
import { useLanguage } from "@/contexts/LanguageContext";

const Index: React.FC = () => {
  const { isRTL } = useLanguage();
  
  useEffect(() => {
    // Initialize animations when component mounts
    initAnimations();
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${isRTL ? 'rtl' : ''}`}>
      <Header />
      <main>
        <Hero />
        <Features />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
