import { type SchemaTypeDefinition } from "sanity";
import { configuracaoSite } from "./configuracaoSite";
import { paginaInicial } from "./paginaInicial";
import { paginaSobre } from "./paginaSobre";
import { paginaCondominios } from "./paginaCondominios";
import { politicaPrivacidade } from "./politicaPrivacidade";
import { seo } from "./objects/seo";
import { servico } from "./servico";
import { ferramenta } from "./ferramenta";
import { membroEquipe } from "./membroEquipe";
import { depoimento } from "./depoimento";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    configuracaoSite,
    paginaInicial,
    paginaSobre,
    paginaCondominios,
    politicaPrivacidade,
    seo,
    servico,
    ferramenta,
    membroEquipe,
    depoimento,
  ],
};
