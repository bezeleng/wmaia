import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { paginaInicialQuery, paginaSobreQuery } from "@/sanity/lib/queries";
import { Container } from "@/components/ui/Container";

const VALORES_FALLBACK = [
  "Sustentabilidade",
  "Comprometimento com o cliente",
  "Honestidade",
  "Responsabilidade",
  "Ética",
  "Eficiência",
];

export async function QuemSomosHome() {
  const [{ data: home }, { data: sobre }] = await Promise.all([
    sanityFetch({ query: paginaInicialQuery }),
    sanityFetch({ query: paginaSobreQuery }),
  ]);

  const titulo = home?.tituloQuemSomos ?? "Experiência que acompanha o seu negócio";
  const texto =
    home?.textoQuemSomos ??
    "A WMaia está em Jacareí e atua há mais de 25 anos oferecendo apoio contábil, fiscal, societário e trabalhista. Ao longo dessa trajetória, ampliou sua atuação para administração condominial, imposto de renda e consultoria administrativa e contábil.";

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">
              Quem Somos
            </span>
            <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-brand-blue-dark sm:text-4xl">
              {titulo}
            </h2>
            <p className="mt-6 max-w-2xl leading-7 text-foreground/70">{texto}</p>
            <Link
              href="/sobre"
              className="mt-7 inline-flex font-semibold text-brand-orange-dark hover:text-brand-orange"
            >
              Conheça nossa história →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-border-soft bg-surface p-6">
              <h3 className="font-bold text-brand-blue-dark">Missão</h3>
              <p className="mt-3 text-sm leading-6 text-foreground/70">
                {sobre?.missao ??
                  "Assessorar empresas, condomínios e clientes com informações confiáveis e soluções adequadas às exigências atuais."}
              </p>
            </article>
            <article className="rounded-2xl border border-border-soft bg-surface p-6">
              <h3 className="font-bold text-brand-blue-dark">Visão</h3>
              <p className="mt-3 text-sm leading-6 text-foreground/70">
                {sobre?.visao ??
                  "Ser reconhecida pela abrangência das soluções contábeis e administrativas e pela parceria com cada cliente."}
              </p>
            </article>
            <article className="rounded-2xl border border-border-soft bg-surface p-6 sm:col-span-2">
              <h3 className="font-bold text-brand-blue-dark">Valores</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {(sobre?.valores?.length ? sobre.valores : VALORES_FALLBACK).map(
                  (valor) => (
                    <span
                      key={valor}
                      className="rounded-full border border-brand-blue/10 bg-white px-3 py-1.5 text-xs font-medium text-brand-blue"
                    >
                      {valor}
                    </span>
                  )
                )}
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
