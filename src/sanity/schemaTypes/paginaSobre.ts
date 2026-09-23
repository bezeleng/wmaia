// src/sanity/schemaTypes/paginaSobre.ts
import { defineField, defineType } from "sanity";

export const paginaSobre = defineType({
  name: "paginaSobre",
  title: "Quem Somos",
  type: "document",
  fields: [
    defineField({
      name: "titulo",
      title: "Título",
      type: "string",
      initialValue: "Quem Somos",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "textoApresentacao",
      title: "Texto principal — Quem Somos",
      description:
        "Texto exibido logo abaixo do título da página Quem Somos. Separe parágrafos com uma linha em branco.",
      type: "text",
      rows: 8,
    }),
    defineField({
      name: "textoIntroducao",
      title: "História / Apresentação — formato antigo",
      description:
        "Campo legado. Use preferencialmente o campo Texto principal — Quem Somos acima.",
      type: "array",
      of: [{ type: "block" }],
      hidden: true,
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
      rows: 4,
      initialValue:
        "Assessorar empresas, condomínios e clientes em suas rotinas administrativas e contábeis, fornecendo informações confiáveis e soluções adequadas às exigências atuais.",
    }),
    defineField({
      name: "visao",
      title: "Visão",
      type: "text",
      rows: 4,
      initialValue:
        "Ser reconhecida pela abrangência das soluções contábeis e administrativas, agregando valor econômico e fortalecendo relações de parceria com cada cliente.",
    }),
    defineField({
      name: "valores",
      title: "Valores",
      type: "array",
      of: [{ type: "string" }],
      initialValue: [
        "Sustentabilidade",
        "Comprometimento com o cliente",
        "Honestidade",
        "Responsabilidade",
        "Ética",
        "Eficiência",
      ],
    }),
    defineField({
      name: "tituloDiferenciais",
      title: "Título — Diferenciais",
      type: "string",
      initialValue: "Por que escolher a WMaia?",
    }),
    defineField({
      name: "subtituloDiferenciais",
      title: "Subtítulo — Diferenciais",
      type: "string",
      initialValue: "Proximidade, clareza e segurança para cuidar da sua empresa.",
    }),
    defineField({
      name: "textoDiferenciais",
      title: "Texto — Diferenciais",
      type: "text",
      rows: 4,
      initialValue:
        "Atuamos de forma próxima e organizada, acompanhando as rotinas contábeis e orientando cada cliente para que tenha mais segurança nas decisões do dia a dia.",
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
              type: "string",
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
      name: "mostrarEquipe",
      title: "Mostrar equipe nesta página?",
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
