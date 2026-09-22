import { defineField, defineType } from "sanity";

export const paginaFerramentas = defineType({
  name: "paginaFerramentas",
  title: "Página Ferramentas",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Texto pequeno acima do título",
      type: "string",
      initialValue: "Recursos",
    }),
    defineField({
      name: "titulo",
      title: "Título",
      type: "string",
      initialValue: "Ferramentas e links úteis",
    }),
    defineField({
      name: "descricao",
      title: "Descrição",
      type: "text",
      rows: 3,
      initialValue:
        "Reunimos atalhos para consultas, conteúdos e serviços que podem ajudar na rotina da sua empresa.",
    }),
  ],
});
