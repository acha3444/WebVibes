// Tarifs WebVibes : seul fichier à modifier pour changer un prix, une formule,
// une ligne du comparatif ou une réponse de la FAQ. La mise en page lit ces données.
// Tous les montants sont des prix finaux en euros (WebVibes ne facture pas de TVA).

export type PlanId = "essentiel" | "standard" | "premium";

export type Plan = {
  id: PlanId;
  name: string;
  audience: string; // « pour qui », une phrase
  monthly: number; // abonnement mensuel
  setup: number; // création et mise en ligne, payée une seule fois
  featured?: string; // libellé du badge de mise en avant
  highlights: string[]; // 3 à 4 points courts affichés sur la carte
  points: string[]; // liste complète (données structurées, comparatif)
  cta: string;
};

export const plans: Plan[] = [
  {
    id: "essentiel",
    name: "Essentiel",
    audience: "Pour être trouvé et joignable.",
    monthly: 89,
    setup: 390,
    highlights: ["Site jusqu'à 3 pages", "Carte, horaires, bouton d'appel", "Référencement de base", "1 modification par mois"],
    points: [
      "Site jusqu'à 3 pages : accueil, carte, infos pratiques",
      "Carte, horaires, plan d'accès, bouton d'appel",
      "Réservation par téléphone ou lien vers votre outil actuel",
      "Référencement de base : optimisation technique, vitesse, balises",
      "1 modification de contenu par mois",
    ],
    cta: "Parler de l'Essentiel",
  },
  {
    id: "standard",
    name: "Standard",
    audience: "Pour remplir la salle grâce à Google.",
    monthly: 119,
    setup: 590,
    featured: "Le plus choisi",
    highlights: ["Site jusqu'à 5 pages + galerie photos", "Demandes de réservation en ligne", "Fiche Google et avis mis en avant", "2 modifications par mois"],
    points: [
      "Tout l'Essentiel, avec un site jusqu'à 5 pages et une galerie photos",
      "Formulaire de demande de réservation",
      "Création ou optimisation de votre fiche Google",
      "Référencement local : votre cuisine + votre ville",
      "Vos avis Google mis en avant sur le site",
      "2 modifications de contenu par mois",
    ],
    cta: "Parler du Standard",
  },
  {
    id: "premium",
    name: "Premium",
    audience: "Pour les établissements qui veulent le maximum.",
    monthly: 169,
    setup: 890,
    highlights: ["Site jusqu'à 8 pages, en français et en anglais", "Événements, privatisation, menus de saison", "Rapport de référencement chaque mois", "4 modifications par mois, en priorité"],
    points: [
      "Tout le Standard, avec un site jusqu'à 8 pages",
      "Site en 2 langues (français + anglais)",
      "Pages événements, privatisation, menus de saison",
      "Carte mise à jour sans limite",
      "Suivi du référencement et rapport chaque mois",
      "4 modifications de contenu par mois, traitées en priorité",
    ],
    cta: "Parler du Premium",
  },
];

// Ordre d'affichage des formules (sur mobile, le carrousel s'ouvre centré sur Standard)
export const desktopOrder: PlanId[] = ["essentiel", "standard", "premium"];

// « Ce qui compte pour vous » : chaque besoin indique la formule minimale qui le couvre.
export const needs: { id: string; label: string; plan: PlanId }[] = [
  { id: "trouve", label: "Carte et horaires", plan: "essentiel" },
  { id: "reservation", label: "Réservations en ligne", plan: "standard" },
  { id: "google", label: "Être vu sur Google", plan: "standard" },
  { id: "photos", label: "Galerie photos", plan: "standard" },
  { id: "anglais", label: "Site en anglais", plan: "premium" },
  { id: "evenements", label: "Événements", plan: "premium" },
];

const rank: Record<PlanId, number> = { essentiel: 0, standard: 1, premium: 2 };

// Formule la plus simple qui couvre tous les besoins cochés (null si rien n'est coché)
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
  "Nom de domaine",
  "Connexion sécurisée (HTTPS)",
  "Maintenance technique",
];

// WebVibes est en franchise de TVA : le prix affiché est le prix final, rien ne s'y ajoute.
export const PRICE_LABEL = "TTC";
export const legalNotice = "Prix TTC, réservés aux professionnels. TVA non applicable, art. 293 B du CGI.";

