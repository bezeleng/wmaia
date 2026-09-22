import type { Metadata } from "next";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { ferramentasQuery, paginaFerramentasQuery } from "@/sanity/lib/queries";
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
  const [{ data: ferramentas }, { data: pagina }] = await Promise.all([
    sanityFetch({ query: ferramentasQuery }),
    sanityFetch({ query: paginaFerramentasQuery }),
  ]);
  const temFerramentas = ferramentas && ferramentas.length > 0;

  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionTitle
          eyebrow={pagina?.eyebrow ?? "Recursos"}
          title={pagina?.titulo ?? "Ferramentas e links úteis"}
          description={
            pagina?.descricao ??
            "Reunimos atalhos para consultas, conteúdos e serviços que podem ajudar na rotina da sua empresa."
          }
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {temFerramentas
            ? ferramentas.map((item) => {
                const iconeUrl = item.icone
                  ? urlFor(item.icone).width(96).height(96).url()
                  : null;
                const imagemUrl = item.imagemCard
                  ? urlFor(item.imagemCard).width(700).height(420).fit("crop").url()
                  : null;

                return (
                  <article
                    key={item._id}
                    className="rounded-2xl border border-border-soft bg-white p-7 shadow-sm"
                  >
                    {imagemUrl ? (
                      <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-xl">
                        <Image src={imagemUrl} alt={item.titulo ?? ""} fill className="object-cover" />
                      </div>
                    ) : iconeUrl ? (
                      <Image src={iconeUrl} alt="" width={48} height={48} />
                    ) : null}
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
                            href={link.url ?? "#"}
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
