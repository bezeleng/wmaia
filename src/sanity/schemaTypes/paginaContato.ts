import { defineField, defineType } from "sanity";

export const paginaContato = defineType({
  name: "paginaContato",
  title: "Página Contato",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Texto pequeno acima do título",
      type: "string",
      initialValue: "Fale conosco",
    }),
    defineField({
      name: "titulo",
      title: "Título",
      type: "string",
      initialValue: "Entre em Contato",
    }),
    defineField({
      name: "descricao",
      title: "Descrição",
      type: "text",
      rows: 3,
      initialValue: "Utilize nossos canais de atendimento ou envie uma mensagem.",
    }),
    defineField({
      name: "tituloMapa",
      title: "Título da localização",
      type: "string",
      initialValue: "Onde estamos",
    }),
    defineField({
      name: "textoBotaoMapa",
      title: "Texto do botão do mapa",
      type: "string",
      initialValue: "Como chegar",
    }),
  ],
});
