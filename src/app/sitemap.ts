import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { servicoSlugsQuery } from "@/sanity/lib/queries";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.wmaia.adm.br";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const servicos = await client.fetch(servicoSlugsQuery);

  const paginasEstaticas: MetadataRoute.Sitemap = [
    "",
    "sobre",
    "servicos",
    "administracao-condominial",
    "ferramentas",
    "depoimentos",
    "contato",
    "politica-de-privacidade",
  ].map((rota) => ({
    url: `${BASE_URL}/${rota}`,
    lastModified: new Date(),
  }));

  const paginasServicos: MetadataRoute.Sitemap = servicos.map(({ slug }) => ({
    url: `${BASE_URL}/servicos/${slug}`,
    lastModified: new Date(),
  }));

  return [...paginasEstaticas, ...paginasServicos];
}
