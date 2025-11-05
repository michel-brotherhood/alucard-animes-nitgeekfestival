import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import SnowEffect from "@/components/SnowEffect";
import alucardLogo from "@/assets/alucard-animes-logo.png";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook } from "lucide-react";
import timeline2000 from "@/assets/timeline-2000.png";
import timeline2001 from "@/assets/timeline-2001.png";
import timeline2002Badge from "@/assets/timeline-2002-badge.png";
import timeline2002Otaku from "@/assets/timeline-2002-otaku.png";
import timeline2003Cvg from "@/assets/timeline-2003-cvg.png";
import timeline2003Alucard from "@/assets/timeline-2003-alucard.png";
import timeline20042008 from "@/assets/timeline-2004-2008.png";
import timeline2009 from "@/assets/timeline-2009.png";
import timeline2010Cnpj from "@/assets/timeline-2010-cnpj.png";
import timeline2010Nikity from "@/assets/timeline-2010-nikity.png";
import timeline2011Gakkou from "@/assets/timeline-2011-gakkou.png";
import timeline2012Loja from "@/assets/timeline-2012-loja.png";
import timeline2012Hentai from "@/assets/timeline-2012-hentai.png";
import timeline2013Events from "@/assets/timeline-2013-events.png";
import timeline2016Goncageek from "@/assets/timeline-2016-goncageek.png";
import timeline2016Bh from "@/assets/timeline-2016-bh.png";
import timeline2017Nitgeek from "@/assets/timeline-2017-nitgeek.png";
import timeline2018Faf from "@/assets/timeline-2018-faf.png";
import timeline2019Geekinrio from "@/assets/timeline-2019-geekinrio.png";
import timeline2022Animegonca from "@/assets/timeline-2022-animegonca.png";
import timeline20242025Nitferias from "@/assets/timeline-2024-2025-nitferias.png";

