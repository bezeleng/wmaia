import type { Metadata } from "next";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { paginaSobreQuery, membrosEquipeQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PortableTextContent } from "@/components/ui/PortableTextContent";
import { MembroCard } from "@/components/sections/MembroCard";
import { Diferenciais } from "@/components/sections/Diferenciais";

const VALORES_FALLBACK = [
  "Sustentabilidade",
  "Comprometimento com o cliente",
  "Honestidade",
  "Responsabilidade",
  "Ética",
  "Eficiência",
];

export const metadata: Metadata = {
  title: "Quem Somos",
  description: "Conheça a história, missão e valores da WMaia Contabilidade.",
  alternates: {
    canonical: "/sobre",
  },
};

export default async function SobrePage() {
  const [{ data: pagina }, { data: membros }] = await Promise.all([
    sanityFetch({ query: paginaSobreQuery }),
    sanityFetch({ query: membrosEquipeQuery }),
  ]);

  const imagemUrl = pagina?.imagemDestaque
    ? urlFor(pagina.imagemDestaque).width(1200).height(800).url()
    : null;

  const missao =
    pagina?.missao ??
    "Assessorar empresas, condomínios e clientes em suas rotinas administrativas e contábeis, fornecendo informações confiáveis e soluções adequadas às exigências atuais.";

  const visao =
    pagina?.visao ??
    "Ser reconhecida pela abrangência das soluções contábeis e administrativas, agregando valor econômico e fortalecendo relações de parceria com cada cliente.";

  const valores = pagina?.valores?.length ? pagina.valores : VALORES_FALLBACK;

  return (
    <>
      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Nossa história"
              title={pagina?.titulo ?? "Quem Somos"}
            />
            {pagina?.textoApresentacao ? (
              <div className="mt-6 space-y-4 leading-7 text-foreground/70">
                {pagina.textoApresentacao
                  .split(/\n\s*\n/)
                  .filter(Boolean)
                  .map((paragrafo) => (
                    <p key={paragrafo}>{paragrafo}</p>
                  ))}
              </div>
            ) : pagina?.textoIntroducao ? (
              <div className="mt-6">
                <PortableTextContent value={pagina.textoIntroducao} />
              </div>
            ) : (
              <div className="mt-6 space-y-4 leading-7 text-foreground/70">
                <p>
                  A WMaia está em Jacareí e atua há mais de 25 anos oferecendo
                  serviços nas áreas contábil, fiscal, societária e trabalhista.
                </p>
                <p>
                  A experiência construída ao longo dessa trajetória ampliou a
                  atuação do escritório para administração condominial, imposto
                  de renda e consultoria administrativa e contábil, sempre com
                  foco em proximidade, organização e segurança nas informações.
                </p>
              </div>
            )}
          </div>

          {imagemUrl ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
              <Image
                src={imagemUrl}
                alt={pagina?.titulo ?? "WMaia Contabilidade"}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="flex aspect-[4/3] items-center justify-center rounded-3xl bg-brand-blue-dark p-10 text-center text-white">
              <p className="max-w-md text-3xl font-bold leading-tight">
                Mais de 25 anos ao lado de empresas, condomínios e pessoas.
              </p>
            </div>
          )}
        </Container>
      </section>

      <section className="bg-surface py-20">
        <Container className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-border-soft bg-white p-7">
            <h2 className="text-xl font-bold text-brand-blue-dark">Missão</h2>
            <p className="mt-3 leading-7 text-foreground/70">{missao}</p>
          </article>
          <article className="rounded-2xl border border-border-soft bg-white p-7">
            <h2 className="text-xl font-bold text-brand-blue-dark">Visão</h2>
            <p className="mt-3 leading-7 text-foreground/70">{visao}</p>
          </article>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionTitle title="Nossos Valores" align="center" />
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {valores.map((valor) => (
              <li
                key={valor}
                className="rounded-full border border-brand-orange/25 bg-brand-orange-soft px-5 py-2 text-sm font-medium text-brand-blue-dark"
              >
                {valor}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Diferenciais
        titulo={pagina?.tituloDiferenciais ?? "Por que escolher a WMaia?"}
        subtitulo={
          pagina?.subtituloDiferenciais ??
          "Proximidade, clareza e segurança para cuidar da sua empresa."
        }
        texto={
          pagina?.textoDiferenciais ??
          "Atuamos de forma próxima e organizada, acompanhando as rotinas contábeis e orientando cada cliente para que tenha mais segurança nas decisões do dia a dia."
        }
        itens={pagina?.diferenciais ?? undefined}
      />

      {(pagina?.mostrarEquipe ?? true) && membros && membros.length > 0 && (
        <section className="bg-surface py-20">
          <Container className="flex flex-col gap-12">
            <SectionTitle
              eyebrow="Quem faz a WMaia"
              title="Nossa Equipe"
              align="center"
            />
            <div className="flex flex-wrap justify-center gap-16">
              {membros.map((membro) => (
                <MembroCard
                  key={membro._id}
                  nome={membro.nome ?? ""}
                  cargo={membro.cargo ?? ""}
                  foto={membro.foto}
                />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
