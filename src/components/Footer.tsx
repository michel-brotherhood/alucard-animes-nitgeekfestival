import { Facebook, Instagram, MessageCircle, MapPin, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import nitgeekLogo from "@/assets/nitgeek-logo.webp";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 px-6 overflow-hidden relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={nitgeekLogo} alt="NitGeek Festival" className="h-20 mb-4" />
            <p className="text-white/80">
              O maior festival geek de Niterói. Uma experiência inesquecível para todos os fãs!
            </p>
          </div>

          <div className="md:pl-8">
            <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/o-evento" className="text-white/80 hover:text-accent transition-colors">O Evento</Link></li>
              <li><Link to="/line-up" className="text-white/80 hover:text-accent transition-colors">Line-up</Link></li>
              <li><a href="https://www.uticket.com.br/event/01LD7OB8BD0LUA" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors">Ingressos</a></li>
              <li><Link to="/ajuda" className="text-white/80 hover:text-accent transition-colors">Ajuda</Link></li>
              <li><Link to="/politica-privacidade" className="text-white/80 hover:text-accent transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Informações do Evento</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-white/80">
                <Calendar className="w-4 h-4 text-accent" />
                <span>18 de Janeiro de 2026</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Clock className="w-4 h-4 text-accent" />
                <span>12:00 às 18:00 horas</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Clube Canto do Rio - Niterói</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/eventoitanime/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-accent hover:text-secondary transition-all">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.facebook.com/eventoitanime/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-accent hover:text-secondary transition-all">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=5521977498015&text=Olá!+Gostaria+de+informações+sobre+o+NitGeek+Festival&type=phone_number" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-accent hover:text-secondary transition-all">
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <p className="text-white/60 text-center mb-2">
            © 2026 NitGeek Festival - Produzido por Alucard Animes. Todos os direitos reservados.
          </p>
          <p className="text-white/40 text-center text-sm">
            Desenvolvido por Michel Brotherhood
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
