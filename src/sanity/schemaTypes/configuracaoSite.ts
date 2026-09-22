// src/sanity/schemaTypes/configuracaoSite.ts
import { defineField, defineType } from "sanity";

export const configuracaoSite = defineType({
  name: "configuracaoSite",
  title: "Configurações do Site",
  type: "document",
  fields: [
    defineField({
      name: "nomeEmpresa",
      title: "Nome da Empresa",
      type: "string",
      validation: (Rule) => Rule.required(),
      initialValue: "WMaia Contabilidade",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "telefone",
      title: "Telefone",
      type: "string",
      initialValue: "(12) 3951-8007",
    }),
    defineField({
      name: "telefoneSecundario",
      title: "Telefone Secundário",
      type: "string",
      initialValue: "(12) 3959-1263",
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp (somente números, com DDI)",
      type: "string",
      description: "Ex: 5511999999999",
      initialValue: "5512982251788",
    }),
    defineField({
      name: "mensagemWhatsapp",
      title: "Mensagem Inicial do WhatsApp",
      type: "text",
      rows: 3,
      initialValue:
        "Olá! Vim pelo site da WMaia e gostaria de falar com a equipe.",
      description: "Texto que já vem preenchido ao abrir a conversa.",
    }),
    defineField({
      name: "email",
      title: "E-mail",
      type: "string",
      validation: (Rule) => Rule.email(),
      initialValue: "contato@wmaia.adm.br",
    }),
    defineField({
      name: "endereco",
      title: "Endereço (texto livre)",
      type: "text",
      rows: 3,
      description:
        "Usado como exibição simples. Para o mapa e dados estruturados, preencha também os campos estruturados abaixo.",
      initialValue: "Rua Luiz Simon, 48, Centro, Jacareí - SP",
    }),
    defineField({
      name: "logradouro",
      title: "Logradouro",
      type: "string",
      description: 'Ex: "Rua Luiz Simon, 48"',
      initialValue: "Rua Luiz Simon, 48",
    }),
    defineField({
      name: "cidade",
      title: "Cidade",
      type: "string",
      initialValue: "Jacareí",
    }),
    defineField({
      name: "estado",
      title: "Estado (UF)",
      type: "string",
      initialValue: "SP",
    }),
    defineField({
      name: "cep",
      title: "CEP",
      type: "string",
    }),
    defineField({
      name: "cnpj",
      title: "CNPJ",
      type: "string",
    }),
    defineField({
      name: "regiaoAtendimento",
      title: "Região de Atendimento",
      type: "array",
      of: [{ type: "string" }],
      initialValue: ["Jacareí", "Vale do Paraíba"],
    }),
    defineField({
      name: "linkAvaliacoesGoogle",
      title: "Link do Perfil no Google (avaliações)",
      type: "url",
    }),
    defineField({
      name: "horarioSegQui",
      title: "Horário — Segunda à Quinta",
      type: "string",
      initialValue: "8:00 às 12:00 | 13:30 às 17:30",
    }),
    defineField({
      name: "horarioSexta",
      title: "Horário — Sexta",
      type: "string",
      initialValue: "8:00 às 12:00 | 13:30 às 17:00",
    }),
    defineField({
      name: "sistemaCondominialUrl",
      title: "Área do Cliente — Condominial",
      type: "url",
      initialValue:
        "https://maiacondominiosapp.com21.com.br/frontend/public/#/login",
      validation: (Rule) => Rule.uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "sistemaContabilidadeUrl",
      title: "Área do Cliente — Contabilidade",
      type: "url",
      initialValue: "https://vip.acessorias.com/wmaia",
      validation: (Rule) => Rule.uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram (URL completa)",
      type: "url",
      validation: (Rule) =>
        Rule.uri({ scheme: ["http", "https"] }),
      initialValue: "https://www.instagram.com/wmaiaadm/",
    }),
    defineField({
      name: "facebookUrl",
      title: "Facebook (URL completa)",
      type: "url",
      validation: (Rule) =>
        Rule.uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "youtubeUrl",
      title: "YouTube (URL completa)",
      type: "url",
      validation: (Rule) =>
        Rule.uri({ scheme: ["http", "https"] }),
    }),
  ],
});