import { defineQuery } from "next-sanity";

export const configuracaoSiteQuery = defineQuery(
  `*[_type == "configuracaoSite"][0]`
);

export const paginaInicialQuery = defineQuery(
  `*[_type == "paginaInicial"][0]`
);

export const paginaSobreQuery = defineQuery(
  `*[_type == "paginaSobre"][0]`
);

export const paginaCondominiosQuery = defineQuery(
  `*[_type == "paginaCondominios"][0]`
);

export const servicosQuery = defineQuery(
  `*[_type == "servico"] | order(ordem asc)`
);

export const servicoBySlugQuery = defineQuery(
  `*[_type == "servico" && slug.current == $slug][0]`
);

export const servicoSlugsQuery = defineQuery(
  `*[_type == "servico"]{ "slug": slug.current }`
);

export const ferramentasQuery = defineQuery(
  `*[_type == "ferramenta"] | order(ordem asc){
    _id,
    titulo,
    descricao,
    icone,
    links
  }`
);

export const membrosEquipeQuery = defineQuery(
  `*[_type == "membroEquipe"] | order(ordem asc)`
);

export const depoimentosQuery = defineQuery(
  `*[_type == "depoimento"] | order(_createdAt desc){
    _id,
    nomeCliente,
    cargoEmpresa,
    foto,
    texto,
    nota,
    tipoServico->{nome}
  }`
);

export const depoimentosDestaqueQuery = defineQuery(
  `*[_type == "depoimento" && destaque == true] | order(_createdAt desc)[0...3]{
    _id,
    nomeCliente,
    cargoEmpresa,
    foto,
    texto,
    nota,
    tipoServico->{nome}
  }`
);

export const politicaPrivacidadeQuery = defineQuery(
  `*[_type == "politicaPrivacidade"][0]`
);
