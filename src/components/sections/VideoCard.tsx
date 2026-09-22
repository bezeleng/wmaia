// src/components/sections/VideoCard.tsx
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { getVideoEmbedInfo } from "@/lib/video";

interface VideoCardProps {
  titulo: string;
  url: string;
  thumbnail?: NonNullable<unknown> | null;
  categoriaNome?: string | null;
  descricaoCurta?: string | null;
  duracao?: string | null;
  onPlay: () => void;
}

export function VideoCard({
  titulo,
  url,
  thumbnail,
  categoriaNome,
  descricaoCurta,
  duracao,
  onPlay,
}: VideoCardProps) {
  const info = getVideoEmbedInfo(url);
  if (!info) return null;

  const thumbnailUrl = thumbnail
    ? urlFor(thumbnail).width(600).height(340).url()
    : info.plataforma === "youtube"
      ? info.thumbnailUrl
      : null;

  return (
    <button
      onClick={onPlay}
      aria-label={`Assistir vídeo: ${titulo}`}
      className="group flex flex-col gap-3 text-left"
    >
      <div className="relative aspect-video overflow-hidden rounded-lg bg-navy">
        {thumbnailUrl ? (
          <Image src={thumbnailUrl} alt="" fill className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy to-navy/70" />
        )}
        <span className="absolute inset-0 flex items-center justify-center bg-navy/30 transition-colors group-hover:bg-navy/40">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy">
            ▶
          </span>
        </span>
        {duracao && (
          <span className="absolute bottom-2 right-2 rounded bg-navy/80 px-2 py-0.5 text-xs text-white">
            {duracao}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        {categoriaNome && (
          <span className="text-xs font-medium uppercase tracking-widest text-gold-text">
            {categoriaNome}
          </span>
        )}
        <h3 className="font-display text-lg text-navy">{titulo}</h3>
        {descricaoCurta && (
          <p className="text-sm text-foreground/70">{descricaoCurta}</p>
        )}
        <span className="text-sm font-medium text-gold-text group-hover:underline">
          Assistir vídeo →
        </span>
      </div>
    </button>
  );
}