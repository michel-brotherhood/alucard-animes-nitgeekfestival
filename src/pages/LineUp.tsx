import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import FAQ from "@/components/FAQ";
import SpaceEffect from "@/components/SpaceEffect";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Instagram } from "lucide-react";
import eventLogo from "@/assets/itanime-logo.svg";
import raphaelVideo from "@/assets/raphael-freitas-performance.mp4";

type ArtistWithVideo = {
  name: string;
  role: string;
  video: string;
  instagram: string;
};

type ComingSoonArtist = {
  name: string;
  role: string;
  logo: true;
};

type Artist = ArtistWithVideo | ComingSoonArtist;

const guests = [
  {
    category: "Artistas",
    icon: Star,
    items: [
      { 
        name: "Raphael Freitas", 
        role: "O Guitarrista Raphael Freitas e seu projeto Me and the Machine farão um show épico com músicas de games retrô que marcaram gerações — tudo ao som de uma guitarra eletrizante! Se você é fã de nostalgia, games e boa música, esse momento é imperdível!",
        video: raphaelVideo,
        instagram: "https://www.instagram.com/meand_themachine/"
      } as ArtistWithVideo,
      { name: "", role: "Em breve...", logo: true } as ComingSoonArtist,
      { name: "", role: "Em breve...", logo: true } as ComingSoonArtist,
      { name: "", role: "Em breve...", logo: true } as ComingSoonArtist,
    ] as Artist[],
  },
];

const LineUp = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SpaceEffect />
      <Header />
      
      <section className="bg-secondary py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-accent text-center mb-6">
            LINE-UP
          </h1>
          <p className="text-xl text-white/90 text-center mb-12">
            Conheça os incríveis artistas confirmados para o Itanime!
          </p>

          <div className="space-y-12">
            {guests.map((category) => (
              <div key={category.category}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-accent p-3 rounded-full">
                    <category.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-black text-accent">{category.category}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((item, index) => (
                    <Card key={index} className="bg-white/10 backdrop-blur-sm border-2 border-accent hover:border-accent/80 transition-all rounded-3xl overflow-hidden">
                      <CardContent className="p-0">
                        {'video' in item ? (
                          <>
                            <div className="relative w-full aspect-video border-4 border-red-500 rounded-t-3xl overflow-hidden">
                              <video 
                                src={item.video}
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                              />
                            </div>
                            <div className="p-6 text-center">
                              <h3 className="text-2xl font-bold text-white mb-3">{item.name}</h3>
                              <p className="text-white/90 text-sm mb-4 leading-relaxed">{item.role}</p>
                              {'instagram' in item && item.instagram && (
                                <Button 
                                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold rounded-full"
                                  asChild
                                >
                                  <a href={item.instagram} target="_blank" rel="noopener noreferrer">
                                    <Instagram className="w-4 h-4" />
                                    Conhecer mais
                                  </a>
                                </Button>
                              )}
                            </div>
                          </>
                        ) : (
                          <div className="p-6 text-center">
                            <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                              <img 
                                src={eventLogo} 
                                alt="Itanime"
                                className="w-full h-full object-contain opacity-50"
                              />
                            </div>
                            {item.name && <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>}
                            <p className="text-white/70 text-sm mb-3">{item.role}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-accent text-lg font-bold">
              🌟 Mais convidados serão anunciados em breve! 🌟
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-accent/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-accent max-w-4xl mx-auto">
          <h3 className="text-3xl font-black text-accent mb-4">
            Não perca essa experiência! 🎉
          </h3>
          <p className="text-white/90 text-lg mb-6">
            Garanta seu ingresso agora e curta todos os artistas e atrações do NitGeek Festival!
          </p>
          <a 
            href="https://www.uticket.com.br/event/01LEBL5A2365D3"
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-block bg-primary hover:bg-primary/90 text-white font-black text-xl px-12 py-4 rounded-full shadow-lg transition-all hover:scale-105"
          >
            Comprar Ingressos
          </a>
        </div>
      </section>

      <FAQ />
      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default LineUp;
