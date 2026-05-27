import { Instagram, MapPin, Phone } from "lucide-react";
import { site } from "@/data/siteData";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <span className="text-2xl font-extrabold">
            SHARK <span className="text-brand">GYM</span>
          </span>
          <p className="mt-3 max-w-sm text-sm text-foreground/70">
            Academia acessível no bairro Santa Cruz, em Cascavel - PR. Musculação, cardio, personal
            trainer, avaliação física e artes marciais.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/90">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-foreground/70">
            <li>
              <a className="hover:text-brand" href="#inicio">
                Início
              </a>
            </li>
            <li>
              <a className="hover:text-brand" href="#sobre">
                Sobre
              </a>
            </li>
            <li>
              <a className="hover:text-brand" href="#servicos">
                Serviços
              </a>
            </li>
            <li>
              <a className="hover:text-brand" href="#beneficios">
                Benefícios
              </a>
            </li>
            <li>
              <a className="hover:text-brand" href="#aula-experimental">
                Aula Experimental
              </a>
            </li>
            <li>
              <a className="hover:text-brand" href="#contato">
                Contato
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/90">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm text-foreground/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>{site.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand"
              >
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand"
              >
                {site.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-foreground/60 md:flex-row md:px-8">
          <p>© 2026 SHARK GYM. Todos os direitos reservados.</p>
          <a href="./politica-de-privacidade" className="hover:text-brand">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
