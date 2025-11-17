import { useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Home, Mail } from "lucide-react";

const Confirmacao = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, formType } = location.state || {};

  useEffect(() => {
    // Se não houver dados, redireciona para home
    if (!formData || !formType) {
      navigate("/");
    }
  }, [formData, formType, navigate]);

  if (!formData || !formType) {
    return null;
  }

  // Mapeamento de labels amigáveis
  const fieldLabels: Record<string, string> = {
    nome: 'Nome',
    nomeCompleto: 'Nome Completo',
    email: 'E-mail',
    telefone: 'Telefone',
    whatsapp: 'WhatsApp',
    idade: 'Idade',
    cidade: 'Cidade',
    categoria: 'Categoria',
    personagem: 'Personagem',
    origem: 'Origem',
    descricao: 'Descrição',
    responsavel: 'Responsável',
    nomeGrupo: 'Nome do Grupo',
    lider: 'Líder',
    nomeResponsavel: 'Nome do Responsável',
    contatoResponsavel: 'Contato do Responsável',
    chave: 'Chave da Competição',
    numeroIntegrantes: 'Número de Integrantes',
    musica: 'Música',
    artista: 'Artista',
    integrantes: 'Lista de Integrantes',
    formaEnvio: 'Forma de Envio',
    youtubeUrl: 'Link do YouTube',
    nomeMusica: 'Nome da Música',
    observacoes: 'Observações',
    assunto: 'Assunto',
    mensagem: 'Mensagem',
    nomeEmpresa: 'Nome da Empresa',
    cnpj: 'CNPJ',
    tipoProduto: 'Tipo de Produto',
    tamanhoEstande: 'Tamanho do Estande',
    acceptPrivacy: 'Aceite de Privacidade',
    seguidoresCount: 'Seguidores',
    concursosGanhos: 'Concursos Ganhos',
    eventosJuri: 'Eventos como Júri',
    videoUrl: 'Link do Vídeo'
  };

  // Formatar valores
  const formatValue = (key: string, value: any): string => {
    if (value === undefined || value === null || value === '') return '-';
    if (typeof value === 'boolean') return value ? 'Sim' : 'Não';
    if (key === 'formaEnvio') {
      return value === 'link' ? 'Link do YouTube' : 'Nome da Música';
    }
    return String(value);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary via-primary to-secondary">
      <Header />
      
      <main className="flex-grow py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Success Icon and Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-500 mb-6 animate-bounce">
              <CheckCircle2 className="w-12 h-12 text-green-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-accent mb-4">
              Inscrição Confirmada!
            </h1>
            <p className="text-xl text-white/90">
              Recebemos sua inscrição para: <span className="font-bold text-accent">{formType}</span>
            </p>
          </div>

          {/* Confirmation Card */}
          <Card className="bg-white/10 backdrop-blur-md border-2 border-accent/30 mb-8">
            <CardHeader className="border-b border-accent/20">
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <Mail className="w-6 h-6 text-accent" />
                Dados da Inscrição
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid gap-4">
                {Object.entries(formData).map(([key, value]) => {
                  // Pular campos vazios ou booleanos false
                  if (value === '' || value === false || value === undefined || value === null) {
                    return null;
                  }
                  
                  return (
                    <div 
                      key={key} 
                      className="grid grid-cols-1 md:grid-cols-3 gap-2 p-4 rounded-lg bg-white/5 border border-accent/10 hover:bg-white/10 transition-colors"
                    >
                      <div className="font-semibold text-accent">
                        {fieldLabels[key] || key.charAt(0).toUpperCase() + key.slice(1)}:
                      </div>
                      <div className="md:col-span-2 text-white/90 break-words">
                        {formatValue(key, value)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Important Notice */}
          <Card className="bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-md border-2 border-accent/40 mb-8">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Próximos Passos
                  </h3>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Você receberá um e-mail de confirmação em breve no endereço fornecido.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Verifique sua caixa de spam caso não receba o e-mail em alguns minutos.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Entre em contato conosco caso tenha alguma dúvida sobre sua inscrição.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:brightness-110 transition-all"
              asChild
            >
              <Link to="/" className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                Voltar para Home
              </Link>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-accent text-white hover:bg-accent/20"
              asChild
            >
              <Link to="/contato" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Fale Conosco
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default Confirmacao;
