Oui, tu as raison.
Cette fois je te donne **le prompt d’implémentation en format Markdown (.md)**, pour que tu puisses fournir :

* **les images de design**
* **ce prompt d’implémentation**
* puis laisser une autre IA coder derrière

Voici une version propre, détaillée et orientée implémentation.

````md
# Prompt d’implémentation — Portfolio produit IA / SaaS

## Objectif

Tu dois implémenter un portfolio professionnel orienté **vente de services et produits IA**, en te basant sur les **images de design fournies** comme source visuelle principale.

Le résultat attendu n’est **pas un simple site personnel**, mais un **portfolio produit** capable de :

- présenter une expertise claire
- vendre des services IA / automatisation / développement SaaS
- mettre en avant des produits et cas d’usage
- convertir un visiteur en prospect ou client

Le design fourni doit être interprété comme une **maquette Figma-like**, donc l’implémentation doit rester :

- propre
- modulaire
- fidèle à la hiérarchie visuelle
- facile à maintenir
- cohérente avec les capacités réelles du HTML/CSS/React

---

## Règle fondamentale

**Le design doit être implémenté comme un vrai système UI, pas comme une image décorative.**

Cela signifie :

- respecter la structure `Layout > Section > Component`
- éviter les effets artistiques non codables
- transformer chaque bloc visible en composant réutilisable
- conserver une cohérence proche d’un design system Figma

---

## Stack recommandée

Implémentation recommandée :

- **React**
- **Tailwind CSS**
- optionnel : **Next.js**
- icônes : **Lucide React**
- animations légères : **Framer Motion**
- police : **Inter**
- graphiques si besoin : **Recharts**

Si une autre stack est demandée plus tard, conserver exactement la même architecture UI.

---

## Structure globale du site

Le portfolio est composé de **7 pages principales**.

### 1. Home page
Page principale de conversion.

### 2. Products page
Page listant les produits, outils, mini-SaaS et solutions.

### 3. Services page
Page orientée offre de services.

### 4. About page
Page de présentation professionnelle et positionnement.

### 5. Blog page
Page de contenu, articles, réflexion produit, IA, automatisation.

### 6. Contact page
Page dédiée à la prise de contact.

### 7. Product Detail page
Page dynamique dédiée à un produit précis.

---

## Architecture UI globale

Chaque page suit cette logique :

