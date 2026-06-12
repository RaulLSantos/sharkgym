import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { WhatsappButton } from "@/components/WhatsappButton";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso | SHARK GYM" },
      {
        name: "description",
        content:
          "Termos de Uso e Serviço da SHARK GYM. Consulte as regras para uso do site e serviços digitais.",
      },
      { property: "og:title", content: "Termos de Uso | SHARK GYM" },
      { property: "og:description", content: "Termos de Uso e Serviço da SHARK GYM." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: "/termos-de-uso" },
    ],
    links: [{ rel: "canonical", href: "/termos-de-uso" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-5 md:px-8">
          <Link to="/" className="flex items-center gap-2.5 text-xl font-extrabold">
            <img
              src="/sharkgym-logo.svg"
              alt=""
              className="h-9 w-9 rounded-xl"
              aria-hidden="true"
            />
            SHARK <span className="text-brand">GYM</span>
          </Link>
          <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-brand">
            Voltar ao site
          </Link>
        </div>
      </div>

      <main className="mx-auto max-w-3xl px-4 py-16 md:px-8">
        <h1 className="text-4xl font-extrabold">Termos de Uso e Serviço</h1>
        <p className="mt-3 text-sm text-foreground/60">Última atualização: 2026</p>

        <div className="mt-10 space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <p>
              Seja bem-vindo ao site da SharkGym. Antes de explorar tudo o que temos a oferecer, é
              importante que você entenda e concorde com as regras básicas que regem o uso do nosso
              site sharkgym.com.br e de qualquer outro serviço digital que oferecemos.
            </p>
            <p className="mt-3">
              Ao usar nosso site e serviços, você concorda em seguir as regras estabelecidas aqui.
              Caso não concorde com algo, considere não utilizar nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">1. Aceitando os termos</h2>
            <p className="mt-2">
              Ao navegar e usar o site da SharkGym, você concorda com nossas regras e condições.
              Podemos atualizar estes termos periodicamente. Se alterações forem realizadas, a
              versão atualizada será publicada no site. Continuar usando o site após mudanças
              significa que você aceita os novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">2. Como usar o nosso site</h2>
            <p className="mt-2">
              A maior parte do site está aberta sem necessidade de cadastro. Algumas seções
              especiais podem exigir a criação de conta. Ao fornecer informações, pedimos que você
              seja honesto e mantenha login e senha seguros. Conteúdos compartilhados conosco devem
              ser respeitosos e estar de acordo com a lei.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">3. Sua privacidade</h2>
            <p className="mt-2">
              A privacidade é um valor essencial para a SharkGym. Ao interagir com nosso site, você
              aceita nossa Política de Privacidade, que explica como coletamos, usamos e protegemos
              informações, sempre buscando transparência, segurança e controle sobre seus dados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">4. Direitos de conteúdo</h2>
            <p className="mt-2">
              O conteúdo disponível no site da SharkGym, incluindo textos, imagens, ilustrações,
              designs, ícones, fotografias, programas de computador, vídeos e áudios, é protegido
              por direitos autorais e propriedade intelectual. Ao acessar o site, você recebe uma
              licença limitada, não exclusiva e revogável para visualizar e usar o conteúdo para
              fins pessoais e não comerciais.
            </p>
            <p className="mt-3">
              Qualquer reprodução, distribuição, transmissão ou modificação do conteúdo sem
              autorização escrita da SharkGym é proibida.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">5. Cookies</h2>
            <p className="mt-2">
              Podemos utilizar cookies para melhorar sua experiência, registrar preferências,
              estatísticas de navegação e informações de uso. Você pode limitar ou recusar cookies
              pelas configurações do navegador, ciente de que algumas funcionalidades podem ser
              afetadas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">6. Links externos</h2>
            <p className="mt-2">
              Nosso site pode incluir links para sites externos. Não temos controle sobre esses
              ambientes e não somos responsáveis por seus conteúdos, práticas ou políticas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">7. Mudanças e atualizações</h2>
            <p className="mt-2">
              Estes Termos de Uso podem ser atualizados para refletir mudanças nos serviços ou na
              legislação. A versão mais recente estará disponível no site. Se você não concordar com
              alterações futuras, pedimos que não continue utilizando o site e os serviços.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">Dúvidas ou comentários?</h2>
            <p className="mt-2">
              Se tiver dúvidas sobre estes termos, entre em contato pelo e-mail
              raul.morais13@gmail.com.
            </p>
          </section>
        </div>
      </main>

      <Footer />
      <WhatsappButton />
    </div>
  );
}
