import { Check } from "lucide-react";

const features = [
  "Acesso a todas as áreas do evento",
  "Participação em todos os campeonatos",
  "Acesso a área cosplay com guarda-volumes",
  "Shows e apresentações ao vivo",
  "Área de videogames e torneios",
  "Estandes e lojas com produtos exclusivos",
  "Atividades interativas e workshops",
  "Área de alimentação e convivência"
];

const Features = () => {
  return (
    <section className="py-16 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-accent text-center mb-12">
          O QUE TODOS OS INGRESSOS INCLUEM?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 md:gap-4 bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl border-2 border-accent/20 hover:border-accent/50 transition-all">
              <Check className="w-6 h-6 md:w-8 md:h-8 text-accent flex-shrink-0" />
              <span className="text-white text-base md:text-lg font-semibold">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
