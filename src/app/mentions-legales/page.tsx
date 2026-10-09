import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | WebVibes",
  description: "Mentions légales du site WebVibes.",
  robots: "noindex, nofollow",
};

export default function MentionsLegales() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-clip bg-cream">
      <Header />
      <article className="max-w-3xl mx-auto px-5 sm:px-6 pt-16 pb-24 sm:pt-24 sm:pb-32 w-full">
        <div className="bg-electric/10 border border-electric/20 p-4 mb-8 rounded-sm">
          <p className="text-electric font-semibold text-sm">⚠️ La rédaction de ces mentions légales est en cours et sera finalisée prochainement.</p>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-electric mb-10 leading-tight">
          Mentions légales
        </h1>
        <div className="space-y-8 text-ink/80 leading-relaxed text-[15px] sm:text-base">
          <section>
            <h2 className="text-xl font-bold text-ink mb-3 font-serif">1. Éditeur du site</h2>
            <p><strong>Forme juridique :</strong> SASU</p>
            <p><strong>Dénomination sociale :</strong> [À REMPLIR : Dénomination sociale]</p>
            <p><strong>Capital social :</strong> [À REMPLIR : Capital social]</p>
            <p><strong>Siège social :</strong> [À REMPLIR : Adresse]</p>
            <p><strong>Immatriculation :</strong> [À REMPLIR : SIREN et ville du RCS]</p>
            <p><strong>E-mail de contact :</strong> [À REMPLIR : E-mail]</p>
            <p><strong>Téléphone :</strong> [À REMPLIR : Téléphone]</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-ink mb-3 font-serif">2. Directeur de la publication</h2>
            <p><strong>Nom et prénom :</strong> [À REMPLIR : Président de la SASU]</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-ink mb-3 font-serif">3. Hébergement</h2>
            <p><strong>Nom de l'hébergeur :</strong> [À REMPLIR : Nom hébergeur]</p>
            <p><strong>Adresse de l'hébergeur :</strong> [À REMPLIR : Adresse hébergeur]</p>
            <p><strong>Téléphone de l'hébergeur :</strong> [À REMPLIR : Téléphone hébergeur]</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-ink mb-3 font-serif">4. Propriété intellectuelle</h2>
            <p>
              Le site WebVibes et l'ensemble de ses contenus (textes, images, logos, etc.) sont protégés par le droit d'auteur.
              Toute reproduction, totale ou partielle, est interdite sans autorisation préalable.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-ink mb-3 font-serif">5. Tarifs et TVA</h2>
            <p>Régime de TVA : Franchise en base (TVA non applicable, art. 293 B du CGI).</p>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  );
}
