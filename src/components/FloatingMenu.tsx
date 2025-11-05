import { useState } from "react";
import { MessageSquare, Sparkles, TicketCheck } from "lucide-react";
import { Link } from "react-router-dom";
import itanimeLogo from "@/assets/itanime-logo.svg";

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      icon: MessageSquare,
      label: "Contato",
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
      href: "/contato",
      external: false,
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      color: "bg-gradient-to-br from-green-400 to-green-600",
      href: "https://api.whatsapp.com/send/?phone=5521977498015&text=Olá!+Gostaria+de+informações+sobre+o+Itanime&type=phone_number",
      external: true,
    },
    {
      icon: TicketCheck,
      label: "Ingressos",
      color: "bg-gradient-to-br from-pink-400 to-pink-600",
      href: "/ingressos",
      external: false,
    },
  ];

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />
      
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
        {/* Menu Items */}
        <div className="relative w-14 h-14 md:w-16 md:h-16">
        {menuItems.map((item, index) => {
          const positions = [
            { x: 0, y: -90 },   // Contato
            { x: 0, y: -160 },  // WhatsApp
            { x: 0, y: -230 },  // Ingressos
          ];
          
          const pos = positions[index] || { x: 0, y: -90 };
          
          return (
            <div
              key={index}
              className="absolute group/item"
              style={{
                left: '50%',
                top: '50%',
                transform: isOpen 
                  ? `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px)) scale(1)`
                  : 'translate(-50%, -50%) scale(0.3)',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                opacity: isOpen ? 1 : 0,
                pointerEvents: isOpen ? 'auto' : 'none',
              }}
            >
              {/* Tooltip on hover */}
              <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 bg-background/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-foreground shadow-2xl whitespace-nowrap border border-primary/30">
                {item.label}
              </span>
              
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className={`${item.color} w-11 h-11 md:w-12 md:h-12 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)] border-2 border-white/50 relative overflow-hidden flex items-center justify-center`}
                  style={{
                    transform: 'translateZ(0)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 -2px 8px rgba(0,0,0,0.2), inset 0 2px 8px rgba(255,255,255,0.3)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-white/10" />
                  <item.icon className="w-4 h-4 md:w-5 md:h-5 text-white relative z-10 drop-shadow-lg" strokeWidth={2.5} />
                </a>
              ) : (
                <Link
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`${item.color} w-11 h-11 md:w-12 md:h-12 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)] border-2 border-white/50 relative overflow-hidden flex items-center justify-center`}
                  style={{
                    transform: 'translateZ(0)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 -2px 8px rgba(0,0,0,0.2), inset 0 2px 8px rgba(255,255,255,0.3)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-white/10" />
                  <item.icon className="w-4 h-4 md:w-5 md:h-5 text-white relative z-10 drop-shadow-lg" strokeWidth={2.5} />
                </Link>
              )}
            </div>
          );
        })}

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 hover:scale-110 active:scale-95 transition-all duration-300 group z-10"
        >
          <div className="relative flex items-center justify-center w-full h-full">
            <img 
              src={itanimeLogo} 
              alt={isOpen ? "Fechar" : "Menu"} 
              className="w-14 h-14 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-110 object-contain"
              style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </div>
        </button>
        </div>
      </div>
    </>
  );
};

export default FloatingMenu;
