import { createFileRoute } from "@tanstack/react-router";
import { App } from "@/App";

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
  component: App,
});
