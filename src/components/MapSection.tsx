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
            Rotary Club de Itaboraí<br className="md:hidden" />
            <span className="hidden md:inline"> - </span>
            R. Des. Ferreira Pinto, 226 - Centro<br />
            Itaboraí - RJ<br className="md:hidden" />
            <span className="hidden md:inline"> | </span>
            CEP: 24800-205
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border-4 border-border shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.5!2d-42.8600!3d-22.7400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997a7f0e1b0a4d%3A0x1234567890abcdef!2sR.%20Des.%20Ferreira%20Pinto%2C%20226%20-%20Centro%2C%20Itabora%C3%AD%20-%20RJ%2C%2024800-205!5e0!3m2!1spt-BR!2sbr!4v1709567890123!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização do Itanime"
            className="w-full"
          ></iframe>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiABBiiBDIKCAIQABiiBBiJBTIKCAMQABiABBiiBNIBBzcyN2owajGoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=KTvraG5zwJkAMZhZ_wGUjN-N&daddr=R.+Des.+Ferreira+Pinto,+226+-+Centro,+Itabora%C3%AD+-+RJ,+24800-205"
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
