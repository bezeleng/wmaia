/**
 * Sanity query types for the WMaia website.
 * Keep this file in sync with src/sanity/lib/queries.ts.
 */

export type SanityImageAssetReference = {
  _ref: string;
  _type: "reference";
  _weak?: boolean;
};

export type SanityImage = {
  asset?: SanityImageAssetReference;
  media?: unknown;
  hotspot?: {
    x?: number;
    y?: number;
    height?: number;
    width?: number;
    _type?: "sanity.imageHotspot";
  };
  crop?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    _type?: "sanity.imageCrop";
  };
  _type: "image";
};

export type Slug = {
  current?: string;
  _type: "slug";
};

export type Seo = {
  metaTitulo?: string | null;
  metaDescricao?: string | null;
  imagemOg?: SanityImage | null;
};

export type ConfiguracaoSiteQueryResult = {
  _id: string;
  nomeEmpresa?: string | null;
  logo?: SanityImage | null;
  telefone?: string | null;
  telefoneSecundario?: string | null;
  whatsapp?: string | null;
  mensagemWhatsapp?: string | null;
  email?: string | null;
  endereco?: string | null;
  logradouro?: string | null;
  cidade?: string | null;
  estado?: string | null;
  cep?: string | null;
  cnpj?: string | null;
  regiaoAtendimento?: string[] | null;
  linkAvaliacoesGoogle?: string | null;
  horarioSegQui?: string | null;
  horarioSexta?: string | null;
  subtituloRodape?: string | null;
  tituloAreaCondominial?: string | null;
  descricaoAreaCondominial?: string | null;
  tituloAreaContabilidade?: string | null;
  descricaoAreaContabilidade?: string | null;
  sistemaCondominialUrl?: string | null;
  sistemaContabilidadeUrl?: string | null;
  instagramUrl?: string | null;
  facebookUrl?: string | null;
  youtubeUrl?: string | null;
} | null;

export type PaginaInicialQueryResult = {
  _id: string;
  tituloHero?: string | null;
  subtituloHero?: string | null;
  imagemFundo?: SanityImage | null;
  imagemFundoMobile?: SanityImage | null;
  textoCta?: string | null;
  linkCta?: string | null;
  tituloQuemSomos?: string | null;
  textoQuemSomos?: string | null;
  tituloDestaque?: string | null;
  textoDestaque?: string | null;
  diferenciais?: Array<{
    titulo?: string | null;
    descricao?: string | null;
  }> | null;
  tituloOnline?: string | null;
  textoOnline?: string | null;
  textoBotaoOnline?: string | null;
  linkOnline?: string | null;
  tituloFerramentas?: string | null;
  subtituloFerramentas?: string | null;
  tituloCtaFinal?: string | null;
  subtituloCtaFinal?: string | null;
  textoBotaoCtaFinal?: string | null;
  linkBotaoCtaFinal?: string | null;
} | null;

export type PaginaSobreQueryResult = {
  _id: string;
  titulo?: string | null;
  textoIntroducao?: unknown[] | null;
  imagemDestaque?: SanityImage | null;
  missao?: string | null;
  visao?: string | null;
  valores?: string[] | null;
  tituloDiferenciais?: string | null;
  subtituloDiferenciais?: string | null;
  textoDiferenciais?: string | null;
  diferenciais?: Array<{
    titulo?: string | null;
    descricao?: string | null;
  }> | null;
  mostrarEquipe?: boolean | null;
  seo?: Seo | null;
} | null;

export type PaginaServicosQueryResult = {
  _id: string;
  eyebrow?: string | null;
  titulo?: string | null;
  descricao?: string | null;
} | null;

export type PaginaFerramentasQueryResult = {
  _id: string;
  eyebrow?: string | null;
  titulo?: string | null;
  descricao?: string | null;
} | null;

export type PaginaContatoQueryResult = {
  _id: string;
  eyebrow?: string | null;
  titulo?: string | null;
  descricao?: string | null;
  tituloMapa?: string | null;
  textoBotaoMapa?: string | null;
} | null;

