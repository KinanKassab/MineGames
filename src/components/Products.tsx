import React from "react";
import { ButtonCustom } from "@/components/ui/button-custom";

interface GameCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  rating: number;
  price: string;
}

const GameCard: React.FC<GameCardProps> = ({
  image,
  title,
  category,
  description,
  rating,
  price,
}) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white reveal card-hover">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-black/60 text-white text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm">
          {category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="flex items-center gap-1 bg-primary/5 px-2 py-1 rounded text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-yellow-500"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">{price}</span>
          <ButtonCustom variant="default" size="sm">
            Add to Cart
          </ButtonCustom>
        </div>
      </div>
    </div>
  );
};

const Products: React.FC = () => {
  const games = [
    {
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Eclipse Legends",
      category: "Action RPG",
      description:
        "Embark on an epic journey through a stunning open world filled with danger and discovery.",
      rating: 4.8,
      price: "$59.99",
    },
    {
      image:
        "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      title: "Quantum Breach",
      category: "Sci-Fi FPS",
      description:
        "Enter a futuristic world where reality and virtual dimensions collide in an intense first-person experience.",
      rating: 4.5,
      price: "$49.99",
    },
    {
      image:
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Skyborne",
      category: "Adventure",
      description:
        "Soar through majestic skies and explore floating islands in this breathtaking adventure game.",
      rating: 4.7,
      price: "$39.99",
    },
  ];

  return (
    <section className="section bg-secondary/50" id="games">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
        <div className="reveal">
          <h2 className="section-title">Featured Games</h2>
          <p className="section-subtitle">
            Discover our handpicked selection of the most exciting and
            immersive games available now
          </p>
        </div>
        <ButtonCustom variant="outline" className="reveal">
          View All Games
        </ButtonCustom>
      </div>

      {games.map((game, index) => (
        <GameCard key={index} {...game} />
      ))}
    </section>
  );
};

export default Products;
