
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { initAnimations } from "@/utils/animations";
import { useLanguage } from "@/contexts/LanguageContext";

const Games: React.FC = () => {
  const { isRTL } = useLanguage();
  
  useEffect(() => {
    // Initialize animations when component mounts
    initAnimations();
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${isRTL ? 'rtl' : ''}`}>
      <Header />
      <main>
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Games;
