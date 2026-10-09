import type { CSSProperties } from "react";

// Mini-sites animés (motion design) pour la section Démos.
// Les animations sont définies dans globals.css (préfixe wv-).

function loop(duration: string) {
  return { "--wv-loop": duration } as CSSProperties;
}

function BrowserFrame({
  url,
  duration,
  screenClassName,
  children,
}: {
  url: string;
  duration: string;
  screenClassName: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="absolute inset-x-4 top-11 -bottom-3 bg-white rounded-t-lg shadow-xl border border-ink/10 overflow-hidden transition-transform duration-500 group-hover:-translate-y-1.5"
      style={loop(duration)}
    >
      <div className="h-5 flex items-center gap-1 px-2 border-b border-ink/10 bg-ink/[0.03]">
        <span className="w-1.5 h-1.5 rounded-full bg-ink/15" />
        <span className="w-1.5 h-1.5 rounded-full bg-ink/15" />
        <span className="w-1.5 h-1.5 rounded-full bg-ink/15" />
        <span className="ml-2 flex-1 max-w-[60%] h-3 rounded-full bg-ink/[0.06] text-[6.5px] text-ink/45 flex items-center px-2">
          {url}
        </span>
      </div>
      <div className={`relative h-[calc(100%-1.25rem)] overflow-hidden ${screenClassName}`}>{children}</div>
    </div>
  );
}

function Cursor({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 12 16" className={`absolute w-2.5 h-3.5 drop-shadow ${className}`} aria-hidden>
      <path d="M1 1l9.5 9.2-4.3.3 2.6 4.6-1.6.8-2.6-4.6L1 14z" fill="#1C1B1A" stroke="white" strokeWidth="0.9" />
    </svg>
  );
}

/* ---------------- BOUCHERIE & RÔTISSERIE ---------------- */

const meats = [
  {
    name: "Côte de bœuf",
    price: "34 €/kg",
    bg: "repeating-linear-gradient(120deg, rgba(255,255,255,.22) 0 1.5px, transparent 1.5px 8px), linear-gradient(135deg, #9f1239, #be123c 55%, #7f1d1d)",
    anim: "wv-rise-20",
  },
  {
    name: "Merguez maison",
    price: "16 €/kg",
    bg: "radial-gradient(ellipse at 50% 35%, rgba(255,255,255,.25), transparent 60%), repeating-linear-gradient(90deg, #b45309 0 11px, #7c2d12 11px 13px)",
    anim: "wv-rise-25",
  },
  {
    name: "Poulet fermier",
    price: "12 € pièce",
    bg: "radial-gradient(ellipse at 50% 62%, #f59e0b 0 32%, #b45309 58%, transparent 60%), #fde7c8",
    anim: "wv-rise-30",
  },
];

const holidayOrder = [
  { label: "Produit", value: "Chapon farci aux marrons", anim: "wv-type-53" },
  { label: "Retrait", value: "Mar. 24 déc. · 10h", anim: "wv-type-58" },
  { label: "Nom", value: "Mme Durand", anim: "wv-type-63" },
];

