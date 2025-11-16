import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Quando será realizado o evento?",
    answer: "18 de janeiro de 2026."
  },
  {
    question: "Onde será realizado?",
    answer: "Clube Canto do Rio - Av Visconde do Rio Branco, 701 - Centro, Niterói - RJ, 24020-005."
  },
  {
    question: "Qual o horário?",
    answer: "O evento começa às 12:00 horas e termina às 18:00 horas."
  },
  {
    question: "É um evento para toda família?",
    answer: "Sim, o NitGeek Festival é um evento familiar."
  },
  {
    question: "Tem que pagar para entrar?",
    answer: "Sim, ingressos a partir de R$ 30,00."
  },
  {
    question: "Onde consigo comprar o meu ingresso?",
    answer: (
      <>
        Online pelo site da Uticket e PIX via lista amiga.{" "}
        <a 
          href="https://www.uticket.com.br/event/01LEBL5A2365D3" 
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-primary hover:text-secondary underline transition-colors"
        >
          Veja todos os tipos de ingressos disponíveis aqui
        </a>
        .
      </>
    )
  },
  {
    question: "Venderá ingressos no dia do evento?",
    answer: "Sim, mas os ingressos no dia serão mais caros que os antecipados. Aceitarão cartões, PIX e dinheiro."
  },
  {
    question: "Quem compra ingresso antecipado tem algum benefício?",
    answer: "Sim, paga mais barato e tem entrada antecipada em relação a quem comprar no dia."
  },
  {
    question: "Qual o benefício do ingresso V.I.P?",
    answer: "Entrada antecipada ao evento, crachá exclusivo VIP e R$ 130,00 em compras no estande Yume Geek Store ou na Lanchonete Konoha Lanches."
  },
  {
    question: "Posso tirar foto com as atrações?",
    answer: "Sim, todos os VIPs têm esse direito (fotos e autógrafos)."
  },
  {
    question: "Criança também paga?",
    answer: "Não, crianças de 0 a 6 anos não pagam, acompanhadas por 1 adulto pagante."
  },
  {
    question: "Tem ingresso meia entrada?",
    answer: "Sim. Adultos sem direito a meia entrada podem conseguir levando 1 quilo de alimento não perecível no dia do evento."
  },
  {
    question: "Menores de 12 anos podem entrar sozinhos?",
    answer: "Não, menores de 12 anos somente acompanhados com o pai/mãe ou responsável autorizado maior de 18 anos."
  },
  {
    question: "Tenho que chegar às 12:00 horas?",
    answer: "Não precisa. A entrada será das 12:00 às 18:00 horas."
  },
  {
    question: "Posso entrar e sair do evento livremente?",
    answer: "Não. Após entrar, só será permitida a saída e reentrada após as 16:00 horas. Se sair antes, será necessário comprar um novo ingresso."
  },
  {
    question: "Posso levar comida e bebida de casa?",
    answer: "Sim, mas com observações: Não será permitida a entrada de bebidas alcoólicas. Frutas serão permitidas. Marmitas e sanduíches caseiros não serão permitidos e ficarão retidos na portaria."
  },
  {
    question: "Posso entrar com minha espada?",
    answer: "Todo material que ofereça risco (espadas de aço, canivetes, tesouras, bombas, etc.) não será permitido. Espadas de madeira e espumas estão liberadas."
  },
  {
    question: "Posso fumar e beber bebidas alcoólicas no evento?",
    answer: "Não. Não será permitido fumar em toda a área do evento, e visitantes embriagados não poderão entrar."
  },
  {
    question: "Posso levar meu animal de estimação?",
    answer: "Não, salvo cão-guia para deficiente visual."
  },
  {
    question: "Tem estacionamento no local?",
    answer: "Não."
  },
  {
    question: "Haverá lojas e estandes vendendo produtos?",
    answer: "Sim, produtos exclusivos e com descontos imperdíveis."
  },
  {
    question: "Haverá vendas de alimentos no evento?",
    answer: "Sim, salgados, comidas típicas, água, refrigerantes, etc."
  },
  {
    question: "Quais serão os campeonatos?",
    answer: "Campeonato Cosplay, karaokê e de videogames."
  },
  {
    question: "Tenho que ir fantasiado?",
    answer: "Não, mas de Cosplay (fantasiado) fica mais legal o evento!"
  },
  {
    question: "Sou Cosplay, tenho algum benefício?",
    answer: "Sim, cosplayers cadastrados antecipadamente no site terão entrada exclusiva antecipada (a partir das 11:30h), além de uma área cosplay com guarda-volumes gratuito e local para se vestir/arrumar."
  },
  {
    question: "Como faço para comprar um espaço para loja/estande?",
    answer: "Entre em contato via WhatsApp pelo número (21) 97749-8015 e fale com Roberto."
  },
  {
    question: "Posso pedir reembolso do ingresso?",
    answer: "Somente serão aceitos cancelamentos solicitados até 7 dias após a compra e desde que não ultrapasse o limite de 48 horas antes do início do evento. Para solicitar, o titular da compra deve entrar em contato com a Uticket."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-secondary text-center mb-12">
          DÚVIDAS FREQUENTES
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-2 border-border rounded-xl px-6 bg-muted/30"
            >
              <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
