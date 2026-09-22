import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import { depoimentosQuery } from "@/sanity/lib/queries";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { DepoimentoCard } from "@/components/sections/DepoimentoCard";

export const metadata: Metadata = {
  title: "Depoimentos",
  description:
    "Conheça a experiência de clientes que confiam na WMaia para apoiar suas rotinas contábeis e empresariais.",
  alternates: {
    canonical: "/depoimentos",
  },
};

export default async function DepoimentosPage() {
  const { data: depoimentos } = await sanityFetch({ query: depoimentosQuery });

  return (
    <>
      <section className="py-20 sm:py-24">
        <Container className="flex flex-col gap-12">
          <SectionTitle
            eyebrow="Experiências reais"
            title="A confiança de quem conta com a WMaia"
            description="Experiências de clientes atendidos em diferentes áreas do escritório."
          />
          {depoimentos && depoimentos.length > 0 ? (
            <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {depoimentos.map((depoimento) => (
                <DepoimentoCard
                  key={depoimento._id}
                  nomeCliente={depoimento.nomeCliente ?? ""}
                  cargoEmpresa={depoimento.cargoEmpresa}
                  foto={depoimento.foto}
                  texto={depoimento.texto ?? ""}
                  nota={depoimento.nota}
                  servicoNome={depoimento.tipoServico?.nome}
                />
              ))}
            </div>
          ) : (
            <p className="text-foreground/60">
              Os depoimentos podem ser cadastrados pelo Studio.
            </p>
          )}
        </Container>
      </section>

      <section className="bg-brand-blue-dark py-16">
        <Container className="flex flex-col items-center gap-4 text-center text-white">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Conte com uma equipe próxima da sua rotina.
          </h2>
          <p className="max-w-lg text-white/75">
            Fale com a WMaia para entender quais serviços fazem sentido para sua necessidade.
          </p>
          <Button href="/contato">Entrar em contato</Button>
        </Container>
      </section>
    </>
  );
}
