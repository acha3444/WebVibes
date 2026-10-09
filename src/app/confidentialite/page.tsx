import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | WebVibes",
  description: "Politique de confidentialité du site WebVibes.",
  robots: "noindex, nofollow",
};

export default function Confidentialite() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-clip bg-cream">
      <Header />
      <article className="max-w-3xl mx-auto px-5 sm:px-6 pt-16 pb-24 sm:pt-24 sm:pb-32 w-full">
        <div className="bg-electric/10 border border-electric/20 p-4 mb-8 rounded-sm">
          <p className="text-electric font-semibold text-sm">⚠️ La rédaction de cette politique de confidentialité est en cours et sera finalisée prochainement.</p>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-electric mb-10 leading-tight">
          Politique de confidentialité
        </h1>
        <div className="space-y-8 text-ink/80 leading-relaxed text-[15px] sm:text-base">
          <section>
            <h2 className="text-xl font-bold text-ink mb-3 font-serif">1. Collecte des données personnelles</h2>
            <p>
              Nous collectons les données que vous nous fournissez volontairement via :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Le formulaire de demande de devis (traité via Zoho CRM).</li>
              <li>Le module de prise de rendez-vous (traité via Zoho Bookings).</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-ink mb-3 font-serif">2. Utilisation et durée de conservation</h2>
            <p>
              Vos informations (nom, téléphone, e-mail, etc.) sont utilisées exclusivement pour répondre à votre demande.
              [À REMPLIR : Indiquer combien de temps vous gardez une demande de devis sans suite (ex: 1 an, 3 ans)].
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-ink mb-3 font-serif">3. Vos droits</h2>
            <p>
              Conformément à la réglementation (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition sur vos données personnelles.
              Pour exercer ce droit, vous pouvez nous contacter à l'adresse suivante : [À REMPLIR : E-mail de contact pour la suppression].
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  );
}
