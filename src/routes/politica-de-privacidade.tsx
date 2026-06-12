import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { WhatsappButton } from "@/components/WhatsappButton";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | SHARK GYM" },
      {
        name: "description",
        content:
          "Política de Privacidade da SHARK GYM. Saiba como tratamos dados pessoais, cookies, links externos e direitos dos titulares.",
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
        <h1 className="text-4xl font-extrabold">Política de Privacidade</h1>
        <p className="mt-3 text-sm text-foreground/60">Última atualização: 2026</p>

        <div className="mt-10 space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <p>
              Bem-vindo à SharkGym, inscrita no CNPJ 47.666.260/0001-64, com sede na R.
              Aimorés, 547. Nosso compromisso é com a integridade e a segurança dos dados pessoais
              dos nossos usuários e clientes. Esta Política de Privacidade aplica-se às interações
              digitais realizadas em nosso site sharkgym.com.br e demais plataformas digitais sob
              nosso controle.
            </p>
            <p className="mt-3">
              Ao acessar e utilizar nossas plataformas, você reconhece e concorda com as práticas
              descritas nesta política. Tratamos a proteção de seus dados pessoais com seriedade e
              nos comprometemos a processá-los de forma responsável, transparente e segura.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">Definições</h2>
            <p className="mt-2">
              Dados pessoais são informações que identificam ou podem identificar uma pessoa
              natural. Dados pessoais sensíveis incluem informações íntimas, como origem racial,
              convicções religiosas, opiniões políticas, dados genéticos ou biométricos. Tratamento
              de dados pessoais abrange operações como coleta, registro, armazenamento, uso,
              compartilhamento ou destruição. As leis de proteção de dados incluem a LGPD, Lei nº
              13.709/18.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">Dados coletados e motivos da coleta</h2>
            <p className="mt-2">
              Podemos coletar informações fornecidas por você, como nome, sobrenome, e-mail,
              endereço físico, informações de pagamento e demais dados enviados ao criar uma conta,
              realizar uma compra ou interagir com nossos canais de atendimento.
            </p>
            <p className="mt-3">
              Também podemos coletar automaticamente informações sobre seu dispositivo e sua
              interação com o site, incluindo endereço IP, tipo de navegador, detalhes do
              dispositivo, fuso horário, páginas visitadas, produtos visualizados, origem de acesso
              e informações sobre como você utiliza o site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">
              Uso de cookies e tecnologias de rastreamento
            </h2>
            <p className="mt-2">
              A SharkGym utiliza cookies e outras tecnologias de rastreamento para melhorar a
              experiência do usuário, entender como os serviços são utilizados e otimizar nossas
              estratégias de comunicação e marketing.
            </p>
            <p className="mt-3">
              Os cookies podem ser essenciais ao funcionamento do site, de desempenho e análise, de
              funcionalidade, publicidade ou redes sociais. Você pode ajustar o uso de cookies nas
              configurações do seu navegador, ciente de que algumas funcionalidades podem ser
              afetadas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">Finalidades do processamento</h2>
            <p className="mt-2">
              Os dados coletados podem ser utilizados para proporcionar, operar e melhorar nossos
              serviços, processar transações, personalizar sua experiência, comunicar informações
              importantes, enviar ofertas conforme sua preferência, realizar análises internas e
              cumprir obrigações legais ou regulatórias aplicáveis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">
              Compartilhamento e transferência de dados
            </h2>
            <p className="mt-2">
              Podemos compartilhar dados pessoais com fornecedores de serviços e parceiros que nos
              auxiliam nas operações, quando necessário para cumprir obrigações legais, responder a
              processos judiciais, proteger nossos direitos ou em caso de reestruturação
              corporativa, venda, fusão ou transferência de ativos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">Links externos e redes sociais</h2>
            <p className="mt-2">
              Nossa plataforma pode incluir links para sites externos, parceiros, anunciantes,
              fornecedores e redes sociais. Ao acessar esses links, você será direcionado para
              domínios com políticas próprias, pelas quais não somos responsáveis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">Direitos dos titulares</h2>
            <p className="mt-2">
              Você possui direitos de acesso, retificação, exclusão, limitação, oposição,
              portabilidade e retirada de consentimento, quando aplicável. Para exercer esses
              direitos, entre em contato pelo e-mail raul.morais13@gmail.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">Segurança dos dados</h2>
            <p className="mt-2">
              Implementamos medidas técnicas e organizacionais para proteger dados pessoais contra
              acesso não autorizado, alteração, divulgação ou destruição. Nenhum sistema é
              completamente seguro, mas nos comprometemos a agir conforme a legislação vigente em
              caso de incidentes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">Alterações e contato</h2>
            <p className="mt-2">
              Esta Política de Privacidade pode ser atualizada periodicamente. A versão mais atual
              será publicada neste site. Em caso de dúvidas ou preocupações, entre em contato pelo
              e-mail raul.morais13@gmail.com.
            </p>
          </section>
        </div>
      </main>

      <Footer />
      <WhatsappButton />
    </div>
  );
}
