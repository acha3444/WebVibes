import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TarifsSummary } from "@/components/tarifs/TarifsSummary";
import { BOOKING_URL } from "@/data/site";
import PlayInView from "@/components/motion/PlayInView";
import HeroPhone from "@/components/motion/HeroPhone";
import SmsUpdate from "@/components/motion/SmsUpdate";
import { BoucherieDemo, PrimeurDemo, RestaurantDemo } from "@/components/demos/DemoMockups";

const processSteps = [
  { title: "Le contact", text: "On s'appelle 20 minutes, ou je passe vous voir. On discute de ce que vous faites et de ce dont vos clients ont besoin. Pas de termes techniques." },
  { title: "Le devis", text: "Je vous recommande la formule qui suffit. Le devis reprend le prix affiché, seuls les besoins spécifiques hors formule sont chiffrés à part." },
  { title: "La création", text: "Je rassemble vos photos et infos (ou je vous aide à les créer), puis je fabrique le site. Vous validez le résultat." },
  { title: "La sérénité", text: "Le site est en ligne. À partir de là, vous m'envoyez simplement un SMS ou un e-mail quand quelque chose change. Je m'occupe du reste." },
];

const demos = [
  { title: "Boucherie & Rôtisserie", text: "Design centré sur les produits et la commande.", Mockup: BoucherieDemo },
  { title: "Primeur", text: "Mise en avant des arrivages et de la saisonnalité.", Mockup: PrimeurDemo },
  { title: "Restaurant", text: "Carte lisible sur mobile et module de réservation.", Mockup: RestaurantDemo },
];

