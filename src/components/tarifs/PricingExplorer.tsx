"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { BOOKING_URL } from "@/data/site";
import {
  applyTax,
  commitmentLabels,
  legalNotice,
  VAT_RATE,
  desktopOrder,
  firstMonth,
  monthlyPrice,
  NO_COMMITMENT_SURCHARGE,
  type Commitment,
  formatEuro,
  getPlan,
  needs,
  recommendPlan,
  type Plan,
  type PlanId,
} from "@/data/tarifs";
import PlayInView from "@/components/motion/PlayInView";
import { CheckIcon } from "./icons";

type Mode = "monthly" | "first";

// Fait défiler un nombre jusqu'à sa nouvelle valeur
function useCountTo(value: number) {
  const [display, setDisplay] = useState(value);
  const current = useRef(value);

  useEffect(() => {
    const start = current.current;
    if (start === value) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      current.current = value;
      setDisplay(value);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / 550);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = Math.round((start + (value - start) * eased) * 100) / 100; // au centime près
      current.current = v;
      setDisplay(v);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return display;
}

// Sélecteur à deux choix avec un fond qui glisse
function Segmented<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T;
  onChange: (v: T) => void;
  options: readonly { value: T; label: string; short?: string; extra?: string }[];
}) {
  const second = value === options[1].value;
  return (
    <div role="group" aria-label={label} className="relative grid grid-cols-2 bg-ink/[0.06] p-1 text-[13px] sm:text-sm font-semibold w-full sm:w-auto">
      <span
        aria-hidden
        className={`absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] bg-white shadow transition-transform duration-300 ease-out ${
          second ? "translate-x-full" : ""
        }`}
      />
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          aria-pressed={value === o.value}
          onClick={() => onChange(o.value)}
          className={`relative px-1.5 sm:px-6 py-2.5 whitespace-nowrap transition-colors ${
            value === o.value ? "text-ink" : "text-ink/60 hover:text-ink"
          }`}
        >
          {o.short ? (
            <>
              <span className="sm:hidden">{o.short}</span>
              <span className="hidden sm:inline">{o.label}</span>
            </>
          ) : (
            o.label
          )}
          {o.extra && <span className="ml-1 sm:ml-1.5 text-xs font-bold text-electric">{o.extra}</span>}
        </button>
      ))}
    </div>
  );
}

