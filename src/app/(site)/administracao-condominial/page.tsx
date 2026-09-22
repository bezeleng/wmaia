import type { Metadata } from "next";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { paginaCondominiosQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PortableTextContent } from "@/components/ui/PortableTextContent";
import { Button } from "@/components/ui/Button";

const SERVICOS_FALLBACK = [
  "Administração financeira",
  "Prestação de contas",
  "Gestão de departamento pessoal",
  "Cobranças",
  "Organização documental",
  "Apoio administrativo ao síndico",
];

export const metadata: Metadata = {
  title: "Administração Condominial",
  description:
    "Administração condominial com apoio financeiro, prestação de contas, departamento pessoal, cobranças e organização administrativa.",
  alternates: {
    canonical: "/administracao-condominial",
  },
};

export default async function AdministracaoCondominialPage() {
  const { data: pagina } = await sanityFetch({
    query: paginaCondominiosQuery,
  });

  const imagemUrl = pagina?.imagem
    ? urlFor(pagina.imagem).width(1200).height(800).url()
    : null;
  const servicos = pagina?.servicos?.length
    ? pagina.servicos
    : SERVICOS_FALLBACK;

  return (
    <>
      <section className="bg-surface py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Gestão condominial"
              title={pagina?.titulo ?? "Administração Condominial"}
              description={
                pagina?.subtitulo ??
                "Gestão administrativa e financeira para apoiar síndicos e condomínios com organização, transparência e acompanhamento."
              }
            />
            {pagina?.introducao && (
              <div className="mt-7">
                <PortableTextContent value={pagina.introducao} />
              </div>
            )}
          </div>

          {imagemUrl ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
              <Image
                src={imagemUrl}
                alt={pagina?.titulo ?? "Administração Condominial"}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="flex aspect-[4/3] items-center justify-center rounded-3xl bg-brand-blue-dark p-10 text-center text-white">
              <p className="max-w-md text-2xl font-bold leading-snug">
                Organização, transparência e apoio para a rotina do condomínio.
              </p>
            </div>
          )}
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="O que fazemos"
            title="Apoio completo à administração do condomínio"
            description="Serviços organizados para dar suporte ao síndico e mais clareza à gestão."
            align="center"
          />

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {servicos.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border-soft bg-white p-6 shadow-sm"
              >
                <span className="text-sm font-bold text-brand-orange">✓</span>
                <p className="mt-3 font-semibold text-brand-blue-dark">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {pagina?.diferenciais && pagina.diferenciais.length > 0 && (
        <section className="bg-surface py-20">
          <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pagina.diferenciais.map((item, index) => (
              <article
                key={`${item.titulo ?? "diferencial"}-${index}`}
                className="rounded-2xl border border-border-soft bg-white p-6"
              >
                <h3 className="font-bold text-brand-blue-dark">{item.titulo}</h3>
                {item.descricao && (
                  <p className="mt-3 text-sm leading-6 text-foreground/70">
                    {item.descricao}
                  </p>
                )}
              </article>
            ))}
          </Container>
        </section>
      )}

      <section className="bg-brand-blue-dark py-16">
        <Container className="flex flex-col items-center gap-5 text-center text-white">
          <h2 className="max-w-2xl text-3xl font-bold">
            {pagina?.tituloCta ??
              "Quer mais organização para a gestão do seu condomínio?"}
          </h2>
          <p className="max-w-xl leading-7 text-white/75">
            {pagina?.textoCta ??
              "Converse com a WMaia e entenda como podemos apoiar a rotina administrativa e financeira do seu condomínio."}
          </p>
          <Button href="/contato">Falar com a WMaia</Button>
        </Container>
      </section>
    </>
  );
}
