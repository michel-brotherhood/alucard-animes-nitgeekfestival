import { Calendar, MapPin } from "lucide-react";

const EventInfo = () => {
  return (
    <section className="bg-primary py-8 px-4 md:px-6 text-center">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-6 text-white">
        <div className="flex items-start md:items-center gap-3 md:gap-2 w-full md:w-auto justify-start md:justify-center">
          <Calendar className="w-6 h-6 md:w-6 md:h-6 flex-shrink-0 mt-1 md:mt-0" />
          <span className="text-base md:text-xl font-bold leading-relaxed">
            18 de Janeiro de 2026 - 12h às 18h
          </span>
        </div>
        <div className="hidden md:block w-px h-8 bg-white/30"></div>
        <div className="flex items-start md:items-center gap-3 md:gap-2 w-full md:w-auto justify-start md:justify-center">
          <MapPin className="w-6 h-6 md:w-6 md:h-6 flex-shrink-0 mt-1 md:mt-0" />
          <span className="text-base md:text-xl font-bold leading-relaxed">
            Clube Canto do Rio - Niterói/RJ
          </span>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
