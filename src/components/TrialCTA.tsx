import { site } from "@/data/siteData";

export function TrialCTA() {
  return (
    <section id="aula-experimental" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-brand/40 gradient-brand p-8 text-center text-[var(--brand-foreground)] md:p-14">
          <div
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-black/20 blur-3xl"
            aria-hidden="true"
          />
          <h2 className="relative text-3xl font-extrabold md:text-5xl">
            Quer começar? Agende sua aula experimental
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-base opacity-90 md:text-lg">
            Dê o primeiro passo sem complicação. Fale com a equipe da SHARK GYM pelo WhatsApp e veja
            como começar sua rotina de treinos.
          </p>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-8 inline-flex items-center justify-center rounded-full bg-[var(--brand-foreground)] px-8 py-4 text-sm font-bold text-[var(--background)] shadow-2xl transition-transform hover:scale-105 md:text-base"
          >
            Agendar aula experimental pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
