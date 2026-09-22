import { defineField, defineType } from "sanity";

export const paginaServicos = defineType({
  name: "paginaServicos",
  title: "Página Serviços",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Texto pequeno acima do título",
      type: "string",
      initialValue: "O que fazemos",
    }),
    defineField({
      name: "titulo",
      title: "Título",
      type: "string",
      initialValue: "Soluções para empresas, condomínios e pessoas",
    }),
    defineField({
      name: "descricao",
      title: "Descrição",
      type: "text",
      rows: 3,
      initialValue:
        "A WMaia reúne serviços contábeis e administrativos para apoiar a rotina, as obrigações e as decisões dos clientes.",
    }),
  ],
});
