import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Store, Utensils, Gamepad2, Camera, Shirt } from "lucide-react";

const areas = [
  {
    name: "STAGE Principal",
    icon: MapPin,
    description: "Palco principal com shows, apresentações e competições",
    color: "bg-primary",
  },
  {
    name: "Artist Alley",
    icon: Store,
    description: "Área exclusiva com artistas independentes e suas obras",
    color: "bg-accent",
  },
  {
    name: "Arena Games",
    icon: Gamepad2,
    description: "Fliperama liberado, torneios e jogos diversos",
    color: "bg-secondary",
  },
  {
    name: "Food Park",
    icon: Utensils,
    description: "Praça de alimentação com comidas temáticas",
    color: "bg-primary",
  },
  {
    name: "Cosplay Space",
    icon: Shirt,
    description: "Camarim, área de fotos e competição de cosplay",
    color: "bg-accent",
  },
  {
    name: "Estúdio Fotográfico",
    icon: Camera,
    description: "Cenários incríveis para fotos memoráveis",
    color: "bg-secondary",
  },
];

const MapaEvento = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      
      <section className="bg-gradient-to-b from-secondary to-primary py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-accent text-center mb-6">
            MAPA DO EVENTO
          </h1>
          <p className="text-xl text-white/90 text-center mb-12">
            Clube Canto do Rio - Niterói/RJ
          </p>

          {/* Mapa visual simplificado */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 min-h-[400px] relative border-4 border-accent">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                <p className="text-white text-2xl font-bold">Mapa Interativo</p>
                <p className="text-white/70">Em breve disponível</p>
              </div>
            </div>
          </div>

          {/* Áreas do evento */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Card key={area.name} className="bg-white/10 backdrop-blur-sm border-2 border-accent/30 hover:border-accent transition-all">
                <CardHeader>
                  <div className={`${area.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{area.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-accent/20 backdrop-blur-sm rounded-xl p-6 border-2 border-accent">
            <h3 className="text-2xl font-black text-accent mb-4">📍 Como Chegar</h3>
            <p className="text-white/90 mb-4">
              <strong>Endereço:</strong> Av Visconde do Rio Branco, 701 - Centro, Niterói - RJ, 24020-005
            </p>
            <p className="text-white/90 mb-4">
              <strong>Horário:</strong> 12:00 às 18:00 horas
            </p>
            <p className="text-white/90">
              <strong>Estacionamento:</strong> Não há estacionamento no local
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default MapaEvento;
