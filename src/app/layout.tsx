import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FacilitAI",
  description:
    "Avalie sua redação com inteligência artificial e receba feedback instantâneo baseado nos critérios do ENEM. Fotografe sua redação e obtenha uma análise detalhada em segundos.",
  openGraph: {
    title: "FacilitAI - Avaliação de Redações",
    description:
      "Receba feedback imediato sobre sua redação com análise baseada nos critérios do ENEM.",
    url: "https://facilitai.vercel.app/og-image.jpg",
    type: "website",
    images: [
      {
        url: "https://facilitai.vercel.app/favicon.ico",
        width: 1200,
        height: 630,
        alt: "FacilitAI - Inteligência Artificial para correção de redações",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
