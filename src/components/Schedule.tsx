import { Clock } from "lucide-react";
import { site } from "@/data/siteData";

const schedule = [
  { day: "Segunda a sexta", hours: "Consultar no WhatsApp" },
  { day: "Sábado", hours: "Consultar no WhatsApp" },
  { day: "Domingo", hours: "Consultar no WhatsApp" },
];

export function Schedule() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Funcionamento</span>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Horários de funcionamento</h2>
          <p className="mt-3 text-foreground/70">
            Consulte os horários atualizados pelo WhatsApp ou acompanhe as novidades pelo Instagram.
          </p>
        </div>
        <div className="mt-10 rounded-2xl border border-border bg-card p-6 md:p-8">
          <ul className="divide-y divide-border">
            {schedule.map((s) => (
              <li key={s.day} className="flex items-center justify-between gap-4 py-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-brand" aria-hidden="true" />
                  <span className="font-semibold">{s.day}</span>
                </div>
                <span className="text-sm text-foreground/70">{s.hours}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-center">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-[var(--brand-foreground)] transition-transform hover:scale-105"
            >
              Consultar horários no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
