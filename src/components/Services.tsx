import { Dumbbell, HeartPulse, UserCog, ClipboardCheck, Swords, CalendarRange } from "lucide-react";
import { site } from "@/data/siteData";

const services = [
  {
    icon: Dumbbell,
    title: "Musculação",
    desc: "Estrutura completa para hipertrofia, força e condicionamento.",
    featured: true,
  },
  {
    icon: HeartPulse,
    title: "Cardio",
    desc: "Equipamentos para melhorar fôlego, disposição e queima calórica.",
  },
  {
    icon: UserCog,
    title: "Personal Trainer",
    desc: "Acompanhamento individualizado para resultados consistentes.",
  },
  {
    icon: ClipboardCheck,
    title: "Avaliação Física",
    desc: "Entenda seu ponto de partida e acompanhe sua evolução.",
  },
  {
    icon: Swords,
    title: "Artes Marciais",
    desc: "Treinos que unem condicionamento físico, técnica e disciplina.",
  },
  {
    icon: CalendarRange,
    title: "Planos Mensal, Trimestral e Anual",
    desc: "Opções flexíveis para se adaptar ao seu objetivo e orçamento.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="border-y border-border bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            Nossos serviços
          </span>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Estrutura para diferentes objetivos
          </h2>
          <p className="mt-3 text-foreground/70">
            Da musculação ao cardio, da avaliação física às artes marciais — tudo num só lugar.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, featured }) => (
            <article
              key={title}
              className={`group relative overflow-hidden rounded-2xl border p-6 transition-all hover:-translate-y-1 ${
                featured
                  ? "border-brand/60 gradient-brand text-[var(--brand-foreground)] lg:row-span-2 lg:p-8"
                  : "border-border bg-card hover:border-brand/50"
              }`}
            >
              {featured && (
                <span className="absolute right-4 top-4 rounded-full bg-[var(--brand-foreground)]/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
                  Carro-chefe
                </span>
              )}
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                  featured ? "bg-[var(--brand-foreground)]/15" : "bg-brand/15 text-brand"
                }`}
              >
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className={`mt-5 font-bold ${featured ? "text-2xl lg:text-3xl" : "text-lg"}`}>
                {title}
              </h3>
              <p
                className={`mt-2 ${featured ? "text-base opacity-90" : "text-sm text-foreground/70"}`}
              >
                {desc}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-[var(--brand-foreground)] transition-transform hover:scale-105"
          >
            Consultar planos no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
