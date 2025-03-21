
import React from "react";
import { ButtonCustom } from "@/components/ui/button-custom";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 rounded-2xl transition-all duration-300 hover:shadow-soft hover:bg-secondary/50 reveal">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/5 mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="section bg-background" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">Elevate Your Gaming Experience</h2>
          <p className="section-subtitle mx-auto">
            Discover why thousands of gamers choose our platform for the ultimate gaming experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path>
                <circle cx="17" cy="7" r="5"></circle>
              </svg>
            }
            title="Next-Gen Graphics"
            description="Experience stunning visuals with our cutting-edge graphics technology that pushes the boundaries of what's possible."
          />
          
          <Feature
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"></path>
                <path d="M6 18h12"></path>
                <path d="M6 14h12"></path>
                <rect width="12" height="12" x="6" y="10"></rect>
              </svg>
            }
            title="Vast Game Library"
            description="Access thousands of games across multiple genres, from indie gems to AAA blockbusters, all in one place."
          />
          
          <Feature
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            }
            title="Advanced Security"
            description="Play with peace of mind knowing your account and personal information are protected by state-of-the-art security measures."
          />
          
          <Feature
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12.5 2h-8a2 2 0 0 0-2 2v8"></path>
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M7.5 14h2.79a2 2 0 0 0 1.42-.59l5.81-5.82a2 2 0 0 0 0-2.82l-.17-.17a2 2 0 0 0-2.82 0L8.71 10.41a2 2 0 0 0-.59 1.42V14.5"></path>
              </svg>
            }
            title="Creative Mods"
            description="Customize your gaming experience with thousands of mods and add-ons created by our passionate community."
          />
          
          <Feature
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            }
            title="Global Community"
            description="Connect with millions of gamers worldwide, make friends, and team up for epic multiplayer adventures."
          />
          
          <Feature
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v8"></path>
                <path d="m16 6-4 4-4-4"></path>
                <path d="M8 16a4 4 0 1 0 8 0 4 4 0 1 0-8 0"></path>
              </svg>
            }
            title="Cloud Saving"
            description="Never lose your progress with automatic cloud saves that sync across all your devices seamlessly."
          />
        </div>
        
        <div className="mt-16 text-center reveal">
          <ButtonCustom variant="premium" size="lg">
            Explore All Features
          </ButtonCustom>
        </div>
      </div>
    </section>
  );
};

export default Features;
