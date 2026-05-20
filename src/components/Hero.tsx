import heroImg from "@/assets/hero-gym.jpg";
import { site } from "@/data/siteData";
import { Dumbbell, HeartPulse, UserCheck, Users } from "lucide-react";

const floatingCards = [
  { icon: Dumbbell, label: "Musculação" },
  { icon: HeartPulse, label: "Cardio" },
  { icon: UserCheck, label: "Treinos personalizados" },
  { icon: Users, label: "Ambiente acessível" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="absolute inset-0 -z-10 gradient-radial-brand" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
        <div className="reveal">
          <span className="inline-flex items-center rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[var(--brand-foreground)]/90">
            Academia em Cascavel · Santa Cruz
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
            Treine perto de casa,{" "}
            <span className="text-brand">evolua no seu ritmo.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-foreground/80 md:text-lg">
            Na SHARK GYM, você encontra musculação, cardio, avaliação física,
            artes marciais e acompanhamento para começar ou continuar sua
            evolução com mais segurança.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-[var(--brand-foreground)] shadow-lg shadow-brand/20 transition-transform hover:scale-105 md:text-base"
            >
              Agendar aula experimental
            </a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-foreground/30 bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/5 md:text-base"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border md:aspect-[5/6]">
            <img
              src={heroImg}
              alt="Pessoas treinando musculação na academia SHARK GYM em Cascavel"
              width={1536}
              height={1024}
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" aria-hidden="true" />
          </div>

          <div className="pointer-events-none absolute inset-0 hidden md:block">
            <div className="float-card absolute -left-6 top-10 rounded-xl border border-border bg-card/90 px-4 py-3 backdrop-blur-md shadow-xl">
              <div className="flex items-center gap-2">
                <Dumbbell className="h-5 w-5 text-brand" aria-hidden="true" />
                <span className="text-sm font-semibold">Musculação</span>
              </div>
            </div>
            <div className="float-card absolute -right-4 top-32 rounded-xl border border-border bg-card/90 px-4 py-3 backdrop-blur-md shadow-xl" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-2">
                <HeartPulse className="h-5 w-5 text-brand" aria-hidden="true" />
                <span className="text-sm font-semibold">Cardio</span>
              </div>
            </div>
            <div className="float-card absolute -left-4 bottom-24 rounded-xl border border-border bg-card/90 px-4 py-3 backdrop-blur-md shadow-xl" style={{ animationDelay: "2s" }}>
              <div className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-brand" aria-hidden="true" />
                <span className="text-sm font-semibold">Treinos personalizados</span>
              </div>
            </div>
            <div className="float-card absolute -right-6 bottom-10 rounded-xl border border-border bg-card/90 px-4 py-3 backdrop-blur-md shadow-xl" style={{ animationDelay: "3s" }}>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-brand" aria-hidden="true" />
                <span className="text-sm font-semibold">Ambiente acessível</span>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 md:hidden">
            {floatingCards.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2.5">
                <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
                <span className="text-xs font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
