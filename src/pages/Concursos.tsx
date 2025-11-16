import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import FAQ from "@/components/FAQ";
import SpaceEffect from "@/components/SpaceEffect";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Music, Mic, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";

const concursos = [
  {
    title: "Cosplay",
    icon: Trophy,
    description: "Mostre seu talento e concorra a prêmios incríveis! Categorias iniciante, intermediário e profissional.",
    image: "🏆",
    link: "/concursos/cosplay",
    color: "from-pink-500 to-purple-500"
  },
  {
    title: "K-pop",
    icon: Music,
    description: "Batalha das Gerações! Grupos de 3 a 10 integrantes concorrem a R$ 400,00 em cada chave.",
    image: "🎵",
    link: "/concursos/kpop",
    color: "from-purple-500 to-blue-500"
  },
  {
    title: "Animekê",
    icon: Mic,
    description: "Concurso cultural de canto! Cante suas músicas favoritas de animes, vocaloid e games.",
    image: "🎤",
    link: "/concursos/animeke",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Videogames",
    icon: Gamepad2,
    description: "Campeonatos em formato Mata-Mata! FIFA, Tekken, Street Fighter, Mortal Kombat e Naruto.",
    image: "🎮",
    link: "/concursos/videogames",
    color: "from-cyan-500 to-green-500"
  },
];

const Concursos = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SpaceEffect />
      <Header />
      
      <section className="bg-gradient-to-b from-secondary via-primary to-secondary py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-accent text-center mb-6">
            CONCURSOS
          </h1>
          <p className="text-xl text-white/90 text-center mb-12">
            Participe das competições e mostre seu talento no Itanime!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {concursos.map((concurso) => (
              <Card 
                key={concurso.title} 
                className="bg-white/10 backdrop-blur-sm border-2 border-accent/30 hover:border-accent transition-all hover:scale-105 hover:shadow-2xl group"
              >
                <CardHeader>
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${concurso.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <concurso.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-white text-3xl text-center font-black">
                    {concurso.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 px-4 md:px-6">
                  <p className="text-white/80 text-center text-sm md:text-base">{concurso.description}</p>
                  <Link to={concurso.link} className="block">
                    <Button className="w-full bg-accent text-primary hover:bg-accent/90 font-bold text-xs sm:text-sm md:text-base py-4 md:py-6 rounded-full">
                      VER REGULAMENTO E INSCREVER-SE
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-accent/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-accent mb-8">
            <h2 className="text-3xl font-black text-accent mb-6 text-center">
              🏆 Quer ser Jurado de Cosplay?
            </h2>
            <p className="text-white/90 text-center mb-6">
              Estamos abrindo vagas para jurado(a) de concurso de cosplay! Cachê de R$ 300,00 pelo dia de atuação.
            </p>
            <Link to="/concursos/jurado-cosplay" className="block max-w-md mx-auto">
              <Button className="w-full bg-accent text-primary hover:bg-accent/90 font-bold text-lg py-6 rounded-full">
                QUERO SER JURADO
              </Button>
            </Link>
          </div>

          <div className="bg-accent/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-accent">
            <h2 className="text-3xl font-black text-accent mb-6 text-center">
              📋 Informações Importantes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/90">
              <div>
                <h3 className="font-bold text-accent mb-2">Inscrições:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Cosplay: Até 05 de Dezembro de 2025</li>
                  <li>K-pop: Até 05 de Dezembro de 2025</li>
                  <li>Animekê: Mínimo 3 e máximo 10 por dia</li>
                  <li>Videogames: Por ordem de chegada (8 a 16 vagas)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-accent mb-2">Premiações:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Cosplay: Medalhas + até R$ 100 em brindes</li>
                  <li>K-pop: R$ 400,00 por chave</li>
                  <li>Animekê: Medalha + Kit de produtos</li>
                  <li>Videogames: R$ 100,00</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default Concursos;
