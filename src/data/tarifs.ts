// Tarifs WebVibes : source de vérité unique des offres
// Aucun prix en dur ailleurs. TVA non applicable.

export type PlanId = "essentiel" | "standard" | "premium";

export type Plan = {
  id: PlanId;
  name: string;
  audience: string;
  monthly: number;
  noCommitmentSurcharge: number;
  setup: number;
  pages: number;
  modificationsQuota: string;
  featured?: string;
  highlights: string[];
  points: string[];
  cta: string;
};

export const plans: Plan[] = [
  {
    id: "essentiel",
    name: "Essentiel",
    audience: "Pour être trouvé et joignable.",
    monthly: 89,
    noCommitmentSurcharge: 10,
    setup: 390,
    pages: 3,
    modificationsQuota: "1",
    highlights: ["Site jusqu'à 3 pages", "Carte, horaires, bouton d'appel", "Référencement de base", "1 modification par mois"],
    points: [
      "Site jusqu'à 3 pages : accueil, présentation, infos pratiques",
      "Carte, horaires, plan d'accès, bouton d'appel",
      "Demande de contact par téléphone ou e-mail",
      "Référencement de base : optimisation technique, vitesse, balises",
      "1 modification de contenu par mois",
      "Mise à jour des horaires et fermetures illimitée"
    ],
    cta: "Prendre rendez-vous",
  },
  {
    id: "standard",
    name: "Standard",
    audience: "Pour être vu sur Google dans votre ville.",
    monthly: 119,
    noCommitmentSurcharge: 10,
    setup: 590,
    pages: 5,
    modificationsQuota: "2",
    featured: "Le plus choisi",
    highlights: ["Site jusqu'à 5 pages + galerie photos", "Formulaire adapté à votre métier", "Fiche Google et avis", "2 modifications par mois"],
    points: [
      "Tout l'Essentiel, avec un site jusqu'à 5 pages et une galerie",
      "Formulaire de demande (réservation, commande, intervention...)",
      "Création ou optimisation de votre fiche Google",
      "Référencement local : votre métier + votre ville",
      "Vos avis Google affichés sur le site",
      "2 modifications de contenu par mois",
      "Mise à jour des horaires et fermetures illimitée"
    ],
    cta: "Prendre rendez-vous",
  },
  {
    id: "premium",
    name: "Premium",
    audience: "Pour les professionnels qui veulent le maximum.",
    monthly: 169,
    noCommitmentSurcharge: 10,
    setup: 890,
    pages: 8,
    modificationsQuota: "4, en priorité",
    highlights: ["Site jusqu'à 8 pages (bilingue possible)", "Mises à jour illimitées de vos produits/services", "Rapport de référencement chaque mois", "4 modifications par mois, en priorité"],
    points: [
      "Tout le Standard, avec un site jusqu'à 8 pages",
      "Site en 2 langues possible",
      "Pages spécifiques : réalisations, services détaillés, actualités...",
      "Mises à jour de carte, produits ou arrivages sans limite",
      "Suivi du référencement et rapport chaque mois",
      "4 modifications de contenu par mois, traitées en priorité",
      "Mises à jour des horaires, fermetures et produits illimitées"
    ],
    cta: "Prendre rendez-vous",
  },
];

export const desktopOrder: PlanId[] = ["essentiel", "standard", "premium"];

export const needs: { id: string; label: string; plan: PlanId }[] = [
  { id: "trouve", label: "Carte et horaires", plan: "essentiel" },
  { id: "reservation", label: "Formulaires de demande", plan: "standard" },
  { id: "google", label: "Être vu sur Google", plan: "standard" },
  { id: "photos", label: "Galeries et photos", plan: "standard" },
  { id: "anglais", label: "Bilingue ou multi-pages", plan: "premium" },
  { id: "evenements", label: "Mises à jour illimitées (carte, produits...)", plan: "premium" },
];

const rank: Record<PlanId, number> = { essentiel: 0, standard: 1, premium: 2 };

export function recommendPlan(selected: string[]): PlanId | null {
  let best: PlanId | null = null;
  for (const need of needs) {
    if (selected.includes(need.id) && (!best || rank[need.plan] > rank[best])) best = need.plan;
  }
  return best;
}

export const includedEverywhere = [
  "Création faite pour vous",
  "Site adapté au téléphone",
  "Hébergement",
  "Connexion sécurisée (HTTPS)",
  "Maintenance technique",
  "Site en ligne sous 5 jours ouvrés après réception des contenus",
];

export const PRICE_LABEL = ""; 
export const legalNotice = "TVA non applicable, art. 293 B du CGI.";

export type Cell = boolean | string;
export type ComparisonRow = {
  label: string;
  values: Record<PlanId, Cell>;
  note?: string;
};
export type ComparisonGroup = { title: string; rows: ComparisonRow[] };

