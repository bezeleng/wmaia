import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("WMaia")
    .items([
      S.listItem()
        .title("Configurações do Site")
        .id("configuracaoSite")
        .child(
          S.document()
            .schemaType("configuracaoSite")
            .documentId("configuracaoSite")
        ),
      S.listItem()
        .title("Página Inicial")
        .id("paginaInicial")
        .child(
          S.document().schemaType("paginaInicial").documentId("paginaInicial")
        ),
      S.listItem()
        .title("Quem Somos")
        .id("paginaSobre")
        .child(
          S.document().schemaType("paginaSobre").documentId("paginaSobre")
        ),
      S.listItem()
        .title("Administração Condominial")
        .id("paginaCondominios")
        .child(
          S.document()
            .schemaType("paginaCondominios")
            .documentId("paginaCondominios")
        ),
      S.divider(),
      S.documentTypeListItem("servico").title("Serviços"),
      S.documentTypeListItem("ferramenta").title("Ferramentas e Links Úteis"),
      S.documentTypeListItem("depoimento").title("Depoimentos"),
      S.documentTypeListItem("membroEquipe").title("Equipe"),
      S.divider(),
      S.listItem()
        .title("Política de Privacidade")
        .id("politicaPrivacidade")
        .child(
          S.document()
            .schemaType("politicaPrivacidade")
            .documentId("politicaPrivacidade")
        ),
    ]);