export type PaginaCondominiosQueryResult = {
  _id: string;
  titulo?: string | null;
  subtitulo?: string | null;
  imagem?: SanityImage | null;
  introducao?: unknown[] | null;
  servicos?: string[] | null;
  diferenciais?: Array<{
    titulo?: string | null;
    descricao?: string | null;
  }> | null;
  tituloCta?: string | null;
  textoCta?: string | null;
  seo?: Seo | null;
} | null;

export type ServicosQueryResult = Array<{
  _id: string;
  titulo?: string | null;
  slug?: Slug | null;
  area?: string | null;
  icone?: SanityImage | null;
  imagemCard?: SanityImage | null;
  linkPersonalizado?: string | null;
  abrirNovaAba?: boolean | null;
  descricaoCurta?: string | null;
  descricaoLonga?: unknown[] | null;
  ordem?: number | null;
  seo?: Seo | null;
}>;

export type ServicoBySlugQueryResult = {
  _id: string;
  titulo?: string | null;
  slug?: Slug | null;
  area?: string | null;
  icone?: SanityImage | null;
  imagemCard?: SanityImage | null;
  linkPersonalizado?: string | null;
  abrirNovaAba?: boolean | null;
  descricaoCurta?: string | null;
  descricaoLonga?: unknown[] | null;
  ordem?: number | null;
  seo?: Seo | null;
} | null;

export type ServicoSlugsQueryResult = Array<{
  slug: string | null;
}>;

export type FerramentasQueryResult = Array<{
  _id: string;
  titulo?: string | null;
  descricao?: string | null;
  icone?: SanityImage | null;
  imagemCard?: SanityImage | null;
  links?: Array<{
    titulo?: string | null;
    url?: string | null;
  }> | null;
}>;

export type MembrosEquipeQueryResult = Array<{
  _id: string;
  nome?: string | null;
  cargo?: string | null;
  foto?: SanityImage | null;
  bio?: string | null;
  ordem?: number | null;
}>;

export type DepoimentosQueryResult = Array<{
  _id: string;
  nomeCliente?: string | null;
  cargoEmpresa?: string | null;
  foto?: SanityImage | null;
  texto?: string | null;
  nota?: number | null;
  tipoServico?: { nome?: string | null } | null;
}>;

export type DepoimentosDestaqueQueryResult = DepoimentosQueryResult;

export type PoliticaPrivacidadeQueryResult = {
  _id: string;
  titulo?: string | null;
  conteudo?: unknown[] | null;
  seo?: Seo | null;
} | null;

import "@sanity/client";

declare module "@sanity/client" {
  interface SanityQueries {
    '*[_type == "configuracaoSite" && _id == "configuracaoSite"][0]': ConfiguracaoSiteQueryResult;
    '*[_type == "paginaInicial"][0]': PaginaInicialQueryResult;
    '*[_type == "paginaSobre"][0]': PaginaSobreQueryResult;
    '*[_type == "paginaCondominios"][0]': PaginaCondominiosQueryResult;
    '*[_type == "paginaServicos"][0]': PaginaServicosQueryResult;
    '*[_type == "paginaFerramentas"][0]': PaginaFerramentasQueryResult;
    '*[_type == "paginaContato"][0]': PaginaContatoQueryResult;
    '*[_type == "servico"] | order(ordem asc)': ServicosQueryResult;
    '*[_type == "servico" && slug.current == $slug][0]': ServicoBySlugQueryResult;
    '*[_type == "servico"]{ "slug": slug.current }': ServicoSlugsQueryResult;
    '*[_type == "ferramenta"] | order(ordem asc){_id,titulo,descricao,icone,imagemCard,links}': FerramentasQueryResult;
    '*[_type == "membroEquipe"] | order(ordem asc)': MembrosEquipeQueryResult;
    '*[_type == "depoimento"] | order(_createdAt desc){_id,nomeCliente,cargoEmpresa,foto,texto,nota,tipoServico->{nome}}': DepoimentosQueryResult;
    '*[_type == "depoimento" && destaque == true] | order(_createdAt desc)[0...3]{_id,nomeCliente,cargoEmpresa,foto,texto,nota,tipoServico->{nome}}': DepoimentosDestaqueQueryResult;
    '*[_type == "politicaPrivacidade"][0]': PoliticaPrivacidadeQueryResult;
  }
}
