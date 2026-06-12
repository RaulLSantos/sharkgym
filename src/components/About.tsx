import { site } from "@/data/siteData";

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-5 lg:items-center">
        <div className="lg:col-span-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            Sobre nós
          </span>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Uma academia feita para quem quer evoluir de verdade
          </h2>
          <p className="mt-5 text-foreground/80 md:text-lg">
            A SHARK GYM nasceu para ser uma academia acessível, próxima e acolhedora para quem quer
            cuidar da saúde, melhorar o condicionamento físico e construir uma rotina mais ativa.
          </p>
          <p className="mt-4 text-foreground/70">
            Seja para começar do zero ou voltar aos treinos, aqui você encontra estrutura,
            orientação e um ambiente pensado para te ajudar a manter a constância.
          </p>
          <div className="mt-6 inline-flex items-center border-l-4 border-brand pl-4">
            <p className="font-display text-2xl font-extrabold uppercase tracking-normal text-brand md:text-3xl">
              Somos feitos de movimento
            </p>
          </div>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-[var(--brand-foreground)] transition-transform hover:scale-105"
          >
            Conhecer a academia
          </a>
        </div>
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="text-3xl font-extrabold text-brand">+</div>
              <div className="mt-2 text-sm font-semibold">Saúde & bem-estar</div>
              <p className="mt-1 text-xs text-foreground/60">No seu ritmo, no seu tempo.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="text-3xl font-extrabold text-brand">★</div>
              <div className="mt-2 text-sm font-semibold">Atendimento próximo</div>
              <p className="mt-1 text-xs text-foreground/60">Ambiente acolhedor e próximo.</p>
            </div>
            <div className="col-span-2 rounded-2xl border border-border gradient-brand p-5 text-[var(--brand-foreground)]">
              <div className="text-sm font-semibold opacity-90">Localizada no</div>
              <div className="mt-1 text-xl font-extrabold">Santa Cruz, Cascavel - PR</div>
              <p className="mt-2 text-sm opacity-90">Perto de quem quer começar — ou continuar.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
