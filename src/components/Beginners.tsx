import { Check } from "lucide-react";
import { site } from "@/data/siteData";

const items = [
  "Comece com orientação",
  "Treine no seu ritmo",
  "Melhore sua saúde aos poucos",
  "Tenha mais disposição no dia a dia",
];

export function Beginners() {
  return (
    <section className="border-y border-border bg-surface py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Para iniciantes</span>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Nunca treinou? A <span className="text-brand">SHARK GYM</span> também é para você.
          </h2>
          <p className="mt-5 text-foreground/80">
            Se você está começando agora, não precisa ter vergonha. O mais
            importante é dar o primeiro passo. A SHARK GYM valoriza um ambiente
            acessível, com orientação e incentivo para quem quer melhorar a
            saúde no próprio ritmo.
          </p>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-[var(--brand-foreground)] transition-transform hover:scale-105"
          >
            Começar agora
          </a>
        </div>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-[var(--brand-foreground)]">
                <Check className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
