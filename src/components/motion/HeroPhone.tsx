import type { CSSProperties } from "react";
import PlayInView from "./PlayInView";

// Accroche : ce que vit le client du commerçant, de la recherche à l'appel.
// Animations dans globals.css (préfixe wv-h-).

const steps = [
  { n: "01", title: "Il vous trouve", text: "Votre site sort quand on cherche un commerce près de chez soi.", anim: "wv-h-step1" },
  { n: "02", title: "Il voit que c'est ouvert", text: "Horaires justes, carte du jour, commandes : tout est à jour.", anim: "wv-h-step2" },
  { n: "03", title: "Il vient ou il appelle", text: "Un bouton pour appeler, un pour l'itinéraire.", anim: "wv-h-step3" },
];

const hours = [
  { day: "Lundi", time: "Fermé" },
  { day: "Mar. – Ven.", time: "7h – 19h30" },
  { day: "Samedi", time: "7h – 19h30", today: true },
  { day: "Dimanche", time: "7h – 12h30" },
];

export default function HeroPhone() {
  return (
    <PlayInView
      decorative={false}
      className="relative flex flex-row items-center lg:items-stretch gap-5 sm:gap-10"
    >
      <div style={{ "--wv-loop": "14s" } as CSSProperties} className="contents">
        {/* Téléphone */}
        {/* Sur mobile le téléphone est réduit (scale) pour tenir à côté des légendes */}
        <div className="relative shrink-0 w-[161px] h-[322px] min-[380px]:w-[170px] min-[380px]:h-[340px] sm:w-[230px] sm:h-[460px]" aria-hidden>
          <div className="absolute -right-3 -bottom-3 sm:-right-4 sm:-bottom-4 w-16 h-16 sm:w-24 sm:h-24 bg-lime tag-cut-corner" />
          <div className="absolute top-0 left-0 w-[230px] h-[460px] origin-top-left scale-[0.7] min-[380px]:scale-[0.74] sm:scale-100 rounded-[30px] bg-ink p-[6px] shadow-2xl">
            <div className="relative h-full rounded-[24px] overflow-hidden bg-white text-ink">
              <span className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-[18px] rounded-full bg-ink z-30" />

              {/* Écran 1 : recherche */}
              <div className="absolute inset-0 pt-10 px-3">
                <div className="h-8 rounded-full border border-ink/15 flex items-center gap-2 px-3 text-[11px]">
                  <svg viewBox="0 0 16 16" className="w-3 h-3 shrink-0 text-ink/40" aria-hidden>
                    <circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M11 11l3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                  <span className="wv-anim wv-h-type whitespace-nowrap">boucherie près de chez moi</span>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="wv-anim wv-rise-20 border border-ink/10 p-2.5 tag-cut-corner">
                    <p className="text-[9px] text-ink/45">boucherie-martin.fr</p>
                    <p className="text-[12px] font-semibold text-electric leading-snug">Boucherie Martin · Viandes & volailles</p>
                    <p className="text-[10px] mt-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4caf50]" />
                      Ouvert · ferme à 19h30
                    </p>
                  </div>
                  <div className="wv-anim wv-rise-25 p-2.5 opacity-60">
                    <p className="text-[9px] text-ink/45">facebook.com › boucheriedumarche</p>
                    <p className="text-[12px] font-semibold text-ink/70 leading-snug">Boucherie du Marché</p>
                    <p className="text-[10px] mt-1 text-ink/50">Dernière publication : mars 2022</p>
                  </div>
                  <div className="wv-anim wv-rise-30 px-2.5 space-y-1.5">
                    <div className="h-2 bg-ink/10 w-1/3" />
                    <div className="h-2.5 bg-ink/10 w-4/5" />
                    <div className="h-2 bg-ink/10 w-2/3" />
                  </div>
                </div>
              </div>

              {/* Écran 2 : le site du commerçant */}
              <div className="wv-anim wv-h-site absolute inset-0 bg-cream pt-9 px-3 flex flex-col z-10">
                <p className="text-[9px] text-ink/40 text-center mb-3">boucherie-martin.fr</p>

                <div className="wv-anim wv-rise-42">
                  <p className="font-serif text-[17px] font-bold leading-tight">Boucherie Martin</p>
                  <p className="text-[10px] text-ink/55 mt-0.5">Viandes, volailles, traiteur · Rue des Halles</p>
                  <span className="inline-flex items-center gap-1.5 mt-2.5 bg-lime text-ink text-[9px] font-bold uppercase tracking-wide px-2 py-1 tag-cut-corner">
                    <span className="w-1.5 h-1.5 rounded-full bg-ink" />
                    Ouvert maintenant
                  </span>
                </div>

                <div className="wv-anim wv-rise-46 mt-4 bg-white border border-ink/10 p-2.5">
                  <p className="text-[9px] uppercase tracking-[0.12em] font-semibold text-ink/45 mb-1.5">Horaires</p>
                  {hours.map((h) => (
                    <p
                      key={h.day}
                      className={`flex justify-between gap-2 text-[10px] py-[3px] px-1 -mx-1 ${h.today ? "bg-electric/[0.07] text-electric font-semibold" : ""}`}
                    >
                      <span>{h.day}</span>
                      <span>{h.time}</span>
                    </p>
                  ))}
                </div>

                <p className="wv-anim wv-rise-50 mt-3 text-[11px] font-semibold text-electric border-b border-electric/40 self-start pb-px">
                  Commander pour samedi →
                </p>

                <div className="wv-anim wv-rise-54 mt-auto mb-4 grid grid-cols-2 gap-2">
                  <span className="wv-anim wv-h-press bg-electric text-white text-[11px] font-semibold text-center py-2 tag-cut-corner">
                    Appeler
                  </span>
                  <span className="border border-ink/20 text-[11px] font-semibold text-center py-2">Itinéraire</span>
                </div>
              </div>

              <span className="wv-anim wv-h-tap wv-transient absolute w-8 h-8 rounded-full border-2 border-electric bg-electric/15 z-20 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Légendes synchronisées */}
        <ol className="flex flex-col justify-center gap-5 sm:gap-8 flex-1 min-w-0 lg:flex-none lg:w-48">
          {steps.map((s) => (
            <li key={s.n} className={`wv-anim ${s.anim} relative pt-3`}>
              <span className="absolute top-0 left-0 right-0 h-0.5 bg-ink/10" />
              <span className={`wv-anim ${s.anim}-bar absolute top-0 left-0 right-0 h-0.5 bg-electric origin-left`} />
              <span className="font-serif text-sm font-bold text-electric">{s.n}</span>
              <p className="font-bold text-[15px] sm:text-base leading-snug mt-0.5">{s.title}</p>
              <p className="hidden sm:block text-sm text-ink/60 leading-snug mt-1">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </PlayInView>
  );
}
