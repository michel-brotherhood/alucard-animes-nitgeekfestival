import { Card } from "@/components/ui/card";
import { Puzzle, Dice5, Gamepad } from "lucide-react";
import woodGames from "@/assets/wood-games.jpg";
import boardGames from "@/assets/board-games.jpg";
import retroGames from "@/assets/retro-games.jpg";

const activities = [
  {
    icon: Puzzle,
    title: "Jogos de Madeira",
    description: "Diversão tradicional para toda a família com jogos clássicos de madeira",
    image: woodGames
  },
  {
    icon: Dice5,
    title: "Jogos de Tabuleiro",
    description: "Mesa repleta de board games modernos e clássicos para você jogar",
    image: boardGames
  },
  {
    icon: Gamepad,
    title: "Jogos Retrô",
    description: "Reviva a nostalgia com consoles e jogos clássicos das antigas gerações",
    image: retroGames
  }
];

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
            Diversas atividades para você curtir durante todo o evento!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-accent/20 backdrop-blur-sm rounded-lg border border-accent/30">
                      <activity.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{activity.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground">{activity.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
