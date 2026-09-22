import type { StructureResolver } from "sanity/structure";

const servicosPadrao = [
  ["servico-contabilidade", "Contabilidade, Fiscal, Societário e Trabalhista"],
  ["servico-condominial", "Administração Condominial"],
  ["servico-planejamento-tributario", "Planejamento Tributário"],
  ["servico-imposto-renda", "Imposto de Renda"],
  ["servico-consultoria", "Consultoria Administrativa e Contábil"],
  ["servico-abertura-empresas", "Abertura e Regularização de Empresas"],
] as const;

const ferramentasPadrao = [
  ["ferramenta-calculo-facil", "Cálculo Fácil"],
  ["ferramenta-conteudo-trabalhista", "Conteúdo Trabalhista"],
  ["ferramenta-conteudo-fiscal", "Conteúdo Fiscal"],
  ["ferramenta-links-uteis", "Links Úteis"],
  ["ferramenta-arquivos-documentos", "Arquivos e Documentos"],
] as const;

export const structure: StructureResolver = (S) =>
  S.list()
    .title("WMaia")
    .items([
      S.listItem()
        .title("Configurações do Site")
        .id("configuracaoSite")
        .child(S.document().schemaType("configuracaoSite").documentId("configuracaoSite")),
      S.listItem()
        .title("Página Inicial")
        .id("paginaInicial")
        .child(S.document().schemaType("paginaInicial").documentId("paginaInicial")),
      S.listItem()
        .title("Quem Somos")
        .id("paginaSobre")
        .child(S.document().schemaType("paginaSobre").documentId("paginaSobre")),
      S.listItem()
        .title("Administração Condominial")
        .id("paginaCondominios")
        .child(S.document().schemaType("paginaCondominios").documentId("paginaCondominios")),
      S.listItem()
        .title("Página Serviços")
        .id("paginaServicos")
        .child(S.document().schemaType("paginaServicos").documentId("paginaServicos")),
      S.listItem()
        .title("Página Ferramentas")
        .id("paginaFerramentas")
        .child(S.document().schemaType("paginaFerramentas").documentId("paginaFerramentas")),
      S.listItem()
        .title("Página Contato")
        .id("paginaContato")
        .child(S.document().schemaType("paginaContato").documentId("paginaContato")),
      S.divider(),
      S.listItem()
        .title("Serviços")
        .child(
          S.list()
            .title("Serviços")
            .items([
              ...servicosPadrao.map(([id, title]) =>
                S.listItem()
                  .title(title)
                  .id(id)
                  .child(S.document().schemaType("servico").documentId(id).title(title))
              ),

            ])
        ),
      S.listItem()
        .title("Ferramentas e Links Úteis")
        .child(
          S.list()
            .title("Ferramentas e Links Úteis")
            .items([
              ...ferramentasPadrao.map(([id, title]) =>
                S.listItem()
                  .title(title)
                  .id(id)
                  .child(S.document().schemaType("ferramenta").documentId(id).title(title))
              ),
              S.divider(),
              S.documentTypeListItem("ferramenta").title("Todas as Ferramentas"),
            ])
        ),
      S.documentTypeListItem("depoimento").title("Depoimentos"),
      S.documentTypeListItem("membroEquipe").title("Equipe"),
      S.divider(),
      S.listItem()
        .title("Política de Privacidade")
        .id("politicaPrivacidade")
        .child(S.document().schemaType("politicaPrivacidade").documentId("politicaPrivacidade")),
    ]);