// Comparatif : true = inclus, false = non inclus, texte = valeur précise
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
      { label: "Galerie photos", values: { essentiel: false, standard: true, premium: true } },
      { label: "Pages événements, privatisation, menus de saison", values: { essentiel: false, standard: false, premium: true } },
      { label: "Langues", values: { essentiel: "Français", standard: "Français", premium: "Français + anglais" } },
    ],
  },
  {
    title: "Réservation",
    rows: [
      { label: "Par téléphone ou lien vers votre outil actuel", values: { essentiel: true, standard: true, premium: true } },
      {
        label: "Formulaire de demande de réservation",
        values: { essentiel: false, standard: true, premium: true },
        note:
          "Le formulaire envoie une demande : c'est vous qui la confirmez au client. Il indique comment les données sont utilisées et renvoie vers la politique de confidentialité de votre site.",
      },
    ],
  },
  {
    title: "Google",
    rows: [
      { label: "Référencement de base (technique, vitesse, balises)", values: { essentiel: true, standard: true, premium: true } },
      { label: "Référencement local : votre cuisine + votre ville", values: { essentiel: false, standard: true, premium: true } },
      { label: "Création ou optimisation de votre fiche Google", values: { essentiel: false, standard: true, premium: true } },
      { label: "Vos avis Google mis en avant sur le site", values: { essentiel: false, standard: true, premium: true } },
      { label: "Suivi du référencement et rapport mensuel", values: { essentiel: false, standard: false, premium: true } },
    ],
  },
  {
    title: "Mises à jour",
    rows: [
      { label: "Modifications de contenu par mois", values: { essentiel: "1", standard: "2", premium: "4, en priorité" } },
      { label: "Carte mise à jour sans limite", values: { essentiel: false, standard: false, premium: true } },
    ],
  },
];

// FAQ : [À COMPLÉTER] signale une réponse que seul WebVibes peut donner.
export const TODO = "[À COMPLÉTER]";

export const faq: { question: string; answer: string[] }[] = [
  {
    question: "Qu'est-ce qu'une modification de contenu ?",
    answer: [
      "C'est un changement que vous me demandez sur votre site : un plat qui change, de nouveaux horaires, une fermeture exceptionnelle, une photo à remplacer. Vous m'envoyez un message, je fais la mise à jour.",
      "Une demande peut regrouper plusieurs petits changements (ex: de nouveaux horaires + changer 2 prix). Si vous dépassez le nombre inclus dans votre formule, la modification sera reportée au mois suivant, ou facturée sur devis en cas d'urgence.",
    ],
  },
  {
    question: "Que comprennent les frais de création ?",
    answer: [
      "Tout le travail du départ : la conception du site, la mise en forme de vos textes et de vos photos, puis la mise en ligne. Vous les payez une seule fois.",
    ],
  },
  {
    question: "Ai-je quelque chose à faire moi-même ?",
    answer: [
      "Très peu. Au départ, vous me transmettez vos informations (carte, horaires, photos) et vous validez le site avant sa mise en ligne. Ensuite, vous m'envoyez un message quand quelque chose change. Je m'occupe du reste.",
    ],
  },
  {
    question: "Puis-je changer de formule ?",
    answer: ["Oui, vous pouvez passer à une formule supérieure ou inférieure à tout moment. La modification prendra effet le mois suivant, sans aucuns frais de création supplémentaires."],
  },
  {
    question: "Quelle est la durée d'engagement ?",
    answer: ["L'engagement initial est de 12 mois (ce qui vous donne accès au tarif affiché). Vous pouvez aussi opter pour une formule sans engagement pour 10 € TTC supplémentaires par mois, résiliable à tout moment."],
  },
];

// Engagement : les prix affichés (monthly) s'entendent avec un engagement de 12 mois.
// Sans engagement, un supplément mensuel s'ajoute, résiliable à tout moment.
export type Commitment = "engaged" | "free";
export const NO_COMMITMENT_SURCHARGE = 10; // € par mois
// Économie sur une année d'engagement par rapport à la formule sans engagement (calculée)
export const YEARLY_SAVING = NO_COMMITMENT_SURCHARGE * 12;
export const commitmentLabels: Record<Commitment, { toggle: string; short: string; note: string }> = {
  engaged: { toggle: "Engagement 12 mois", short: "12 mois", note: "Engagement 12 mois" },
  free: { toggle: "Sans engagement", short: "Sans engagement", note: "Résiliable à tout moment" },
};

// Utilitaires d'affichage
export const monthlyPrice = (plan: Plan, commitment: Commitment = "engaged") =>
  plan.monthly + (commitment === "free" ? NO_COMMITMENT_SURCHARGE : 0);

export const firstMonth = (plan: Plan, commitment: Commitment = "engaged") =>
  monthlyPrice(plan, commitment) + plan.setup;

// Centimes affichés seulement quand le montant n'est pas rond (ex. 106,80 €)
export const formatEuro = (amount: number) => {
  const round = Number.isInteger(amount);
  return `${new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: round ? 0 : 2,
    maximumFractionDigits: round ? 0 : 2,
  }).format(amount)} €`;
};

export const getPlan = (id: PlanId) => plans.find((p) => p.id === id)!;
