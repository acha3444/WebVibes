import type { Metadata } from "next";
import { Work_Sans, BioRhyme } from "next/font/google";
import "./globals.css";
import { plans } from "@/data/tarifs";

const basePrice = plans[0].monthly;

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const bioRhyme = BioRhyme({
  subsets: ["latin"],
  weight: ["700", "800"], // BioRhyme has variable weights but we'll import 700/800 for the titles
  variable: "--font-biorhyme",
});

export const metadata: Metadata = {
  title: "Création de site internet pour commerces de bouche & restaurants | WebVibes",
  description: `WebVibes crée votre site internet clé en main dès ${basePrice} €/mois avec engagement 12 mois. Dédié aux commerces de bouche et restaurants. Zéro technique à gérer.`,
  openGraph: {
    title: "Création de site internet pour commerces de bouche & restaurants | WebVibes",
    description: `WebVibes crée votre site internet clé en main dès ${basePrice} €/mois avec engagement 12 mois. Dédié aux commerces de bouche et restaurants.`,
    url: "https://webvibes.fr",
    siteName: "WebVibes",
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://webvibes.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${workSans.variable} ${bioRhyme.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
