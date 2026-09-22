import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { configuracaoSiteQuery } from "@/sanity/lib/queries";
import { configFallback } from "@/lib/wmaia-content";
import { Container } from "@/components/ui/Container";
import { navLinks } from "@/lib/navigation";
import {
  InstagramIcon,
  FacebookIcon,
  YouTubeIcon,
} from "@/components/ui/SocialIcons";

function formatarWhatsapp(valor?: string | null) {
  if (!valor) return null;
  const numeros = valor.replace(/\D/g, "").replace(/^55/, "");
  if (numeros.length !== 11) return valor;
  return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`;
}

export async function Footer() {
  const { data } = await sanityFetch({ query: configuracaoSiteQuery });
  const config = { ...configFallback, ...(data ?? {}) };

  const enderecoLinha =
    config.logradouro && config.cidade && config.estado
      ? `${config.logradouro} — ${config.cidade}/${config.estado}`
      : config.endereco;

  const whatsappExibicao = formatarWhatsapp(config.whatsapp);

  const redesSociais = [
    { url: config.instagramUrl, label: "Instagram", Icon: InstagramIcon },
    { url: data?.facebookUrl, label: "Facebook", Icon: FacebookIcon },
    { url: data?.youtubeUrl, label: "YouTube", Icon: YouTubeIcon },
  ].filter((rede) => rede.url);

  return (
    <footer className="border-t-4 border-brand-orange bg-brand-blue-dark text-white">
      <Container className="grid gap-10 py-12 sm:grid-cols-3">
        <div className="flex flex-col gap-3">
          <div>
            <span className="text-xl font-bold">WMaia</span>
            <p className="mt-1 text-sm text-white/70">
              {data?.subtituloRodape ?? "Contabilidade • Assessoria • Consultoria"}
            </p>
          </div>
          <div className="flex flex-col gap-1 text-sm text-white/60">
            {enderecoLinha && <p>{enderecoLinha}</p>}
            {config.email && <p>{config.email}</p>}
            {config.telefone && <p>{config.telefone}</p>}
            {config.telefoneSecundario && <p>{config.telefoneSecundario}</p>}
            {whatsappExibicao && <p>WhatsApp: {whatsappExibicao}</p>}
          </div>
          {redesSociais.length > 0 && (
            <div className="mt-2 flex gap-5">
              {redesSociais.map(({ url, label, Icon }) => (
                <a
                  key={label}
                  href={url!}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/70 transition-colors hover:text-brand-orange"
                >
                  <Icon className="h-10 w-10" />
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2 text-sm text-white/70">
          <strong className="text-white">Horário de atendimento</strong>
          <p>Segunda à Quinta: {config.horarioSegQui}</p>
          <p>Sexta: {config.horarioSexta}</p>
        </div>

        <nav className="flex flex-col gap-2 text-sm">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-brand-orange"
              >
                {link.label} ↗
              </a>
            ) : (
              <Link key={link.href} href={link.href} className="text-white/80 hover:text-brand-orange">
                {link.label}
              </Link>
            )
          )}
        </nav>
      </Container>

      <div className="border-t border-white/10 py-4">
        <Container className="flex flex-col gap-2 text-xs text-white/60 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} WMaia Contabilidade. Todos os direitos reservados.</span>
          <Link href="/politica-de-privacidade" className="hover:text-brand-orange">
            Política de Privacidade
          </Link>
        </Container>
      </div>
    </footer>
  );
}
