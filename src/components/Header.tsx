import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import nitgeekLogo from "@/assets/logov2.webp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConcursosOpen, setIsConcursosOpen] = useState(false);
  const [isContatoOpen, setIsContatoOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Bloquear scroll do body quando menu abrir
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Detectar scroll para adicionar blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-background/30' : 'bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-3 md:py-4">
        <nav className={`bg-primary rounded-full py-3 md:py-3 px-4 md:px-8 flex items-center justify-between shadow-lg transition-all duration-300 ${isScrolled ? 'shadow-2xl' : ''}`}>
          <div className="flex items-center gap-4 md:gap-12">
            <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
              <img 
                src={nitgeekLogo} 
                alt="NitGeek Festival Logo" 
                className="h-16 md:h-20 w-auto object-contain"
              />
            </Link>
          
          <div className="hidden lg:flex items-center gap-2">
            <Link 
              to="/" 
              className="px-4 py-2 text-white text-sm font-bold hover:bg-white/10 transition-colors rounded-full"
            >
              Home
            </Link>
            <Link 
              to="/o-evento" 
              className="px-4 py-2 text-white text-sm font-semibold hover:bg-white/10 transition-colors rounded-full"
            >
              O evento
            </Link>
            <Link 
              to="/quem-somos" 
              className="px-4 py-2 text-white text-sm font-semibold hover:bg-white/10 transition-colors rounded-full"
            >
              Quem somos
            </Link>
            <Link 
              to="/line-up" 
              className="px-4 py-2 text-white text-sm font-semibold hover:bg-white/10 transition-colors rounded-full"
            >
              Line up
            </Link>
            <Link 
              to="/cronograma" 
              className="px-4 py-2 text-white text-sm font-semibold hover:bg-white/10 transition-colors rounded-full"
            >
              Cronograma
            </Link>
            
            {/* Dropdown Concursos */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsConcursosOpen(true)}
              onMouseLeave={() => setIsConcursosOpen(false)}
            >
              <button 
                className="px-4 py-2 text-white text-sm font-semibold hover:bg-white/10 transition-colors rounded-full flex items-center gap-1"
              >
                Concursos
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isConcursosOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="bg-primary rounded-2xl shadow-2xl py-2 min-w-[200px] border-2 border-accent/30">
                    <Link 
                      to="/concursos" 
                      className="block px-4 py-2 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                    >
                      Todos os Concursos
                    </Link>
                    <div className="border-t border-white/10 my-1"></div>
                    <Link 
                      to="/concursos/cosplay" 
                      className="block px-4 py-2 text-white text-sm hover:bg-white/10 transition-colors"
                    >
                      🏆 Cosplay
                    </Link>
                    <Link 
                      to="/concursos/kpop" 
                      className="block px-4 py-2 text-white text-sm hover:bg-white/10 transition-colors"
                    >
                      🎵 K-pop
                    </Link>
                    <Link 
                      to="/concursos/animeke" 
                      className="block px-4 py-2 text-white text-sm hover:bg-white/10 transition-colors"
                    >
                      🎤 Animekê
                    </Link>
                    <Link 
                      to="/concursos/videogames" 
                      className="block px-4 py-2 text-white text-sm hover:bg-white/10 transition-colors"
                    >
                      🎮 Videogames
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            {/* Dropdown Contato */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsContatoOpen(true)}
              onMouseLeave={() => setIsContatoOpen(false)}
            >
              <button 
                className="px-4 py-2 text-white text-sm font-semibold hover:bg-white/10 transition-colors rounded-full flex items-center gap-1"
              >
                Contato
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isContatoOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="bg-primary rounded-2xl shadow-2xl py-2 min-w-[180px] border-2 border-accent/30">
                    <Link 
                      to="/contato" 
                      className="block px-4 py-2 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                    >
                      Fale Conosco
                    </Link>
                    <Link 
                      to="/ajuda" 
                      className="block px-4 py-2 text-white text-sm hover:bg-white/10 transition-colors"
                    >
                      Ajuda
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <Link 
            to="/ingressos"
            className="btn-skewed hidden sm:inline-flex items-center justify-center px-6 rounded-md h-10 font-bold text-sm uppercase"
          >
            INGRESSOS
          </Link>
          
          {/* Botão simplificado para mobile */}
          <Link 
            to="/ingressos"
            className="sm:hidden btn-skewed flex items-center justify-center px-4 rounded-md h-9 font-bold text-xs uppercase"
          >
            Ingressos
          </Link>
          
          <button 
            className="lg:hidden text-white ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        </nav>
      </div>

      {/* Overlay Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40 animate-fade-in"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Drawer */}
          <div className="lg:hidden fixed top-0 right-0 h-full w-[85%] max-w-sm bg-gradient-to-b from-primary via-primary to-primary/95 shadow-2xl z-50 animate-slide-in-right overflow-hidden">
            <div className="h-full overflow-y-auto">
              <div className="p-6">
                {/* Close Button */}
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Logo */}
                <div className="mb-8 pt-2">
                  <img 
                    src={nitgeekLogo} 
                    alt="NitGeek Festival" 
                    className="h-12 w-auto"
                  />
                </div>

                {/* Menu Items */}
                <nav className="flex flex-col gap-1">
                  <Link 
                    to="/" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white font-bold text-lg py-3 px-4 rounded-xl hover:bg-white/10 transition-all active:scale-95"
                  >
                    Home
                  </Link>
                  <Link 
                    to="/o-evento" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white font-semibold text-lg py-3 px-4 rounded-xl hover:bg-white/10 transition-all active:scale-95"
                  >
                    O evento
                  </Link>
                  <Link 
                    to="/line-up" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white font-semibold text-lg py-3 px-4 rounded-xl hover:bg-white/10 transition-all active:scale-95"
                  >
                    Line up
                  </Link>
                  <Link 
                    to="/cronograma" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white font-semibold text-lg py-3 px-4 rounded-xl hover:bg-white/10 transition-all active:scale-95"
                  >
                    Cronograma
                  </Link>
                  
                  {/* Concursos Section */}
                  <div className="mt-4">
                    <p className="text-accent text-xs font-extrabold uppercase tracking-wider px-4 mb-2 flex items-center gap-2">
                      <span className="w-6 h-0.5 bg-accent/50"></span>
                      Concursos
                    </p>
                    <Link 
                      to="/concursos" 
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white font-semibold py-3 px-4 rounded-xl hover:bg-white/10 transition-all active:scale-95 block"
                    >
                      Todos os Concursos
                    </Link>
                    <Link 
                      to="/concursos/cosplay" 
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white/90 py-2.5 px-4 rounded-xl hover:bg-white/10 transition-all active:scale-95 flex items-center gap-3"
                    >
                      <span className="text-xl">🏆</span>
                      <span>Cosplay</span>
                    </Link>
                    <Link 
                      to="/concursos/kpop" 
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white/90 py-2.5 px-4 rounded-xl hover:bg-white/10 transition-all active:scale-95 flex items-center gap-3"
                    >
                      <span className="text-xl">🎵</span>
                      <span>K-pop</span>
                    </Link>
                    <Link 
                      to="/concursos/animeke" 
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white/90 py-2.5 px-4 rounded-xl hover:bg-white/10 transition-all active:scale-95 flex items-center gap-3"
                    >
                      <span className="text-xl">🎤</span>
                      <span>Animekê</span>
                    </Link>
                    <Link 
                      to="/concursos/videogames" 
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white/90 py-2.5 px-4 rounded-xl hover:bg-white/10 transition-all active:scale-95 flex items-center gap-3"
                    >
                      <span className="text-xl">🎮</span>
                      <span>Videogames</span>
                    </Link>
                  </div>

                  <div className="border-t border-white/20 my-4"></div>
                  
                  <Link 
                    to="/quem-somos" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white font-semibold text-lg py-3 px-4 rounded-xl hover:bg-white/10 transition-all active:scale-95"
                  >
                    Quem somos
                  </Link>
                  
                  {/* Contato Section */}
                  <div className="mt-4">
                    <p className="text-accent text-xs font-extrabold uppercase tracking-wider px-4 mb-2 flex items-center gap-2">
                      <span className="w-6 h-0.5 bg-accent/50"></span>
                      Contato
                    </p>
                    <Link 
                      to="/contato" 
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white font-semibold py-3 px-4 rounded-xl hover:bg-white/10 transition-all active:scale-95 block"
                    >
                      Fale Conosco
                    </Link>
                    <Link 
                      to="/ajuda" 
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white/90 py-2.5 px-4 rounded-xl hover:bg-white/10 transition-all active:scale-95 flex items-center gap-3"
                    >
                      <span className="text-xl">❓</span>
                      <span>Ajuda</span>
                    </Link>
                  </div>

                  {/* CTA Button */}
                  <Link 
                    to="/ingressos"
                    onClick={() => setIsMenuOpen(false)}
                    className="mt-6 btn-skewed w-full text-center flex items-center justify-center py-4 font-bold text-base uppercase"
                  >
                    COMPRAR INGRESSOS
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
