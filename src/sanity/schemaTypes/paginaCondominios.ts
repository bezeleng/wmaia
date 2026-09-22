// src/sanity/schemaTypes/paginaCondominios.ts
import { defineField, defineType } from "sanity";

export const paginaCondominios = defineType({
  name: "paginaCondominios",
  title: "Administração Condominial",
  type: "document",
  fields: [
    defineField({
      name: "titulo",
      title: "Título",
      type: "string",
      initialValue: "Administração Condominial",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitulo",
      title: "Subtítulo",
      type: "text",
      rows: 3,
      initialValue:
        "Gestão administrativa e financeira para apoiar síndicos e condomínios com organização, transparência e acompanhamento.",
    }),
    defineField({
      name: "imagem",
      title: "Imagem de Destaque",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "introducao",
      title: "Apresentação",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "servicos",
      title: "Serviços incluídos",
      type: "array",
      of: [{ type: "string" }],
      initialValue: [
        "Administração financeira",
        "Prestação de contas",
        "Gestão de departamento pessoal",
        "Cobranças",
        "Organização documental",
        "Apoio administrativo ao síndico",
      ],
    }),
    defineField({
      name: "diferenciais",
      title: "Diferenciais",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "titulo", title: "Título", type: "string" }),
            defineField({
              name: "descricao",
              title: "Descrição",
              type: "text",
              rows: 3,
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "tituloCta",
      title: "Título da chamada final",
      type: "string",
      initialValue: "Quer mais organização para a gestão do seu condomínio?",
    }),
    defineField({
      name: "textoCta",
      title: "Texto da chamada final",
      type: "text",
      rows: 2,
      initialValue:
        "Converse com a WMaia e entenda como podemos apoiar a rotina administrativa e financeira do seu condomínio.",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
});
