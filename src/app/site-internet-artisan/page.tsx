import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Création Site Internet Artisan Bâtiment & Clim | WebVibes",
  description: "Artisan dans l'Hérault ? Obtenez un site internet pro qui génère des chantiers. Formule tout compris dès 89€/mois avec engagement 12 mois, livré sous 5 jours ouvrés.",
  alternates: {
    canonical: "https://webvibes.fr/site-internet-artisan",
  }
};

export default function SiteArtisanPage() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-clip bg-cream">
      <Header />

      <article className="max-w-4xl mx-auto px-5 sm:px-6 pt-16 pb-24 sm:pt-24 sm:pb-32 w-full">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-electric mb-10 leading-tight">
          Création de site internet pour les Artisans du Bâtiment
        </h1>

        <div className="space-y-12 text-lg text-ink/80 leading-relaxed">
          
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-4 font-serif">
              Vous êtes sur les chantiers, pas derrière un écran.
            </h2>
            <p className="mb-4">
              Vous passez vos journées à poser des clims, tirer des câbles ou refaire des salles de bain. Le soir, vous faites vos devis. Vous n'avez clairement pas le temps de bidouiller un site internet. 
            </p>
            <p>
              Pourtant, quand un particulier cherche un artisan qualifié en urgence sur Google, il doit vous trouver <strong>vous</strong>. Pas votre concurrent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-4 font-serif">
              Le site qui rapporte des chantiers, pour 89€/mois.
            </h2>
            <p className="mb-4">
              Oubliez les agences qui vous demandent 3000€ d'un coup. Avec WebVibes, vous obtenez un site internet professionnel, conçu spécialement pour l'artisanat :
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-ink">
              <li><strong>Vos garanties en avant</strong> : Affichage de vos certifications (RGE, décennale).</li>
              <li><strong>Vos réalisations</strong> : Une galerie photo claire de vos chantiers "avant/après".</li>
              <li><strong>Contact express</strong> : Un bouton d'appel d'urgence ultra-visible sur téléphone.</li>
              <li><strong>Zéro tracas</strong> : Je gère toute la technique, les mises à jour et la sécurité.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-4 font-serif">
              Votre vitrine en ligne, prête sous 5 jours ouvrés.
            </h2>
            <p>
              Ne perdez plus de temps. Vous m'envoyez quelques photos de vos réalisations et vos coordonnées. Sous 5 jours ouvrés, votre site est en ligne, rapide comme l'éclair, et optimisé pour le référencement local dans l'Hérault.
            </p>
          </section>

          <div className="pt-8">
            <a href="/#devis" className="inline-block bg-electric text-white px-8 py-4 text-lg font-semibold tag-cut-corner hover:bg-electric/90 transition-colors">
              Faire le point sur mon projet (Gratuit)
            </a>
          </div>

        </div>
      </article>

      <Footer />
    </main>
  );
}
