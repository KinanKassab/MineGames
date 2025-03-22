
import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language } from "@/utils/translations";

interface LanguageContextType {
  language: Language;
  t: (key: string) => string;
  changeLanguage: (lang: Language) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    return savedLanguage || "en";
  });

  const isRTL = language === "ar";

  useEffect(() => {
    // Save language preference
    localStorage.setItem("language", language);
    
    // Update document direction
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    
    // Add language class to document
    document.documentElement.lang = language;
    
    // Add RTL class for styling purposes
    if (isRTL) {
      document.documentElement.classList.add("rtl");
    } else {
      document.documentElement.classList.remove("rtl");
    }
  }, [language, isRTL]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
