# Prompt d'implémentation - Portfolio marché FR v2

## Rôle attendu

Tu es à la fois:

- un excellent intégrateur frontend,
- un designer produit orienté conversion,
- un architecte UI qui sait transformer une maquette en vrai site exploitable.

Tu dois implémenter un **portfolio public** pour un profil technique basé en France.

## Objectif produit

Le site doit aider un visiteur à comprendre rapidement:

- qui est la personne,
- ce qu'elle sait faire,
- pourquoi elle est utile,
- comment la contacter.

Le portfolio ne doit pas donner l'impression d'un site purement artistique, ni d'un SaaS trop marketing.
Il doit ressembler à un **portfolio professionnel marché-compatible**, lisible par:

- recruteurs,
- entreprises,
- clients freelance,
- responsables techniques.

## Positionnement à respecter

Le message principal doit être:

> Développeur Python orienté automatisation et IA appliquée, capable de livrer vite des outils métier utiles et fiables.

Les couches secondaires peuvent ajouter:

- gouvernance IA,
- bio-inspired thinking,
- orchestration de workflows,
- capacité à travailler sur plusieurs domaines.

## Contraintes de fond

### À faire

- rester clair, concret et lisible,
- montrer des preuves rapides,
- garder une hiérarchie visuelle forte,
- rendre le contact évident,
- privilégier les cas d'usage réels,
- utiliser un ton professionnel, sobre et crédible.

### À éviter

- le marketing trop agressif,
- les promesses vagues,
- le jargon IA sans traduction métier,
- les pages trop nombreuses pour la première version,
- les blocs décoratifs sans utilité,
- les effets visuels non justifiables en code simple.

## Structure du site V1

La V1 doit rester simple.

### Pages à produire en priorité

1. Home
2. Projects / Case Studies
3. About
4. Contact

### Pages secondaires plus tard

- Products
- Services
- Blog
- Product Detail

## Logique de la homepage

La homepage doit répondre en quelques secondes à:

- qui je suis,
- ce que je construis,
- pourquoi me contacter.

### Sections attendues

#### 1. Hero

Composants:

- badge de positionnement,
- grand titre clair,
- sous-titre orienté valeur,
- 2 CTA maximum,
- visuel abstrait ou dashboard simple.

Message attendu:

> Je transforme des besoins métier en outils simples et fiables.

#### 2. Proof / Highlights

3 à 4 cartes courtes qui montrent:

- automatisation,
- outils métier,
- IA appliquée,
- clarté du positionnement.

#### 3. Skills / Capability

Montrer rapidement:

- Python,
- IA appliquée,
- automatisation,
- outils métier,
- React si utile,
- data / documents / workflows.

#### 4. Selected Projects

Afficher seulement 3 projets piliers.

Chaque projet doit montrer:

- contexte,
- rôle,
- impact,
- stack,
- lien ou CTA.

#### 5. Market Readiness

Expliquer clairement ce que la personne peut faire pour une entreprise:

- outils internes,
- automatisation,
- traitement de données,
- génération de documents,
- workflows IA.

#### 6. Contact CTA

Le contact doit être visible, direct et simple.

## Structure des cartes projet

Chaque projet doit contenir:

- titre,
- domaine,
- contexte,
- rôle,
- impact,
- stack,
- lien.

### Exemple de logique

Mauvais:

- "assistant IA révolutionnaire"

Meilleur:

- "Assistant IA de tri documentaire pour accélérer l'analyse de contenus métier"

## Design system attendu

### Style visuel

- dark mode professionnel,
- coins arrondis,
- ombres douces,
- gradients légers,
- ambiance premium sans surcharge.

### Palette

Garder une base sombre avec accents:

- violet doux,
- bleu profond,
- turquoise léger,
- or / beige léger en accent ponctuel.

### Typographie

- titres forts,
- texte de corps lisible,
- hiérarchie nette,
- pas plus de 2 familles typographiques.

### Espacement

Basé sur une grille simple et cohérente.

### Responsive

- desktop: structure complète,
- tablet: colonnes simplifiées,
- mobile: empilement propre et lisible.

## Ce qu'on veut voir dans les visuels

Le design doit suggérer:

- compétence,
- confiance,
- clarté,
- modernité,
- simplicité d'usage.

Il ne doit pas suggérer:

- un univers trop startup,
- un style trop "science-fiction",
- une déco sans fonction,
- un portfolio de développeur générique.

## Animation

Autoriser seulement:

- micro-animations,
- hover léger,
- apparition douce,
- transitions propres.

Interdire:

- animations lourdes,
- déplacements excessifs,
- effets brillants inutiles.

## Structure technique recommandée

### Pour le lab

Utiliser:

- `index.html`
- `projects.html`
- `styles.css`
- `app.js`

### Pour le vrai projet

Reprendre la version validée en:

- React,
- composants réutilisables,
- structure lisible,
- code maintenable.

## Ordre d'implémentation

1. Construire le hero
2. Construire les cartes de preuve
3. Construire la section skills
4. Construire les projets piliers
5. Construire la section marché / readiness
6. Construire le contact
7. Tester le responsive
8. Ajuster le rythme visuel
9. Valider le rendu final

## Critère de réussite

Le site est bon si un recruteur ou un client peut dire en moins de 10 secondes:

- ce que la personne fait,
- ce qu'elle résout,
- pourquoi elle est crédible,
- comment la contacter.

## Consigne finale

Tu ne dois pas produire un site trop large ni trop bavard.

Tu dois produire un **portfolio marché-compatible**, clair, élégant et orienté preuve.

Le but n'est pas de faire un beau site.

Le but est de faire un site qui **ouvre des portes**.