export function BoucherieDemo() {
  return (
    <BrowserFrame url="maison-roux.fr" duration="10s" screenClassName="bg-[#fbf3e8] text-ink">
      <div className="wv-anim wv-rise-05 flex items-center justify-between px-3 h-6 border-b border-[#7f1d1d]/10">
        <span className="font-serif text-[9px] font-bold text-[#7f1d1d]">Maison Roux</span>
        <div className="flex items-center gap-2">
          <span className="w-4 h-[3px] bg-ink/15 rounded-full" />
          <span className="w-4 h-[3px] bg-ink/15 rounded-full" />
          <span className="bg-[#7f1d1d] text-white text-[6.5px] font-semibold px-1.5 py-0.5 rounded-sm">Commander</span>
        </div>
      </div>

      <div className="px-3 pt-2.5 flex items-start justify-between gap-2">
        <div className="wv-anim wv-rise-10">
          <p className="text-[6.5px] uppercase tracking-[0.15em] text-[#7f1d1d]/70 font-semibold">Boucher · Rôtisseur depuis 1987</p>
          <p className="font-serif text-[12px] leading-[1.2] font-bold mt-1">
            La viande du quartier,
            <br />
            coupée devant vous.
          </p>
        </div>
        <div className="wv-anim wv-pop-18 shrink-0 flex items-center gap-1.5 bg-white border border-[#7f1d1d]/15 rounded-full pl-1 pr-2 py-1 shadow-sm">
          <span className="relative w-5 h-5 rounded-full bg-[#fde7c8] flex items-center justify-center overflow-hidden">
            <span className="wv-spin absolute w-3.5 h-2.5 rounded-full bg-[radial-gradient(ellipse_at_40%_35%,#fbbf24,#c2410c_70%)]" />
            <span className="absolute inset-x-0 top-1/2 h-px bg-ink/40" />
          </span>
          <span className="text-[6.5px] leading-tight font-semibold">
            Poulets rôtis
            <br />
            <span className="text-[#7f1d1d]">prêts à 12h</span>
          </span>
        </div>
      </div>

      <div className="px-3 pt-3 grid grid-cols-3 gap-2">
        {meats.map((m) => (
          <div key={m.name} className={`wv-anim ${m.anim} bg-white rounded-sm p-1 shadow-sm`}>
            <div className="h-9 rounded-[2px]" style={{ background: m.bg }} />
            <p className="text-[7px] font-semibold mt-1 leading-tight">{m.name}</p>
            <p className="text-[6.5px] text-[#7f1d1d] font-bold">{m.price}</p>
          </div>
        ))}
      </div>

      {/* Commande des fêtes */}
      <div className="wv-anim wv-b-panel wv-transient absolute right-2 top-8 bottom-4 w-[50%] bg-white shadow-xl border border-ink/10 rounded-sm p-2 flex flex-col">
        <p className="font-serif text-[8.5px] font-bold text-[#7f1d1d]">Commande des fêtes</p>
        <p className="text-[6px] text-ink/50 mb-1.5">Retrait en boutique, sans attente</p>
        {holidayOrder.map((f) => (
          <div key={f.label} className="mb-1.5">
            <p className="text-[5.5px] uppercase tracking-wide text-ink/45 font-semibold">{f.label}</p>
            <div className="h-3.5 border border-ink/15 rounded-[2px] px-1 flex items-center overflow-hidden">
              <span className={`wv-anim ${f.anim} text-[6.5px] font-medium whitespace-nowrap`}>{f.value}</span>
            </div>
          </div>
        ))}
        <div className="wv-anim wv-b-press mt-auto bg-[#7f1d1d] text-white text-[7px] font-semibold text-center py-1 rounded-[2px]">
          Valider la commande
        </div>
        <Cursor className="wv-anim wv-b-cursor" />
      </div>

      <div className="wv-transient absolute inset-x-0 bottom-5 flex justify-center pointer-events-none">
        <div className="wv-anim wv-pop-72 bg-ink text-white text-[7px] font-medium px-2.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-lime text-ink text-[6px] font-bold flex items-center justify-center">✓</span>
          Commande reçue · retrait le 24/12 à 10h
        </div>
      </div>
    </BrowserFrame>
  );
}

/* ---------------- PRIMEUR ---------------- */

const arrivals = [
  { name: "Potimarron", origin: "Ferme Morel · 12 km", price: "2,90 €", color: "radial-gradient(circle at 35% 30%, #fdba74, #e8742c 60%, #c2410c)", anim: "wv-drop-12" },
  { name: "Pommes Reinette", origin: "Verger Dumas · 25 km", price: "3,40 €", color: "radial-gradient(circle at 35% 30%, #fef08a, #c9b23a 60%, #a16207)", anim: "wv-drop-18" },
  { name: "Cèpes", origin: "Forêt de Tronçais", price: "24 €", color: "radial-gradient(circle at 50% 30%, #a16207 0 45%, #f5e6c8 47%)", anim: "wv-drop-24", fresh: true },
  { name: "Clémentines", origin: "Corse", price: "3,20 €", color: "radial-gradient(circle at 35% 30%, #fde68a, #f59e0b 60%, #d97706)", anim: "wv-drop-30", promo: "2,50 €" },
];

