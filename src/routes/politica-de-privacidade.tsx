import { createFileRoute, Link } from "@tanstack/react-router";
import { WhatsappButton } from "@/components/WhatsappButton";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | SHARK GYM" },
      {
        name: "description",
        content:
          "Política de Privacidade da SHARK GYM, academia em Cascavel - PR. Saiba como tratamos o uso do site e redirecionamentos para WhatsApp, Instagram e Google Maps.",
      },
      { property: "og:title", content: "Política de Privacidade | SHARK GYM" },
      { property: "og:description", content: "Política de Privacidade da SHARK GYM." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: "/politica-de-privacidade" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5 md:px-8">
          <Link to="/" className="text-xl font-extrabold">
            SHARK <span className="text-brand">GYM</span>
          </Link>
          <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-brand">
            ← Voltar ao site
          </Link>
        </div>
      </div>

      <main className="mx-auto max-w-3xl px-4 py-16 md:px-8">
        <h1 className="text-4xl font-extrabold">Política de Privacidade</h1>
        <p className="mt-3 text-sm text-foreground/60">Última atualização: 2026</p>

        <div className="mt-10 space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-foreground">1. Sobre este site</h2>
            <p className="mt-2">
              Este é o site institucional da SHARK GYM, academia localizada em Cascavel - PR. O
              objetivo do site é apresentar informações sobre a academia, seus serviços e facilitar
              o contato com a equipe.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">2. Coleta de dados</h2>
            <p className="mt-2">
              Este site não coleta, armazena ou processa dados pessoais dos visitantes. Não
              utilizamos formulários de contato nem cadastro.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">3. Redirecionamentos externos</h2>
            <p className="mt-2">
              O site contém links que podem redirecionar você para plataformas externas, como
              WhatsApp, Instagram e Google Maps. Ao acessar esses serviços, suas interações passam a
              seguir as políticas de privacidade e termos de uso dessas plataformas, sobre as quais
              a SHARK GYM não tem controle.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">4. Cookies</h2>
            <p className="mt-2">Este site não utiliza cookies para rastreamento ou publicidade.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">5. Contato</h2>
            <p className="mt-2">
              Em caso de dúvidas sobre esta política, entre em contato pelo WhatsApp (45)
              99822-6281.
            </p>
          </section>
        </div>
      </main>

      <Footer />
      <WhatsappButton />
    </div>
  );
}
