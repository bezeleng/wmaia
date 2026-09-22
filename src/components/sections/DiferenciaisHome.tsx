import { sanityFetch } from "@/sanity/lib/live";
import { paginaInicialQuery } from "@/sanity/lib/queries";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const FALLBACK = [
  {
    titulo: "Atendimento consultivo",
    descricao: "Orientação próxima para dúvidas contábeis, fiscais e administrativas.",
  },
  {
    titulo: "Experiência",
    descricao: "Mais de 25 anos de atuação apoiando empresas e clientes da região.",
  },
  {
    titulo: "WMaia Online",
    descricao: "Acesso digital a informações e documentos com praticidade.",
  },
  {
    titulo: "Soluções integradas",
    descricao: "Contabilidade, consultoria e administração condominial em um só escritório.",
  },
];

export async function DiferenciaisHome() {
  const { data: pagina } = await sanityFetch({ query: paginaInicialQuery });
  const itens = pagina?.diferenciais?.length ? pagina.diferenciais : FALLBACK;

  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionTitle
          eyebrow="Nosso diferencial"
          title="Mais do que cumprir obrigações"
          description="A WMaia combina experiência, proximidade e organização para facilitar a rotina dos clientes."
          align="center"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {itens.map((item, index) => (
            <article
              key={`${item.titulo ?? "diferencial"}-${index}`}
              className="rounded-2xl border border-border-soft bg-white p-6 shadow-sm"
            >
              <span className="text-sm font-bold text-brand-orange">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-lg font-bold text-brand-blue-dark">
                {item.titulo}
              </h3>
              <p className="mt-3 text-sm leading-6 text-foreground/70">
                {item.descricao}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
