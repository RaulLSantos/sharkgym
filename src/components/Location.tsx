import { MapPin, Navigation } from "lucide-react";
import { site } from "@/data/siteData";

export function Location() {
  return (
    <section id="contato" className="border-y border-border bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Contato</span>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Venha treinar pertinho de você
          </h2>
          <p className="mt-3 text-foreground/70">
            Estamos no bairro Santa Cruz, em Cascavel - PR. Fácil acesso para moradores da região.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir endereço da SHARK GYM no Google Maps"
            className="group block aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand lg:aspect-auto"
          >
            <iframe
              src={site.mapEmbedUrl}
              title="Mapa da SHARK GYM em Cascavel - PR"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="pointer-events-none h-full w-full transition-transform duration-500 group-hover:scale-105"
              style={{ border: 0, filter: "grayscale(0.3) contrast(1.05)" }}
            />
          </a>

          <div className="flex flex-col justify-center rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-brand" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-bold">Endereço</h3>
                <p className="mt-1 text-foreground/80">{site.address}</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir rota no Google Maps"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-[var(--brand-foreground)] transition-transform hover:scale-105"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Como chegar
              </a>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-foreground/30 px-5 py-3 text-sm font-semibold text-foreground hover:bg-foreground/5"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
