import Link from "next/link";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { ferramentasQuery, paginaInicialQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { ferramentasFallback } from "@/lib/wmaia-content";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export async function FerramentasDestaque() {
  const [{ data: ferramentas }, { data: pagina }] = await Promise.all([
    sanityFetch({ query: ferramentasQuery }),
    sanityFetch({ query: paginaInicialQuery }),
  ]);

  const temFerramentas = ferramentas && ferramentas.length > 0;

  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionTitle
          eyebrow="Recursos"
          title={pagina?.tituloFerramentas ?? "Ferramentas e links úteis"}
          description={
            pagina?.subtituloFerramentas ??
            "Acesso rápido a conteúdos, consultas e recursos que ajudam na rotina empresarial."
          }
          align="center"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {temFerramentas
            ? ferramentas.slice(0, 5).map((item) => {
                const iconeUrl = item.icone
                  ? urlFor(item.icone).width(80).height(80).url()
                  : null;
                return (
                  <article
                    key={item._id}
                    className="rounded-2xl border border-border-soft bg-white p-5 text-center shadow-sm"
                  >
                    {iconeUrl && (
                      <Image
                        src={iconeUrl}
                        alt=""
                        width={42}
                        height={42}
                        className="mx-auto"
                      />
                    )}
                    <h3 className="mt-4 font-bold text-brand-blue-dark">
                      {item.titulo}
                    </h3>
                    {item.descricao && (
                      <p className="mt-2 text-sm leading-6 text-foreground/65">
                        {item.descricao}
                      </p>
                    )}
                  </article>
                );
              })
            : ferramentasFallback.map((item) => (
                <article
                  key={item.titulo}
                  className="rounded-2xl border border-border-soft bg-white p-5 text-center shadow-sm"
                >
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange-soft text-brand-orange">
                    +
                  </div>
                  <h3 className="mt-4 font-bold text-brand-blue-dark">
                    {item.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-foreground/65">
                    {item.descricao}
                  </p>
                </article>
              ))}
        </div>

        <Link
          href="/ferramentas"
          className="mx-auto font-semibold text-brand-orange-dark hover:text-brand-orange"
        >
          Ver todas as ferramentas →
        </Link>
      </Container>
    </section>
  );
}
