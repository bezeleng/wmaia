import { sanityFetch } from "@/sanity/lib/live";
import { paginaInicialQuery } from "@/sanity/lib/queries";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export async function WMaiaOnline() {
  const { data: pagina } = await sanityFetch({ query: paginaInicialQuery });

  const titulo = pagina?.tituloOnline ?? "WMaia Online";
  const texto =
    pagina?.textoOnline ??
    "Acesse informações, documentos e recursos do seu atendimento WMaia de forma prática e segura.";
  const link =
    pagina?.linkOnline ?? "http://www.wmaia.adm.br/loginAdmin.htm";
  const botao = pagina?.textoBotaoOnline ?? "Acessar sistema";

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-brand-blue-dark px-6 py-12 text-white shadow-lg sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">
              Área do cliente
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">{titulo}</h2>
            <p className="mt-4 leading-7 text-white/75">{texto}</p>
          </div>
          <div className="mt-7 shrink-0 lg:mt-0">
            <Button href={link} target="_blank" rel="noopener noreferrer">
              {botao}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
