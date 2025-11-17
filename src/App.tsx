import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LineUp from "./pages/LineUp";
import MapaEvento from "./pages/MapaEvento";
import Cronograma from "./pages/Cronograma";
import Concursos from "./pages/Concursos";
import ConcursoCosplay from "./pages/ConcursoCosplay";
import ConcursoKpop from "./pages/ConcursoKpop";
import ConcursoAnimeke from "./pages/ConcursoAnimeke";
import ConcursoVideogames from "./pages/ConcursoVideogames";
import Standistas from "./pages/Standistas";
import OEvento from "./pages/OEvento";
import Ingressos from "./pages/Ingressos";
import Ajuda from "./pages/Ajuda";
import Contato from "./pages/Contato";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import QuemSomos from "./pages/QuemSomos";
import JuradoCosplay from "./pages/JuradoCosplay";
import Confirmacao from "./pages/Confirmacao";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/o-evento" element={<OEvento />} />
          <Route path="/line-up" element={<LineUp />} />
          <Route path="/mapa" element={<MapaEvento />} />
          <Route path="/cronograma" element={<Cronograma />} />
          <Route path="/concursos" element={<Concursos />} />
          <Route path="/concursos/cosplay" element={<ConcursoCosplay />} />
          <Route path="/concursos/kpop" element={<ConcursoKpop />} />
          <Route path="/concursos/animeke" element={<ConcursoAnimeke />} />
          <Route path="/concursos/videogames" element={<ConcursoVideogames />} />
          <Route path="/concursos/jurado-cosplay" element={<JuradoCosplay />} />
          <Route path="/standistas" element={<Standistas />} />
          <Route path="/ingressos" element={<Ingressos />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
          <Route path="/confirmacao" element={<Confirmacao />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
