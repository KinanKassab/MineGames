
export type Language = "en" | "ar";

type TranslationKeys = {
  [key: string]: string;
};

export const translations: Record<Language, TranslationKeys> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.games": "Games",
    "nav.about": "About",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "button.signin": "Sign In",
    "button.getStarted": "Get Started",
    "button.viewAll": "View All Games",
    
    // Hero section
    "hero.title": "Next Generation Gaming Experience",
    "hero.subtitle": "Discover a world of immersive gaming with cutting-edge technology and stunning visuals",
    "hero.cta": "Explore Games",
    "hero.secondaryCta": "Learn More",
    
    // Features section
    "features.title": "Revolutionary Features",
    "features.subtitle": "Experience gaming like never before with our innovative technology",
    
    // Newsletter section
    "newsletter.title": "Join Our Newsletter",
    "newsletter.subtitle": "Stay updated with the latest games and exclusive offers",
    "newsletter.placeholder": "Enter your email",
    "newsletter.button": "Subscribe",
    "newsletter.privacy": "We respect your privacy and will not share your information.",
    
    // Footer section
    "footer.rights": "All rights reserved",
    "footer.poweredBy": "Powered by",
    
    // Theme
    "theme.light": "Light Mode",
    "theme.dark": "Dark Mode",
    
    // Language
    "language": "Language",
    "language.english": "English",
    "language.arabic": "Arabic"
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.games": "الألعاب",
    "nav.about": "من نحن",
    "nav.blog": "المدونة",
    "nav.contact": "اتصل بنا",
    "button.signin": "تسجيل الدخول",
    "button.getStarted": "ابدأ الآن",
    "button.viewAll": "عرض جميع الألعاب",
    
    // Hero section
    "hero.title": "تجربة ألعاب الجيل القادم",
    "hero.subtitle": "اكتشف عالمًا من الألعاب الغامرة مع تقنية متطورة ورسومات مذهلة",
    "hero.cta": "استكشف الألعاب",
    "hero.secondaryCta": "اعرف المزيد",
    
    // Features section
    "features.title": "ميزات ثورية",
    "features.subtitle": "استمتع بتجربة الألعاب كما لم تختبرها من قبل مع تقنيتنا المبتكرة",
    
    // Newsletter section
    "newsletter.title": "انضم إلى نشرتنا الإخبارية",
    "newsletter.subtitle": "ابق على اطلاع بأحدث الألعاب والعروض الحصرية",
    "newsletter.placeholder": "أدخل بريدك الإلكتروني",
    "newsletter.button": "اشترك",
    "newsletter.privacy": "نحن نحترم خصوصيتك ولن نشارك معلوماتك.",
    
    // Footer section
    "footer.rights": "جميع الحقوق محفوظة",
    "footer.poweredBy": "مشغل بواسطة",
    
    // Theme
    "theme.light": "الوضع النهاري",
    "theme.dark": "الوضع الليلي",
    
    // Language
    "language": "اللغة",
    "language.english": "الإنجليزية",
    "language.arabic": "العربية"
  }
};
