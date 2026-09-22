import { sanityFetch } from "@/sanity/lib/live";
import { paginaInicialQuery } from "@/sanity/lib/queries";
import { Container } from "@/components/ui/Container";

const areas = [
  {
    titulo: "Área do cliente — Condominial",
    descricao:
      "Acesse o portal de administração condominial, documentos e informações do condomínio.",
    href: "https://maiacondominiosapp.com21.com.br/frontend/public/#/login",
    tipo: "condominio",
  },
  {
    titulo: "Área do cliente — Contabilidade",
    descricao:
      "Acesse o portal contábil da WMaia para documentos, informações e atendimento.",
    href: "https://vip.acessorias.com/wmaia",
    tipo: "contabilidade",
  },
] as const;

function AreaIcon({ tipo }: { tipo: "condominio" | "contabilidade" }) {
  if (tipo === "condominio") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.8">
        <path d="M4 21V8.5L12 4l8 4.5V21" />
        <path d="M8 21v-7h8v7M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.8">
      <path d="M4 20h16M6 20V9h12v11M9 13h2M13 13h2M9 16h2M13 16h2M8 9V6h8v3" />
    </svg>
  );
}

export async function WMaiaOnline() {
  const { data: pagina } = await sanityFetch({ query: paginaInicialQuery });

  const titulo = pagina?.tituloOnline ?? "Áreas do cliente";
  const texto =
    pagina?.textoOnline ??
    "Escolha o portal correspondente ao seu atendimento e acesse seus documentos e informações de forma segura.";

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-brand-blue-dark px-6 py-12 text-white shadow-lg sm:px-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">
              Acesso rápido
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">{titulo}</h2>
            <p className="mt-4 leading-7 text-white/75">{texto}</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {areas.map((area) => (
              <a
                key={area.href}
                href={area.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-white/[0.06] p-6 transition-colors hover:border-brand-orange/50 hover:bg-white/[0.1]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange text-white">
                  <AreaIcon tipo={area.tipo} />
                </div>
                <h3 className="mt-5 text-lg font-bold">{area.titulo}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{area.descricao}</p>
                <span className="mt-5 inline-flex text-sm font-semibold text-brand-orange">
                  Acessar portal ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
