// src/lib/navigation.ts
export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
  icon?: "condominio" | "contabilidade";
};

export const navLinks: NavLink[] = [
  { label: "Início", href: "/" },
  { label: "Quem Somos", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Administração Condominial", href: "/administracao-condominial" },
  { label: "Ferramentas", href: "/ferramentas" },
  { label: "Contato", href: "/contato" },
  {
    label: "Área do cliente (Condominial)",
    href: "https://maiacondominiosapp.com21.com.br/frontend/public/#/login",
    external: true,
    icon: "condominio",
  },
  {
    label: "Área do cliente (Contabilidade)",
    href: "https://vip.acessorias.com/wmaia",
    external: true,
    icon: "contabilidade",
  },
];
