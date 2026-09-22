// src/components/sections/Diferenciais.tsx
import { Container } from "@/components/ui/Container";

interface DiferencialItem {
  titulo?: string;
  descricao?: string;
}

interface DiferenciaisProps {
  titulo?: string;
  subtitulo?: string;
  texto?: string;
  itens?: DiferencialItem[];
}

export function Diferenciais({
  titulo,
  subtitulo,
  texto,
  itens,
}: DiferenciaisProps) {
  if (!titulo) return null;

  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container className="flex flex-col items-center gap-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">
            Nosso diferencial
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-blue-dark sm:text-4xl">
            {titulo}
          </h2>

          {subtitulo && (
            <p className="mt-4 text-lg font-semibold text-brand-blue">
              {subtitulo}
            </p>
          )}

          {texto && (
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-foreground/70">
              {texto}
            </p>
          )}
        </div>

        {itens && itens.length > 0 && (
          <div className="mx-auto grid w-full max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {itens.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border-soft bg-white p-6 shadow-sm"
              >
                <span className="text-sm font-bold text-brand-orange">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-brand-blue-dark">
                  {item.titulo}
                </h3>
                <p className="mt-3 text-sm leading-6 text-foreground/70">
                  {item.descricao}
                </p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