const QuemSomos = () => {
  const timelineEvents = [
    {
      year: "2000",
      title: "Exibições de Animes em Niterói",
      description: "Grupo CVG MANGÁ que nasceu como fansub em 1999, começou a realizar pequenos encontros com os fãs de animes no ano 2000 no Centro Educacional de Niterói, com exibições de animes e tokusatsus.",
      image: timeline2000
    },
    {
      year: "2001",
      title: "Exibições de Animes em São Gonçalo",
      description: "No ano de 2001 começa as exibições de Animes no Centro Cultural de São Gonçalo, com o primeiro evento do Grupo e Projeto Otaku.",
      image: timeline2001
    },
    {
      year: "2002",
      title: "Grupo CVG MANGÁ no RJ",
      description: "Em 2002 o grupo CVG MANGÁ é convidado a ajudar no evento Anime Rio, primeiro evento de animes do estado do RJ.",
      image: timeline2002Badge
    },
    {
      year: "2002",
      title: "Evento Projeto Otaku X",
      description: "Em 2002 o Grupo CVG MANGÁ realiza a segunda edição do evento Projeto Otaku x, grande sucesso que impactou a cultura geek na cidade.",
      image: timeline2002Otaku
    },
    {
      year: "2003",
      title: "Grupo CVG MANGÁ EM SÃO PAULO",
      description: "Em 2003 o Grupo CVG MANGÁ é convidado pela Yamato Produções a participar com uma sala de exibições de Animes na primeira edição do Evento Anime Friends.",
      image: timeline2003Cvg
    },
    {
      year: "2003",
      title: "Nasce o estande Alucard Animes",
      description: "Em 2003 no evento Anime Friends primeira edição, nasce o estande Alucard Animes, formado por alguns integrantes do grupo CVG MANGÁ.",
      image: timeline2003Alucard
    },
    {
      year: "2004 a 2008",
      title: "Alucard Animes pelo Brasil",
      description: "O estande Alucard Animes participa de vários eventos pelo Brasil.",
      image: timeline20042008
    },
    {
      year: "2009",
      title: "Primeira Loja da Alucard Animes",
      description: "A primeira loja da empresa nasce no centro de Niterói, atraindo varios fãs de animes e games da cidade.",
      image: timeline2009
    },
    {
      year: "2010",
      title: "Alucard Animes com CNPJ",
      description: "A empresa cria vida com seu cnpj e abertura da segunda loja no Niterói Shopping, point de encontro dos otakus e geeks da cidade.",
      image: timeline2010Cnpj
    },
    {
      year: "2010",
      title: "Alucard Animes de volta aos eventos",
      description: "A empresa volta a organizar eventos junto com o grupo CVG MANGÁ, nasce em Niterói no dia 15 de agosto o evento Anime Nikity, o maior evento do segmento na cidade.",
      image: timeline2010Nikity
    },
    {
      year: "2011",
      title: "Evento Anime no Gakkou agora é da Alucard Animes",
      description: "O evento mais antigo da cidade o Anime no Gakkou, que nasceu no ano de 2006, criação de Alex Latini, membro do Grupo CVGMANGÁ, passa a integrar a empresa Alucard Animes, evento realizado no Salão Nobre do Canto do Rio.",
      image: timeline2011Gakkou
    },
    {
      year: "2012",
      title: "Nova Loja do Alucard Animes",
      description: "A empresa abre outra loja no Centro de Niterói, na rua São João.",
      image: timeline2012Loja
    },
    {
      year: "2012",
      title: "Evento Hentai Con",
      description: "Primeiro evento erótico da empresa, com temática nos animes eróticos japoneses, \"Hentai\", realizado no Clube Marajoara no bairro do Fonseca em Niterói, foi um mega sucesso, atraindo vários frequentadores.",
      image: timeline2012Hentai
    },
    {
      year: "2013",
      title: "Eventos Marikanime e Itanime",
      description: "A empresa expande seus negócios e basta oferecer eventos de animes em outras cidades além do eixo Niterói-São Gonçalo, tem inicio ao evento Marikanime, realizado em Maricá no mês de abril no Colégio Joana e o evento Itanime, realizado em Itaboraí no colégio Cenecista Alberto Torres no mês de junho.",
      image: timeline2013Events
    },
    {
      year: "2016",
      title: "Evento Gonça Geek",
      description: "Depois das edições do Projeto Otaku, 2014 e 2015 a empresa resolve levar para São Gonçalo um evento com temática Geek, nasce o evento Gonça Geek, realizado no Clube Mauá.",
      image: timeline2016Goncageek
    },
    {
      year: "2016",
      title: "Evento Geek Festival BH",
      description: "Primeiro evento da empresa fora do estado do Rio de Janeiro, evento Geek Festival BH, realizado na cidade de Belo Horizonte em Minas Gerais.",
      image: timeline2016Bh
    },
    {
      year: "2017",
      title: "Evento NitGeek Festival",
      description: "Nasce o evento NitGeek Festival, primeiro evento com temática geek da cidade de Niterói.",
      image: timeline2017Nitgeek,
      link: "https://www.facebook.com/nitgeek"
    },
    {
      year: "2018",
      title: "Friburgo Anime Festival (FAF)",
      description: "Novo evento da Alucard Animes na região serrana do estado do RJ, o evento foi um grande sucesso já na sua primeira edição.",
      image: timeline2018Faf
    },
    {
      year: "2019",
      title: "Evento Geek in Rio",
      description: "Primeiro evento da Alucard Animes em terras cariocas, realizado no Clube Israelita em Copacabana.",
      image: timeline2019Geekinrio
    },
    {
      year: "2022",
      title: "Evento Anime no Gonça",
      description: "Atualização do evento Projeto Otaku, agora com o nome Anime no Gonça, o evento mais antigo de animes da cidade de São Gonçalo.",
      image: timeline2022Animegonca
    },
    {
      year: "2024 - 2025",
      title: "Nit Férias Geek",
      description: "Junção de 3 projetos do edital Geek 2024 de Niterói, nasce o Nit Férias Geek, realizado no Campo de São Bento em Icaraí/Niterói, no mês de janeiro de 2025.",
      image: timeline20242025Nitferias
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-secondary to-primary">
      <SnowEffect />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-accent mb-8">
            QUEM SOMOS
          </h1>
          <div className="flex justify-center mb-2">
            <img 
              src={alucardLogo} 
              alt="Alucard Animes - Desde 2003" 
              className="w-48 md:w-64 h-auto"
            />
          </div>
        </div>
      </section>

      {/* About Text */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border-2 border-accent/30 rounded-3xl p-8 md:p-12 mb-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                A história da Alucard Animes começa em 2003, quando a cena de animes e cultura geek no Brasil estava em plena expansão, mas o mercado ainda era carente de opções para os fãs. Naquela época, o acesso a produtos relacionados a animes, videogames e cultura pop ainda era limitado, e muitos fãs se viam obrigados a recorrer a opções importadas ou de difícil acesso. Foi nesse cenário que a Alucard Animes surgiu, fundada por Roberto Riedl Junior e o Grupo CVG MANGÁ, amigos apaixonados pela cultura geek e motivados pela necessidade de preencher essa lacuna no mercado.
              </p>

              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                O primeiro passo da empresa foi focar na venda de DVDs de animes, que naquela época eram itens difíceis de encontrar no Brasil. Muitos fãs tinham dificuldade em assistir aos seus animes favoritos devido à falta de opções de compra e à escassez de lançamentos no mercado nacional. A Alucard Animes, então, tornou-se uma referência para aqueles que desejavam adquirir DVDs de animes, oferecendo não apenas os títulos mais populares, mas também lançamentos exclusivos que conquistaram uma base fiel de consumidores.
              </p>

              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                Além dos DVDs, a Alucard Animes percebeu que o público estava cada vez mais sedento por produtos geeks em geral, como videogames, action figures, roupas temáticas e outros artigos de cultura pop. Foi então que a empresa expandiu seu portfólio, passando a comercializar uma vasta gama de produtos voltados para todos os fãs de animes, games e geek culture. A cada ano, novos produtos eram adicionados ao catálogo, sempre com o intuito de atender às necessidades dos seus clientes, que buscavam um lugar especializado onde pudessem encontrar tudo relacionado ao seu universo de paixão.
              </p>

              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                Mas a Alucard Animes não se limitou apenas à venda de produtos. Sabendo da importância de conectar as pessoas e criar uma comunidade, a empresa começou a organizar eventos de animes, onde fãs podiam se reunir, trocar ideias, assistir a shows e participar de atividades temáticas. Esses eventos tornaram-se cada vez mais populares, atraindo não apenas os fãs de animes, mas também aqueles que se identificavam com a cultura geek como um todo. De pequenas convenções a grandes eventos, a Alucard Animes sempre buscou proporcionar experiências inesquecíveis para seu público, criando um ambiente acolhedor e vibrante.
              </p>

              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                Com o passar dos anos, a empresa se consolidou como um dos maiores nomes do mercado de animes e cultura geek do Brasil. A Alucard Animes não apenas acompanhou a evolução do mercado, mas também se antecipou às tendências, trazendo aos fãs produtos exclusivos, lançamentos antecipados e uma curadoria cuidadosa de itens e eventos que conquistaram o coração do público.
              </p>

              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                Hoje, após mais de duas décadas de história, a Alucard Animes continua a ser referência, mantendo sua essência de compromisso com a qualidade, inovação e paixão pela cultura geek. A empresa segue como um elo entre os fãs e seus universos favoritos, mostrando que, por trás de cada DVD vendido, de cada produto geek oferecido, e de cada evento realizado, existe uma verdadeira história de dedicação e amor por um mercado que só cresce e encanta cada vez mais.
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="https://www.instagram.com/alucardanimes/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm border-2 border-accent/30 rounded-full p-4 hover:bg-accent/20 hover:scale-110 transition-all"
              aria-label="Instagram Alucard Animes"
            >
              <Instagram className="w-6 h-6 text-accent" />
            </a>
            <a
              href="https://www.facebook.com/AlucardAnimes"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm border-2 border-accent/30 rounded-full p-4 hover:bg-accent/20 hover:scale-110 transition-all"
              aria-label="Facebook Alucard Animes"
            >
              <Facebook className="w-6 h-6 text-accent" />
            </a>
          </div>

        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-accent text-center mb-16">
            NOSSA HISTÓRIA
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/30"></div>
            
            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className="md:w-1/2 bg-white/10 backdrop-blur-sm border-2 border-accent/30 rounded-2xl p-6">
                    <div className="text-accent font-black text-2xl mb-2">{event.year}</div>
                    <h3 className="text-white font-bold text-xl mb-3">{event.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-4">{event.description}</p>
                    {event.link && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-accent text-primary hover:bg-accent/90 font-bold text-sm px-6 py-2 rounded-full transition-colors"
                      >
                        SABER MAIS
                      </a>
                    )}
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:block w-6 h-6 bg-accent rounded-full border-4 border-primary z-10 flex-shrink-0"></div>
                  
                  {/* Image */}
                  <div className="md:w-1/2">
                    <div className="bg-white/10 backdrop-blur-sm border-2 border-accent/30 rounded-2xl p-4 overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={`${event.year} - ${event.title}`}
                        className="w-full h-auto rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default QuemSomos;
