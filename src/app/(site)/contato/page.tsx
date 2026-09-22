import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import { configuracaoSiteQuery } from "@/sanity/lib/queries";
import { configFallback } from "@/lib/wmaia-content";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContatoForm } from "@/components/forms/ContatoForm";
import { MapaLocalizacao } from "@/components/sections/MapaLocalizacao";
import { AvaliacoesGoogle } from "@/components/sections/AvaliacoesGoogle";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com a WMaia Contabilidade em Jacareí.",
  alternates: {
    canonical: "/contato",
  },
};

function formatarWhatsapp(valor: string) {
  const numeros = valor.replace(/\D/g, "").replace(/^55/, "");
  if (numeros.length !== 11) return valor;
  return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`;
}

export default async function ContatoPage() {
  const { data } = await sanityFetch({ query: configuracaoSiteQuery });
  const config = { ...configFallback, ...(data ?? {}) };

  const enderecoCompleto = [config.logradouro, config.cidade, config.estado]
    .filter(Boolean)
    .join(", ");
  const linkComoChegar = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    enderecoCompleto
  )}`;

  return (
    <>
      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Fale conosco"
              title="Entre em Contato"
              description="Utilize nossos canais de atendimento ou envie uma mensagem."
            />
            <div className="mt-8 flex flex-col gap-2 text-brand-blue-dark">
              <p>Telefone: {config.telefone}</p>
              <p>Telefone: {config.telefoneSecundario}</p>
              <p>WhatsApp: {formatarWhatsapp(config.whatsapp)}</p>
              <p>E-mail: {config.email}</p>
              <p>Endereço: {config.endereco}</p>
              <p>Segunda à Quinta: {config.horarioSegQui}</p>
              <p>Sexta: {config.horarioSexta}</p>
            </div>
          </div>
          <ContatoForm />
        </Container>
      </section>

      <section className="bg-surface py-20">
        <Container className="flex flex-col gap-8">
          <SectionTitle title="Onde estamos" />
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <MapaLocalizacao
              logradouro={config.logradouro}
              cidade={config.cidade}
              estado={config.estado}
              cep={"cep" in config ? config.cep : undefined}
            />
            <div className="flex flex-col gap-4">
              <p className="text-brand-blue-dark">
                {config.logradouro} — {config.cidade}/{config.estado}
              </p>
              <Button
                href={linkComoChegar}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="self-start"
              >
                Como chegar
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {"linkAvaliacoesGoogle" in config && config.linkAvaliacoesGoogle && (
        <section className="py-20">
          <Container className="max-w-2xl">
            <AvaliacoesGoogle link={config.linkAvaliacoesGoogle} />
          </Container>
        </section>
      )}
    </>
  );
}
