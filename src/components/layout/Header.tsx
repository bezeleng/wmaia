import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "@/components/layout/MobileNav";
import { navLinks, type NavLink } from "@/lib/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import { configuracaoSiteQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

function MenuIcon({ icon }: { icon?: NavLink["icon"] }) {
  if (!icon) return null;

  if (icon === "condominio") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-none stroke-current" strokeWidth="1.8">
        <path d="M4 21V8.5L12 4l8 4.5V21" />
        <path d="M8 21v-7h8v7M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-none stroke-current" strokeWidth="1.8">
      <path d="M4 20h16M6 20V9h12v11M9 13h2M13 13h2M9 16h2M13 16h2M8 9V6h8v3" />
    </svg>
  );
}

export async function Header() {
  const { data: config } = await sanityFetch({ query: configuracaoSiteQuery });
  const logoUrl = config?.logo
    ? urlFor(config.logo).width(520).fit("max").url()
    : null;

  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-white/95 shadow-sm backdrop-blur-md">
      <Container className="flex min-h-24 items-center justify-between gap-6 py-3">
        <Link href="/" className="flex shrink-0 items-center" aria-label="WMaia - Página inicial">
          {logoUrl ? (
            <Image
              src={logoUrl}
              alt={config?.nomeEmpresa || "WMaia"}
              width={205}
              height={170}
              priority
              className="h-16 w-auto object-contain sm:h-20 lg:h-[88px]"
            />
          ) : (
            <span className="text-xl font-extrabold tracking-tight text-brand-blue-dark sm:text-2xl">
              WMaia
            </span>
          )}
        </Link>

        <nav className="hidden items-center gap-3 xl:flex">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-brand-orange/25 bg-brand-orange-soft px-3 py-2 text-xs font-semibold text-brand-orange-dark transition-colors hover:border-brand-orange/50 hover:bg-brand-orange/10"
              >
                <MenuIcon icon={link.icon} />
                <span>{link.label}</span>
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-blue-dark transition-colors hover:text-brand-orange"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <MobileNav />
      </Container>
    </header>
  );
}
