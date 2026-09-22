// src/components/sections/ServicoCard.tsx
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface ServicoCardProps {
  titulo: string;
  slug: string;
  href?: string;
  descricaoCurta: string;
  icone?: NonNullable<unknown> | null;
}

export function ServicoCard({
  titulo,
  slug,
  href,
  descricaoCurta,
  icone,
}: ServicoCardProps) {
  const iconeUrl = icone ? urlFor(icone).width(96).height(96).url() : null;
  const destino = href || (slug ? `/servicos/${slug}` : "/servicos");

  return (
    <Link
      href={destino}
      className="group flex min-h-64 flex-col gap-4 rounded-2xl border border-border-soft bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-orange/40 hover:shadow-lg"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-orange-soft">
        {iconeUrl ? (
          <Image src={iconeUrl} alt="" width={42} height={42} />
        ) : (
          <span className="text-xl font-bold text-brand-orange">+</span>
        )}
      </div>
      <h3 className="font-display text-xl font-bold text-brand-blue-dark">
        {titulo}
      </h3>
      <p className="flex-1 text-sm leading-6 text-foreground/70">
        {descricaoCurta}
      </p>
      <span className="text-sm font-semibold text-brand-orange-dark">
        Saiba mais <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
