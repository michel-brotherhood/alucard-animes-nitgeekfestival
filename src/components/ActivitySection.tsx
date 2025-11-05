import { Card } from "@/components/ui/card";
import { Puzzle, Dice5, Gamepad } from "lucide-react";
import woodGames from "@/assets/wood-games.jpg";
import boardGames from "@/assets/board-games.jpg";
import retroGames from "@/assets/retro-games.jpg";

const ActivitySection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted via-background to-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
            ATRAÇÕES
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Em breve...
          </p>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