export function PrimeurDemo() {
  return (
    <BrowserFrame url="paniers-de-lea.fr" duration="10.5s" screenClassName="bg-[#f4f1e6] text-ink">
      <div className="wv-anim wv-rise-05 flex items-center justify-between px-3 h-6 border-b border-[#2f5d3a]/15">
        <span className="font-serif text-[9px] font-bold text-[#2f5d3a]">Les Paniers de Léa</span>
        <span className="flex items-center gap-1 text-[6.5px] font-semibold text-[#2f5d3a]">
          <span className="wv-pulse w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
          Ouvert · 7h–13h
        </span>
      </div>

      <div className="px-3 pt-2 grid grid-cols-[1fr_auto] gap-3">
        <div>
          <div className="wv-anim wv-rise-05 flex items-baseline justify-between">
            <p className="font-serif text-[10px] font-bold text-[#2f5d3a]">Arrivage du jour</p>
            <p className="text-[6px] text-ink/50">mar. 8 oct.</p>
          </div>
          <ul className="mt-1.5 space-y-1">
            {arrivals.map((p) => (
              <li key={p.name} className={`wv-anim ${p.anim} relative flex items-center gap-1.5 bg-white rounded-sm px-1.5 py-[3px] shadow-sm`}>
                <span className="w-3.5 h-3.5 rounded-full shrink-0" style={{ background: p.color }} />
                <span className="min-w-0 flex-1">
                  <span className="block text-[7px] font-semibold leading-tight">{p.name}</span>
                  <span className="block text-[5.5px] text-ink/45 leading-tight">{p.origin}</span>
                </span>
                <span className="text-[7px] font-bold text-[#2f5d3a] whitespace-nowrap">
                  <span className="relative">
                    {p.price}
                    {p.promo && <span className="wv-anim wv-strike-58 absolute left-0 right-0 top-1/2 h-[1.5px] bg-[#c2410c] origin-left" />}
                  </span>
                  {p.promo && <span className="wv-anim wv-pop-60 inline-block ml-1 text-[#e8742c]">{p.promo}</span>}
                  <span className="text-ink/40 font-normal">/kg</span>
                </span>
                {p.fresh && (
                  <span className="absolute -top-1.5 right-9 rotate-[-8deg]">
                    <span className="wv-anim wv-pop-50 block bg-lime text-ink text-[5.5px] font-bold uppercase px-1 py-[1px] tracking-wide">
                      Nouveau
                    </span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="wv-anim wv-rise-05 w-[72px] flex flex-col items-center">
          <p className="text-[6px] uppercase tracking-[0.15em] font-semibold text-ink/50">Saison</p>
          <div className="relative mt-1.5">
            <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 z-10 w-0 h-0 border-x-[4px] border-x-transparent border-t-[6px] border-t-ink" />
            <div
              className="wv-anim wv-p-wheel relative w-[60px] h-[60px] rounded-full shadow-inner"
              style={{ background: "conic-gradient(from -45deg, #e8742c 0 25%, #93a8b8 25% 50%, #9cc27a 50% 75%, #f2c14e 75% 100%)" }}
            >
              <span className="absolute top-1 left-1/2 -translate-x-1/2 text-[5px] font-bold text-white uppercase">Automne</span>
              <span className="absolute right-0.5 top-1/2 -translate-y-1/2 text-[5px] font-bold text-white uppercase rotate-90">Hiver</span>
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[5px] font-bold text-white uppercase rotate-180">Printemps</span>
              <span className="absolute left-1 top-1/2 -translate-y-1/2 text-[5px] font-bold text-white uppercase -rotate-90">Été</span>
              <span className="absolute inset-[18px] rounded-full bg-[#f4f1e6]" />
            </div>
          </div>
          <div className="wv-anim wv-pop-40 mt-1.5 text-center">
            <p className="font-serif text-[8px] font-bold text-[#c2410c]">Automne</p>
            <p className="text-[5.5px] text-ink/55 leading-tight">Courges, cèpes,
              <br />
              pommes, raisin</p>
          </div>
        </div>
      </div>

      <div className="wv-anim wv-p-notif wv-transient absolute top-7 inset-x-3 bg-[#2f5d3a] text-white text-[6.5px] font-medium px-2 py-1 rounded-sm shadow-lg flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-lime" />
        Arrivage mis à jour à 7h02 · 4 produits frais
      </div>
    </BrowserFrame>
  );
}

/* ---------------- RESTAURANT ---------------- */

const menu = [
  { title: "Entrées", items: [["Œuf parfait, girolles", "9"], ["Velouté de potimarron", "8"]] },
  { title: "Plats", items: [["Joue de bœuf confite", "19"], ["Dorade, beurre blanc", "21"]] },
  { title: "Desserts", items: [["Tarte fine aux pommes", "8"], ["Mousse au chocolat", "7"]] },
  { title: "Vins", items: [["Côtes-du-Rhône, verre", "6"], ["Mâcon blanc, verre", "7"]] },
];

export function RestaurantDemo() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#efe2d2]" style={loop("12s")}>
      <span className="absolute -left-6 bottom-6 font-serif text-[64px] font-bold text-[#c2410c]/[0.07] leading-none select-none">
        Bistrot
      </span>

      <div className="wv-anim wv-rise-10 absolute left-4 bottom-10 bg-white/80 backdrop-blur-sm px-2 py-1.5 shadow-sm w-[25%]">
        <p className="text-[6px] uppercase tracking-[0.12em] text-ink/50 font-semibold">Carte du jour</p>
        <p className="text-[7.5px] font-bold">À jour ce matin</p>
      </div>

      {/* Téléphone */}
      <div className="absolute left-1/2 -translate-x-1/2 top-9 -bottom-4 w-[38%] transition-transform duration-500 group-hover:-translate-y-1.5">
        <div className="h-full rounded-[16px] bg-ink p-[3px] shadow-2xl">
          <div className="relative h-full rounded-[13px] overflow-hidden bg-[#1f2a24] text-[#f3ead8]">
            <span className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-1.5 rounded-full bg-ink z-30" />

            <div className="pt-4 px-2 flex items-start justify-between">
              <div>
                <p className="font-serif text-[9px] font-bold text-[#d9a441]">Le Comptoir</p>
                <p className="text-[5.5px] text-[#f3ead8]/55">Bistrot de quartier</p>
              </div>
              <span className="mt-1 space-y-[2px]">
                <span className="block w-2.5 h-px bg-[#f3ead8]/70" />
                <span className="block w-2.5 h-px bg-[#f3ead8]/70" />
                <span className="block w-2.5 h-px bg-[#f3ead8]/70" />
              </span>
            </div>

            <div className="absolute inset-x-0 top-[44px] bottom-[34px] overflow-hidden">
              <div className="wv-anim wv-r-scroll px-2 space-y-2">
                {menu.map((section) => (
                  <div key={section.title}>
                    <p className="text-[6px] uppercase tracking-[0.15em] text-[#d9a441] font-semibold mb-1">{section.title}</p>
                    {section.items.map(([dish, price]) => (
                      <p key={dish} className="flex items-baseline gap-1 text-[6.5px] leading-[1.6]">
                        <span className="whitespace-nowrap">{dish}</span>
                        <span className="flex-1 border-b border-dotted border-[#f3ead8]/25" />
                        <span className="font-semibold">{price}</span>
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-2 inset-x-2">
              <div className="wv-anim wv-r-press bg-[#d9a441] text-[#1f2a24] text-[7px] font-bold text-center py-1.5 rounded-[3px]">
                Réserver une table
              </div>
            </div>

            {/* Module de réservation */}
            <div className="wv-anim wv-r-sheet wv-transient absolute inset-x-0 bottom-0 h-[58%] bg-[#f3ead8] text-ink rounded-t-[10px] shadow-[0_-8px_20px_rgba(0,0,0,.35)] z-20">
              <span className="absolute top-1 left-1/2 -translate-x-1/2 w-5 h-[2px] rounded-full bg-ink/20" />
              <div className="absolute top-[12%] inset-x-2">
                <p className="font-serif text-[8px] font-bold">Ce soir</p>
                <p className="text-[6px] text-ink/55">2 personnes</p>
              </div>
              <div className="absolute top-[40%] inset-x-1.5 flex justify-center gap-1">
                <span className="text-[6.5px] font-semibold border border-ink/20 rounded-full px-1.5 py-1">19h30</span>
                <span className="wv-anim wv-r-chip text-[6.5px] font-semibold border border-ink/20 rounded-full px-1.5 py-1">20h00</span>
                <span className="text-[6.5px] font-semibold border border-ink/20 rounded-full px-1.5 py-1">20h30</span>
              </div>
              <div className="absolute bottom-[8%] inset-x-2 h-[16%] bg-[#1f2a24] text-[#f3ead8] text-[7px] font-bold rounded-[3px] flex items-center justify-center">
                Confirmer
              </div>

              <div className="wv-anim wv-r-done absolute inset-0 bg-[#f3ead8] rounded-t-[10px] flex flex-col items-center justify-center gap-1">
                <svg viewBox="0 0 20 20" className="w-6 h-6" aria-hidden>
                  <circle cx="10" cy="10" r="9" fill="#2f5d3a" />
                  <path className="wv-anim wv-r-check" d="M5.5 10.5l3 3L14.5 7" pathLength={1} fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="font-serif text-[8px] font-bold">Table réservée</p>
                <p className="text-[6px] text-ink/55">Ce soir, 20h00 · 2 pers.</p>
              </div>
            </div>

            <span className="wv-anim wv-r-tap wv-transient absolute w-5 h-5 rounded-full bg-white/70 border border-white z-30 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Côté restaurateur */}
      <div className="wv-anim wv-r-notif wv-transient absolute right-3 top-[38%] w-[27%] bg-white shadow-xl px-2 py-1.5 border-l-2 border-[#d9a441]">
        <p className="text-[6px] uppercase tracking-[0.12em] text-ink/50 font-semibold">Nouvelle réservation</p>
        <p className="text-[7.5px] font-bold leading-tight mt-0.5">2 pers. · 20h00</p>
        <p className="text-[6px] text-ink/50">M. Benali</p>
      </div>
    </div>
  );
}
