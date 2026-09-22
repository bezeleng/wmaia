import { sanityFetch } from "@/sanity/lib/live";
import { paginaInicialQuery } from "@/sanity/lib/queries";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export async function CtaFinal() {
  const { data: pagina } = await sanityFetch({ query: paginaInicialQuery });

  const titulo =
    pagina?.tituloCtaFinal ?? "Precisa de apoio contábil ou administrativo?";
  const subtitulo =
    pagina?.subtituloCtaFinal ??
    "Converse com a equipe WMaia e encontre a solução adequada para sua empresa, condomínio ou necessidade pessoal.";
  const textoBotao = pagina?.textoBotaoCtaFinal ?? "Entrar em contato";
  const linkBotao = pagina?.linkBotaoCtaFinal ?? "/contato";

  return (
    <section className="bg-brand-blue-dark py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-14 text-center text-white sm:px-12">
          <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-brand-orange/15 blur-3xl" />
          <div className="relative flex flex-col items-center gap-6">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">
              Fale com a WMaia
            </span>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              {titulo}
            </h2>
            <p className="max-w-xl leading-7 text-white/75">{subtitulo}</p>
            <Button href={linkBotao}>{textoBotao}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
