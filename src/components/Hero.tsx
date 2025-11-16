import videoHome from "@/assets/video_home.mp4";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-background py-8 md:py-12 px-4 md:px-8 relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="border-[12px] md:border-[16px] border-foreground rounded-[3rem] md:rounded-[4rem] p-6 md:p-12 bg-gradient-to-br from-background to-secondary/20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl xl:text-5xl font-black text-foreground leading-[1.3] tracking-tight max-w-lg">
                A maior experiência <br className="md:hidden" />
                <span className="text-accent">geek</span> de Niterói
              </h1>
              
              <div className="h-1 w-20 md:w-32 bg-foreground"></div>
              
              <p className="text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
                Experiência única que oferece aos fãs controle incomparável sobre cultura geek, anime, cosplay, games, E-sports e muito mais...
              </p>
              
              <div className="flex gap-3 md:gap-4 flex-wrap">
                <Button 
                  variant="skewed"
                  size="lg" 
                  className="text-sm md:text-base px-6 md:px-10 py-5 md:py-6 rounded-2xl"
                  asChild
                >
                  <a href="https://www.uticket.com.br/event/01LD7OB8BD0LUA" target="_blank" rel="noopener noreferrer">Comprar Agora</a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="font-semibold text-sm md:text-base px-6 md:px-10 py-5 md:py-6 rounded-2xl border-2"
                  asChild
                >
                  <Link to="/o-evento">Explorar</Link>
                </Button>
              </div>
              
              {/* Reviews Card */}
              <div className="bg-foreground text-background rounded-3xl p-6 md:p-8 max-w-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full -mr-16 -mt-16"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex -space-x-3">
                      <div className="w-12 h-12 rounded-full bg-accent/30 border-4 border-foreground flex items-center justify-center text-lg">👤</div>
                      <div className="w-12 h-12 rounded-full bg-primary/30 border-4 border-foreground flex items-center justify-center text-lg">👤</div>
                      <div className="w-12 h-12 rounded-full bg-secondary/50 border-4 border-foreground flex items-center justify-center text-lg">👤</div>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                      <span className="text-foreground text-xl">→</span>
                    </button>
                  </div>
                  
                  <p className="text-sm text-background/70 mb-2">Baseado em 12.242 avaliações</p>
                  
                  <div className="flex items-end gap-2">
                    <span className="text-6xl md:text-7xl font-black text-accent leading-none">4.9</span>
                    <span className="text-3xl md:text-4xl text-background/60 mb-2">/5</span>
                    <Star className="w-10 h-10 md:w-12 md:h-12 fill-accent text-accent mb-2" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative">
                {/* Main Video */}
                <div className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden border-8 md:border-[12px] border-foreground/80 shadow-2xl bg-sky-400">
                  <video 
                    src={videoHome}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover"
                  />
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
