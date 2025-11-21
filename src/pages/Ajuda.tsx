import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import FAQ from "@/components/FAQ";
import { AlertCircle, Shield, Info, MessageSquare } from "lucide-react";

const Ajuda = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-accent py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              CENTRAL DE AJUDA
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Tire suas dúvidas e conheça as regras do evento
            </p>
          </div>
        </section>

        {/* Informações Principais */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Info className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-5xl font-black text-secondary">
                INFORMAÇÕES PRINCIPAIS
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <h3 className="font-bold text-xl text-foreground mb-3">📍 Localização</h3>
                <p className="text-foreground/80">
                  Clube Canto do Rio<br />
                  Av Visconde do Rio Branco, 701<br />
                  Centro, Niterói - RJ, 24020-005
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <h3 className="font-bold text-xl text-foreground mb-3">🎫 Ingressos</h3>
                <p className="text-foreground/80">
                  Online pelo site da Uticket e PIX via lista amiga.<br />
                  A partir de R$ 30,00.<br />
                  <strong className="text-primary">Ingressos no dia serão mais caros!</strong>
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <h3 className="font-bold text-xl text-foreground mb-3">⏰ Horários</h3>
                <p className="text-foreground/80">
                  Evento: 12h às 18h<br />
                  Entrada VIP: a partir das 11h<br />
                  Entrada Cosplay: a partir das 11h30<br />
                  Reentrada permitida após as 16h
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <h3 className="font-bold text-xl text-foreground mb-3">👨‍👩‍👧‍👦 Público</h3>
                <p className="text-foreground/80">
                  Evento para toda a família!<br />
                  Crianças de 0 a 6 anos não pagam (com 1 adulto pagante)<br />
                  Menores de 12 anos devem estar acompanhados
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <h3 className="font-bold text-xl text-foreground mb-3">🎭 Cosplay</h3>
                <p className="text-foreground/80">
                  Cosplayers cadastrados têm entrada antecipada e área exclusiva.<br />
                  Espadas de madeira/espuma: ✅<br />
                  Espadas de metal: ❌
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <h3 className="font-bold text-xl text-foreground mb-3">🍕 Alimentação</h3>
                <p className="text-foreground/80">
                  Estandes com comidas e bebidas no local.<br />
                  Frutas permitidas.<br />
                  Marmitas não permitidas. Bebidas alcoólicas proibidas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Regras Gerais */}
        <section id="regras-gerais" className="py-16 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-5xl font-black text-secondary">
                REGRAS GERAIS
              </h2>
            </div>

            <div className="bg-card border-2 border-border rounded-xl p-8 shadow-lg space-y-6">
              <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                <p className="text-foreground/90 leading-relaxed">
                  Para garantir a segurança e diversão de todos, é essencial seguir as regras do evento. Em qualquer situação, prevalece o bom-senso e o respeito.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">🔒 Segurança e Revista</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Todos os visitantes passarão por revista na entrada. A organização reserva-se o direito de recusar a entrada de qualquer pessoa que represente risco à segurança do evento.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">🚪 Entrada e Horários</h3>
                    <ul className="text-foreground/80 leading-relaxed space-y-2">
                      <li>• <strong>Evento:</strong> 12h às 18h</li>
                      <li>• <strong>VIPs:</strong> entrada a partir das 11h</li>
                      <li>• <strong>Cosplayers cadastrados:</strong> 11h30</li>
                      <li>• Menores de 12 anos devem estar acompanhados por responsável maior de 18 anos</li>
                      <li>• Crianças de 0 a 6 anos não pagam (com 1 adulto pagante)</li>
                      <li>• Visitantes embriagados não poderão entrar</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">🔄 Saída e Reentrada</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      A reentrada só é permitida após as 16h. Se sair antes, será necessário comprar um novo ingresso para voltar.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">🚫 Itens Proibidos</h3>
                    <ul className="text-foreground/80 leading-relaxed space-y-2">
                      <li>• Bebidas alcoólicas</li>
                      <li>• Espadas de aço, canivetes, tesouras, bombas</li>
                      <li>• Animais de estimação (exceto cão-guia)</li>
                      <li>• Marmitas e sanduíches caseiros (ficam retidos na portaria)</li>
                      <li>• Fumar (proibido em toda área do evento)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">✅ Itens Permitidos</h3>
                    <ul className="text-foreground/80 leading-relaxed space-y-2">
                      <li>• Frutas</li>
                      <li>• Espadas de madeira e espuma</li>
                      <li>• Cão-guia para deficientes visuais</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">👥 Conduta</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Mantenha o respeito com todos os participantes. Comportamento inadequado resultará em expulsão imediata sem reembolso.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">💳 Pagamentos</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      A maioria dos estandes, bilheteria e cozinha aceitam cartões de crédito/débito, PIX e dinheiro.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">🅿️ Estacionamento</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Não há estacionamento no local. Planeje-se para utilizar transporte público ou estacionamentos próximos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded mt-6">
                <p className="text-foreground font-semibold leading-relaxed">
                  ⚠️ Quem desrespeitar as normas será convidado a se retirar do evento sem devolução do ingresso.
                </p>
              </div>

              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded mt-6 text-center">
                <p className="text-foreground font-semibold mb-4">
                  💬 Ainda tem dúvidas? Fale com a gente!
                </p>
                <a 
                  href="https://api.whatsapp.com/send/?phone=5521977498015&text=Olá!+Gostaria+de+informações+sobre+o+NitGeek+Festival&type=phone_number"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  Falar no WhatsApp - (21) 97749-8015
                </a>
                <p className="text-sm text-foreground/60 mt-3">
                  Ou envie um e-mail: <a href="mailto:nitgeekfestival@alucardanimes.com.br" className="text-primary hover:underline">nitgeekfestival@alucardanimes.com.br</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />
      </main>

      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default Ajuda;
