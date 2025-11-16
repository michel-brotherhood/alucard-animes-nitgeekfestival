import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EventInfo from "@/components/EventInfo";
import Countdown from "@/components/Countdown";
import TicketCards from "@/components/TicketCards";
import Features from "@/components/Features";
import MapSection from "@/components/MapSection";
import CosplayGallery from "@/components/CosplayGallery";
import GamesSection from "@/components/GamesSection";
import ActivitySection from "@/components/ActivitySection";
import VendorsSection from "@/components/VendorsSection";
import ConcursosCallToAction from "@/components/ConcursosCallToAction";
import ItanimeSection from "@/components/ItanimeSection";
import AlucardSection from "@/components/AlucardSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import SpaceEffect from "@/components/SpaceEffect";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SpaceEffect />
      <Header />
      <Hero />
      <EventInfo />
      <Countdown />
      <TicketCards />
      <Features />
      <MapSection />
      <CosplayGallery />
      <GamesSection />
      <ActivitySection />
      <ConcursosCallToAction />
      <ItanimeSection />
      <VendorsSection />
      <AlucardSection />
      <FAQ />
      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default Index;
