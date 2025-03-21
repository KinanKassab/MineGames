
import React from "react";

const Newsletter: React.FC = () => {
  return (
    <section className="section bg-background" id="newsletter">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h2 className="text-3xl font-bold mb-6">Stay in the game</h2>
          <p className="text-muted-foreground mb-8">
            Get the latest updates on new game releases, exclusive offers, and gaming tips.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
