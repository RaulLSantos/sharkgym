import {
  Apple,
  CalendarRange,
  ClipboardCheck,
  Dumbbell,
  HeartPulse,
  UserCog,
  UsersRound,
} from "lucide-react";
import { site } from "@/data/siteData";

const mainService = {
  icon: Dumbbell,
  title: "Musculação",
  desc: "Estrutura completa para hipertrofia, força e condicionamento.",
  badge: "Carro-chefe",
};

const collectiveClasses = ["Pilates", "Cross F", "Zumba", "TRX", "Abdomen", "Funcional"];

const secondaryServices = [
  {
    icon: HeartPulse,
    title: "Cardio",
    desc: "Equipamentos completos para melhorar seu condicionamento físico, com esteira, escada, bike e elípticos para treinos mais dinâmicos e eficientes.",
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
    icon: CalendarRange,
    title: "Planos Mensal, Trimestral e Anual",
    desc: "Opções flexíveis para se adaptar ao seu objetivo e orçamento.",
  },
  {
    icon: Apple,
    title: "Nutrição",
    desc: "Acompanhamento nutricional para alinhar alimentação, rotina e treino de acordo com seus objetivos.",
    wide: true,
  },
];

export function Services() {
  const MainIcon = mainService.icon;

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
            Da musculação ao cardio, das aulas coletivas à avaliação física, tudo num só lugar.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <article className="group relative flex min-h-60 flex-col overflow-hidden rounded-2xl border border-brand/60 gradient-brand p-6 text-[var(--brand-foreground)] transition-all hover:-translate-y-1 lg:min-h-[250px] lg:p-8">
            <span className="absolute right-4 top-4 rounded-full bg-[var(--brand-foreground)]/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
              {mainService.badge}
            </span>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-foreground)]/15">
              <MainIcon className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="pt-6">
              <h3 className="text-2xl font-bold lg:text-3xl">{mainService.title}</h3>
              <p className="mt-3 max-w-sm text-base opacity-90">{mainService.desc}</p>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-2xl border border-brand/35 bg-[linear-gradient(135deg,rgba(42,79,86,0.24),rgba(12,22,24,0.96)_48%,rgba(8,11,11,0.98))] p-6 transition-all hover:-translate-y-1 hover:border-brand/60 lg:col-span-2 lg:min-h-[250px] lg:p-8">
            <div
              className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand/80 to-transparent"
              aria-hidden="true"
            />
            <div className="relative grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand ring-1 ring-brand/20 transition-colors group-hover:bg-brand group-hover:text-[var(--brand-foreground)]">
                  <UsersRound className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 max-w-xl text-2xl font-extrabold md:text-3xl">
                  Aulas coletivas para sair da rotina
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-foreground/78 md:text-base">
                  Treinos em grupo com modalidades dinâmicas para quem busca mais energia, motivação
                  e constância nos resultados.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 md:max-w-56 md:justify-end">
                {collectiveClasses.map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-brand/35 bg-black/20 px-3 py-1.5 text-xs font-semibold uppercase text-foreground/80"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {secondaryServices.map(({ icon: Icon, title, desc, wide }) => (
            <article
              key={title}
              className={`group flex min-h-44 flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand/50 hover:bg-surface-elevated ${
                wide ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand transition-colors group-hover:bg-brand group-hover:text-[var(--brand-foreground)]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="pt-5">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-foreground/70">{desc}</p>
              </div>
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
