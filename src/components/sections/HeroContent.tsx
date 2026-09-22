// src/components/sections/HeroContent.tsx
import { Button } from "@/components/ui/Button";

interface HeroContentProps {
  titulo: string;
  subtitulo?: string;
  textoCta?: string;
  linkCta?: string;
}

export function HeroContent({
  titulo,
  subtitulo,
  textoCta,
  linkCta,
}: HeroContentProps) {
  return (
    <div className="hero-content-enter flex max-w-3xl flex-col items-start gap-6 text-white">
      <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
        WMaia Contabilidade
      </span>
      <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
        {titulo}
      </h1>
      {subtitulo && (
        <p className="max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
          {subtitulo}
        </p>
      )}
      {textoCta && linkCta && (
        <Button href={linkCta} variant="primary">
          {textoCta}
        </Button>
      )}
    </div>
  );
}