```text
PAGE
 ├── LAYOUT
 │    ├── HEADER
 │    ├── MAIN
 │    │    ├── SECTION
 │    │    │    ├── COMPONENT
 │    │    │    ├── COMPONENT
 │    │    │    └── COMPONENT
 │    └── FOOTER
````

---

## Layout global partagé

### Header global

Présent sur toutes les pages.

**Composants :**

* logo / marque
* navigation principale
* bouton CTA principal

**Navigation recommandée :**

* Home
* Products
* Services
* About
* Blog
* Contact

**CTA recommandé :**

* Work With Me
* Start Your Project
* Let’s Talk

### Footer global

Présent sur toutes les pages.

**Composants :**

* bloc marque
* liens rapides
* ressources
* services
* mini CTA
* copyright
* réseaux sociaux

---

## Page 1 — Home page

### Objectif

Faire comprendre immédiatement :

* qui tu es
* ce que tu construis
* quelle valeur tu apportes
* pourquoi on doit travailler avec toi

### Nombre de sections

La Home page contient **8 sections principales**.

### Structure détaillée

#### SECTION 1 — HEADER

Composants :

* logo
* nav links
* CTA button

#### SECTION 2 — HERO

Composants :

* badge de positionnement
* headline principal
* subheadline
* CTA primaire
* CTA secondaire
* visuel produit / dashboard / aperçu SaaS

**Rôle :**
positionnement fort et commercial.

**Exemple de message :**
“I build AI-powered tools that solve real problems and create business value.”

#### SECTION 3 — VALUE SECTION

Composants :

* titre de section
* sous-texte
* 4 cartes de valeur

**Cartes recommandées :**

* AI Automation
* Data & Analytics
* SaaS Development
* System Integration

#### SECTION 4 — PRODUCTS & SOLUTIONS

Composants :

* titre
* description
* bouton “View All Products”
* grille de cartes produit

**Chaque Product Card contient :**

* image / aperçu
* nom du produit
* description courte
* tags techno
* lien / CTA

#### SECTION 5 — HOW IT WORKS

Composants :

* titre
* sous-titre
* 4 étapes

**Étapes recommandées :**

1. Analyze
2. Design
3. Build
4. Deploy & Automate

#### SECTION 6 — TRUST SECTION

Composants :

* statistiques / preuves
* cartes KPI

**Exemples :**

* projets livrés
* heures gagnées
* clients satisfaits
* taux de réussite
* technologies maîtrisées

#### SECTION 7 — TESTIMONIALS

Composants :

* titre
* sous-titre
* 3 cartes témoignage

**Chaque carte contient :**

* citation
* avatar
* nom
* rôle
* note ou étoiles

#### SECTION 8 — CONTACT CTA

Composants :

* bloc texte
* bénéfices
* formulaire de contact
* bouton d’envoi

---

## Page 2 — Products page

### Objectif

Montrer clairement les solutions disponibles.

### Nombre de sections

**6 sections**

### Structure

#### SECTION 1 — HEADER

#### SECTION 2 — PAGE HERO

* titre
* description
* filtres éventuels

#### SECTION 3 — FILTER / CATEGORY BAR

* filtres par type
* tags
* recherche éventuelle

#### SECTION 4 — PRODUCTS GRID

* grille de cartes produit

#### SECTION 5 — CTA SECTION

* proposition commerciale
* bouton de contact

#### SECTION 6 — FOOTER

### Product Card standard

Chaque carte doit contenir :

* nom
* description
* problème résolu
* stack
* CTA principal
* état éventuel : demo / case study / private / experimental

---

## Page 3 — Services page

### Objectif

Vendre des prestations.

### Nombre de sections

**6 sections**

### Structure

#### SECTION 1 — HEADER

#### SECTION 2 — PAGE HERO

* titre orienté service
* sous-texte
* CTA

#### SECTION 3 — SERVICES LIST

Cartes de services.

**Services recommandés :**

* AI Automation
* SaaS MVP Development
* Internal Tools
* Data Visualization
* Workflow Optimization
* AI Integration for SMB

#### SECTION 4 — PROCESS / APPROACH

Décrire ta méthode.

#### SECTION 5 — CTA SECTION

* appel à action
* bouton de prise de contact

#### SECTION 6 — FOOTER

---

## Page 4 — About page

### Objectif

Créer la confiance sans tomber dans le CV classique.

### Nombre de sections

**6 sections**

### Structure

#### SECTION 1 — HEADER

#### SECTION 2 — ABOUT HERO

* titre
* résumé
* portrait / visuel simple

#### SECTION 3 — SKILLS & EXPERTISE

* cartes ou listes
* technologies
* domaines d’expertise

#### SECTION 4 — EXPERIENCE / JOURNEY

* frise ou blocs
* évolution
* approche produit

#### SECTION 5 — VALUES

* façon de travailler
* vision produit
* valeur pour le client

#### SECTION 6 — FOOTER

---

## Page 5 — Blog page

### Objectif

Montrer expertise, réflexion et crédibilité.

### Nombre de sections

**6 sections**

### Structure

#### SECTION 1 — HEADER

#### SECTION 2 — PAGE HERO

#### SECTION 3 — CATEGORY BAR

#### SECTION 4 — POSTS GRID

Chaque carte article contient :

* titre
* extrait
* catégorie
* date
* temps de lecture

#### SECTION 5 — NEWSLETTER CTA

#### SECTION 6 — FOOTER

---

## Page 6 — Contact page

### Objectif

Transformer l’intérêt en prise de contact.

### Nombre de sections

**5 sections**

### Structure

#### SECTION 1 — HEADER

#### SECTION 2 — PAGE HERO

* titre
* phrase rassurante
* sous-texte

#### SECTION 3 — CONTACT FORM

Champs :

* nom
* email
* type de projet
* message

#### SECTION 4 — INFO SECTION

* email
* LinkedIn
* GitHub
* délai de réponse
* type de collaboration

#### SECTION 5 — FOOTER

---

## Page 7 — Product Detail page

### Objectif

Présenter un produit de manière convaincante.

### Nombre de sections

**7 sections**

### Structure

#### SECTION 1 — HEADER

#### SECTION 2 — PRODUCT HERO

* nom produit
* tagline
* CTA principal
* CTA secondaire
* capture ou aperçu

#### SECTION 3 — PROBLEM / SOLUTION

* problème
* solution
* bénéfices

#### SECTION 4 — FEATURES

* liste de fonctionnalités
* cartes feature

#### SECTION 5 — TECH STACK

* stack utilisée
* architecture simple

#### SECTION 6 — SCREENSHOTS / DEMO

* captures
* aperçu interface

#### SECTION 7 — CTA SECTION

* conclusion
* CTA d’action

---

## Design system à respecter

### Style global

Le style doit rester :

* premium
* moderne
* orienté SaaS
* lisible
* dark mode professionnel

### Palette couleur estimée

Les couleurs doivent rester cohérentes avec la maquette fournie.

**Couleurs principales estimées :**

* fond principal : bleu nuit très sombre
* fond secondaire : bleu sombre légèrement plus clair
* violet principal : pour CTA et accents
* bleu/cyan secondaire : pour éléments actifs
* texte principal : blanc cassé
* texte secondaire : gris bleuté
* bordures : bleu sombre discret

### Tokens suggérés

```css
--bg-primary: #081120;
--bg-secondary: #0d1730;
--panel: #101a34;
--panel-2: #12203d;
--border: #22304d;
--text-primary: #f5f7ff;
--text-secondary: #a8b3cf;
--accent-primary: #7c5cff;
--accent-primary-hover: #6f4df0;
--accent-secondary: #4da3ff;
--success: #22c55e;
```

Ces valeurs peuvent être ajustées légèrement pour coller au rendu final, mais l’esprit visuel doit rester identique.

---

## Typographie

### Police

* Inter

### Hiérarchie recommandée

* H1 : très grand, gras, impactant
* H2 : grand, fort
* H3 : titre de sous-bloc
* Body : 16px environ
* Small text : 12px à 14px

### Règles

* excellente lisibilité
* pas de style décoratif inutile
* contraste fort entre titre, texte secondaire et labels

---

## Système d’espacement

Utiliser un système basé sur **8px**.

### Valeurs recommandées

* 8
* 16
* 24
* 32
* 40
* 48
* 64
* 80

### Règle

Ne pas utiliser de spacing arbitraire sauf nécessité exceptionnelle.

---

## Rayons de bordure

Rayons cohérents et modernes :

* petits éléments : 8px
* cartes / inputs : 12px à 16px
* CTA larges : 14px à 18px

---

## Ombres

Ombres légères uniquement.

Objectif :

* profondeur subtile
* rendu moderne
* pas d’effet glow excessif

---

## Composants à créer

Créer les composants réutilisables suivants.

### Layout

* `SiteHeader`
* `SiteFooter`
* `PageContainer`
* `SectionContainer`

### Navigation

* `NavLink`
* `PrimaryCTAButton`
* `SecondaryButton`

### Hero

* `HeroSection`
* `HeroBadge`
* `HeroVisual`

### Cards

* `ValueCard`
* `ProductCard`
* `TestimonialCard`
* `StatCard`
* `ServiceCard`
* `BlogCard`
* `FeatureCard`

### Contact

* `ContactForm`
* `InputField`
* `SelectField`
* `TextareaField`

### Utility

* `SectionTitle`
* `SectionSubtitle`
* `Tag`
* `StatusBadge`

---

## Contraintes d’implémentation

### Obligatoire

* composants réutilisables
* architecture propre
* sections bien séparées
* responsive desktop / tablet / mobile
* accessibilité de base
* états hover / focus / active

### Interdit

* coder en copiant l’image pixel par pixel
* placer les éléments de façon absolue sans logique
* créer des composants jetables
* casser la hiérarchie visuelle
* ajouter des effets artistiques non présents dans la maquette

---

## Responsive

Prévoir trois niveaux :

### Desktop

Version principale, fidèle à l’image.

### Tablet

Réorganisation logique des colonnes.

### Mobile

Empilement vertical, simplification propre.

---

## Animations

Autoriser seulement des animations légères :

* hover buttons
* apparition douce
* léger translateY
* opacity

Interdire :

* animations lourdes
* effets parasites
* transitions agressives

---

## Méthode de travail attendue

1. Lire les images de design fournies
2. Identifier les layouts
3. Identifier les sections
4. Identifier les composants
5. Créer le design system minimal
6. Construire les composants réutilisables
7. Assembler les pages
8. Ajuster responsive
9. Vérifier cohérence visuelle
10. Finaliser

---

## Résultat attendu

Le résultat final doit ressembler à un **portfolio SaaS premium**, capable de :

* valoriser des produits
* vendre des services
* rassurer un client
* montrer un positionnement expert
* rester simple à maintenir côté code

---

## Consigne finale

Ne pas interpréter les images comme une illustration artistique.
Les interpréter comme une **maquette produit structurée**.

Chaque partie visible doit être convertie en :

* layout
* section
* composant
* style réutilisable

L’objectif n’est pas de reproduire une image.
L’objectif est de **construire un vrai produit web fidèle à la maquette**.

```

Je peux maintenant te faire une **version encore plus forte**, sous forme de vrai document prêt à donner à une IA ou à un développeur, avec :

- `arbres des pages`
- `liste exacte des composants`
- `naming conventions`
- `structure des dossiers React`
- `ordre d’implémentation`

pour que ce soit directement exploitable.
```
