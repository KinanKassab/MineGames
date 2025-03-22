
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/games" element={<NotFound />} />
              <Route path="/about" element={<NotFound />} />
              <Route path="/blog" element={<NotFound />} />
              <Route path="/contact" element={<NotFound />} />
              <Route path="/careers" element={<NotFound />} />
              <Route path="/support" element={<NotFound />} />
              <Route path="/community" element={<NotFound />} />
              <Route path="/developers" element={<NotFound />} />
              <Route path="/partners" element={<NotFound />} />
              <Route path="/terms" element={<NotFound />} />
              <Route path="/privacy" element={<NotFound />} />
              <Route path="/cookies" element={<NotFound />} />
              <Route path="/licenses" element={<NotFound />} />
              <Route path="/refunds" element={<NotFound />} />
              <Route path="/press" element={<NotFound />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
