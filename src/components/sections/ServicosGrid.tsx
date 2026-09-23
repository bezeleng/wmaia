// src/components/sections/ServicosGrid.tsx
import { sanityFetch } from "@/sanity/lib/live";
import { servicosQuery } from "@/sanity/lib/queries";
import { servicosFallback } from "@/lib/wmaia-content";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServicoCard } from "@/components/sections/ServicoCard";

export async function ServicosGrid() {
  const { data: servicos } = await sanityFetch({ query: servicosQuery });
  const temServicos = servicos && servicos.length > 0;

  return (
    <section className="pb-20 pt-10 sm:pb-24 sm:pt-12">
      <Container className="flex flex-col gap-12">
        <SectionTitle
          eyebrow="O que fazemos"
          title="Nossos Serviços"
          description="Soluções contábeis, fiscais, trabalhistas, tributárias e administrativas para diferentes momentos da sua empresa e da sua vida."
          align="center"
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
