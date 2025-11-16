import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import FAQ from "@/components/FAQ";
import MapSection from "@/components/MapSection";
import SpaceEffect from "@/components/SpaceEffect";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, MapPin, Star, Instagram, Facebook } from "lucide-react";
import itanimeLogo from "@/assets/itanime-logo.svg";
import itanimePhoto1 from "@/assets/itanime-photo-1.jpg";
import itanimePhoto2 from "@/assets/itanime-photo-2.jpg";
import itanimePhoto3 from "@/assets/itanime-photo-3.jpg";
import itanimePhoto4 from "@/assets/itanime-photo-4.jpg";
import itanimePhoto5 from "@/assets/itanime-photo-5.jpg";
import itanimePhoto6 from "@/assets/itanime-photo-6.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const stats = [
  { icon: Users, value: "50.000+", label: "Visitantes esperados" },
  { icon: Calendar, value: "2 Dias", label: "De pura diversão" },
  { icon: MapPin, value: "10.000m²", label: "De área de evento" },
  { icon: Star, value: "100+", label: "Atrações e atividades" },
];

const OEvento = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SpaceEffect />
      <Header />
      
      <section className="bg-gradient-to-b from-secondary to-primary py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-accent text-center mb-6">
            O EVENTO
          </h1>
          <p className="text-xl text-white/90 text-center mb-12">
            O maior festival geek de Niterói
          </p>

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src={itanimeLogo} alt="Itanime" className="w-48 md:w-56 h-auto object-contain" />
          </div>

          {/* Hero Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12 border-2 border-accent">
            <div className="space-y-4 text-white/90 text-lg">
              <p>
                Nascido no ano de 2017, o evento teve sua primeira edição em Niterói, onde atraiu a comunidade geek da cidade de Niterói, o evento retorna em 2023, trazendo muita cultura geek e novas atividades e atrações para os moradores de Niterói e cidades vizinhas.
              </p>
              <div className="mt-8">
                <h3 className="text-2xl font-black text-accent mb-4">Missão do NitGeek Festival</h3>
                <p className="font-semibold">
                  Levar o melhor da cultura Geek/Games para a população de Niterói e cidades vizinhas, com eventos de qualidade, seguros em um ambiente familiar e sadio.
                </p>
              </div>
            </div>
          </div>

          {/* Event Photos Carousel */}
          <div className="mb-12">
            <h3 className="text-2xl font-black text-accent text-center mb-2">Galeria</h3>
            <p className="text-white/70 text-sm text-center mb-4">algumas fotos de edições anteriores</p>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {[itanimePhoto1, itanimePhoto2, itanimePhoto3, itanimePhoto4, itanimePhoto5, itanimePhoto6].map((photo, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="border-2 border-accent overflow-hidden">
                      <CardContent className="p-0">
                        <img 
                          src={photo} 
                          alt={`Foto do Itanime ${index + 1}`}
                          className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Social CTAs */}
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://www.instagram.com/eventoitanime/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm border-2 border-accent/30 rounded-full p-4 hover:bg-accent/20 hover:scale-110 transition-all"
              aria-label="Instagram Itanime"
            >
              <Instagram className="w-6 h-6 text-accent" />
            </a>
            <a
              href="https://www.facebook.com/eventoitanime/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm border-2 border-accent/30 rounded-full p-4 hover:bg-accent/20 hover:scale-110 transition-all"
              aria-label="Facebook Itanime"
            >
              <Facebook className="w-6 h-6 text-accent" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
            <Card className="bg-accent border-0 text-center">
              <CardContent className="p-4 md:p-6">
                <Calendar className="w-8 h-8 md:w-12 md:h-12 text-secondary mx-auto mb-2 md:mb-4" />
                <div className="text-2xl md:text-4xl font-black text-secondary mb-1 md:mb-2">18 Jan</div>
                <div className="text-xs md:text-base text-secondary/80 font-bold">2026</div>
              </CardContent>
            </Card>
            <Card className="bg-accent border-0 text-center">
              <CardContent className="p-4 md:p-6">
                <Users className="w-8 h-8 md:w-12 md:h-12 text-secondary mx-auto mb-2 md:mb-4" />
                <div className="text-2xl md:text-4xl font-black text-secondary mb-1 md:mb-2">12h-18h</div>
                <div className="text-xs md:text-base text-secondary/80 font-bold">6 horas de diversão</div>
              </CardContent>
            </Card>
            <Card className="bg-accent border-0 text-center">
              <CardContent className="p-4 md:p-6">
                <MapPin className="w-8 h-8 md:w-12 md:h-12 text-secondary mx-auto mb-2 md:mb-4" />
                <div className="text-2xl md:text-4xl font-black text-secondary mb-1 md:mb-2">Em breve</div>
                <div className="text-xs md:text-base text-secondary/80 font-bold">Novidades</div>
              </CardContent>
            </Card>
            <Card className="bg-accent border-0 text-center">
              <CardContent className="p-4 md:p-6">
                <Star className="w-8 h-8 md:w-12 md:h-12 text-secondary mx-auto mb-2 md:mb-4" />
                <div className="text-2xl md:text-4xl font-black text-secondary mb-1 md:mb-2">Em breve</div>
                <div className="text-xs md:text-base text-secondary/80 font-bold">Surpresas</div>
              </CardContent>
            </Card>
          </div>

          {/* Destaques */}
          <div className="space-y-6">
            <div className="text-center bg-accent/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-accent">
              <h3 className="text-3xl font-black text-accent mb-4">
                Em breve mais informações! 🚀
              </h3>
              <p className="text-white/90 text-lg">
                Fique ligado nas nossas redes sociais para todas as novidades do evento!
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center bg-accent/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-accent">
            <h3 className="text-3xl font-black text-accent mb-4">
              Pronto para a aventura? 🚀
            </h3>
            <p className="text-white/90 text-lg mb-6">
              Garanta seu ingresso agora e faça parte dessa experiência inesquecível!
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

          {/* Alucard Animes Section - hidden for now */}
        </div>
      </section>

      <MapSection />
      <FAQ />
      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default OEvento;
