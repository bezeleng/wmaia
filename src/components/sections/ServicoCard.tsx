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
  imagemCard?: NonNullable<unknown> | null;
  abrirNovaAba?: boolean | null;
}

export function ServicoCard({
  titulo,
  slug,
  href,
  descricaoCurta,
  icone,
  imagemCard,
  abrirNovaAba,
}: ServicoCardProps) {
  const iconeUrl = icone ? urlFor(icone).width(96).height(96).url() : null;
  const imagemUrl = imagemCard
    ? urlFor(imagemCard).width(900).height(560).fit("crop").url()
    : null;
  const destino = href || (slug ? `/servicos/${slug}` : "/servicos");
  const externo = /^https?:\/\//i.test(destino);
  const novaAba = Boolean(abrirNovaAba || externo);

  return (
    <Link
      href={destino}
      target={novaAba ? "_blank" : undefined}
      rel={novaAba ? "noopener noreferrer" : undefined}
      className="group flex min-h-64 flex-col overflow-hidden rounded-2xl border border-border-soft bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-orange/40 hover:shadow-lg"
    >
      {imagemUrl ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
          <Image
            src={imagemUrl}
            alt={titulo}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col gap-4 p-7">
        {!imagemUrl &&
          (iconeUrl ? (
            <div className="flex h-20 w-20 items-center justify-center">
              <Image
                src={iconeUrl}
                alt=""
                width={72}
                height={72}
                className="h-[72px] w-[72px] object-contain"
              />
            </div>
          ) : (
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-orange-soft">
              <span className="text-xl font-bold text-brand-orange">+</span>
            </div>
          ))}

        <h3 className="font-display text-xl font-bold text-brand-blue-dark">
          {titulo}
        </h3>
        <p className="flex-1 text-sm leading-6 text-foreground/70">
          {descricaoCurta}
        </p>
        <span className="text-sm font-semibold text-brand-orange-dark">
          Saiba mais <span aria-hidden="true">{novaAba ? "↗" : "→"}</span>
        </span>
      </div>
    </Link>
  );
}
