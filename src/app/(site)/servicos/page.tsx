import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import { servicosQuery, paginaServicosQuery } from "@/sanity/lib/queries";
import { servicosFallback } from "@/lib/wmaia-content";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServicoCard } from "@/components/sections/ServicoCard";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça os serviços contábeis, fiscais, trabalhistas, tributários e de consultoria da WMaia.",
  alternates: {
    canonical: "/servicos",
  },
};

export default async function ServicosPage() {
  const [{ data: servicos }, { data: pagina }] = await Promise.all([
    sanityFetch({ query: servicosQuery }),
    sanityFetch({ query: paginaServicosQuery }),
  ]);
  const temServicos = servicos && servicos.length > 0;

  return (
    <section className="py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionTitle
          eyebrow={pagina?.eyebrow ?? "O que fazemos"}
          title={pagina?.titulo ?? "Soluções para empresas, condomínios e pessoas"}
          description={
            pagina?.descricao ??
            "A WMaia reúne serviços contábeis e administrativos para apoiar a rotina, as obrigações e as decisões dos clientes."
          }
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {temServicos
            ? servicos.map((servico) => (
                <ServicoCard
                  key={servico._id}
                  titulo={servico.titulo ?? ""}
                  slug={servico.slug?.current ?? ""}
                  descricaoCurta={servico.descricaoCurta ?? ""}
                  icone={servico.icone}
                  imagemCard={servico.imagemCard}
                  href={servico.linkPersonalizado ?? undefined}
                  abrirNovaAba={servico.abrirNovaAba}
                />
              ))
            : servicosFallback.map((servico) => (
                <ServicoCard
                  key={servico.titulo}
                  titulo={servico.titulo}
                  slug=""
                  href={servico.href}
                  descricaoCurta={servico.descricao}
                />
              ))}
        </div>
      </Container>
    </section>
  );
}
