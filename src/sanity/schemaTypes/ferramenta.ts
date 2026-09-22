// src/sanity/schemaTypes/ferramenta.ts
import { defineField, defineType } from "sanity";

export const ferramenta = defineType({
  name: "ferramenta",
  title: "Ferramenta / Link Útil",
  type: "document",
  fields: [
    defineField({
      name: "titulo",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "descricao",
      title: "Descrição",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "icone",
      title: "Ícone",
      type: "image",
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "titulo",
              title: "Nome do link",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
              validation: (Rule) =>
                Rule.required().uri({ scheme: ["http", "https"] }),
            }),
          ],
          preview: {
            select: { title: "titulo", subtitle: "url" },
          },
        },
      ],
    }),
    defineField({
      name: "ordem",
      title: "Ordem de Exibição",
      type: "number",
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
