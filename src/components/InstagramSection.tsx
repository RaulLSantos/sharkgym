import { Instagram } from "lucide-react";
import { site } from "@/data/siteData";

export function InstagramSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/15 text-brand">
          <Instagram className="h-7 w-7" aria-hidden="true" />
        </div>
        <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">Siga a SHARK GYM no Instagram</h2>
        <p className="mt-3 text-foreground/70">
          Acompanhe novidades, treinos e conteúdos da SHARK GYM no Instagram.
        </p>
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir Instagram da SHARK GYM"
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-foreground/30 px-6 py-3 text-sm font-semibold transition-colors hover:bg-foreground/5"
        >
          <Instagram className="h-4 w-4" aria-hidden="true" />
          {site.instagramHandle}
        </a>
      </div>
    </section>
  );
}