// Interrupteur HT / TTC : la pastille glisse de gauche à droite.
// Les mots HT et TTC sont cliquables à la souris ; au clavier, l'interrupteur suffit.
function TaxSwitch({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex items-center justify-center gap-2.5 py-1 text-sm font-bold">
      <span aria-hidden onClick={() => onChange(false)} className={`cursor-pointer transition-colors ${checked ? "text-ink/45" : "text-ink"}`}>
        HT
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={`Afficher les prix TTC (TVA ${Math.round(VAT_RATE * 100)} % incluse)`}
        onClick={() => onChange(!checked)}
        className={`relative w-12 h-7 rounded-full transition-colors duration-300 ${checked ? "bg-electric" : "bg-ink/25"}`}
      >
        <span
          aria-hidden
          className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ease-out ${
            checked ? "translate-x-5" : ""
          }`}
        />
      </button>
      <span aria-hidden onClick={() => onChange(true)} className={`cursor-pointer transition-colors ${checked ? "text-ink" : "text-ink/45"}`}>
        TTC
      </span>
    </div>
  );
}

function PlanCard({
  plan,
  mode,
  commitment,
  ttc,
  emphasized,
  badge,
  index,
}: {
  plan: Plan;
  mode: Mode;
  commitment: Commitment;
  ttc: boolean;
  emphasized: boolean;
  badge: string | null;
  index: number;
}) {
  const tax = ttc ? "TTC" : "HT";
  const monthly = applyTax(monthlyPrice(plan, commitment), ttc);
  const setup = applyTax(plan.setup, ttc);
  const first = applyTax(firstMonth(plan, commitment), ttc);
  const amount = mode === "monthly" ? monthly : first;
  const shown = useCountTo(amount);
  const titleId = `formule-${plan.id}`;

  return (
    // Le wrapper porte l'apparition, la carte porte la mise en avant (pas de conflit d'animation)
    <div
      data-plan={plan.id}
      className="wv-once wv-fade-up shrink-0 w-[86%] snap-center lg:w-auto"
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <article
        aria-labelledby={titleId}
        className={`relative h-full flex flex-col bg-white p-5 sm:p-7 tag-cut-corner border-2 transition-all duration-500 ease-out ${
          emphasized ? "border-electric shadow-xl lg:-translate-y-2" : "border-ink/10"
        }`}
      >
        <div className="h-6 mb-2 sm:mb-3">
          {badge && (
            <span
              key={badge}
              className="wv-badge-pop inline-block bg-lime text-ink px-2.5 py-1 text-xs font-bold uppercase tracking-wider tag-cut-corner"
            >
              {badge}
            </span>
          )}
        </div>

        <h3 id={titleId} className="font-serif text-2xl font-bold text-electric">
          {plan.name}
        </h3>
        <p className="mt-1 text-ink/75 lg:min-h-[3rem]">{plan.audience}</p>

        <p className="mt-4 sm:mt-5 flex items-baseline gap-1.5">
          <span aria-hidden className="font-serif text-[2.4rem] sm:text-[2.75rem] leading-none font-bold tabular-nums">
            {formatEuro(shown)}
          </span>
          <span aria-hidden className="font-semibold">
            {mode === "monthly" ? `${tax}/mois` : tax}
          </span>
          <span className="sr-only">
            {mode === "monthly"
              ? `${formatEuro(monthly)} ${tax} par mois`
              : `${formatEuro(first)} ${tax} le premier mois`}
            {`, ${commitmentLabels[commitment].note}`}
          </span>
        </p>
        <p key={mode + commitment + tax} aria-hidden className="wv-fade-in mt-2 text-sm text-ink/75 leading-snug min-h-[3.5rem]">
          {mode === "monthly" ? (
            <>+ {formatEuro(setup)} {tax} de création et mise en ligne, une seule fois</>
          ) : (
            <>
              {formatEuro(setup)} de création + {formatEuro(monthly)} d&apos;abonnement.
              <br />
              Ensuite : <strong className="text-ink">{formatEuro(monthly)} {tax}/mois</strong>
            </>
          )}
          <span className="mt-1 flex items-center gap-1.5 font-semibold text-ink">
            <span className={`w-2 h-2 rounded-full ${commitment === "free" ? "bg-lime ring-1 ring-ink/40" : "bg-electric"}`} />
            {commitmentLabels[commitment].note}
          </span>
        </p>

        <ul className="flex-1 mt-4 pt-4 sm:mt-6 sm:pt-6 border-t border-ink/10 space-y-2.5 text-[15px] leading-snug">
          {plan.highlights.map((point) => (
            <li key={point} className="flex gap-2.5">
              <CheckIcon className="mt-0.5 w-4 h-4 shrink-0 text-electric" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-5 sm:mt-7 block text-center px-5 py-3.5 font-semibold tag-cut-corner transition-colors duration-300 ${
            emphasized
              ? "bg-electric text-white hover:bg-ink"
              : "border-2 border-electric text-electric hover:bg-electric hover:text-white"
          }`}
        >
          {plan.cta}
          <span className="sr-only"> (prise de rendez-vous, nouvel onglet)</span>
        </a>
      </article>
    </div>
  );
}

