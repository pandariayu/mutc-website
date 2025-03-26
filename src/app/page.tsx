import FAQ from "@/components/FAQ";
import AboutUs from "@/components/AboutUs";
import TrainingSessionsGrid from "@/components/training-sessions-grid";
import Events from "@/components/Events";
import Membership from "@/components/membership";
import OurTeam from "@/components/OurTeam";
import WhatsApp from "@/components/WhatsApp";
import Hero from "@/components/Hero";

const HomePage: React.FC = () => {
  return (
    <><Hero />
      <AboutUs />
      <TrainingSessionsGrid />
      <Events />
      <Membership />
      <OurTeam />
      <FAQ />
      <WhatsApp />
    </>
  );
};

export default HomePage;
