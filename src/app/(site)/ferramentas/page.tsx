import type { Metadata } from "next";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { ferramentasQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { ferramentasFallback } from "@/lib/wmaia-content";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Ferramentas e Links Úteis",
  description:
    "Ferramentas, consultas e links úteis selecionados pela WMaia para facilitar a rotina empresarial e contábil.",
  alternates: {
    canonical: "/ferramentas",
  },
};

export default async function FerramentasPage() {
  const { data: ferramentas } = await sanityFetch({ query: ferramentasQuery });
  const temFerramentas = ferramentas && ferramentas.length > 0;

  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionTitle
          eyebrow="Recursos"
          title="Ferramentas e links úteis"
          description="Reunimos atalhos para consultas, conteúdos e serviços que podem ajudar na rotina da sua empresa."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {temFerramentas
            ? ferramentas.map((item) => {
                const iconeUrl = item.icone
                  ? urlFor(item.icone).width(96).height(96).url()
                  : null;

                return (
                  <article
                    key={item._id}
                    className="rounded-2xl border border-border-soft bg-white p-7 shadow-sm"
                  >
                    {iconeUrl && (
                      <Image src={iconeUrl} alt="" width={48} height={48} />
                    )}
                    <h2 className="mt-4 text-xl font-bold text-brand-blue-dark">
                      {item.titulo}
                    </h2>
                    {item.descricao && (
                      <p className="mt-3 text-sm leading-6 text-foreground/70">
                        {item.descricao}
                      </p>
                    )}
                    {item.links && item.links.length > 0 && (
                      <div className="mt-5 flex flex-col gap-2">
                        {item.links.map((link, index) => (
                          <a
                            key={`${link.titulo ?? "link"}-${index}`}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-brand-orange-dark hover:text-brand-orange"
                          >
                            {link.titulo} →
                          </a>
                        ))}
                      </div>
                    )}
                  </article>
                );
              })
            : ferramentasFallback.map((item) => (
                <article
                  key={item.titulo}
                  className="rounded-2xl border border-border-soft bg-white p-7 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange-soft font-bold text-brand-orange">
                    +
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-brand-blue-dark">
                    {item.titulo}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-foreground/70">
                    {item.descricao}
                  </p>
                  <p className="mt-5 text-xs text-foreground/50">
                    Cadastre os links desta categoria no Studio.
                  </p>
                </article>
              ))}
        </div>
      </Container>
    </section>
  );
}
