import { defineField, defineType } from "sanity";

const FERRAMENTAS_PADRAO = [
  {
    id: "ferramenta-calculo-facil",
    titulo: "Cálculo Fácil",
    descricao: "Atalhos para cálculos e consultas recorrentes da rotina empresarial.",
    ordem: 1,
  },
  {
    id: "ferramenta-conteudo-trabalhista",
    titulo: "Conteúdo Trabalhista",
    descricao: "Referências para rescisões, documentos e rotinas trabalhistas.",
    ordem: 2,
  },
  {
    id: "ferramenta-conteudo-fiscal",
    titulo: "Conteúdo Fiscal",
    descricao: "Tabelas e referências fiscais para consultas rápidas.",
    ordem: 3,
  },
  {
    id: "ferramenta-links-uteis",
    titulo: "Links Úteis",
    descricao: "Acesso rápido a serviços e consultas de órgãos oficiais.",
    ordem: 4,
  },
  {
    id: "ferramenta-arquivos-documentos",
    titulo: "Arquivos e Documentos",
    descricao: "Orientações e materiais úteis para a organização documental.",
    ordem: 5,
  },
] as const;

export function ferramentaInicial(documentId?: string) {
  const item = FERRAMENTAS_PADRAO.find((f) => f.id === documentId);
  return item
    ? { titulo: item.titulo, descricao: item.descricao, ordem: item.ordem }
    : {};
}

export const ferramenta = defineType({
  name: "ferramenta",
  title: "Ferramenta / Link Útil",
  type: "document",
  initialValue: (_params, context) => ferramentaInicial(context.documentId),
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
      name: "imagemCard",
      title: "Imagem do Card",
      type: "image",
      options: { hotspot: true },
      description: "Opcional. Se preenchida, aparece no card.",
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
