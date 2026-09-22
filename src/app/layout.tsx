import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { SanityLive } from "@/sanity/lib/live";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const trajanPro = localFont({
  variable: "--font-trajan-pro",
  src: [
    {
      path: "../../public/fonts/trajan-pro/TrajanPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/trajan-pro/TrajanPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.wmaia.adm.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "WMaia Contabilidade | Contabilidade e Assessoria Empresarial",
    template: "%s | WMaia Contabilidade",
  },
  description: "Soluções contábeis e assessoria empresarial.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "WMaia Contabilidade",
    title: "WMaia Contabilidade | Contabilidade e Assessoria Empresarial",
    description: "Soluções contábeis e assessoria empresarial.",
  },
  twitter: {
    card: "summary_large_image",
    title: "WMaia Contabilidade | Contabilidade e Assessoria Empresarial",
    description: "Soluções contábeis e assessoria empresarial.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${trajanPro.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
        <SanityLive />
      </body>
    </html>
  );
}