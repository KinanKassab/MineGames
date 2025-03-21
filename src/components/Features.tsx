import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 rounded-2xl transition-all duration-300 hover:shadow-md hover:bg-secondary/50 reveal">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/5 mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="section py-16 bg-background" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl font-bold mb-4">Gaming Categories for Everyone</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover a diverse selection of games designed to challenge, entertain, and bring out your competitive spirit
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-8">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 w-full max-w-md">
              <TabsTrigger value="all">All Games</TabsTrigger>
              <TabsTrigger value="brain">Brain Teasers</TabsTrigger>
              <TabsTrigger value="action">Action</TabsTrigger>
              <TabsTrigger value="competitive">Competitive</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Brain Teasers */}
              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v8"></path>
                      <path d="m16 6-4 4-4-4"></path>
                      <path d="M8 16a4 4 0 1 0 8 0 4 4 0 1 0-8 0"></path>
                    </svg>
                  </div>
                  <CardTitle>Brain Teasers</CardTitle>
                  <CardDescription className="text-white/80">Challenge your mind</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="mb-4">Puzzle games that stretch your mental abilities and test your problem-solving skills.</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                      <span>Logic Puzzles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                      <span>Memory Games</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                      <span>Word Challenges</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Action Games */}
              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path>
                      <circle cx="17" cy="7" r="5"></circle>
                    </svg>
                  </div>
                  <CardTitle>Fast-Paced Action</CardTitle>
                  <CardDescription className="text-white/80">For adrenaline lovers</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="mb-4">High-octane games that test your reflexes and keep you on the edge of your seat.</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                      <span>Racing Games</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                      <span>Arcade Shooters</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                      <span>Platformers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Competitive Battles */}
              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <CardTitle>Competitive Battles</CardTitle>
                  <CardDescription className="text-white/80">Test your skills</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="mb-4">Go head-to-head with players around the world in thrilling competitive gameplay.</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                      <span>Battle Royale</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                      <span>Strategy Games</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                      <span>Sports Games</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="brain">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Feature
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8v4l3 3"></path>
                  </svg>
                }
                title="Quick Puzzles"
                description="Short brain teasers that can be solved in minutes, perfect for a quick mental workout."
              />
              <Feature
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m7 11 2-2-2-2"></path>
                    <path d="M11 13h4"></path>
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  </svg>
                }
                title="Coding Challenges"
                description="Learn programming concepts through fun, interactive puzzles designed for all skill levels."
              />
              <Feature
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v8"></path>
                    <path d="m16 6-4 4-4-4"></path>
                    <path d="M8 16a4 4 0 1 0 8 0 4 4 0 1 0-8 0"></path>
                  </svg>
                }
                title="Memory Games"
                description="Enhance your recall abilities with games that challenge and improve your memory over time."
              />
            </div>
          </TabsContent>

          <TabsContent value="action">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Feature
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path>
                    <circle cx="17" cy="7" r="5"></circle>
                  </svg>
                }
                title="Racing Games"
                description="High-speed racing games that test your reflexes and timing as you zoom through challenging tracks."
              />
              <Feature
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path>
                  </svg>
                }
                title="Arcade Shooters"
                description="Classic shooter games reimagined with modern graphics and intuitive touch controls."
              />
              <Feature
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <path d="m7.5 4.21 4.5 2.6 4.5-2.6"></path>
                    <path d="M7.5 19.79V14.6L3 12"></path>
                    <path d="M21 12l-4.5 2.6v5.19"></path>
                    <path d="M3.27 6.96 12 12.01l8.73-5.05"></path>
                    <path d="M12 22.08V12"></path>
                  </svg>
                }
                title="3D Adventures"
                description="Immersive 3D action games with stunning visuals and engaging storylines."
              />
            </div>
          </TabsContent>

          <TabsContent value="competitive">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Feature
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                    <path d="M4 22h16"></path>
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                  </svg>
                }
                title="Tournament Games"
                description="Compete in regular tournaments with players of similar skill levels for exciting prizes."
              />
              <Feature
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                }
                title="Team Battles"
                description="Form teams with friends and battle other squads in strategic, collaborative gameplay."
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
                title="Ranking Ladders"
                description="Climb the global rankings as you defeat opponents and improve your skills in competitive play."
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl p-8 reveal">
          <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-8 items-center`}>
            <div>
              <h3 className="text-2xl font-bold mb-4">Mobile App Coming Soon!</h3>
              <p className="text-muted-foreground mb-6">
                We're working hard to bring these amazing games to your mobile device. 
                Stay tuned for our upcoming app release with exciting features and exclusive content!
              </p>
              <div>
                <ButtonCustom variant="premium" size="lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1 3 .6.7 1 1.3 1 2.5V16a3 3 0 0 0 6 0v-2Z"></path>
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path>
                  </svg>
                  Get Notified
                </ButtonCustom>
              </div>
            </div>
            <div className={`flex justify-center ${isMobile ? "mt-6" : ""}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-70"></div>
                <img 
                  src="https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                  alt="Mobile gaming" 
                  className="relative rounded-2xl shadow-xl max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

