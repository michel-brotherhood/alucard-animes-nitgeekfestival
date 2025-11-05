import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Facebook } from "lucide-react";
import logoFg from "@/assets/logo-fg.png";
import eventPhoto1 from "@/assets/event-photo-1.jpg";
import eventPhoto2 from "@/assets/event-photo-2.jpg";
import eventPhoto3 from "@/assets/event-photo-3.jpg";
import eventPhoto4 from "@/assets/event-photo-4.jpg";
import eventPhoto5 from "@/assets/event-photo-5.jpg";
import eventPhoto6 from "@/assets/event-photo-6.jpg";
import eventPhoto7 from "@/assets/event-photo-7.jpg";
import eventPhoto8 from "@/assets/event-photo-8.jpg";
import eventPhoto9 from "@/assets/event-photo-9.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const FriburgoGeekSection = () => {
  return (
    <section className="bg-gradient-to-b from-secondary to-primary py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-accent text-center mb-8">
          SOBRE O ITANIME
        </h2>

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src={logoFg} alt="Itanime" className="w-48 md:w-56 h-auto object-contain" />
        </div>

        {/* Text */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12 border-2 border-accent">
          <div className="space-y-4 text-white/90 text-lg">
            <p>
              O Itanime tem a missão de celebrar a cultura geek — e as muitas culturas que a compõem, como games, quadrinhos, cinema, anime e tecnologia — em um formato acolhedor para toda a família. Promovemos eventos seguros e bem organizados em Itaboraí e região, com programação pensada para crianças, jovens e adultos, espaços de convivência, oficinas e atividades educativas. Nosso foco é simples: respeito, boa convivência e acessibilidade, sem bandeiras ou discursos — aqui o protagonismo é da experiência em família, do encontro entre gerações e do compartilhamento de referências. Queremos que cada edição seja um ponto de encontro da cidade e das cidades vizinhas, onde todos se sintam à vontade para curtir, descobrir novidades e voltar para casa com boas memórias.
            </p>
          </div>
        </div>

        {/* Event Photos Carousel */}
        <div className="mb-12">
          <p className="text-white/70 text-sm text-center mb-4">algumas fotos da última edição</p>
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
              {[eventPhoto1, eventPhoto2, eventPhoto3, eventPhoto4, eventPhoto5, eventPhoto6, eventPhoto7, eventPhoto8, eventPhoto9].map((photo, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="border-2 border-accent overflow-hidden">
                    <CardContent className="p-0">
                      <img 
                        src={photo} 
                        alt={`Foto do evento ${index + 1}`}
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
            href="https://www.instagram.com/friburgogeek/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm border-2 border-accent/30 rounded-full p-4 hover:bg-accent/20 hover:scale-110 transition-all"
            aria-label="Instagram Itanime"
          >
            <Instagram className="w-6 h-6 text-accent" />
          </a>
          <a
            href="https://www.facebook.com/friburgogeek"
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

export default FriburgoGeekSection;
