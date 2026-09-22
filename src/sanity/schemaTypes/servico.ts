// src/sanity/schemaTypes/servico.ts
import { defineField, defineType } from "sanity";

export const servico = defineType({
  name: "servico",
  title: "Serviço",
  type: "document",
  fields: [
    defineField({
      name: "titulo",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "titulo", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "area",
      title: "Área",
      type: "string",
      options: {
        list: [
          { title: "Contábil", value: "contabil" },
          { title: "Fiscal", value: "fiscal" },
          { title: "Societária", value: "societaria" },
          { title: "Trabalhista", value: "trabalhista" },
          { title: "Tributária", value: "tributaria" },
          { title: "Pessoa Física", value: "pessoa_fisica" },
          { title: "Consultoria", value: "consultoria" },
        ],
      },
    }),
    defineField({
      name: "icone",
      title: "Ícone",
      type: "image",
      description: "Ícone opcional. Se houver imagem do card, ela terá prioridade.",
    }),
    defineField({
      name: "imagemCard",
      title: "Imagem do Card",
      type: "image",
      options: { hotspot: true },
      description:
        "Imagem exibida no card do serviço na página inicial e na página de Serviços.",
    }),
    defineField({
      name: "linkPersonalizado",
      title: "Link Personalizado",
      type: "string",
      description:
        "Opcional. Pode ser uma página interna, como /contato, ou um link completo. Se ficar vazio, o card abre a página do próprio serviço.",
    }),
    defineField({
      name: "abrirNovaAba",
      title: "Abrir link em nova aba?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "descricaoCurta",
      title: "Descrição Curta",
      type: "text",
      rows: 3,
      description: "Usada em cards e listagens.",
      validation: (Rule) => Rule.required().max(180),
    }),
    defineField({
      name: "descricaoLonga",
      title: "Descrição Completa",
      type: "array",
      of: [{ type: "block" }],
      description: "Conteúdo da página individual do serviço.",
    }),
    defineField({
      name: "ordem",
      title: "Ordem de Exibição",
      type: "number",
      description: "Menor número aparece primeiro.",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
  orderings: [
    {
      title: "Ordem de Exibição",
      name: "ordemAsc",
      by: [{ field: "ordem", direction: "asc" }],
    },
  ],
});
