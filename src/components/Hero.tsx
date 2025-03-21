
import React from "react";
import { ButtonCustom } from "@/components/ui/button-custom";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-indigo-200/30 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-200/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-200/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col max-w-2xl reveal">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 leading-tight">
              Next-Gen
              <span className="relative whitespace-nowrap mx-2">
                <span className="relative bg-gradient-to-r from-indigo-500 to-indigo-700 bg-clip-text text-transparent">Gaming</span>
              </span>
              Experience
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Discover the most immersive and entertaining gaming platform, designed for gamers by gamers. Take your gaming experience to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonCustom variant="premium" size="xl">
                Get Started
              </ButtonCustom>
              <ButtonCustom variant="outline" size="xl">
                Learn More
              </ButtonCustom>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/26.jpg" alt="User" />
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">5000+</span> gamers joined this month
              </p>
            </div>
          </div>
          
          <div className="relative lg:block reveal">
            <div className="absolute -right-10 -top-10 w-72 h-72 bg-indigo-300/20 rounded-full filter blur-3xl z-0"></div>
            <div className="relative z-10">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl parallax" data-speed="0.05">
                <img 
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Gaming Experience" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card max-w-xs flex items-center gap-4 animate-float">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">New Game Release</p>
                  <p className="text-sm text-muted-foreground">Explore our latest game</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
