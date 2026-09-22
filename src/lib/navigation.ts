// src/lib/navigation.ts
export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const navLinks: NavLink[] = [
  { label: "Início", href: "/" },
  { label: "Quem Somos", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Administração Condominial", href: "/administracao-condominial" },
  { label: "Ferramentas", href: "/ferramentas" },
  { label: "Contato", href: "/contato" },
  {
    label: "Acesso ao Sistema",
    href: "http://www.wmaia.adm.br/loginAdmin.htm",
    external: true,
  },
];
