import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import FAQ from "@/components/FAQ";
import SpaceEffect from "@/components/SpaceEffect";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Ingressos = () => {
  const tickets = [
    {
      name: "INGRESSO ÚNICO",
      price: "30,00",
      badge: "promocional",
      badgeColor: "bg-accent text-primary",
      features: [
        "Acesso ao evento das 12h às 18h",
        "Todas as atrações incluídas",
      ],
      note: "Garanta sua entrada para o evento!",
    },
    {
      name: "INGRESSO DUPLO",
      price: "50,00",
      badge: "promocional",
      badgeColor: "bg-accent text-primary",
      features: [
        "Benefícios do único...",
        "2 ingressos para o evento",
        "Válido para duas pessoas",
        "Economia de R$ 10,00",
      ],
      note: "Mais economia comprando junto!",
    },
    {
      name: "INGRESSO TRIPLO",
      price: "70,00",
      badge: "promocional",
      badgeColor: "bg-accent text-primary",
      features: [
        "Benefícios do único...",
        "3 ingressos para o evento",
        "Válido para três pessoas",
        "Economia de R$ 20,00",
      ],
      note: "A melhor economia para grupos!",
    },
    {
      name: "VIP",
      price: "150,00",
      badge: "promocional",
      badgeColor: "bg-destructive text-white",
      features: [
        "Entrada antecipada ao evento",
        "Crachá exclusivo VIP",
        "R$ 150,00 em compras no estande Yume Geek Store ou na Lanchonete Konoha Lanches",
      ],
      note: "Experiência completa e diferenciada!",
      isVip: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SpaceEffect />
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-4">
            COMO VAI SER A SUA AVENTURA?
          </h1>
          <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto">
            Compare os ingressos e encontre a opção perfeita para a aventura que você quer viver no <span className="font-bold text-primary">NitGeek Festival</span>.
            <br className="hidden sm:block" />
            <span className="block sm:inline mt-2 sm:mt-0">Todos os ingressos possuem disponibilidade limitada.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tickets.map((ticket) => (
            <Card 
              key={ticket.name} 
              className={`relative overflow-hidden border-2 transition-all ${
                ticket.isVip 
                  ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-br from-destructive/20 via-primary/10 to-accent/20 border-primary hover:border-destructive hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] hover:scale-105' 
                  : 'hover:border-primary hover:shadow-2xl'
              }`}
            >
              {ticket.isVip && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-destructive to-primary animate-shimmer" 
                     style={{ backgroundSize: '200% 100%' }}></div>
              )}
              <CardHeader className="text-center pb-4">
                <h3 className={`text-2xl font-black mb-2 ${ticket.isVip ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-destructive' : 'text-secondary'}`}>
                  {ticket.name}
                </h3>
                <p className="text-sm text-foreground/60 mb-4">A partir de</p>
                <div className={`text-5xl font-black mb-2 ${ticket.isVip ? 'text-transparent bg-clip-text bg-gradient-to-r from-destructive to-primary' : 'text-primary'}`}>
                  {ticket.price}
                </div>
                <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold ${ticket.badgeColor}`}>
                  {ticket.badge}
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                {ticket.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter className="flex flex-col gap-3 px-4">
                <Button 
                  variant="skewed" 
                  className={`w-full text-sm md:text-lg py-5 md:py-6 rounded-2xl ${
                    ticket.isVip ? 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 hover:from-amber-500 hover:to-yellow-400 shadow-lg hover:shadow-yellow-500/50 text-white font-black' : ''
                  }`}
                  asChild
                >
                  <a href="https://www.uticket.com.br/event/01LEBL5A2365D3" target="_blank" rel="noopener noreferrer">
                    QUERO ESTE
                  </a>
                </Button>
                <p className="text-xs text-center text-foreground/60 px-2">{ticket.note}</p>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mb-12 text-center space-y-4">
          <a 
            href="/ajuda#regras-gerais" 
            className="inline-flex items-center gap-2 text-lg font-bold text-primary hover:text-secondary transition-colors"
          >
            Ver regras gerais dos ingressos
          </a>
          <p className="text-sm text-foreground/60">
            * Valores sujeitos a taxa de conveniência da plataforma Uticket
          </p>
        </div>

        <Card className="bg-muted/50 border-primary/20 mx-4">
          <CardHeader className="px-4 md:px-6">
            <CardTitle className="text-xl sm:text-2xl font-black text-primary text-center">
              O QUE ESTÁ INCLUÍDO EM TODOS OS INGRESSOS?
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {[
                "Arena Gamer free play",
                "Campeonatos e competições",
                "Beat Saber VR",
                "Cine Anime",
                "Animekê e K-POP",
                "Estandes de vendas geek"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                  <span className="font-semibold text-sm md:text-base text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
      
      <FAQ />
      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default Ingressos;
