import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

const schedule = [
  { time: "12:00", event: "Abertura dos portões", location: "Entrada Principal" },
  { time: "12:15", event: "Cine Anime", location: "Sala de Cinema" },
  { time: "12:30", event: "Início das atividades", location: "Áreas Temáticas" },
  { time: "12:45", event: "Gincanas com o Misheru", location: "STAGE Principal" },
  { time: "13:00", event: "Arena Gamer & Retrô Games", location: "Arena Games" },
  { time: "13:30", event: "Campeonatos de Videogames", location: "Arena Games" },
  { time: "14:30", event: "Show: Raphael Freitas - Me and the Machine", location: "STAGE Principal" },
  { time: "15:00", event: "Concurso de Cosplay", location: "STAGE Principal" },
  { time: "16:00", event: "Campeonato K-POP Generations", location: "STAGE Principal" },
  { time: "16:30", event: "Beat Saber VR", location: "Arena VR" },
  { time: "17:00", event: "Animeke Livre", location: "STAGE Principal" },
  { time: "17:30", event: "Finais dos Campeonatos e Premiações", location: "STAGE Principal" },
  { time: "18:00", event: "Encerramento", location: "STAGE Principal" },
];

const Cronograma = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      
      <section className="bg-gradient-to-b from-primary to-secondary py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-accent text-center mb-6">
            CRONOGRAMA
          </h1>
          <p className="text-xl text-white/90 text-center mb-12">
            Programação completa
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="bg-accent rounded-t-2xl p-4 text-center">
              <h2 className="text-3xl font-black text-secondary">DOMINGO</h2>
              <p className="text-secondary/80 font-bold">14 de Dezembro de 2025</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-b-2xl p-4 md:p-6 space-y-3 md:space-y-4 border-2 border-accent/30">
              {schedule.map((item, index) => (
                <Card key={index} className="bg-secondary/50 border-accent/50">
                  <CardContent className="p-3 md:p-4">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="bg-accent rounded-full p-2 flex-shrink-0">
                        <Clock className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-accent font-black text-base md:text-lg">{item.time}</div>
                        <div className="text-white font-bold text-sm md:text-base">{item.event}</div>
                        <div className="text-white/70 text-xs md:text-sm">{item.location}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-accent text-lg font-bold">
              ⚠️ Cronograma sujeito a alterações
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default Cronograma;
