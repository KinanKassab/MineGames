
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
    "features.title": "Gaming Categories for Everyone",
    "features.subtitle": "Discover a diverse selection of games designed to challenge, entertain, and bring out your competitive spirit",
    "features.gameCategories": "Game Categories",
    "features.allGames": "All Games",
    "features.brainTeasers": "Brain Teasers",
    "features.action": "Action",
    "features.competitive": "Competitive",
    "features.quickPuzzles": "Quick Puzzles",
    "features.quickPuzzlesDesc": "Short brain teasers that can be solved in minutes, perfect for a quick mental workout.",
    "features.codingChallenges": "Coding Challenges",
    "features.codingChallengesDesc": "Learn programming concepts through fun, interactive puzzles designed for all skill levels.",
    "features.memoryGames": "Memory Games",
    "features.memoryGamesDesc": "Enhance your recall abilities with games that challenge and improve your memory over time.",
    "features.racingGames": "Racing Games",
    "features.racingGamesDesc": "High-speed racing games that test your reflexes and timing as you zoom through challenging tracks.",
    "features.arcadeShooters": "Arcade Shooters",
    "features.arcadeShootersDesc": "Classic shooter games reimagined with modern graphics and intuitive touch controls.",
    "features.3dAdventures": "3D Adventures",
    "features.3dAdventuresDesc": "Immersive 3D action games with stunning visuals and engaging storylines.",
    "features.tournamentGames": "Tournament Games",
    "features.tournamentGamesDesc": "Compete in regular tournaments with players of similar skill levels for exciting prizes.",
    "features.teamBattles": "Team Battles",
    "features.teamBattlesDesc": "Form teams with friends and battle other squads in strategic, collaborative gameplay.",
    "features.rankingLadders": "Ranking Ladders",
    "features.rankingLaddersDesc": "Climb the global rankings as you defeat opponents and improve your skills in competitive play.",
    "features.brainCategory": "Brain Teasers",
    "features.brainDesc": "Challenge your mind",
    "features.logicPuzzles": "Logic Puzzles",
    "features.wordChallenges": "Word Challenges",
    "features.actionCategory": "Fast-Paced Action",
    "features.actionDesc": "For adrenaline lovers",
    "features.platformers": "Platformers",
    "features.competitiveCategory": "Competitive Battles",
    "features.competitiveDesc": "Test your skills",
    "features.battleRoyale": "Battle Royale",
    "features.strategyGames": "Strategy Games",
    "features.sportsGames": "Sports Games",
    "features.mobileApp": "Mobile App Coming Soon!",
    "features.mobileAppDesc": "We're working hard to bring these amazing games to your mobile device. Stay tuned for our upcoming app release with exciting features and exclusive content!",
    "features.getNotified": "Get Notified",
    
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
    "language.arabic": "Arabic",
    
    // Download
    "download.title": "Download Our App",
    "download.description": "Follow these steps to download our website for offline use:",
    "download.step1": "1. Clone the repository from GitHub",
    "download.step2": "2. Install the dependencies with npm install",
    "download.step3": "3. Build the project with npm run build",
    "download.step4": "4. Deploy locally with npm run preview",
    "download.browserOption": "Alternatively, you can use your browser's 'Save As' feature to save this page for offline viewing."
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
    "features.title": "فئات الألعاب للجميع",
    "features.subtitle": "اكتشف مجموعة متنوعة من الألعاب المصممة للتحدي والترفيه وإظهار روحك التنافسية",
    "features.gameCategories": "فئات الألعاب",
    "features.allGames": "جميع الألعاب",
    "features.brainTeasers": "ألعاب الذكاء",
    "features.action": "ألعاب الحركة",
    "features.competitive": "ألعاب تنافسية",
    "features.quickPuzzles": "ألغاز سريعة",
    "features.quickPuzzlesDesc": "ألغاز ذهنية قصيرة يمكن حلها في دقائق، مثالية للتمرين العقلي السريع.",
    "features.codingChallenges": "تحديات البرمجة",
    "features.codingChallengesDesc": "تعلم مفاهيم البرمجة من خلال ألغاز تفاعلية ممتعة مصممة لجميع مستويات المهارة.",
    "features.memoryGames": "ألعاب الذاكرة",
    "features.memoryGamesDesc": "عزز قدرات التذكر لديك من خلال الألعاب التي تتحدى وتحسن ذاكرتك بمرور الوقت.",
    "features.racingGames": "ألعاب السباق",
    "features.racingGamesDesc": "ألعاب سباق عالية السرعة تختبر ردود فعلك وتوقيتك أثناء الانطلاق عبر المسارات الصعبة.",
    "features.arcadeShooters": "ألعاب إطلاق النار",
    "features.arcadeShootersDesc": "ألعاب إطلاق النار الكلاسيكية معاد تصميمها برسومات حديثة وعناصر تحكم تعمل باللمس بديهية.",
    "features.3dAdventures": "مغامرات ثلاثية الأبعاد",
    "features.3dAdventuresDesc": "ألعاب حركة ثلاثية الأبعاد غامرة ذات مرئيات مذهلة وقصص جذابة.",
    "features.tournamentGames": "ألعاب البطولات",
    "features.tournamentGamesDesc": "تنافس في بطولات منتظمة مع لاعبين من مستويات مهارة مماثلة للفوز بجوائز مثيرة.",
    "features.teamBattles": "معارك الفرق",
    "features.teamBattlesDesc": "شكِّل فرقًا مع الأصدقاء وقاتل الفرق الأخرى في لعب تعاوني استراتيجي.",
    "features.rankingLadders": "سلالم التصنيف",
    "features.rankingLaddersDesc": "تسلق التصنيفات العالمية مع هزيمة الخصوم وتحسين مهاراتك في اللعب التنافسي.",
    "features.brainCategory": "ألعاب الذكاء",
    "features.brainDesc": "تحدي عقلك",
    "features.logicPuzzles": "ألغاز منطقية",
    "features.wordChallenges": "تحديات الكلمات",
    "features.actionCategory": "ألعاب حركة سريعة",
    "features.actionDesc": "لمحبي الإثارة",
    "features.platformers": "ألعاب المنصات",
    "features.competitiveCategory": "معارك تنافسية",
    "features.competitiveDesc": "اختبر مهاراتك",
    "features.battleRoyale": "باتل رويال",
    "features.strategyGames": "ألعاب استراتيجية",
    "features.sportsGames": "ألعاب رياضية",
    "features.mobileApp": "تطبيق الجوال قريبًا!",
    "features.mobileAppDesc": "نعمل بجد لإحضار هذه الألعاب المذهلة إلى جهازك المحمول. ترقبوا إصدار تطبيقنا القادم بميزات ومحتوى حصري مثير!",
    "features.getNotified": "احصل على إشعار",
    
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
    "language.arabic": "العربية",
    
    // Download
    "download.title": "تنزيل تطبيقنا",
    "download.description": "اتبع هذه الخطوات لتنزيل موقعنا للاستخدام دون اتصال:",
    "download.step1": "١- قم بنسخ المشروع من GitHub",
    "download.step2": "٢- قم بتثبيت الاعتمادات باستخدام npm install",
    "download.step3": "٣- قم ببناء المشروع باستخدام npm run build",
    "download.step4": "٤- قم بالنشر محليًا باستخدام npm run preview",
    "download.browserOption": "بدلاً من ذلك، يمكنك استخدام ميزة 'حفظ باسم' في متصفحك لحفظ هذه الصفحة للعرض دون اتصال."
  }
};

