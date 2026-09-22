// src/components/sections/Hero.tsx
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { paginaInicialQuery } from "@/sanity/lib/queries";
import { HeroContent } from "@/components/sections/HeroContent";
import { Container } from "@/components/ui/Container";

const FALLBACK = {
  titulo: "Contabilidade próxima, estratégica e feita para simplificar.",
  subtitulo:
    "Há mais de 25 anos, a WMaia apoia empresas, condomínios e pessoas com soluções contábeis, fiscais, trabalhistas e administrativas.",
  textoCta: "Fale com nossa equipe",
  linkCta: "/contato",
};

export async function Hero() {
  const { data: paginaInicial } = await sanityFetch({
    query: paginaInicialQuery,
  });

  const imagemDesktopUrl = paginaInicial?.imagemFundo
    ? urlFor(paginaInicial.imagemFundo).width(1920).height(1080).url()
    : null;

  const imagemMobileUrl = paginaInicial?.imagemFundoMobile
    ? urlFor(paginaInicial.imagemFundoMobile).width(900).height(1125).url()
    : imagemDesktopUrl;

  return (
    <section className="relative flex min-h-[640px] items-center overflow-hidden bg-brand-blue-dark">
      {imagemMobileUrl && (
        <Image
          src={imagemMobileUrl}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover md:hidden"
        />
      )}
      {imagemDesktopUrl && (
        <Image
          src={imagemDesktopUrl}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden object-cover md:block"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/95 via-brand-blue-dark/82 to-brand-blue-dark/35" />
      <div className="absolute -right-20 top-12 h-80 w-80 rounded-full bg-brand-orange/15 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-orange" />
      <Container className="relative z-10 py-28 sm:py-32">
        <HeroContent
          titulo={paginaInicial?.tituloHero ?? FALLBACK.titulo}
          subtitulo={paginaInicial?.subtituloHero ?? FALLBACK.subtitulo}
          textoCta={paginaInicial?.textoCta ?? FALLBACK.textoCta}
          linkCta={paginaInicial?.linkCta ?? FALLBACK.linkCta}
        />
      </Container>
    </section>
  );
}
