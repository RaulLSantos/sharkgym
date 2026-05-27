import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Benefits } from "@/components/Benefits";
import { TrialCTA } from "@/components/TrialCTA";
import { Beginners } from "@/components/Beginners";
import { Schedule } from "@/components/Schedule";
import { Location } from "@/components/Location";
import { InstagramSection } from "@/components/InstagramSection";
import { Footer } from "@/components/Footer";
import { WhatsappButton } from "@/components/WhatsappButton";

export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Benefits />
        <TrialCTA />
        <Beginners />
        <Schedule />
        <Location />
        <InstagramSection />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
