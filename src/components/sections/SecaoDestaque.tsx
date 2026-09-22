import { sanityFetch } from "@/sanity/lib/live";
import { paginaInicialQuery } from "@/sanity/lib/queries";
import { Container } from "@/components/ui/Container";

export async function SecaoDestaque() {
  const { data: pagina } = await sanityFetch({ query: paginaInicialQuery });

  return (
    <section className="bg-brand-blue-dark py-16">
      <Container className="flex flex-col items-center gap-4 text-center text-white">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">
          WMaia
        </span>
        <h2 className="max-w-3xl text-2xl font-bold tracking-tight sm:text-3xl">
          {pagina?.tituloDestaque ??
            "Contabilidade próxima para decisões mais seguras."}
        </h2>
        <p className="max-w-2xl leading-7 text-white/75">
          {pagina?.textoDestaque ??
            "Informação organizada, orientação clara e acompanhamento para que empresas, condomínios e pessoas tenham mais segurança em suas rotinas e decisões."}
        </p>
      </Container>
    </section>
  );
}