export function PricingExplorer() {
  const [mode, setMode] = useState<Mode>("monthly");
  const [commitment, setCommitment] = useState<Commitment>("engaged");
  const [ttc, setTtc] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const recommended = recommendPlan(selected);
  const emphasizedId: PlanId = recommended ?? "standard";

  // Carrousel mobile : une carte à la fois, onglets synchronisés avec le défilement
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<PlanId>("standard");

  const scrollToPlan = useCallback((id: PlanId, smooth = true) => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>(`[data-plan="${id}"]`);
    if (!track || !card || track.scrollWidth <= track.clientWidth) return; // ordinateur : pas de carrousel
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({
      left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2,
      behavior: smooth && !reduce ? "smooth" : "auto",
    });
  }, []);

  // Au chargement, la formule mise en avant est centrée
  useEffect(() => scrollToPlan("standard", false), [scrollToPlan]);
  // Quand une formule est conseillée, on la fait venir à l'écran
  useEffect(() => {
    if (recommended) scrollToPlan(recommended);
  }, [recommended, scrollToPlan]);

  const onTrackScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let best: PlanId = active;
    let bestDist = Infinity;
    track.querySelectorAll<HTMLElement>("[data-plan]").forEach((el) => {
      const d = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center);
      if (d < bestDist) {
        bestDist = d;
        best = el.dataset.plan as PlanId;
      }
    });
    if (best !== active) setActive(best);
  };

  const toggleNeed = (id: string) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((n) => n !== id) : [...prev, id]));

  return (
    <div>
      {/* Ce qui compte pour vous */}
      <fieldset className="min-w-0 max-w-4xl mx-auto text-center">
        <legend className="mx-auto text-sm font-bold uppercase tracking-[0.12em] text-ink/70 mb-3">
          Ce qui compte pour vous
        </legend>
        <div className="wv-snap -mx-5 px-5 sm:mx-0 sm:px-0 flex sm:flex-wrap sm:justify-center gap-2 overflow-x-auto sm:overflow-visible">
          {needs.map((need) => {
            const on = selected.includes(need.id);
            return (
              <button
                key={need.id}
                type="button"
                aria-pressed={on}
                onClick={() => toggleNeed(need.id)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium whitespace-nowrap border transition-colors duration-300 ${
                  on ? "bg-electric border-electric text-white" : "bg-white border-ink/15 hover:border-electric"
                }`}
              >
                <span
                  aria-hidden
                  className={`grid place-items-center w-4 h-4 transition-all duration-300 ${
                    on ? "bg-lime text-ink scale-100" : "border border-ink/25 scale-90"
                  }`}
                >
                  {on && <CheckIcon className="w-3 h-3" />}
                </span>
                {need.label}
              </button>
            );
          })}
        </div>
        <p aria-live="polite" className="mt-3 sm:mt-4 min-h-[1.5rem] text-sm sm:text-[15px] text-ink/80">
          {recommended ? (
            <span key={recommended} className="wv-fade-in inline-block">
              La formule <strong className="text-electric">{getPlan(recommended).name}</strong> couvre tout ce que vous avez coché.
            </span>
          ) : (
            "Cochez vos besoins : la formule qui suffit s'affiche."
          )}
        </p>
      </fieldset>

      {/* Engagement + Chaque mois / Premier mois */}
      <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 sm:gap-4">
        <Segmented
          label="Durée d'engagement"
          value={commitment}
          onChange={setCommitment}
          options={[
            { value: "engaged", label: commitmentLabels.engaged.toggle, short: commitmentLabels.engaged.short },
            {
              value: "free",
              label: commitmentLabels.free.toggle,
              short: commitmentLabels.free.short,
              extra: `+${formatEuro(applyTax(NO_COMMITMENT_SURCHARGE, ttc))}`,
            },
          ]}
        />
        <Segmented
          label="Affichage des prix"
          value={mode}
          onChange={setMode}
          options={[
            { value: "monthly", label: "Prix par mois" },
            { value: "first", label: "Premier mois" },
          ]}
        />
        <TaxSwitch checked={ttc} onChange={setTtc} />
      </div>

      {/* Onglets (mobile) : aperçu des 3 prix, touchez pour afficher la carte */}
      <div role="group" aria-label="Choisir une formule" className="lg:hidden mt-5 grid grid-cols-3 gap-1.5">
        {desktopOrder.map((id) => {
          const plan = getPlan(id);
          const on = active === id;
          return (
            <button
              key={id}
              type="button"
              aria-pressed={on}
              onClick={() => scrollToPlan(id)}
              className={`py-2 px-1 border-2 text-center transition-colors duration-300 ${
                on ? "border-electric bg-electric text-white" : "border-ink/10 bg-white text-ink"
              }`}
            >
              <span className="block text-[13px] font-bold leading-tight">{plan.name}</span>
              <span className={`block text-xs tabular-nums ${on ? "text-white/85" : "text-ink/65"}`}>
                {formatEuro(applyTax(mode === "monthly" ? monthlyPrice(plan, commitment) : firstMonth(plan, commitment), ttc))}
              </span>
            </button>
          );
        })}
      </div>

      {/* Cartes : carrousel sur mobile, grille sur ordinateur */}
      <PlayInView once decorative={false} className="mt-4 sm:mt-6 lg:mt-10">
        <div
          ref={trackRef}
          onScroll={onTrackScroll}
          className="wv-snap -mx-5 px-5 flex gap-3 overflow-x-auto snap-x snap-mandatory lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:items-stretch lg:overflow-visible"
        >
          {desktopOrder.map((id, i) => {
            const plan = getPlan(id);
            const isRecommended = recommended === id;
            const badge = isRecommended ? "Conseillé pour vous" : !recommended && plan.featured ? plan.featured : null;
            return (
              <PlanCard
                key={id}
                plan={plan}
                mode={mode}
                commitment={commitment}
                ttc={ttc}
                index={i}
                emphasized={emphasizedId === id}
                badge={badge}
              />
            );
          })}
        </div>
      </PlayInView>

      <p aria-live="polite" className="mt-4 lg:mt-10 text-sm text-ink/75 text-center">
        {ttc
          ? `Prix TTC, TVA ${Math.round(VAT_RATE * 100)} % incluse. Tarifs réservés aux professionnels.`
          : legalNotice}
      </p>
    </div>
  );
}