// Server Action pour le formulaire connecté à Zoho CRM
async function sendQuoteAction(formData: FormData) {
  "use server";
  
  // 1. Protection anti-spam (Honeypot)
  if (formData.get("bot-field")) {
    return; // Spam détecté : on ignore silencieusement
  }
  
  // 2. Préparation des données pour Zoho CRM (WebToContactForm)
  const zohoData = new URLSearchParams();
  
  // Identifiants Zoho extraits de ton code HTML
  zohoData.append("xnQsjsdp", "6afb024aebcdc94b46959b68f3bdf5152161c791018de8d7c46bb297c2720636");
  zohoData.append("xmIwtLD", "9f63d7a34fecc225e3f80a54f5a3e2a50d184a1f623bf9573f71291178c81f913773b927450bc48b70feda333494255d");
  zohoData.append("actionType", "Q29udGFjdHM="); // Module Contacts
  zohoData.append("returnURL", "https://webvibes.fr"); // Requis par Zoho (même si ignoré côté serveur)
  
  // 3. Mapping des champs du formulaire vers Zoho
  // Les champs que tu as configurés dans Zoho : Last Name, Phone, Email
  zohoData.append("Last Name", (formData.get("name") as string) || "Inconnu");
  zohoData.append("Phone", formData.get("phone") as string);
  zohoData.append("Email", formData.get("email") as string);
  
  // Astuce : On compile les autres infos (commerce, métier, ville, message) 
  // dans le champ "Description" pour ne rien perdre, car ils ne sont pas dans ton formulaire Zoho !
  zohoData.append("Description", 
    `Commerce: ${formData.get("commerce")}\n` +
    `Métier: ${formData.get("metier")}\n` +
    `Ville: ${formData.get("ville")}\n` +
    `Déjà un site: ${formData.get("hasSite")}\n` +
    `Message: ${formData.get("message")}`
  );

  try {
    const response = await fetch("https://crm.zoho.eu/crm/WebToContactForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: zohoData.toString(),
    });

    if (response.ok) {
      console.log("Contact Zoho créé avec succès !");
    }
  } catch (error) {
    console.error("Erreur d'envoi vers Zoho", error);
  }
}

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-clip">
      
      {/* 1. EN-TÊTE */}
      <Header />

      {/* 2. ACCROCHE */}
      <section className="px-5 sm:px-6 pt-6 pb-10 sm:pt-14 sm:pb-20 lg:pt-24 lg:pb-28 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-sm sm:text-base font-bold text-ink/50 uppercase tracking-widest mb-4 block">
              Création de site internet pour artisans & commerçants
            </h1>
            <div className="font-serif text-[1.85rem] sm:text-5xl lg:text-[2.9rem] font-bold leading-[1.15] text-electric mb-5 sm:mb-8">
              <span className="wv-intro-line block"><span>Vous gérez votre commerce.</span></span>
              <span className="wv-intro-line block text-ink"><span className="[animation-delay:.18s]">Je gère votre site internet.</span></span>
            </div>
            <div className="wv-intro-fade">
              <p className="text-base sm:text-xl text-ink/80 mb-7 sm:mb-10 leading-relaxed">
                Horaires, carte, fermeture exceptionnelle : vous m&apos;envoyez un message, c&apos;est en ligne (selon votre formule).
                <span className="hidden sm:inline"> Chaque commerce a besoin d&apos;être trouvé, mais vous n&apos;avez pas le temps de gérer la technique.</span>
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-center gap-4 sm:gap-6">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center bg-electric text-white px-6 py-3.5 sm:py-3 font-semibold tag-cut-corner hover:bg-electric/90 transition-colors">
                  Prendre rendez-vous
                </a>
                <a href="#devis" className="text-ink font-semibold border-b-2 border-electric pb-0.5 hover:text-electric transition-colors">
                  Demander un devis
                </a>
              </div>

              <dl className="mt-6 sm:mt-12 pt-4 sm:pt-6 border-t border-ink/10 grid grid-cols-3 gap-3 sm:gap-5 text-[13px] sm:text-sm">
                <div>
                  <dt className="font-bold leading-snug">Devis gratuit</dt>
                  <dd className="hidden sm:block text-ink/60 mt-0.5">Sans obligation, adapté à votre commerce.</dd>
                </div>
                <div>
                  <dt className="font-bold leading-snug">Un seul interlocuteur</dt>
                  <dd className="hidden sm:block text-ink/60 mt-0.5">Moi, joignable par SMS ou téléphone.</dd>
                </div>
                <div>
                  <dt className="font-bold leading-snug">Vous ne touchez à rien</dt>
                  <dd className="hidden sm:block text-ink/60 mt-0.5">Hébergement, sécurité, mises à jour.</dd>
                </div>
              </dl>
            </div>
          </div>

          <HeroPhone />
        </div>
      </section>

      {/* 3. POUR QUEL COMMERCE */}
      <section id="services" className="px-5 sm:px-6 py-10 sm:py-20 lg:py-24 bg-white/50 border-y border-ink/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-4 mb-5 sm:mb-12 lg:mb-16">
            <h2 className="font-serif text-[1.6rem] sm:text-3xl lg:text-4xl font-bold leading-tight max-w-2xl">
              Ce que votre site fait pour vous, selon votre métier.
            </h2>
            <p aria-hidden className="md:hidden shrink-0 text-xs font-semibold text-ink/50 pb-1">Glissez →</p>
          </div>

          <div className="wv-snap -mx-5 px-5 scroll-px-5 flex gap-3 overflow-x-auto snap-x snap-mandatory md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-12 md:gap-y-14 md:overflow-visible">
            <article className="shrink-0 w-[78%] snap-start bg-white border border-ink/10 p-4 md:w-auto md:bg-transparent md:border-0 md:p-0">
              <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-3 text-electric">
                Bouchers & Charcutiers
              </h3>
              <p className="text-[15px] sm:text-base text-ink/75 leading-relaxed">
                Affichage clair de vos horaires. Formulaire de commande à l'avance pour les fêtes et retrait en boutique.
              </p>
            </article>
            <article className="shrink-0 w-[78%] snap-start bg-white border border-ink/10 p-4 md:w-auto md:bg-transparent md:border-0 md:p-0">
              <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-3 text-electric">
                Poissonniers
              </h3>
              <p className="text-[15px] sm:text-base text-ink/75 leading-relaxed">
                Mise à jour rapide de l'arrivage et des produits de saison (fréquence selon formule). Les clients savent ce qu'il y a sur l'étal avant de venir.
              </p>
            </article>
            <article className="shrink-0 w-[78%] snap-start bg-white border border-ink/10 p-4 md:w-auto md:bg-transparent md:border-0 md:p-0">
              <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-3 text-electric">
                Artisans (Électricité, Clim...)
              </h3>
              <p className="text-[15px] sm:text-base text-ink/75 leading-relaxed">
                Présentation de vos certifications, galerie de vos chantiers, et module de demande d'intervention rapide.
              </p>
            </article>
            <article className="shrink-0 w-[78%] snap-start bg-white border border-ink/10 p-4 md:w-auto md:bg-transparent md:border-0 md:p-0">
              <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-3 text-electric">
                Créateurs & Boutiques
              </h3>
              <p className="text-[15px] sm:text-base text-ink/75 leading-relaxed">
                Catalogue de vos créations, horaires, et formulaire de commande ou Click & Collect simple.
              </p>
            </article>
            <article className="shrink-0 w-[78%] snap-start bg-white border border-ink/10 p-4 md:w-auto md:bg-transparent md:border-0 md:p-0">
              <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-3 text-electric">
                Restaurants & Traiteurs
              </h3>
              <p className="text-[15px] sm:text-base text-ink/75 leading-relaxed">
                Carte du jour à jour, réservation simple, et menus spéciaux toujours accessibles sur mobile.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 4. AVANT / APRÈS */}
      <section className="px-5 sm:px-6 py-10 sm:py-20 lg:py-24 max-w-6xl mx-auto w-full">
        <div className="wv-snap -mx-5 px-5 pt-3 flex gap-4 overflow-x-auto snap-x snap-mandatory lg:mx-0 lg:px-0 lg:pt-0 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start lg:overflow-visible">
          <div className="shrink-0 w-[84%] snap-center lg:w-auto">
            <h3 className="font-serif text-xl sm:text-2xl font-bold mb-3 sm:mb-6 text-ink/40">Aujourd'hui</h3>
            <div className="border border-ink/10 p-5 sm:p-8">
              <p className="text-base sm:text-lg text-ink/70 leading-relaxed">
                Le client vous cherche sur son téléphone. Il tombe sur une fiche Google incomplète ou une page Facebook dont la dernière publication date de 2022. Il hésite, ne trouve pas la carte, et finit par aller ailleurs.
              </p>
            </div>
          </div>
          <div className="shrink-0 w-[84%] snap-center lg:w-auto">
            <h3 className="font-serif text-xl sm:text-2xl font-bold mb-3 sm:mb-6 text-electric">Avec votre site →</h3>
            <div className="border-2 border-electric p-5 sm:p-8 relative">
              <div className="absolute -top-3 right-0 lg:-right-3 w-6 h-6 bg-lime tag-cut-corner"></div>
              <p className="text-base sm:text-lg font-medium leading-relaxed">
                Le client tape votre nom. Il arrive sur un site clair, rapide, à votre image. Les horaires sont justes, la carte est à jour. Il sait qu'il peut venir ou passer commande. Vous le rassurez avant même qu'il ne pousse la porte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LE SUIVI (SECTION DÉMO SMS) */}
      <section id="fonctionnement" className="px-5 sm:px-6 py-10 sm:py-20 lg:py-24 bg-electric text-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-16 items-center">
            <div className="max-w-lg">
              <h2 className="font-serif text-[1.6rem] sm:text-4xl font-bold mb-5 sm:mb-8 leading-tight">
                Vous n'avez pas de temps pour l'informatique. C'est mon rôle.
              </h2>
              <p className="text-base sm:text-lg text-white/80 sm:mb-12 leading-relaxed">
                <span className="hidden sm:inline">Je ne vous livre pas un site pour disparaître ensuite. Vous ne touchez à rien. </span>
                Hébergement, sécurité, nom de domaine : je gère. Un changement de carte ou une fermeture ? Vous m'envoyez un message, je mets à jour.
              </p>
              
              <ul className="hidden sm:block space-y-3 sm:space-y-4 text-[15px] sm:text-base">
                <li className="flex gap-3 sm:gap-4 border-b border-white/20 pb-3 sm:pb-4">
                  <span className="font-bold opacity-50 shrink-0 w-[5.5rem] sm:w-24">Avant</span>
                  <span>Création de A à Z (design, textes, mise en ligne).</span>
                </li>
                <li className="flex gap-3 sm:gap-4 border-b border-white/20 pb-3 sm:pb-4">
                  <span className="font-bold text-lime shrink-0 w-[5.5rem] sm:w-24">Jour J</span>
                  <span>Votre site est en ligne et visible par tous.</span>
                </li>
                <li className="flex gap-3 sm:gap-4 pt-1 sm:pt-2">
                  <span className="font-bold opacity-50 shrink-0 w-[5.5rem] sm:w-24">Au quotidien</span>
                  <span>Un message suffit pour modifier votre contenu (selon votre formule).</span>
                </li>
              </ul>
            </div>
            
            {/* Démo visuelle */}
            <SmsUpdate />
          </div>
        </div>
      </section>

      {/* 6. DÉMOS */}
      <section id="demos" className="px-5 sm:px-6 py-10 sm:py-20 lg:py-24 max-w-6xl mx-auto w-full">
        <div className="flex items-end justify-between gap-4 mb-6 sm:mb-12 lg:mb-16">
          <h2 className="font-serif text-[1.6rem] sm:text-3xl font-bold">Démonstrations</h2>
          <p className="sm:hidden text-xs font-semibold text-ink/50 pb-1">Glissez →</p>
        </div>
        <div className="wv-snap -mx-5 px-5 flex gap-4 overflow-x-auto snap-x snap-mandatory sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 sm:overflow-visible">
          {demos.map(({ title, text, Mockup }) => (
            <article key={title} className="group cursor-pointer shrink-0 w-[85%] sm:w-auto snap-center">
              <div className="bg-ink/5 aspect-[4/3] mb-4 relative overflow-hidden tag-cut-corner">
                <PlayInView className="absolute inset-0">
                  <Mockup />
                </PlayInView>
                <div className="absolute top-4 left-4 bg-lime text-ink px-3 py-1 text-xs font-bold uppercase tracking-wider tag-cut-corner z-10">
                  Démo
                </div>
              </div>
              <h3 className="font-bold text-base sm:text-lg">{title}</h3>
              <p className="text-ink/60 text-sm mt-1">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 7. COMMENT ÇA SE PASSE */}
      <section className="px-5 sm:px-6 py-10 sm:py-20 lg:py-24 bg-white/50 border-t border-ink/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-[1.6rem] sm:text-3xl font-bold mb-8 sm:mb-12 lg:mb-16 sm:text-center">Comment ça se passe ?</h2>
          <PlayInView once decorative={false} className="relative space-y-7 sm:space-y-12">
            {/* Fil qui relie les étapes */}
            <span className="absolute left-4 sm:left-5 md:left-7 top-6 bottom-28 sm:bottom-16 w-px bg-ink/10" aria-hidden />
            <span className="wv-once wv-line-draw absolute left-4 sm:left-5 md:left-7 top-6 bottom-28 sm:bottom-16 w-px bg-electric" aria-hidden />
            {processSteps.map((step, i) => (
              <div key={step.title} className="relative flex gap-4 sm:gap-6 md:gap-12 items-start">
                <div
                  className="wv-once wv-num-on w-8 sm:w-10 md:w-14 shrink-0 text-center text-3xl sm:text-4xl md:text-5xl font-serif text-electric font-bold sm:mt-1 bg-[#FCFBF8] pb-2"
                  style={{ animationDelay: `${i * 0.45}s` }}
                >
                  {i + 1}
                </div>
                <div className="wv-once wv-fade-up" style={{ animationDelay: `${i * 0.45 + 0.1}s` }}>
                  <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2">{step.title}</h3>
                  <p className="text-[15px] sm:text-base text-ink/75 leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </PlayInView>
        </div>
      </section>

      {/* 7 bis. TARIFS (résumé, renvoie vers /tarifs) */}
      <TarifsSummary />

      {/* 8. RENDEZ-VOUS ZOHO */}
      <section id="rendez-vous" className="px-5 sm:px-6 py-10 sm:py-20 lg:py-24 max-w-5xl mx-auto w-full">
        <div className="bg-white border border-ink/10 px-6 py-10 sm:p-10 md:p-20 text-center relative overflow-hidden tag-cut-corner">
          {/* Décorations artisanales */}
          <div className="absolute top-0 left-0 w-2 h-full bg-electric"></div>
          <div className="absolute top-6 right-6 w-3 h-3 bg-lime tag-cut-corner hidden sm:block"></div>
          
          <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-electric">On en discute ?</h2>
          <p className="text-base md:text-xl text-ink/80 max-w-2xl mx-auto mb-7 sm:mb-10 leading-relaxed">
            Chaque commerce a une réalité différente. Prenez 20 minutes avec moi (par téléphone ou dans votre boutique) pour parler de ce qui serait vraiment utile pour vous.
          </p>
          
          <a 
            href={BOOKING_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block sm:inline-block w-full sm:w-auto bg-electric text-white px-6 sm:px-10 py-4 sm:py-5 font-bold text-base sm:text-lg tag-cut-corner hover:bg-electric/90 transition-colors"
          >
            Choisir un créneau
          </a>
          <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-ink/40 font-medium uppercase tracking-widest">Gratuit et sans obligation</p>
        </div>
      </section>

      {/* 9. DEVIS */}
      <section id="devis" className="px-5 sm:px-6 py-10 sm:py-20 lg:py-24 bg-ink text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-6 text-cream">Demander un devis</h2>
          <p className="text-cream/70 mb-8 sm:mb-12 text-base sm:text-lg">Chaque commerce est différent, le devis est gratuit et sans obligation.</p>
          
          <form action={sendQuoteAction} className="space-y-4 sm:space-y-6">
            {/* Honeypot anti-spam */}
            <input type="text" name="bot-field" className="hidden" tabIndex={-1} autoComplete="off" />
            
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-cream/70 mb-1.5 sm:mb-2">Votre nom</label>
                <input type="text" id="name" name="name" autoComplete="name" required className="w-full bg-cream/10 border border-cream/20 px-4 py-2.5 sm:py-3 text-cream placeholder-cream/30 focus:outline-none focus:border-electric transition-colors rounded-none" />
              </div>
              <div>
                <label htmlFor="commerce" className="block text-sm font-medium text-cream/70 mb-1.5 sm:mb-2">Nom du commerce</label>
                <input type="text" id="commerce" name="commerce" autoComplete="organization" required className="w-full bg-cream/10 border border-cream/20 px-4 py-2.5 sm:py-3 text-cream placeholder-cream/30 focus:outline-none focus:border-electric transition-colors rounded-none" />
              </div>
            </div>
            
            <div className="grid grid-cols-[1.4fr_1fr] md:grid-cols-2 gap-3 sm:gap-6">
              <div>
                <label htmlFor="metier" className="block text-sm font-medium text-cream/70 mb-1.5 sm:mb-2">Métier</label>
                <div className="relative">
                <select id="metier" name="metier" required className="w-full bg-cream/10 border border-cream/20 pl-4 pr-10 py-2.5 sm:py-3 text-cream focus:outline-none focus:border-electric transition-colors rounded-none appearance-none">
                  <option value="" className="text-ink">Sélectionner...</option>
                  <option value="boucherie" className="text-ink">Boucherie / Charcuterie</option>
                  <option value="poissonnerie" className="text-ink">Poissonnerie / Écailler</option>
                  <option value="restaurant" className="text-ink">Restaurant / Traiteur</option>
                  <option value="artisan" className="text-ink">Artisan (Électricité, Clim, etc.)</option>
                  <option value="boutique" className="text-ink">Créateur / Boutique</option>
                  <option value="autre" className="text-ink">Autre métier / commerce</option>
                </select>
                <svg viewBox="0 0 12 8" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-3 h-2 text-cream/60" aria-hidden>
                  <path d="M1 1.5l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                </div>
              </div>
              <div>
                <label htmlFor="ville" className="block text-sm font-medium text-cream/70 mb-1.5 sm:mb-2">Ville</label>
                <input type="text" id="ville" name="ville" autoComplete="address-level2" required className="w-full bg-cream/10 border border-cream/20 px-4 py-2.5 sm:py-3 text-cream placeholder-cream/30 focus:outline-none focus:border-electric transition-colors rounded-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-cream/70 mb-1.5 sm:mb-2">Téléphone</label>
                <input type="tel" id="phone" name="phone" autoComplete="tel" inputMode="tel" required className="w-full bg-cream/10 border border-cream/20 px-4 py-2.5 sm:py-3 text-cream placeholder-cream/30 focus:outline-none focus:border-electric transition-colors rounded-none" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-cream/70 mb-1.5 sm:mb-2">E-mail</label>
                <input type="email" id="email" name="email" autoComplete="email" inputMode="email" required className="w-full bg-cream/10 border border-cream/20 px-4 py-2.5 sm:py-3 text-cream placeholder-cream/30 focus:outline-none focus:border-electric transition-colors rounded-none" />
              </div>
            </div>
            
            <div>
              <label htmlFor="hasSite" className="block text-sm font-medium text-cream/70 mb-1.5 sm:mb-2">Avez-vous déjà un site ou une page Facebook/Google ?</label>
              <input type="text" id="hasSite" name="hasSite" className="w-full bg-cream/10 border border-cream/20 px-4 py-2.5 sm:py-3 text-cream placeholder-cream/30 focus:outline-none focus:border-electric transition-colors rounded-none" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-cream/70 mb-1.5 sm:mb-2">Votre message (facultatif)</label>
              <textarea id="message" name="message" rows={2} className="w-full bg-cream/10 border border-cream/20 px-4 py-2.5 sm:py-3 text-cream placeholder-cream/30 focus:outline-none focus:border-electric transition-colors rounded-none resize-y"></textarea>
            </div>
            
            <p className="text-xs text-cream/70">Les informations saisies sont uniquement utilisées pour traiter votre demande de devis. <Link href="/confidentialite" className="underline underline-offset-2 hover:text-cream">Politique de confidentialité</Link></p>

            <button type="submit" className="bg-electric text-white px-8 py-4 font-semibold tag-cut-corner hover:bg-electric/90 transition-colors w-full sm:w-auto">
              Envoyer la demande
            </button>
          </form>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="px-5 sm:px-6 py-10 sm:py-20 lg:py-24 bg-white/50 border-b border-ink/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-[1.6rem] sm:text-3xl font-bold mb-6 sm:mb-12">Questions fréquentes</h2>
          <div className="space-y-5 sm:space-y-8">

            {/* [BLOQUANT - Tâche F : "Et si je veux arrêter le suivi ?" n'a pas été réécrit car D4, D5 et D6 sont À REMPLIR. La question est masquée temporairement.] */}
            
            <details className="group border-b border-ink/10 pb-4 sm:pb-6">
              <summary className="font-bold text-base sm:text-lg cursor-pointer list-none flex justify-between items-center gap-4 pr-1 sm:pr-2 py-1">
                Je n'ai pas de belles photos de mon commerce.
                <span className="shrink-0 text-electric font-serif text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 sm:mt-4 text-[15px] sm:text-base text-ink/75 leading-relaxed">Pas de problème. Je peux vous guider pour en prendre de bonnes avec votre téléphone, ou nous pouvons utiliser des visuels professionnels de haute qualité adaptés à votre activité.</p>
            </details>
            
            <details className="group border-b border-ink/10 pb-4 sm:pb-6">
              <summary className="font-bold text-base sm:text-lg cursor-pointer list-none flex justify-between items-center gap-4 pr-1 sm:pr-2 py-1">
                En combien de temps le site est-il prêt ?
                <span className="shrink-0 text-electric font-serif text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 sm:mt-4 text-[15px] sm:text-base text-ink/75 leading-relaxed">Le site peut être en ligne sous 5 jours ouvrés après réception de vos contenus, en fonction du volume de demandes en cours.</p>
            </details>
            
            <details className="group pb-2">
              <summary className="font-bold text-base sm:text-lg cursor-pointer list-none flex justify-between items-center gap-4 pr-1 sm:pr-2 py-1">
                J'ai déjà une page Facebook, à quoi bon ?
                <span className="shrink-0 text-electric font-serif text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 sm:mt-4 text-[15px] sm:text-base text-ink/75 leading-relaxed">Facebook oblige vos clients à avoir un compte, à scroller au milieu des publicités, et masque parfois vos publications. Un site internet est clair, accessible à tous instantanément depuis Google, et dédié 100% à vos produits.</p>
            </details>
          </div>
        </div>
      </section>

      {/* 11. L'ESPRIT WEBVIBES */}
      <section className="px-5 sm:px-6 py-10 sm:py-20 lg:py-24 max-w-4xl mx-auto w-full">
        <div className="max-w-2xl mx-auto sm:text-center">
          <h2 className="font-serif text-[1.6rem] sm:text-3xl font-bold mb-4 sm:mb-6">L'esprit WebVibes</h2>
          <p className="text-base sm:text-lg text-ink/80 leading-relaxed mb-4 sm:mb-6">
            Je m'adresse à ceux qui travaillent debout. J'ai créé WebVibes pour répondre à un besoin simple : les artisans ont des produits exceptionnels, mais souvent des sites internet qui ne leur rendent pas justice, ou tout simplement pas le temps de s'en occuper. 
          </p>
          <p className="text-base sm:text-lg text-ink/80 leading-relaxed">
            Mon métier, c'est de traduire le vôtre sur internet, sans aucun charabia technique.
          </p>
        </div>
      </section>

      {/* 12. PIED DE PAGE */}
      <Footer />

    </main>
  );
}
