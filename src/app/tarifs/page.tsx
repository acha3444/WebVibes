import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PricingExplorer } from "@/components/tarifs/PricingExplorer";
import { Disclosure } from "@/components/tarifs/Disclosure";
import PlayInView from "@/components/motion/PlayInView";
import { ComparisonTable } from "@/components/tarifs/ComparisonTable";
import { CheckIcon } from "@/components/tarifs/icons";
import { BOOKING_URL, SITE_URL } from "@/data/site";
import {
  monthlyPrice,
  faq,
  includedEverywhere,
  legalNotice,
  plans,
  TODO,
} from "@/data/tarifs";

const description =
  "Trois formules pour votre site internet, dès 89 € HT/mois. Création, hébergement, nom de domaine et maintenance inclus. Vous ne gérez rien. Réservé aux professionnels.";

export const metadata: Metadata = {
  title: "Tarifs site internet commerce et artisan, dès 89 € HT/mois | WebVibes",
  description,
  alternates: { canonical: `${SITE_URL}/tarifs` },
  openGraph: {
    title: "Tarifs WebVibes : un site pour votre activité, dès 89 € HT/mois",
    description,
    url: `${SITE_URL}/tarifs`,
    siteName: "WebVibes",
    locale: "fr_FR",
    type: "website",
  },
};

// Données structurées : un service proposé en trois offres, prix hors taxes
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Création et gestion de site internet pour professionnels",
  serviceType: "Création, hébergement et maintenance de site vitrine",
  url: `${SITE_URL}/tarifs`,
  provider: { "@type": "Organization", name: "WebVibes", url: SITE_URL },
  areaServed: { "@type": "Country", name: "France" },
  audience: { "@type": "BusinessAudience", audienceType: "Restaurants et professionnels de la restauration" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Formules WebVibes",
    itemListElement: plans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      description: `${plan.audience} ${plan.points.join(". ")}.`,
      url: `${SITE_URL}/tarifs`,
      priceCurrency: "EUR",
      priceSpecification: [
        {
          "@type": "UnitPriceSpecification",
          name: "Abonnement mensuel, engagement 12 mois",
          price: monthlyPrice(plan, "engaged"),
          priceCurrency: "EUR",
          valueAddedTaxIncluded: false,
          referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
        },
        {
          "@type": "UnitPriceSpecification",
          name: "Abonnement mensuel sans engagement",
          price: monthlyPrice(plan, "free"),
          priceCurrency: "EUR",
          valueAddedTaxIncluded: false,
          referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
        },
        {
          "@type": "PriceSpecification",
          name: "Création et mise en ligne (une seule fois)",
          price: plan.setup,
          priceCurrency: "EUR",
          valueAddedTaxIncluded: false,
        },
      ],
    })),
  },
};

const section = "px-5 sm:px-6 py-10 sm:py-20 lg:py-24";
const h2 = "font-serif text-[1.6rem] sm:text-3xl font-bold leading-tight";

// Affiche le marqueur [À COMPLÉTER] de façon bien visible
function Answer({ text }: { text: string }) {
  if (!text.startsWith(TODO)) return <p>{text}</p>;
  return (
    <p>
      <mark className="bg-lime text-ink font-bold px-1">{TODO}</mark>
      {text.slice(TODO.length)}
    </p>
  );
}

export default function TarifsPage() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />

      {/* 1. Titre */}
      <section className="px-5 sm:px-6 pt-6 pb-6 sm:pt-16 sm:pb-12 lg:pt-20 max-w-4xl mx-auto w-full text-center">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-ink/70 mb-3">Tarifs</p>
        <h1 className="font-serif text-[1.85rem] sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.15] text-electric">
          <span className="wv-intro-line"><span>Plus de clients.</span></span>
          <span className="wv-intro-line text-ink"><span className="[animation-delay:.15s]">Zéro technique à gérer.</span></span>
        </h1>
        <p className="wv-intro-fade mt-5 sm:mt-6 text-base sm:text-xl text-ink/80 leading-relaxed max-w-2xl mx-auto">
          Un prix fixe chaque mois. Je crée le site de votre activité, je le mets en ligne et je m&apos;en occupe.
        </p>
      </section>

      {/* 2. Formules (besoins, prix animés, cartes) + 3. Inclus partout */}
      <section aria-labelledby="formules-titre" className="px-5 sm:px-6 pb-10 sm:pb-20 max-w-6xl mx-auto w-full">
        <h2 id="formules-titre" className="sr-only">
          Les trois formules
        </h2>
        <PricingExplorer />

        <p className="mt-4 lg:mt-10 text-sm text-ink/75 text-center">{legalNotice}</p>

        <PlayInView once decorative={false} className="mt-6 sm:mt-10 border-y border-ink/10 py-5 sm:py-7">
          <h2 className="text-center text-sm font-bold uppercase tracking-[0.12em] text-ink/70">Toujours inclus</h2>
          <ul className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {includedEverywhere.map((item, i) => (
              <li
                key={item}
                className="wv-once wv-fade-up flex items-center gap-2 font-medium text-[15px]"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <span aria-hidden className="grid place-items-center w-5 h-5 bg-lime">
                  <CheckIcon className="w-3 h-3 text-ink" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </PlayInView>

        {/* 4. Comparatif, replié par défaut */}
        <div className="mt-7 sm:mt-12">
          <Disclosure variant="button" label="Comparer les formules en détail">
            <div className="max-w-4xl mx-auto pt-8 sm:pt-10">
              <h2 className="sr-only">Comparatif détaillé</h2>
              <ComparisonTable />
            </div>
          </Disclosure>
        </div>
      </section>

      {/* 5. FAQ */}
      <section aria-labelledby="faq-titre" className="px-5 sm:px-6 py-10 sm:py-20 bg-white/50 border-y border-ink/5">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq-titre" className="font-serif text-[1.6rem] sm:text-3xl font-bold leading-tight mb-4 sm:mb-6">
            Vos questions
          </h2>
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {faq.map((item) => (
              <Disclosure key={item.question} label={item.question.replace(/ \?$/, "\u00a0?")}>
                <div className="pb-5 pr-10 space-y-3 text-[15px] sm:text-base text-ink/80 leading-relaxed">
                  {item.answer.map((text) => (
                    <Answer key={text} text={text} />
                  ))}
                </div>
              </Disclosure>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Appel à l'action */}
      <section aria-labelledby="rdv-titre" className="px-5 sm:px-6 py-10 sm:py-20 bg-electric text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="rdv-titre" className="font-serif text-[1.75rem] sm:text-4xl font-bold leading-tight">
            Pas sûr de la formule&nbsp;?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/85 leading-relaxed">
            Parlons-en 20 minutes, par téléphone ou dans vos locaux. Vous choisissez ensuite, sans pression.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block sm:inline-block bg-white text-electric px-8 sm:px-10 py-4 font-bold text-base sm:text-lg tag-cut-corner hover:bg-lime hover:text-ink transition-colors"
          >
            Choisir un créneau
            <span className="sr-only"> (nouvel onglet)</span>
          </a>
          <p className="mt-5 text-sm text-white/85">
            Vous préférez écrire&nbsp;?{" "}
            <Link href="/#devis" className="font-semibold text-white underline underline-offset-4">
              Demander un devis
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
