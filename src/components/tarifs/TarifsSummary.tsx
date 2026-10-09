import Link from "next/link";
import { desktopOrder, formatEuro, getPlan, legalNotice, NO_COMMITMENT_SURCHARGE } from "@/data/tarifs";

// Bloc résumé des tarifs pour la page d'accueil, renvoie vers /tarifs.
export function TarifsSummary() {
  return (
    <section id="tarifs" aria-labelledby="tarifs-titre" className="px-5 sm:px-6 py-14 sm:py-20 lg:py-24 max-w-6xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6 sm:mb-10">
        <div>
          <h2 id="tarifs-titre" className="font-serif text-[1.6rem] sm:text-3xl font-bold">
            Tarifs
          </h2>
          <p className="mt-2 text-base sm:text-lg text-ink/75">Trois formules claires, un prix fixe chaque mois.</p>
        </div>
        <Link
          href="/tarifs"
          className="hidden sm:inline-block text-ink font-semibold border-b-2 border-electric pb-0.5 hover:text-electric transition-colors"
        >
          Voir le détail des formules
        </Link>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-3 border-y md:border border-ink/15 divide-y md:divide-y-0 md:divide-x divide-ink/15">
        {desktopOrder.map((id) => {
          const plan = getPlan(id);
          return (
            <li key={id} className={`relative py-5 md:p-6 ${plan.featured ? "md:bg-white" : ""}`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-serif text-xl font-bold text-electric">
                    {plan.name}
                    {plan.featured && (
                      <span className="ml-2 align-middle bg-lime text-ink px-1.5 py-0.5 text-[10px] font-sans font-bold uppercase tracking-wider tag-cut-corner">
                        {plan.featured}
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-ink/75 mt-0.5 md:min-h-[2.5rem]">{plan.audience}</p>
                </div>
                <p className="text-right shrink-0 md:hidden">
                  <span className="font-serif text-2xl font-bold">{formatEuro(plan.monthly)}</span>
                  <span className="block text-xs font-semibold">HT/mois</span>
                </p>
              </div>
              <p className="hidden md:flex items-baseline gap-1.5 mt-4">
                <span className="font-serif text-4xl font-bold">{formatEuro(plan.monthly)}</span>
                <span className="font-semibold text-sm">HT/mois</span>
              </p>
              <p className="text-xs sm:text-sm text-ink/75 mt-2">
                + {formatEuro(plan.setup)} HT de création, une seule fois
              </p>
            </li>
          );
        })}
      </ul>

      <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-xs sm:text-sm text-ink/75">
          {legalNotice} Prix avec engagement de 12 mois, ou sans engagement pour +{NO_COMMITMENT_SURCHARGE}&nbsp;€ HT/mois.
        </p>
        <Link
          href="/tarifs"
          className="sm:hidden block text-center bg-electric text-white px-6 py-3.5 font-semibold tag-cut-corner hover:bg-ink transition-colors"
        >
          Voir le détail des formules
        </Link>
      </div>
    </section>
  );
}
