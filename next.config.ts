import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/orcamento", destination: "/contato", permanent: true },
      { source: "/projetos", destination: "/servicos", permanent: true },
      { source: "/projetos/:path*", destination: "/servicos", permanent: true },
      { source: "/obras", destination: "/servicos", permanent: true },
      { source: "/obras/:path*", destination: "/servicos", permanent: true },
      { source: "/videos", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
