import type { CSSProperties } from "react";
import PlayInView from "./PlayInView";

// Section « C'est mon rôle » : un SMS du commerçant, le site mis à jour, la réponse.
// Animations dans globals.css (préfixe wv-s-).

export default function SmsUpdate() {
  return (
    <PlayInView className="relative">
      <div className="flex flex-col sm:flex-row sm:gap-4 md:gap-8 sm:justify-end sm:items-end relative z-10" style={{ "--wv-loop": "11s" } as CSSProperties}>
        {/* Conversation */}
        <div className="relative z-20 w-[230px] sm:w-[240px] shrink-0 self-start sm:self-auto sm:translate-y-6 md:translate-y-12 flex flex-col gap-2">
          <div className="relative min-h-[88px] sm:min-h-[96px]">
            <div className="wv-anim wv-s-dots wv-transient absolute bottom-0 left-0 bg-white rounded-xl rounded-br-none shadow-xl px-4 py-3 flex gap-1">
              <span className="wv-dot w-1.5 h-1.5 rounded-full bg-ink/40" />
              <span className="wv-dot w-1.5 h-1.5 rounded-full bg-ink/40 [animation-delay:.15s]" />
              <span className="wv-dot w-1.5 h-1.5 rounded-full bg-ink/40 [animation-delay:.3s]" />
            </div>
            <div className="wv-anim wv-s-msg bg-white text-ink p-3.5 sm:p-4 rounded-xl rounded-br-none shadow-xl text-sm origin-bottom-right">
              <p className="font-medium">Salut, arrivage de bulots ce matin ! Tu peux l&apos;ajouter sur la page d&apos;accueil ?</p>
              <p className="text-xs text-ink/40 mt-2 text-right">08:14</p>
            </div>
          </div>
          <div className="wv-anim wv-pop-46 self-start bg-lime text-ink px-3 py-2 rounded-xl rounded-bl-none shadow-lg text-sm font-semibold origin-bottom-left">
            C&apos;est en ligne.
            <span className="ml-2 text-xs font-normal text-ink/60">08:16</span>
          </div>
        </div>

        {/* Rendu Site */}
        <div className="self-end -mt-3 sm:mt-0 bg-cream text-ink p-5 md:p-8 w-[82%] sm:w-full max-w-[320px] shadow-2xl tag-cut-corner border border-ink/5">
          <div className="flex justify-between items-start mb-4 sm:mb-6">
            <div className="w-8 h-8 bg-ink/10 rounded-full"></div>
            <div className="wv-anim wv-pop-38 px-2 py-1 bg-lime text-ink text-xs font-bold flex items-center gap-1.5 uppercase tracking-wide tag-cut-corner">
              <div className="w-1.5 h-1.5 bg-ink rounded-full"></div> Mis à jour
            </div>
          </div>
          <div className="space-y-2.5 sm:space-y-3">
            <div className="h-4 bg-ink/10 w-2/3"></div>
            <div className="h-4 bg-ink/10 w-full"></div>
            <div className="h-4 bg-ink/10 w-4/5"></div>
          </div>
          <div className="wv-anim wv-s-block mt-5 sm:mt-8 p-3.5 sm:p-4 border border-electric/30 bg-electric/5">
            <p className="font-serif font-bold text-electric">Arrivage du jour : Bulots frais</p>
          </div>
        </div>
      </div>
    </PlayInView>
  );
}
