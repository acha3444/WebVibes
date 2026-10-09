# Éléments à compléter (WebVibes)

Tout ce que je ne peux pas inventer à ta place est listé ici, du plus urgent au moins urgent.
Pour chaque point : la question, où le changer, et pourquoi c'est important.
Coche `[x]` au fur et à mesure. Une fois tout rempli, tu pourras supprimer ce fichier.

---

## 1. Urgent : réponses de la page Tarifs

La FAQ de `/tarifs` affiche un marqueur vert **[À COMPLÉTER]** visible par tes visiteurs tant que ces réponses manquent.
À modifier dans `src/data/tarifs.ts`, tableau `faq` (en bas du fichier).

- [x] **Durée d'engagement** : combien de temps le client est-il engagé (12 mois ? sans engagement ?), comment se renouvelle l'abonnement, quel préavis pour résilier ?
- [x] **Nom de domaine** : il est enregistré au nom de qui ? Qui le renouvelle et le paie ? Que devient-il si le client arrête ?
- [x] **Changer de formule** : peut-on monter ou descendre de formule ? À quel moment ? Des frais de création s'ajoutent-ils ?
- [x] **Modification de contenu** : une demande avec plusieurs changements compte-t-elle pour une seule ? Que se passe-t-il au-delà du nombre prévu dans le mois (refusé, reporté, facturé) ?

---

## 2. Urgent : informations contradictoires sur le site

Le site dit aujourd'hui des choses différentes selon les pages. Un client (ou un juge, en cas de litige) peut s'appuyer sur ce qui est écrit.

- [x] **Quel prix de départ ?** Les nouveaux tarifs commencent à **79 € HT/mois**, mais « dès 99 €/mois » est encore écrit ici :
  - `src/app/layout.tsx` : description Google de l'accueil (lignes `description`) ;
  - `src/app/site-internet-artisan/page.tsx` : description Google et titre « pour 99€/mois ».
  → Dis-moi si l'offre artisans a son propre prix (99 €) ou si tout passe à 79 € HT.
- [ ] **Engagement** : la FAQ de l'accueil (`src/app/page.tsx`, question « Et si je veux arrêter le suivi ? ») dit « L'offre est sans engagement… sans aucune pénalité ». Or la page Tarifs dit maintenant : engagement 12 mois au prix affiché, ou sans engagement pour +10 € HT/mois. À réécrire dans ce sens. Il me manque une info : **que se passe-t-il si un client engagé 12 mois veut partir avant la fin ?** (il paie les mois restants, des frais fixes, rien ?)
- [ ] **Propriété** : la FAQ de l'accueil (question « Le site est-il à moi ? ») dit « Vous êtes 100% propriétaire de votre nom de domaine et de votre site ». À confirmer, ou à corriger avec ta réponse du point 1.
- [ ] **Délai de 48 h** : annoncé dans la FAQ de l'accueil (« en ligne sous 48h ») et sur la page artisans (« prête dans 48h », « Sous 48 heures »). Peux-tu le tenir à chaque fois ? Sinon, donne-moi un délai réaliste.
- [ ] **Badge « Le plus choisi »** sur la formule Standard (`src/data/tarifs.ts`, `featured`) : c'est vrai aujourd'hui ? Si tu n'as pas encore assez de clients pour le dire, remplace par « Recommandé ».
- [ ] **Public visé** : l'accueil parle à tous les commerces de quartier (bouchers, primeurs…), la page Tarifs parle uniquement de restaurants. Les tarifs valent-ils pour tous les commerces ?

---

## 3. Obligatoire : identité légale et TVA

Sans ces infos, je ne peux pas rédiger les mentions légales (obligatoires pour tout site professionnel).

- [ ] **Nom légal et forme** : entreprise individuelle, micro-entreprise, SASU… et le nom de la personne ou de la société.
- [ ] **SIRET** (ou SIREN).
- [ ] **Adresse professionnelle** (une domiciliation suffit).
- [ ] **E-mail et téléphone de contact** : le site n'en affiche aucun aujourd'hui (le pied de page n'a que « Demander un devis »).
- [ ] **Régime de TVA** : es-tu en franchise de TVA (micro-entreprise) ou assujetti ?
  → Si franchise : j'ajoute « TVA non applicable, art. 293 B du CGI » à côté des prix HT.
  → Si assujetti : donne-moi ton numéro de TVA intracommunautaire.
- [ ] **Hébergeur du site** : nom, adresse et téléphone de l'hébergeur (mention obligatoire dans les mentions légales).

---

## 4. Obligatoire : pages légales à créer

Ces liens existent déjà dans le pied de page et sous le formulaire de devis, mais mènent à une page d'erreur.
Une fois les infos du point 3 fournies, je peux les créer.

- [ ] **Mentions légales** (`/mentions-legales`).
- [ ] **Politique de confidentialité** (`/confidentialite`). Il me faut :
  - les outils qui reçoivent les données des visiteurs (aujourd'hui : Zoho CRM pour le devis, Zoho Bookings pour les rendez-vous) ;
  - combien de temps tu gardes une demande de devis sans suite ;
  - l'adresse e-mail où un visiteur peut demander la suppression de ses données.

---

## 5. Contenus fictifs à valider ou remplacer

Ces exemples servent à illustrer. Ils sont inventés, ce qui est normal pour une démo, mais vérifie qu'ils te conviennent.

- [ ] **Téléphone de l'accueil** (`src/components/motion/HeroPhone.tsx`) : « Boucherie Martin », ses horaires et son adresse « Rue des Halles ».
- [ ] **Démos** (`src/components/demos/DemoMockups.tsx`) : « Maison Roux », « Les Paniers de Léa », « Le Comptoir », leurs produits et leurs prix.
- [ ] **Section « C'est mon rôle »** (`src/components/motion/SmsUpdate.tsx`) : le SMS « arrivage de bulots » et les heures 08:14 / 08:16.

---

## Médias
- **Logo** : place ton fichier image (sans le déformer) dans le dossier `public/` et renomme-le `logo.png`. Il est appelé dans l'en-tête et le pied de page.

## Intégrations techniques
- **Formulaire de devis** : connecté à Zoho CRM (WebToContactForm). Si tu ajoutes de nouveaux champs dans Zoho, pense à les relier dans la fonction `sendQuoteAction` de `src/app/page.tsx`.
- **Lien de rendez-vous** : défini une seule fois dans `src/data/site.ts` (`BOOKING_URL`). Si ton lien Zoho Bookings change, c'est le seul endroit à modifier.
- **Prix et formules** : tout est dans `src/data/tarifs.ts` (prix, points des cartes, comparatif, FAQ, besoins « Ce qui compte pour vous »). Pas besoin de toucher à la mise en page.
