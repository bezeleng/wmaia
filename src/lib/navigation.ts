// src/lib/navigation.ts
export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Depoimentos", href: "/depoimentos" },
  { label: "Contato", href: "/contato" },
  {
    label: "Acesso ao Sistema",
    href: "http://www.wmaia.adm.br/loginAdmin.htm",
    external: true,
  },
];
