import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { TrialCTA } from "@/components/TrialCTA";
import { Beginners } from "@/components/Beginners";
import { Schedule } from "@/components/Schedule";
import { Location } from "@/components/Location";
import { InstagramSection } from "@/components/InstagramSection";
import { Footer } from "@/components/Footer";
import { WhatsappButton } from "@/components/WhatsappButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SHARK GYM | Academia de Musculação em Cascavel - PR" },
      {
        name: "description",
        content:
          "Treine na SHARK GYM em Cascavel - PR. Academia acessível com musculação, cardio, avaliação física, personal trainer, artes marciais e aula experimental pelo WhatsApp.",
      },
      { property: "og:title", content: "SHARK GYM | Academia de Musculação em Cascavel - PR" },
      {
        property: "og:description",
        content:
          "Musculação, cardio, avaliação física, personal trainer e aula experimental em Cascavel.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsActivityLocation",
          name: "SHARK GYM",
          description:
            "Academia de musculação em Cascavel - PR. Musculação, cardio, personal trainer, avaliação física e artes marciais.",
          telephone: "+55 45 99822-6281",
          address: {
            "@type": "PostalAddress",
            streetAddress: "R. Aimorés, 547 - Santa Cruz",
            addressLocality: "Cascavel",
            addressRegion: "PR",
            addressCountry: "BR",
          },
          areaServed: "Cascavel, PR",
          sameAs: ["https://www.instagram.com/shark.gym"],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <About />
        <Services />
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