export const comparison: ComparisonGroup[] = [
  {
    title: "Votre site",
    rows: [
      { label: "Nombre de pages", values: { essentiel: "Jusqu'à 3", standard: "Jusqu'à 5", premium: "Jusqu'à 8" } },
      { label: "Carte, horaires, plan d'accès, bouton d'appel", values: { essentiel: true, standard: true, premium: true } },
      { label: "Galerie de photos ou réalisations", values: { essentiel: false, standard: true, premium: true } },
      { label: "Pages services détaillés, actualités", values: { essentiel: false, standard: false, premium: true } },
      { label: "Langues", values: { essentiel: "Français", standard: "Français", premium: "Option 2 langues" } },
    ],
  },
  {
    title: "Fonctionnalités",
    rows: [
      { label: "Contact par téléphone ou e-mail direct", values: { essentiel: true, standard: true, premium: true } },
      {
        label: "Formulaire de demande adapté (réservation, devis, commande...)",
        values: { essentiel: false, standard: true, premium: true },
        note: "Le formulaire envoie une demande : c'est vous qui la confirmez au client. Pas de paiement en ligne ni de confirmation automatique.",
      },
    ],
  },
  {
    title: "Google",
    rows: [
      { label: "Référencement de base (technique, vitesse, balises)", values: { essentiel: true, standard: true, premium: true } },
      { label: "Référencement local : votre métier + votre ville", values: { essentiel: false, standard: true, premium: true } },
      { label: "Création ou optimisation de votre fiche Google", values: { essentiel: false, standard: true, premium: true } },
      { label: "Vos avis Google mis en avant sur le site", values: { essentiel: false, standard: true, premium: true } },
      { label: "Suivi du référencement et rapport mensuel", values: { essentiel: false, standard: false, premium: true } },
    ],
  },
  {
    title: "Mises à jour",
    rows: [
      { label: "Horaires, fermetures exceptionnelles et corrections", values: { essentiel: "Illimité", standard: "Illimité", premium: "Illimité" } },
      { label: "Modifications de contenu par mois (hors quota)", values: { essentiel: "1", standard: "2", premium: "4, en priorité" } },
      { label: "Mise à jour de carte, produits ou arrivages sans limite", values: { essentiel: false, standard: false, premium: true } },
    ],
  },
];

export const faq: { question: string; answer: string[] }[] = [
  {
    question: "Qu'est-ce qu'une modification de contenu ?",
    answer: [
      "Le changement d'un texte, d'une photo, ou l'ajout d'une information qui n'est pas urgente. La mise à jour de vos horaires, fermetures exceptionnelles ou la correction d'une erreur sont illimitées et ne décomptent pas votre quota de modifications.",
      "Une demande peut regrouper plusieurs petits changements. Contrairement aux horaires, les modifications non utilisées ne sont pas reportables au mois suivant."
    ],
  },
  {
    question: "Que comprennent les frais de création ?",
    answer: [
      "Tout le travail du départ : la conception du site, la mise en forme de vos textes et de vos photos, puis la mise en ligne. Vous les payez une seule fois."
    ],
  },
  {
    question: "Ai-je quelque chose à faire moi-même ?",
    answer: [
      "Très peu. Au départ, vous me transmettez vos informations et vous validez le site avant sa mise en ligne. Ensuite, vous m'envoyez un message quand quelque chose change. Je m'occupe du reste."
    ],
  },
  {
    question: "Puis-je changer de formule ?",
    answer: ["Oui, vous pouvez passer à une formule supérieure ou inférieure à tout moment. La modification prendra effet le mois suivant, sans aucuns frais de création supplémentaires."],
  }
];

export type Commitment = "engaged" | "free";

export const commitmentLabels: Record<Commitment, { toggle: string; short: string; note: string }> = {
  engaged: { toggle: "Engagement 12 mois", short: "12 mois", note: "Engagement 12 mois" },
  free: { toggle: "Sans engagement", short: "Sans engagement", note: "Résiliable à tout moment" },
};

export const monthlyPrice = (plan: Plan, commitment: Commitment = "engaged") =>
  plan.monthly + (commitment === "free" ? plan.noCommitmentSurcharge : 0);

export const firstMonth = (plan: Plan, commitment: Commitment = "engaged") =>
  monthlyPrice(plan, commitment) + plan.setup;

export const totalEngaged = (plan: Plan) => plan.setup + (plan.monthly * 12);

export const formatEuro = (amount: number) => {
  const round = Number.isInteger(amount);
  return `${new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: round ? 0 : 2,
    maximumFractionDigits: round ? 0 : 2,
  }).format(amount)} €`;
};

export const getPlan = (id: PlanId) => plans.find((p) => p.id === id)!;
