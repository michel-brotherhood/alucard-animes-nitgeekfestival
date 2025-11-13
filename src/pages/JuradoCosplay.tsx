import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import InputMask from "react-input-mask";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import SnowEffect from "@/components/SnowEffect";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Trophy, Upload, Loader2, ChevronRight, ChevronLeft } from "lucide-react";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const MAX_VIDEO_SIZE = 50 * 1024 * 1024; // 50MB

const formSchema = z.object({
  nome_completo: z.string().trim().min(3, "Nome completo é obrigatório").refine(
    (val) => val.trim().split(/\s+/).length >= 2,
    "Digite seu nome e sobrenome"
  ),
  idade: z.coerce.number().min(18, "Idade mínima: 18 anos").max(100, "Idade inválida"),
  email: z.string().trim().email("E-mail inválido"),
  whatsapp: z.string().trim().min(14, "WhatsApp inválido"),
  concursos_ganhos: z.string().trim().min(10, "Por favor, descreva sua experiência"),
  eventos_juri: z.string().trim().min(10, "Por favor, liste os eventos"),
  seguidores_count: z.string().trim().min(1, "Informe o número de seguidores"),
});

type FormData = z.infer<typeof formSchema>;

const JuradoCosplay = () => {
  const [step, setStep] = useState(1);
  const [fotos, setFotos] = useState<File[]>([]);
  const [video, setVideo] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDisqualified, setShowDisqualified] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome_completo: "",
      idade: 18,
      email: "",
      whatsapp: "",
      concursos_ganhos: "",
      eventos_juri: "",
      seguidores_count: "",
    },
  });

  const handleFotosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter(file => {
      if (file.size > MAX_FILE_SIZE) {
        toast.error(`${file.name} é muito grande. Máximo: 10MB`);
        return false;
      }
      return true;
    });
    setFotos(validFiles);
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > MAX_VIDEO_SIZE) {
        toast.error("Vídeo muito grande. Máximo: 50MB");
        return;
      }
      setVideo(file);
    }
  };

  const uploadFiles = async (applicationId: string) => {
    const fotoUrls: string[] = [];

    // Upload fotos
    for (let i = 0; i < fotos.length; i++) {
      const foto = fotos[i];
      const fotoPath = `${applicationId}/fotos/${i}-${foto.name}`;
      const { error } = await supabase.storage
        .from('jurado-submissions')
        .upload(fotoPath, foto);
      
      if (error) {
        throw new Error(`Erro ao fazer upload da foto ${i + 1}: ${error.message}`);
      }
      fotoUrls.push(fotoPath);
    }

    // Upload video
    let videoUrl = null;
    if (video) {
      const videoPath = `${applicationId}/video/${video.name}`;
      const { error } = await supabase.storage
        .from('jurado-submissions')
        .upload(videoPath, video);
      
      if (error) {
        throw new Error(`Erro ao fazer upload do vídeo: ${error.message}`);
      }
      videoUrl = videoPath;
    }

    return { fotoUrls, videoUrl };
  };

  const validateStep1 = () => {
    const fields = ['nome_completo', 'idade', 'email', 'whatsapp'] as const;
    let isValid = true;
    fields.forEach(field => {
      const result = form.trigger(field);
      if (!result) isValid = false;
    });
    return isValid;
  };

  const handleNextStep = async () => {
    if (step === 1) {
      const isValid = await validateStep1();
      if (isValid) {
        setStep(2);
      }
    }
  };

  const calculateScore = (data: FormData): number => {
    let score = 0;

    // 1. Análise de seguidores (escala de 0-5 pontos)
    const seguidoresText = data.seguidores_count.replace(/[^0-9]/g, '');
    const seguidores = parseInt(seguidoresText) || 0;
    
    if (seguidores < 5000) return 0; // Desqualificado
    
    if (seguidores >= 100000) score += 5;
    else if (seguidores >= 50000) score += 4;
    else if (seguidores >= 20000) score += 3.5;
    else if (seguidores >= 10000) score += 3;
    else if (seguidores >= 5000) score += 2.5;

    // 2. Vitórias em concursos (2.5 pontos)
    const concursosLower = data.concursos_ganhos.toLowerCase();
    const temVitoria = concursosLower.includes('1°') || 
                       concursosLower.includes('1º') || 
                       concursosLower.includes('2°') || 
                       concursosLower.includes('2º') ||
                       concursosLower.includes('primeiro') ||
                       concursosLower.includes('segundo') ||
                       concursosLower.includes('campe');
    
    if (!temVitoria) return 0; // Desqualificado
    score += 2.5;

    // 3. Experiência como júri (2.5 pontos)
    const eventosLower = data.eventos_juri.toLowerCase();
    const foiJurado = !eventosLower.includes('nunca') && 
                      !eventosLower.includes('nenhum') &&
                      !eventosLower.includes('não') &&
                      data.eventos_juri.trim().length > 15;
    
    if (!foiJurado) return 0; // Desqualificado
    score += 2.5;

    // 4. Vídeo enviado (bônus de 2 pontos)
    if (video) {
      score += 2;
    }

    return score;
  };

  const onSubmit = async (data: FormData) => {
    if (fotos.length === 0) {
      toast.error("Por favor, envie pelo menos uma foto sua como júri");
      return;
    }

    // Calculate score based on criteria
    const pontuacao = calculateScore(data);
    
    // Minimum score of 9.0 required
    if (pontuacao < 9.0) {
      setShowDisqualified(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const { data: application, error: insertError } = await supabase
        .from('jurado_cosplay_applications')
        .insert({
          nome_completo: data.nome_completo,
          idade: data.idade,
          email: data.email,
          whatsapp: data.whatsapp,
          concursos_ganhos: data.concursos_ganhos,
          eventos_juri: data.eventos_juri,
          seguidores_count: data.seguidores_count,
          foto_juri_urls: [],
          video_url: null,
          pontuacao: pontuacao,
        })
        .select()
        .single();

      if (insertError) throw insertError;

      const { fotoUrls, videoUrl } = await uploadFiles(application.id);

      const { error: updateError } = await supabase
        .from('jurado_cosplay_applications')
        .update({
          foto_juri_urls: fotoUrls,
          video_url: videoUrl,
        })
        .eq('id', application.id);

      if (updateError) throw updateError;

      toast.success("Inscrição enviada com sucesso! Entraremos em contato em breve.");
      form.reset();
      setFotos([]);
      setVideo(null);
      setStep(1);
    } catch (error: any) {
      console.error('Erro ao enviar inscrição:', error);
      toast.error(`Erro ao enviar inscrição: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showDisqualified) {
    return (
      <div className="min-h-screen overflow-x-hidden">
        <SnowEffect />
        <Header />
        <section className="bg-gradient-to-b from-secondary via-primary to-secondary py-16 px-6 min-h-[80vh] flex items-center justify-center">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent/30">
              <CardContent className="p-12">
                <Trophy className="w-20 h-20 text-accent mx-auto mb-6 opacity-50" />
                <h2 className="text-3xl font-black text-white mb-4">
                  Obrigado por seu interesse!
                </h2>
                <p className="text-white/80 text-lg mb-6">
                  Infelizmente, sua pontuação não foi suficiente para se qualificar para a vaga.
                </p>
                <p className="text-white/60">
                  Mais sorte na próxima vez!
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <Footer />
        <FloatingMenu />
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SnowEffect />
      <Header />

      <section className="bg-gradient-to-b from-secondary via-primary to-secondary py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent/70 mb-4">
              <Trophy className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-accent mb-4">
              QUERO SER JURADO DE COSPLAY
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Estamos abrindo vaga para jurado(a) de concurso de cosplay em evento de cultura pop.
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent/30">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Informações da Vaga</CardTitle>
              <CardDescription className="text-white/80 text-base space-y-2">
                <p><strong className="text-accent">Cachê:</strong> R$ 300,00 pelo dia de atuação</p>
                <p className="mt-2">
                  <strong className="text-accent">Responsabilidades:</strong> Avaliar participantes com base em critérios de pontuação, 
                  como fidelidade ao personagem, qualidade do figurino, acabamento e detalhes, interpretação/atuação, 
                  criatividade e presença de palco.
                </p>
                <p className="mt-2">
                  <strong className="text-accent">Requisitos:</strong> Portfólio, conhecimento em anime, games, filmes, séries e cultura geek em geral, 
                  além de postura profissional e imparcialidade durante todo o concurso.
                </p>
              </CardDescription>
            </CardHeader>

            <CardContent>
              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3">
                  <span className={`text-xs sm:text-sm font-semibold ${step >= 1 ? 'text-accent' : 'text-white/50'}`}>
                    Etapa 1: Informações Básicas
                  </span>
                  <span className={`text-xs sm:text-sm font-semibold ${step >= 2 ? 'text-accent' : 'text-white/50'}`}>
                    Etapa 2: Portfólio
                  </span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div 
                    className="bg-accent h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(step / 2) * 100}%` }}
                  />
                </div>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {step === 1 && (
                    <div className="bg-accent/20 p-6 rounded-lg border border-accent/30 space-y-4">
                      <h3 className="text-xl font-bold text-accent mb-4">Informações Básicas</h3>
                      
                      <FormField
                        control={form.control}
                        name="nome_completo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Nome Completo *</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="" className="bg-white/10 border-white/20 text-white placeholder:text-white/30" />
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
                              <Input type="number" {...field} placeholder="" className="bg-white/10 border-white/20 text-white placeholder:text-white/30" />
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
                            <FormLabel className="text-white">E-mail *</FormLabel>
                            <FormControl>
                              <Input type="email" {...field} placeholder="" className="bg-white/10 border-white/20 text-white placeholder:text-white/30" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="whatsapp"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">WhatsApp *</FormLabel>
                            <FormControl>
                              <InputMask
                                mask="(99) 99999-9999"
                                value={field.value}
                                onChange={field.onChange}
                              >
                                {(inputProps: any) => (
                                  <Input 
                                    {...inputProps} 
                                    placeholder="" 
                                    className="bg-white/10 border-white/20 text-white placeholder:text-white/30" 
                                  />
                                )}
                              </InputMask>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="button"
                        onClick={handleNextStep}
                        className="w-full bg-accent text-primary hover:bg-accent/90 font-bold text-lg py-6 rounded-full mt-6"
                      >
                        Próxima Etapa
                        <ChevronRight className="ml-2 w-5 h-5" />
                      </Button>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="bg-accent/20 p-6 rounded-lg border border-accent/30 space-y-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-accent">Fase de Pontuação - Portfólio</h3>
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={() => setStep(1)}
                          className="text-white hover:text-accent"
                        >
                          <ChevronLeft className="mr-2 w-5 h-5" />
                          Voltar
                        </Button>
                      </div>
                      <p className="text-white/80 text-sm mb-6">
                        Cada etapa dessa fase será pontuada até o fim. Se chegar com a nota mais alta, você estará na classificatória.
                      </p>

                      <FormField
                        control={form.control}
                        name="concursos_ganhos"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">
                              1. Quantos concursos você já ganhou a nível nacional (1º ou 2º lugar)? Em quais eventos? *
                            </FormLabel>
                            <FormControl>
                              <Textarea {...field} rows={3} className="bg-white/10 border-white/20 text-white" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="eventos_juri"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">
                              2. Quais eventos você já trabalhou antes como Júri a nível Nacional? *
                            </FormLabel>
                            <FormControl>
                              <Textarea {...field} rows={3} className="bg-white/10 border-white/20 text-white" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div>
                        <Label className="text-white mb-2 block">
                          3. Envie fotos suas como Júri em um dos eventos citados acima *
                        </Label>
                        <div className="relative">
                          <Input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleFotosChange}
                            className="bg-white/10 border-white/20 text-white file:mr-2 file:py-2 file:px-3 file:rounded-full file:border-0 file:text-xs sm:file:text-sm file:font-semibold file:bg-accent file:text-primary hover:file:bg-accent/90 text-xs sm:text-sm pr-10"
                          />
                          <Upload className="absolute right-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-white/50 pointer-events-none" />
                        </div>
                        {fotos.length > 0 && (
                          <p className="text-accent text-sm mt-2">{fotos.length} foto(s) selecionada(s)</p>
                        )}
                        <p className="text-white/60 text-xs mt-1">Máximo: 10MB por foto</p>
                      </div>

                      <FormField
                        control={form.control}
                        name="seguidores_count"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">
                              4. Quantos seguidores reais você tem na sua rede hoje? (pode ser TikTok) *
                            </FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="Ex: 15.000" className="bg-white/10 border-white/20 text-white" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div>
                        <Label className="text-white mb-2 block">
                          5. Envie algum vídeo seu explicando o por que você se difere dos demais candidatos
                        </Label>
                        <div className="relative">
                          <Input
                            type="file"
                            accept="video/*"
                            onChange={handleVideoChange}
                            className="bg-white/10 border-white/20 text-white file:mr-2 file:py-2 file:px-3 file:rounded-full file:border-0 file:text-xs sm:file:text-sm file:font-semibold file:bg-accent file:text-primary hover:file:bg-accent/90 text-xs sm:text-sm pr-10"
                          />
                          <Upload className="absolute right-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-white/50 pointer-events-none" />
                        </div>
                        {video && (
                          <p className="text-accent text-sm mt-2">Vídeo selecionado: {video.name}</p>
                        )}
                        <p className="text-white/60 text-xs mt-1">Máximo: 50MB</p>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-accent text-primary hover:bg-accent/90 font-bold text-lg py-6 rounded-full"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          "ENVIAR INSCRIÇÃO"
                        )}
                      </Button>
                    </div>
                  )}
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default JuradoCosplay;
