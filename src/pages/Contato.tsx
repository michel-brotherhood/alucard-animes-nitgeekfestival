import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

// Phone validation regex - Brazilian format
const phoneRegex = /^(?:\+?55\s?)?(?:\(?[1-9]{2}\)?\s?)?(?:9\s?)?[0-9]{4}[-\s]?[0-9]{4}$/;

const formSchema = z.object({
  name: z.string()
    .trim()
    .min(3, { message: "Nome deve ter pelo menos 3 caracteres" })
    .max(100, { message: "Nome deve ter no máximo 100 caracteres" }),
  email: z.string()
    .trim()
    .email({ message: "E-mail inválido" })
    .max(255, { message: "E-mail deve ter no máximo 255 caracteres" }),
  phone: z.string()
    .trim()
    .regex(phoneRegex, { message: "Telefone inválido. Use o formato: (XX) 9XXXX-XXXX" })
    .min(10, { message: "Telefone deve ter pelo menos 10 dígitos" }),
  subject: z.string({
    required_error: "Selecione um assunto",
  }),
  message: z.string()
    .trim()
    .min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" })
    .max(1000, { message: "Mensagem deve ter no máximo 1000 caracteres" }),
  acceptPrivacy: z.boolean()
    .refine((val) => val === true, {
      message: "Você deve aceitar a política de privacidade",
    }),
});

type FormData = z.infer<typeof formSchema>;

const Contato = () => {
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      acceptPrivacy: false,
    },
  });

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    }
    return numbers.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  };

  const onSubmit = async (data: FormData) => {
    try {
      const { data: result, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          to: 'nitgeek@alucardanimes.com.br',
          subject: 'Novo Contato - NitGeek Festival',
          formData: data,
          formType: 'Formulário de Contato'
        }
      });

      if (error) throw error;

      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      
      form.reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente ou entre em contato via WhatsApp.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-accent py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              FALE COM A EQUIPE ALUCARD
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Estamos aqui para ajudar! Envie sua mensagem e responderemos em breve.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border-2 border-border rounded-xl p-8 md:p-12 shadow-lg">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Field */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold flex items-center gap-2">
                          <User className="w-4 h-4 text-primary" />
                          Nome *
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Seu nome completo" 
                            {...field}
                            className="border-input focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email Field */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold flex items-center gap-2">
                          <Mail className="w-4 h-4 text-primary" />
                          E-mail *
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="seu@email.com" 
                            {...field}
                            className="border-input focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Phone Field */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary" />
                          Telefone *
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="(21) 99999-9999" 
                            {...field}
                            onChange={(e) => {
                              const formatted = formatPhoneNumber(e.target.value);
                              field.onChange(formatted);
                            }}
                            maxLength={15}
                            className="border-input focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Subject Field */}
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-primary" />
                          Assunto *
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-input focus:border-primary">
                              <SelectValue placeholder="Selecione um assunto" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="locacao">Locação de Estande</SelectItem>
                            <SelectItem value="parcerias">Parcerias</SelectItem>
                            <SelectItem value="duvidas">Dúvidas Gerais</SelectItem>
                            <SelectItem value="feedbacks">Feedbacks</SelectItem>
                            <SelectItem value="outros">Outros</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Message Field */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold">
                          Mensagem *
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Escreva sua mensagem aqui..."
                            className="min-h-[150px] border-input focus:border-primary resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-xs text-muted-foreground mt-1">
                          {field.value.length}/1000 caracteres
                        </p>
                      </FormItem>
                    )}
                  />

                  {/* Privacy Policy Checkbox */}
                  <FormField
                    control={form.control}
                    name="acceptPrivacy"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-normal text-foreground">
                            Li e aceito a{" "}
                            <Link 
                              to="/politica-privacidade" 
                              className="text-primary hover:underline font-semibold"
                              target="_blank"
                            >
                              Política de Privacidade
                            </Link>
                            {" "}*
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    variant="skewed"
                    className="w-full text-lg py-6 rounded-2xl"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </Form>

              {/* Additional Contact Info */}
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-center text-muted-foreground mb-4">
                  Ou entre em contato direto pelo WhatsApp:
                </p>
                <div className="flex justify-center">
                  <a
                    href="https://api.whatsapp.com/send/?phone=5521977498015&text=Olá!+Gostaria+de+informações+sobre+o+Itanime&type=phone_number"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg transition-colors"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default Contato;
