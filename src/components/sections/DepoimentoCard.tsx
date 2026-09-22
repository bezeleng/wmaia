// src/components/sections/DepoimentoCard.tsx
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Rating } from "@/components/ui/Rating";

interface DepoimentoCardProps {
  nomeCliente: string;
  cargoEmpresa?: string | null;
  foto?: NonNullable<unknown> | null;
  texto: string;
  nota?: number | null;
  servicoNome?: string | null;
}

export function DepoimentoCard({
  nomeCliente,
  cargoEmpresa,
  foto,
  texto,
  nota,
  servicoNome,
}: DepoimentoCardProps) {
  const fotoUrl = foto ? urlFor(foto).width(120).height(120).url() : null;
  const iniciais = nomeCliente
    .split(" ")
    .slice(0, 2)
    .map((parte) => parte[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border-soft bg-white p-6 shadow-sm">
      {nota && <Rating nota={nota} />}
      <p className="leading-7 text-foreground/80">&ldquo;{texto}&rdquo;</p>

      {servicoNome && (
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange-dark">
          {servicoNome}
        </span>
      )}

      <div className="mt-auto flex items-center gap-3 pt-2">
        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand-blue/10">
          {fotoUrl ? (
            <Image src={fotoUrl} alt={nomeCliente} fill className="object-cover" />
          ) : (
            <span className="text-sm font-medium text-brand-blue">
              {iniciais}
            </span>
          )}
        </div>
        <div>
          <p className="font-semibold text-brand-blue-dark">{nomeCliente}</p>
          {cargoEmpresa && (
            <p className="text-sm text-foreground/60">{cargoEmpresa}</p>
          )}
        </div>
      </div>
    </div>
  );
}
