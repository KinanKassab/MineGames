
import React, { useState } from "react";
import { ButtonCustom } from "@/components/ui/button-custom";
import { toast } from "@/components/ui/use-toast";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setEmail("");
      
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
    }, 1500);
  };

  return (
    <section className="section bg-background" id="newsletter">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h2 className="text-3xl font-bold mb-6">Stay in the game</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter to receive updates on new game releases, 
            exclusive offers, and gaming tips straight to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            <ButtonCustom
              type="submit"
              variant="premium"
              loading={loading}
              className="shrink-0"
            >
              Subscribe
            </ButtonCustom>
          </form>
          
          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
