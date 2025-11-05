import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Facebook } from "lucide-react";
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

const ItanimeSection = () => {
  return (
    <section className="bg-gradient-to-b from-secondary to-primary py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-accent text-center mb-8">
          SOBRE O ITANIME
        </h2>

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src={itanimeLogo} alt="Itanime" className="w-48 md:w-56 h-auto object-contain" />
        </div>

        {/* Text */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12 border-2 border-accent">
          <div className="space-y-4 text-white/90 text-lg">
            <p>
              Desde 2013, o Itanime cresceu para se tornar um dos maiores eventos geek do RJ. A primeira edição rolou no Colégio Cenecista Alberto Torres, em Itaboraí, e de lá pra cá já recebeu atrações de peso: os dubladores Charles Emmanuel e Orlando Drummond, os cantores Rodrigo Rossi e Edu Falaschi (Cavaleiros in Concert) e o youtuber Player Tauz.
            </p>
            <p>
              Referência em qualidade e diversão, o Itanime move a cena geek/otaku de Itaboraí e das cidades vizinhas.
            </p>
            <div className="mt-8">
              <h3 className="text-2xl font-black text-accent mb-4">Missão</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Promover cultura geek/anime com qualidade e segurança.</li>
                <li>Garantir acessibilidade e ambiente familiar.</li>
                <li>Combater assédio e discriminação.</li>
                <li>Incentivar talentos e negócios locais.</li>
                <li>Oferecer conteúdo que diverte e ensina (workshops, painéis, shows).</li>
                <li>Aproximar fãs, criadores e marcas para fazer a cena crescer.</li>
              </ul>
              <p className="mt-4 font-semibold">
                Levar o melhor da cultura geek e dos animes para Itaboraí e região — com eventos de qualidade, seguros e em um ambiente familiar e acolhedor.
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

        {/* CTA Button */}
        <div className="flex justify-center mb-8">
          <a 
            href="/o-evento" 
            className="inline-block bg-accent hover:bg-accent/90 text-primary font-black text-lg px-12 py-4 rounded-full shadow-lg transition-all hover:scale-105"
          >
            Ver Mais Sobre o Evento
          </a>
        </div>

        {/* Social CTAs */}
        <div className="flex justify-center gap-4">
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
      </div>
    </section>
  );
};

export default ItanimeSection;
