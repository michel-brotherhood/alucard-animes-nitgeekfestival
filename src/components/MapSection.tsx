import { MapPin } from "lucide-react";

const MapSection = () => {
  return (
    <section id="localizacao" className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-5xl font-black text-secondary">
              LOCALIZAÇÃO
            </h2>
          </div>
          <p className="text-sm md:text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Clube Canto do Rio<br className="md:hidden" />
            <span className="hidden md:inline"> - </span>
            Av Visconde do Rio Branco, 701<br />
            Centro - Niterói - RJ<br className="md:hidden" />
            <span className="hidden md:inline"> | </span>
            CEP: 24020-005
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border-4 border-border shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.4!2d-43.10496!3d-22.88332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9983f3b6e0b6b7%3A0x3b6b7e0b6b7e0b6!2sAv.%20Visconde%20do%20Rio%20Branco%2C%20701%20-%20Centro%2C%20Niter%C3%B3i%20-%20RJ%2C%2024020-005!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização do NitGeek Festival"
            className="w-full"
          ></iframe>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Av.+Visconde+do+Rio+Branco,+701+-+Centro,+Niter%C3%B3i+-+RJ,+24020-005"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors shadow-lg"
          >
            <MapPin className="w-5 h-5" />
            Como chegar
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
