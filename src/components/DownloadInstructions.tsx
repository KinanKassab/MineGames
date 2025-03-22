
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DownloadInstructions: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section py-16 bg-background" id="download">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl font-bold mb-4">{t("download.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("download.description")}
          </p>
        </div>

        <Card className="mx-auto max-w-3xl reveal">
          <CardHeader>
            <CardTitle className="text-center">{t("download.title")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg">{t("download.step1")}</p>
            <div className="bg-muted p-3 rounded-md font-mono text-sm">
              git clone https://github.com/yourusername/your-repo-name.git
            </div>
            
            <p className="text-lg">{t("download.step2")}</p>
            <div className="bg-muted p-3 rounded-md font-mono text-sm">
              npm install
            </div>
            
            <p className="text-lg">{t("download.step3")}</p>
            <div className="bg-muted p-3 rounded-md font-mono text-sm">
              npm run build
            </div>
            
            <p className="text-lg">{t("download.step4")}</p>
            <div className="bg-muted p-3 rounded-md font-mono text-sm">
              npm run preview
            </div>
            
            <div className="mt-6 pt-6 border-t">
              <p className="text-muted-foreground">
                {t("download.browserOption")}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DownloadInstructions;
