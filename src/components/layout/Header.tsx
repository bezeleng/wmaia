// src/components/layout/Header.tsx
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";
import { navLinks } from "@/lib/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import { configuracaoSiteQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export async function Header() {
  const { data: config } = await sanityFetch({ query: configuracaoSiteQuery });
  const logoUrl = config?.logo
    ? urlFor(config.logo).width(360).height(120).fit("max").url()
    : null;

  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-white/95 shadow-sm backdrop-blur-md">
      <Container className="flex min-h-20 items-center justify-between gap-6 py-3">
        <Link href="/" className="flex items-center" aria-label="WMaia - Página inicial">
          {logoUrl ? (
            <Image
              src={logoUrl}
              alt={config?.nomeEmpresa || "WMaia"}
              width={180}
              height={60}
              priority
              className="h-auto max-h-14 w-[120px] object-contain sm:w-[170px]"
            />
          ) : (
            <span className="font-display text-xl font-extrabold tracking-tight text-brand-blue-dark sm:text-2xl">
              WMaia
            </span>
          )}
        </Link>

        <nav className="hidden items-center gap-5 sm:flex">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-brand-orange/25 bg-brand-orange-soft px-3 py-2 font-sans text-sm font-semibold text-brand-orange-dark transition-colors hover:border-brand-orange/50 hover:bg-brand-orange/10"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm font-medium text-brand-blue-dark transition-colors hover:text-brand-orange"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden sm:block">
          <Button href="/contato" variant="primary">
            Fale Conosco
          </Button>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
