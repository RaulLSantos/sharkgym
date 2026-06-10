import { UserCheck, Sparkles, Wallet, Clock, Heart, Dumbbell, UsersRound } from "lucide-react";

const benefits = [
  {
    icon: UserCheck,
    title: "Treinos personalizados",
    desc: "Orientação para você treinar com segurança e progredir no seu ritmo.",
  },
  {
    icon: Sparkles,
    title: "Foco em iniciantes",
    desc: "Ambiente acolhedor para quem está começando ou voltando a treinar.",
  },
  {
    icon: Wallet,
    title: "Preço acessível",
    desc: "Planos pensados para caber no seu bolso, sem abrir mão da qualidade.",
  },
  {
    icon: Clock,
    title: "Horários amplos",
    desc: "Flexibilidade para encaixar o treino na sua rotina.",
  },
  {
    icon: Heart,
    title: "Ambiente familiar",
    desc: "Academia de bairro com atendimento próximo e humano.",
  },
  {
    icon: Dumbbell,
    title: "Musculação como destaque",
    desc: "Estrutura completa para musculação, nosso carro-chefe.",
  },
];

const featuredClass =
  "group relative overflow-hidden rounded-2xl border border-brand/45 bg-[linear-gradient(135deg,rgba(42,79,86,0.34),rgba(12,22,24,0.96)_48%,rgba(8,11,11,0.98))] p-6 shadow-[0_24px_70px_rgba(42,79,86,0.18)] transition-all hover:-translate-y-1 hover:border-brand/70 hover:shadow-[0_28px_90px_rgba(42,79,86,0.25)] sm:col-span-2 lg:p-8";

export function Benefits() {
  const firstRowBenefits = benefits.slice(0, 3);
  const remainingBenefits = benefits.slice(3);

  return (
    <section id="beneficios" className="border-y border-border bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Por que treinar na <span className="text-brand">SHARK GYM</span>?
          </h2>
          <p className="mt-3 text-foreground/70">
            Uma academia próxima, acessível e preparada para te apoiar em cada etapa.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {firstRowBenefits.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand/50 hover:bg-surface-elevated"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand transition-colors group-hover:bg-brand group-hover:text-[var(--brand-foreground)]">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{desc}</p>
            </article>
          ))}

          <article className={featuredClass}>
            <div
              className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand/80 to-transparent"
              aria-hidden="true"
            />
            <div
              className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-brand/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative flex h-full flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/25 text-brand ring-1 ring-brand/35 transition-colors group-hover:bg-brand group-hover:text-[var(--brand-foreground)]">
                  <UsersRound className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold md:text-3xl">
                  Aulas coletivas para sair da rotina
                </h3>
                <p className="mt-3 text-sm leading-6 text-foreground/78 md:text-base">
                  Treinos em grupo com modalidades dinâmicas para quem busca mais energia, motivação
                  e constância nos resultados.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-2 md:max-w-56 md:justify-end">
                {["PILATES", "CROSS F", "ZUMBA", "TRX", "ABDOMEN", "BOXE", "CAPOEIRA", "MUAY "].map(
                  (label) => (
                    <span
                      key={label}
                      className="rounded-full border border-brand/35 bg-black/20 px-3 py-1.5 text-xs font-semibold text-foreground/80"
                    >
                      {label}
                    </span>
                  ),
                )}
              </div>
            </div>
          </article>

          {remainingBenefits.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand/50 hover:bg-surface-elevated"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand transition-colors group-hover:bg-brand group-hover:text-[var(--brand-foreground)]">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
