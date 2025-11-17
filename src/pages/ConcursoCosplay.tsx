import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trophy, Users, Clock, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";
import cosplay1 from "@/assets/cosplay-1.jpg";
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

const formSchema = z.object({
  nome: z.string().min(3, "Nome deve ter no mínimo 3 caracteres").max(100),
  email: z.string().email("Email inválido").max(255),
  telefone: z.string().min(10, "Telefone inválido").max(20),
  idade: z.string().min(1, "Idade é obrigatória"),
  categoria: z.string().min(1, "Selecione uma categoria"),
  personagem: z.string().min(2, "Nome do personagem é obrigatório").max(100),
  origem: z.string().min(2, "Origem do personagem é obrigatória").max(200),
  descricao: z.string().max(1000, "Descrição muito longa").optional(),
  responsavel: z.string().max(100).optional(),
});

const ConcursoCosplay = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      idade: "",
      categoria: "",
      personagem: "",
      origem: "",
      descricao: "",
      responsavel: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          to: 'nitgeekfestival@alucardanimes.com.br',
          subject: 'Nova Inscrição - Concurso Cosplay',
          formData: values,
          formType: 'Concurso Cosplay'
        }
      });

      if (error) throw error;

      toast({
        title: "Inscrição enviada!",
        description: "Você receberá um email de confirmação em breve.",
      });
      
      // Redirecionar para página de confirmação
      navigate('/confirmacao', { 
        state: { 
          formData: values, 
          formType: 'Concurso Cosplay' 
        } 
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Erro ao enviar inscrição",
        description: "Por favor, tente novamente ou entre em contato conosco.",
        variant: "destructive",
      });
    }
  };

  const categorias = [
    { value: "desfile-livre", label: "Desfile Livre (13+ anos)" },
    { value: "desfile-infantil", label: "Desfile Infantil Livre (até 12 anos)" },
    { value: "desfile-anime", label: "Desfile Anime" },
    { value: "desfile-geek", label: "Desfile Geek" },
    { value: "desfile-games", label: "Desfile Games" },
    { value: "apresentacao-individual", label: "Apresentação Tradicional Individual" },
    { value: "apresentacao-grupo", label: "Apresentação Tradicional em Grupo" },
    { value: "cospobre", label: "Cospobre" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url(${cosplay1})`,
          filter: 'blur(3px)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-primary to-secondary opacity-75" />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
      
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-accent text-center mb-6">
            CONCURSO COSPLAY
          </h1>
          <p className="text-xl text-white/90 text-center mb-12">
            Mostre seu talento e concorra a prêmios incríveis! 🏆
          </p>

          {/* Informações Principais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent/30">
              <CardContent className="pt-6 text-center">
                <Trophy className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Premiação</h3>
                <p className="text-white/80 text-sm">Medalha + Kit de produtos</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent/30">
              <CardContent className="pt-6 text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Idade Mínima</h3>
                <p className="text-white/80 text-sm">A partir de 6 anos</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent/30">
              <CardContent className="pt-6 text-center">
                <Clock className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Data do Evento</h3>
                <p className="text-white/80 text-sm">14 de Dezembro de 2025</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent/30">
              <CardContent className="pt-6 text-center">
                <Award className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Categorias</h3>
                <p className="text-white/80 text-sm">8 categorias disponíveis</p>
              </CardContent>
            </Card>
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

          {/* Regulamento Completo */}
          <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent mb-12">
            <CardHeader>
              <CardTitle className="text-white text-2xl font-black">📋 REGULAMENTO COMPLETO</CardTitle>
              <p className="text-white/70 text-sm mt-2">
                O presente regulamento objetiva-se a proporcionar o bom andamento do concurso, 
                assegurando a igualdade de condições a todos os participantes inscritos.
              </p>
            </CardHeader>
            <CardContent className="text-white/90 space-y-6">
              
              {/* 1. DISPOSIÇÕES GERAIS */}
              <div>
                <h3 className="font-black text-accent text-xl mb-3">1. DISPOSIÇÕES GERAIS</h3>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-white mb-2">1.1. Podem concorrer:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                      <li>Pessoas a partir de 6 anos de idade</li>
                      <li>Crianças de 6 a 12 anos somente com a presença do responsável</li>
                      <li>Adolescentes de 13 a 17 anos, somente com autorização do pai, mãe ou responsável legal</li>
                      <li>Cosplayers de quaisquer personagens fictícios de acesso público, criados em qualquer país</li>
                      <li>Cosplayers de celebridades com traje oficial e conhecido do artista</li>
                      <li>Cosplayers de mídia adulta, desde que não firam nenhuma das regras</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">1.2. Não poderão concorrer:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                      <li>Organizadores, juízes, coordenadores, palestrantes, professores de workshops, estandistas e staffs do concurso cosplay no evento</li>
                      <li>Personagens originários de fanzines, fóruns e blogs</li>
                      <li>Cosplays originais e visuais</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">1.3. Cosplays "genéricos":</h4>
                    <p className="text-sm ml-4">Apenas de classes genéricas que são mais importantes como grupo do que indivíduos específicos desse mesmo grupo (Stormtroopers, classes de MMORPG, etc.) não receberão nota.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">1.4. Mau comportamento:</h4>
                    <p className="text-sm ml-4">O participante que interferir no bom andamento do concurso, descumprindo regras, sendo desrespeitoso ou atrasando a programação do evento, está sujeito a ser proibido de participar de concursos realizados nos eventos organizados pelo Grupo CVG MANGÁ por até 1 (um) ano.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">1.5. Ficha de inscrição:</h4>
                    <p className="text-sm ml-4">Preencher de forma completa todos os campos solicitados antes de entregar seja aqui pelo site ou na área cosplay. Ao assiná-la, os participantes declaram estar de pleno acordo com as regras do concurso.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">1.6. Direitos de imagem:</h4>
                    <p className="text-sm ml-4">Uma vez inscritos no concurso, os cosplayers cedem os direitos de todas as suas imagens e sons (vídeo e fotografias) relacionados ao concurso e evento, sem compensações financeiras por seu uso para fins promocionais e de divulgação em quaisquer mídias.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">1.7. Entrada antecipada:</h4>
                    <p className="text-sm ml-4">Todo cosplay devidamente cadastrado aqui pelo site poderá entrar antecipadamente no evento em até meia hora antes.</p>
                  </div>
                </div>
              </div>

              {/* 2. AS CATEGORIAS */}
              <div>
                <h3 className="font-black text-accent text-xl mb-3">2. AS CATEGORIAS</h3>
                
                <div className="space-y-3">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-bold text-white mb-2">2.1. Desfile Livre</h4>
                    <p className="text-sm">Somente para pessoas a partir dos 13 anos de idade. O participante tem avaliada apenas a roupa, individualmente, parando diante dos juízes sobre o palco. Pode interpretar o personagem, mas não é necessária nenhuma apresentação.</p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-bold text-white mb-2">2.2. Desfile Infantil Livre</h4>
                    <p className="text-sm">Somente para pessoas até os 12 anos de idade. O participante tem avaliada apenas a roupa, individualmente, parando diante dos juízes sobre o palco. Pode interpretar o personagem, mas não é necessária nenhuma apresentação.</p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-bold text-white mb-2">2.3. Desfile Anime</h4>
                    <p className="text-sm">Somente para personagens de animes. O participante tem avaliada apenas a roupa, individualmente, parando diante dos juízes sobre o palco. Pode interpretar o personagem, mas não é necessária nenhuma apresentação.</p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-bold text-white mb-2">2.4. Desfile Geek</h4>
                    <p className="text-sm">Somente para personagens de desenhos ocidentais, HQs, filmes ocidentais (live action), séries da TV ocidental. O participante tem avaliada apenas a roupa, individualmente, parando diante dos juízes sobre o palco. Pode interpretar o personagem, mas não é necessária nenhuma apresentação.</p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-bold text-white mb-2">2.5. Desfile Games</h4>
                    <p className="text-sm">Somente para personagens originais de vídeo games. O participante tem avaliada apenas a roupa, individualmente, parando diante dos juízes sobre o palco. Pode interpretar o personagem, mas não é necessária nenhuma apresentação.</p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-bold text-white mb-2">2.6. Apresentação Tradicional Individual</h4>
                    <p className="text-sm">O participante interpreta seu personagem individualmente. A apresentação deve ser fiel à obra de origem.</p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-bold text-white mb-2">2.7. Apresentação Tradicional em Grupo</h4>
                    <p className="text-sm">Somente para grupos de 3 a 6 pessoas. As apresentações podem ser baseadas em animes, games ou universo geek, tradicional.</p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-bold text-white mb-2">2.8. Categoria Cospobre</h4>
                    <p className="text-sm">Categoria especial para cosplays criativos feitos com materiais alternativos.</p>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm"><strong>2.9.</strong> A categoria deve ser informada no ato da inscrição.</p>
                    <p className="text-sm mt-2"><strong>2.10.</strong> O participante poderá se inscrever em até 2 categorias, com exceção da categoria infantil.</p>
                  </div>
                </div>
              </div>

              {/* 3. INSCRIÇÕES */}
              <div>
                <h3 className="font-black text-accent text-xl mb-3">3. INSCRIÇÕES</h3>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-white mb-2">3.1. Onde e quando:</h4>
                    <p className="text-sm ml-4">No formulário abaixo em até 2 dias antes do evento. Após esta data, somente na área cosplay no dia do evento, até uma hora antes do início do concurso. Só serão aceitas inscrições com todos os campos preenchidos.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">3.2. Número de categorias:</h4>
                    <p className="text-sm ml-4">Pode-se participar de até 2 categorias no mesmo dia, preenchendo uma ficha para cada categoria.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">3.3. Material de referência:</h4>
                    <p className="text-sm ml-4">O material composto de imagens e informações referentes aos personagens é opcional e recomendado, valendo 0,5 pontos na média final do participante.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">3.4. Áudio:</h4>
                    <p className="text-sm ml-4">É permitido e opcional o uso de áudio pré-gravado, constituindo uma única faixa no formato .MP3, em pen-driver somente, a ser entregue no ato da inscrição com nome do participante/grupo e do personagem/série.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">3.5. Fila de apresentação:</h4>
                    <p className="text-sm ml-4">Os participantes devem dirigir-se ao lado do palco 15 minutos antes do concurso para formação da fila. Cosplayers que deixarem a fila estão sujeitos a desclassificação.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">3.6. Vagas:</h4>
                    <p className="text-sm ml-4">Serão permitidas, por dia, até 50 inscrições para Desfiles, 10 para Categoria Apresentações.</p>
                  </div>
                </div>
              </div>

              {/* 4. APRESENTAÇÃO */}
              <div>
                <h3 className="font-black text-accent text-xl mb-3">4. APRESENTAÇÃO</h3>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-white mb-2">4.3. Tempo máximo de apresentação:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                      <li>0:30 (trinta segundos) para Categoria Desfile</li>
                      <li>3:00 (três minutos) para Categoria Apresentação</li>
                      <li>Para Apresentações Individuais: +30 segundos para montagem e +30 para desmontagem de cenário</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">4.5. Efeitos especiais:</h4>
                    <p className="text-sm ml-4">São permitidos efeitos secos (papel picado, confetes, purpurinas, talcos) e bolhas de sabão com sabão em recipiente fechado de até 60ml. Líquidos, viscosos, fogos, explosivos, tóxicos, armas brancas e de fogo estão proibidos.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">4.7. Staffs pessoais:</h4>
                    <p className="text-sm ml-4">São permitidos até 4 para Apresentação Individual, ou até 3 para Apresentação em Grupo, vestindo camiseta predominantemente preta, desde que informados na ficha de inscrição.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">4.12. Conteúdo das apresentações:</h4>
                    <p className="text-sm ml-4">Deve levar em conta a presença de crianças e pais no evento. Apresentações que firam disposições criminais estarão sujeitas às devidas punições legais.</p>
                  </div>
                </div>
              </div>

              {/* 5. JULGAMENTO */}
              <div>
                <h3 className="font-black text-accent text-xl mb-3">5. JULGAMENTO</h3>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-white mb-2">5.1. Banca e notas:</h4>
                    <p className="text-sm ml-4">Serão de no mínimo 2 e máximo 5 jurados. As notas terão intervalos de 0,25 ponto numa escala de 1 a 10. A decisão final da coordenação e jurados é irrefutável e inquestionável.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">5.2. Quesitos e pesos:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                      <li><strong>Performance</strong> (peso 4): Qualidade do roteiro e da interpretação, impacto da apresentação</li>
                      <li><strong>Cosplay</strong> (peso 4): Acabamento da vestimenta, similaridade aos trajes originais</li>
                      <li><strong>Fidelidade/Criatividade</strong> (peso 2): Fidelidade à obra ou criatividade da apresentação</li>
                      <li>Para Desfile: quesito único "Cosplay" com peso 10</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 6. PREMIAÇÃO */}
              <div>
                <h3 className="font-black text-accent text-xl mb-3">6. PREMIAÇÃO</h3>
                
                <div className="bg-accent/20 border-2 border-accent rounded-lg p-4 space-y-2">
                  <p className="font-bold text-white">Todas as categorias:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                    <li><strong>Vencedor:</strong> Medalha + Kit de produtos</li>
                  </ul>
                  <p className="text-sm mt-3 ml-4"><strong>Observação:</strong> Mínimo de 5 participantes por categoria. Se não houver o número mínimo, as premiações poderão ser alteradas ou canceladas sem aviso prévio.</p>
                </div>
              </div>

              {/* 7. DESCLASSIFICAÇÕES */}
              <div>
                <h3 className="font-black text-accent text-xl mb-3">7. DESCLASSIFICAÇÕES</h3>
                
                <div className="bg-red-500/20 border-2 border-red-500 rounded-lg p-4">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>O Concurso Cosplay poderá ser cancelado se não houver o número mínimo de 5 participantes por categoria.</li>
                    <li>Comentários maldosos, mal-intencionados ou caluniosos contra a organização dos eventos do Grupo CVG MANGÁ/ALUCARD ANIMES em redes sociais resultarão em desclassificação imediata.</li>
                  </ul>
                </div>
              </div>

              {/* 8. OBSERVAÇÕES FINAIS */}
              <div>
                <h3 className="font-black text-accent text-xl mb-3">8. OBSERVAÇÕES FINAIS</h3>
                
                <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                  <li>As regras são passíveis de mudanças sem aviso prévio, visando o melhor desenvolvimento do concurso.</li>
                  <li>Todos os resultados e notas serão considerados oficiais depois de divulgados no dia do evento.</li>
                  <li>É responsabilidade dos organizadores do concurso o cumprimento destas regras.</li>
                  <li>Os casos omissos no regulamento serão analisados pela comissão organizadora e a decisão será soberana e inquestionável.</li>
                </ul>
              </div>

            </CardContent>
          </Card>

          {/* Formulário de Inscrição */}
          <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent">
            <CardHeader>
              <CardTitle className="text-white text-3xl font-black text-center">
                FORMULÁRIO DE INSCRIÇÃO
              </CardTitle>
              <p className="text-white/80 text-center">Preencha os dados abaixo para se inscrever</p>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="nome"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Nome Completo *</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome completo" {...field} className="bg-white/20 text-white border-white/30 placeholder:text-white/70" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="seu@email.com" {...field} className="bg-white/20 text-white border-white/30 placeholder:text-white/70" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="telefone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Telefone *</FormLabel>
                          <FormControl>
                            <Input placeholder="(00) 00000-0000" {...field} className="bg-white/20 text-white border-white/30 placeholder:text-white/70" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="idade"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Idade *</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="Sua idade" {...field} className="bg-white/20 text-white border-white/30 placeholder:text-white/70" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="categoria"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Categoria *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white/20 text-white border-white/30 placeholder:text-white/70">
                                <SelectValue placeholder="Selecione a categoria" className="placeholder:text-white/70" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white">
                              {categorias.map((cat) => (
                                <SelectItem key={cat.value} value={cat.value}>
                                  {cat.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="personagem"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Nome do Personagem *</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: Naruto Uzumaki" {...field} className="bg-white/20 text-white border-white/30 placeholder:text-white/70" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="origem"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Origem do Personagem *</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: Naruto Shippuden" {...field} className="bg-white/20 text-white border-white/30 placeholder:text-white/70" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="responsavel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Nome do Responsável (se menor de idade)</FormLabel>
                          <FormControl>
                            <Input placeholder="Nome do responsável" {...field} className="bg-white/20 text-white border-white/30 placeholder:text-white/70" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="descricao"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Descrição da Apresentação (opcional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Descreva brevemente sua apresentação, cosplay e materiais utilizados"
                            className="bg-white/20 text-white border-white/30 placeholder:text-white/70 min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="bg-accent/20 border-2 border-accent rounded-lg p-4">
                    <p className="text-white/90 text-sm">
                      Ao enviar este formulário, você declara estar de acordo com todas as regras do concurso 
                      e cede os direitos de imagem relacionados ao evento para fins promocionais.
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-accent text-primary hover:bg-accent/90 font-bold text-lg py-6 rounded-full"
                  >
                    ENVIAR INSCRIÇÃO
                  </Button>

                  <div className="text-center bg-white/5 rounded-lg p-4 md:p-6">
                    <p className="text-white/90 text-sm md:text-base">
                      Dúvidas? {" "}
                      <a 
                        href="mailto:nitgeek@alucardanimes.com.br?subject=Dúvida%20-%20Concurso%20Cosplay"
                        className="text-accent hover:text-accent/80 underline font-semibold transition-colors"
                      >
                        Fale com a equipe Alucard
                      </a>
                    </p>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

        <Footer />
        <FloatingMenu />
      </div>
    </div>
  );
};

export default ConcursoCosplay;
