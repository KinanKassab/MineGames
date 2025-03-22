
import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Moon, Sun, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ThemeLanguageToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage, t, isRTL } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <ButtonCustom
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            aria-label={t(theme === "light" ? "theme.dark" : "theme.light")}
            className="size-9 rounded-full"
          >
            {theme === "light" ? (
              <Moon className="size-4" />
            ) : (
              <Sun className="size-4" />
            )}
          </ButtonCustom>
        </TooltipTrigger>
        <TooltipContent>
          <p>{t(theme === "light" ? "theme.dark" : "theme.light")}</p>
        </TooltipContent>
      </Tooltip>

      <DropdownMenu>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <ButtonCustom
                variant="outline"
                size="icon"
                aria-label={t("language")}
                className="size-9 rounded-full"
              >
                <Globe className="size-4" />
              </ButtonCustom>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>{t("language")}</p>
          </TooltipContent>
        </Tooltip>
        <DropdownMenuContent align={isRTL ? "start" : "end"}>
          <DropdownMenuItem onClick={() => changeLanguage("en")}>
            <span className={language === "en" ? "font-bold" : ""}>
              {t("language.english")}
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLanguage("ar")}>
            <span className={language === "ar" ? "font-bold" : ""}>
              {t("language.arabic")}
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ThemeLanguageToggle;
