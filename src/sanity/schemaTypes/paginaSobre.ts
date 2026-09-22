// src/sanity/schemaTypes/paginaSobre.ts
import { defineField, defineType } from "sanity";

export const paginaSobre = defineType({
  name: "paginaSobre",
  title: "Página Sobre",
  type: "document",
  fields: [
    defineField({
      name: "titulo",
      title: "Título",
      type: "string",
      initialValue: "Sobre a WMaia",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "textoIntroducao",
      title: "Texto de Introdução",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "imagemDestaque",
      title: "Imagem de Destaque",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "missao",
      title: "Missão",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "visao",
      title: "Visão",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "valores",
      title: "Valores",
      type: "array",
      of: [{ type: "string" }],
    }),
        defineField({
      name: "tituloDiferenciais",
      title: "Título - Por que escolher a WMaia",
      type: "string",
      initialValue: "Por que escolher a WMaia?",
    }),
    defineField({
      name: "subtituloDiferenciais",
      title: "Subtítulo - Por que escolher a WMaia",
      type: "string",
      initialValue: "Proximidade, clareza e segurança para cuidar da sua empresa.",
    }),
    defineField({
      name: "textoDiferenciais",
      title: "Texto - Por que escolher a WMaia",
      type: "text",
      rows: 4,
      initialValue:
        "Atuamos de forma próxima e organizada, acompanhando as rotinas contábeis e orientando cada cliente com clareza para que tenha mais segurança nas decisões do dia a dia.",
    }),
    defineField({
      name: "diferenciais",
      title: "Diferenciais (4 itens)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "titulo", title: "Título", type: "string" }),
            defineField({
              name: "descricao",
              title: "Descrição",
              type: "string",
            }),
          ],
          preview: {
            select: { title: "titulo", subtitle: "descricao" },
          },
        },
      ],
      validation: (Rule) => Rule.max(4),
    }),
    defineField({
      name: "mostrarEquipe",
      title: "Mostrar seção de equipe nesta página?",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
});