// src/sanity/schemaTypes/paginaInicial.ts
import { defineField, defineType } from "sanity";

export const paginaInicial = defineType({
  name: "paginaInicial",
  title: "Página Inicial",
  type: "document",
  fields: [
    defineField({
      name: "tituloHero",
      title: "Título principal",
      type: "string",
      initialValue: "Contabilidade próxima, estratégica e feita para simplificar.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtituloHero",
      title: "Subtítulo principal",
      type: "text",
      rows: 3,
      initialValue:
        "Há mais de 25 anos, a WMaia apoia empresas, condomínios e pessoas com soluções contábeis, fiscais, trabalhistas e administrativas.",
    }),
    defineField({
      name: "imagemFundo",
      title: "Imagem principal — Desktop",
      description:
        "Imagem horizontal usada em computadores e telas maiores. Recomendado: proporção 16:9, com o assunto principal mais à direita para preservar a leitura do texto.",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "imagemFundoMobile",
      title: "Imagem principal — Mobile",
      description:
        "Imagem vertical usada em celulares. Recomendado: proporção 4:5, com o assunto principal centralizado. Se ficar vazia, o site usa automaticamente a imagem de Desktop.",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "textoCta",
      title: "Texto do botão principal",
      type: "string",
      initialValue: "Fale com nossa equipe",
    }),
    defineField({
      name: "linkCta",
      title: "Link do botão principal",
      type: "string",
      initialValue: "/contato",
    }),
    defineField({
      name: "tituloQuemSomos",
      title: "Título — Quem Somos",
      type: "string",
      initialValue: "Experiência que acompanha o seu negócio",
    }),
    defineField({
      name: "textoQuemSomos",
      title: "Texto — Quem Somos",
      type: "text",
      rows: 5,
      initialValue:
        "A WMaia está em Jacareí e atua há mais de 25 anos oferecendo apoio contábil, fiscal, societário e trabalhista. Ao longo dessa trajetória, ampliou sua atuação para administração condominial, imposto de renda e consultoria administrativa e contábil.",
    }),
    defineField({
      name: "tituloDestaque",
      title: "Título — Faixa de destaque",
      type: "string",
      initialValue: "Contabilidade próxima para decisões mais seguras.",
    }),
    defineField({
      name: "textoDestaque",
      title: "Texto — Faixa de destaque",
      type: "text",
      rows: 3,
      initialValue:
        "Informação organizada, orientação clara e acompanhamento para que empresas, condomínios e pessoas tenham mais segurança em suas rotinas e decisões.",
    }),
    defineField({
      name: "diferenciais",
      title: "Diferenciais",
      type: "array",
      initialValue: [
        {
          _type: "diferencialHome",
          titulo: "Atendimento consultivo",
          descricao: "Orientação próxima para dúvidas contábeis, fiscais e administrativas.",
        },
        {
          _type: "diferencialHome",
          titulo: "Experiência",
          descricao: "Mais de 25 anos de atuação apoiando empresas e clientes da região.",
        },
        {
          _type: "diferencialHome",
          titulo: "WMaia Online",
          descricao: "Acesso digital a informações e documentos com praticidade.",
        },
        {
          _type: "diferencialHome",
          titulo: "Soluções integradas",
          descricao: "Contabilidade, consultoria e administração condominial em um só escritório.",
        },
      ],
      of: [
        {
          type: "object",
          name: "diferencialHome",
          title: "Diferencial",
          fields: [
            defineField({ name: "titulo", title: "Título", type: "string" }),
            defineField({
              name: "descricao",
              title: "Descrição",
              type: "text",
              rows: 3,
            }),
          ],
          preview: {
            select: { title: "titulo", subtitle: "descricao" },
          },
        },
      ],
      validation: (Rule) => Rule.max(6),
    }),
    defineField({
      name: "tituloOnline",
      title: "Título — WMaia Online",
      type: "string",
      initialValue: "WMaia Online",
    }),
    defineField({
      name: "textoOnline",
      title: "Texto — WMaia Online",
      type: "text",
      rows: 3,
      initialValue:
        "Acesse informações, documentos e recursos do seu atendimento WMaia de forma prática e segura.",
    }),
    defineField({
      name: "textoBotaoOnline",
      title: "Texto do botão — WMaia Online",
      type: "string",
      initialValue: "Acessar sistema",
    }),
    defineField({
      name: "linkOnline",
      title: "Link — WMaia Online",
      type: "url",
      initialValue: "http://www.wmaia.adm.br/loginAdmin.htm",
      validation: (Rule) => Rule.uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "tituloFerramentas",
      title: "Título — Ferramentas",
      type: "string",
      initialValue: "Ferramentas e links úteis",
    }),
    defineField({
      name: "subtituloFerramentas",
      title: "Subtítulo — Ferramentas",
      type: "text",
      rows: 2,
      initialValue:
        "Acesso rápido a conteúdos, consultas e recursos que ajudam na rotina empresarial.",
    }),
    defineField({
      name: "tituloCtaFinal",
      title: "Título — Chamada final",
      type: "string",
      initialValue: "Precisa de apoio contábil ou administrativo?",
    }),
    defineField({
      name: "subtituloCtaFinal",
      title: "Texto — Chamada final",
      type: "text",
      rows: 2,
      initialValue:
        "Converse com a equipe WMaia e encontre a solução adequada para sua empresa, condomínio ou necessidade pessoal.",
    }),
    defineField({
      name: "textoBotaoCtaFinal",
      title: "Texto do botão — Chamada final",
      type: "string",
      initialValue: "Entrar em contato",
    }),
    defineField({
      name: "linkBotaoCtaFinal",
      title: "Link do botão — Chamada final",
      type: "string",
      initialValue: "/contato",
    }),
  ],
});
