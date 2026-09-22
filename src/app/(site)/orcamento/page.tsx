import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { OrcamentoForm } from "@/components/forms/OrcamentoForm";

export const metadata: Metadata = {
  title: "Solicitar Orçamento",
  description: "Entre em contato com a WMaia para entender como podemos atender sua empresa.",
  alternates: {
    canonical: "/orcamento",
  },
};

export default function OrcamentoPage() {
  return (
    <section className="py-20">
      <Container className="mx-auto max-w-2xl">
        <SectionTitle
          eyebrow="Vamos começar"
          title="Solicitar Orçamento"
          description="Preencha os dados abaixo e nossa equipe entrará em contato com uma proposta personalizada."
          align="center"
        />
        <div className="mt-12">
          <OrcamentoForm />
        </div>
      </Container>
    </section>
  );
}