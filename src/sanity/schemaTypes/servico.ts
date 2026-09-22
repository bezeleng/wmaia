// src/sanity/schemaTypes/servico.ts
import { defineField, defineType } from "sanity";

const SERVICOS_PADRAO = [
  {
    id: "servico-contabilidade",
    titulo: "Contabilidade, Fiscal, Societário e Trabalhista",
    area: "contabil",
    descricaoCurta:
      "Rotinas contábeis e fiscais, obrigações societárias e apoio às demandas trabalhistas da empresa.",
    ordem: 1,
  },
  {
    id: "servico-condominial",
    titulo: "Administração Condominial",
    area: "consultoria",
    descricaoCurta:
      "Administração financeira, prestação de contas, departamento pessoal, cobranças e apoio ao síndico.",
    ordem: 2,
    linkPersonalizado: "/administracao-condominial",
  },
  {
    id: "servico-planejamento-tributario",
    titulo: "Planejamento Tributário",
    area: "tributaria",
    descricaoCurta:
      "Análise da estrutura tributária para apoiar decisões e buscar uma carga fiscal adequada à realidade do negócio.",
    ordem: 3,
  },
  {
    id: "servico-imposto-renda",
    titulo: "Imposto de Renda",
    area: "pessoa_fisica",
    descricaoCurta:
      "Atendimento a pessoas físicas e jurídicas com organização das informações e suporte à declaração.",
    ordem: 4,
  },
  {
    id: "servico-consultoria",
    titulo: "Consultoria Administrativa e Contábil",
    area: "consultoria",
    descricaoCurta:
      "Orientação para empresários e gestores com informações contábeis e administrativas aplicadas à tomada de decisão.",
    ordem: 5,
  },
  {
    id: "servico-abertura-empresas",
    titulo: "Abertura e Regularização de Empresas",
    area: "societaria",
    descricaoCurta:
      "Apoio na abertura, alterações e regularização da empresa com acompanhamento das etapas necessárias.",
    ordem: 6,
  },
] as const;

export function servicoInicial(documentId?: string) {
  const servico = SERVICOS_PADRAO.find((item) => item.id === documentId);
  if (!servico) return {};

  return {
    titulo: servico.titulo,
    slug: {
      _type: "slug",
      current: servico.titulo
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, ""),
    },
    area: servico.area,
    descricaoCurta: servico.descricaoCurta,
    ordem: servico.ordem,
    linkPersonalizado:
      "linkPersonalizado" in servico ? servico.linkPersonalizado : undefined,
  };
}

export const servico = defineType({
  name: "servico",
  title: "Serviço",
  type: "document",
  initialValue: (_params, context) => servicoInicial(context.documentId),
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
