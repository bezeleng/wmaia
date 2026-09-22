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
    <header className="relative z-50 border-b border-navy/10 bg-white">
      <Container className="flex items-center justify-between py-3 sm:py-4">
        <Link href="/" className="flex items-center" aria-label="WMaia - Página inicial">
          {logoUrl ? (
            <Image
              src={logoUrl}
              alt={config?.nomeEmpresa || "WMaia"}
              width={180}
              height={60}
              priority
              className="h-auto w-[115px] sm:w-[170px]"
            />
          ) : (
            <span className="font-display text-xl font-bold tracking-wide text-navy sm:text-2xl">
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
                className="font-sans text-sm text-navy hover:text-gold"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-navy hover:text-gold"
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
