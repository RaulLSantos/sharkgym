import { Clock, Dumbbell, Heart, Sparkles, UserCheck, Wallet } from "lucide-react";

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
    desc: "Atendimento próximo, humano e acolhedor.",
  },
  {
    icon: Dumbbell,
    title: "Musculação como destaque",
    desc: "Estrutura completa para musculação, nosso carro-chefe.",
  },
];

export function Benefits() {
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
        <div className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand/50 hover:bg-surface-elevated"
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
