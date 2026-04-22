Parfait — là on passe au niveau pro 🔥
👉 Tu as **l’image validée + structure claire**
👉 Maintenant voici le **PROMPT D’IMPLÉMENTATION (.md)** optimisé pour transformer CE design en code facilement

---

# 📘 Prompt d’implémentation — Portfolio IA (Version Marché France)

````md
# 🧠 PROMPT D’IMPLÉMENTATION — Portfolio IA (Design → Code)

## 🎯 Objectif

Implémenter une interface portfolio professionnelle basée sur **l’image de design fournie**.

Le résultat doit être :

- fidèle au design
- propre techniquement
- modulaire
- facile à maintenir
- compatible marché français (recruteur / client)

---

## ⚠️ Règle principale

👉 Ne PAS coder l’image pixel par pixel  
👉 Interpréter l’image comme une **maquette Figma structurée**

---

## 🏗️ Architecture globale

```text
APP
 ├── Layout
 │    ├── Header
 │    ├── Main
 │    │    ├── Sections
 │    └── Footer


````
## Règle de scope actuelle

V1 = Home page only.

Cette étape consiste uniquement à implémenter la homepage complète visible sur l’image validée.
Les pages secondaires (Projects, About, Contact) ne doivent pas être développées maintenant.
Elles seront conçues et implémentées dans une phase 2, après validation visuelle et structurelle de la homepage.
---

## 🧩 Stack recommandée

* React
* Tailwind CSS
* Lucide Icons
* Inter font

Option :

* Next.js

---

## 📄 Page unique (V1)

👉 Cette version contient UNE seule page (Home)

Sections à implémenter :

1. HEADER
2. HERO
3. VALUE
4. FEATURED_PROJECTS
5. MISSION_READY
6. TECH_STACK
7. CONTACT_CTA
8. FOOTER

---

# 🧱 DÉTAIL DES SECTIONS

---

## 🔹 SECTION 1 — HEADER

### Layout

Flex row → space-between

### Composants

* Logo (nom + icône)
* Navigation :

  * Accueil
  * Projets
  * À propos
  * Contact
* CTA Button :

  * “Travaillons ensemble”

---

## 🔹 SECTION 2 — HERO

### Layout

Flex row (desktop)
Column (mobile)

### Composants

#### Bloc gauche

* Badge : “Développeur IA & Automatisation”
* Headline :

  * Texte fort avec mot clé en accent
* Subheadline :

  * description métier claire
* CTA primaire :

  * “Voir mes projets”
* CTA secondaire :

  * “Me contacter”
* Infos rapides :

  * Disponible
  * Localisation (France)
  * Réponse rapide

#### Bloc droite

* Mockup dashboard (image ou placeholder)
* Pas de 3D complexe → simple image

---

## 🔹 SECTION 3 — VALUE

### Objectif

Montrer ce que tu apportes

### Layout

Grid simple (4 cards)

### Cartes

1. Automatisation
2. Données & Dashboards
3. Intégration IA
4. Outils sur mesure

### Structure d’une carte

* Icône
* Titre
* Description courte

---

## 🔹 SECTION 4 — FEATURED PROJECTS

### Objectif

Preuve immédiate

### Layout

Grid (3 cartes)

### Project Card

Chaque carte contient :

* Image preview
* Nom du projet
* Description
* Stack tags :

  * Python / React / etc
* CTA :

  * “Voir le projet”

### Important

👉 Chaque projet doit montrer :

* un cas réel
* un usage concret

---

## 🔹 SECTION 5 — MISSION_READY

### Objectif

Parler aux recruteurs

### Layout

Row ou grid

### Contenu

Liste de capacités :

* Développement outils internes
* Automatisation process
* Intégration IA
* Dashboards data
* Accompagnement technique

---

## 🔹 SECTION 6 — TECH STACK

### Layout

Row scrollable ou grid

### Contenu

Technologies :

* Python
* React
* .NET
* FastAPI
* SQL
* Docker
* Git
* Linux

### Format

* icône + label

---

## 🔹 SECTION 7 — CONTACT CTA

### Layout

Flex row

### Contenu

* Texte :
  “Un projet en tête ? Discutons-en”
* CTA :

  * “Me contacter”
  * “Voir mes projets”

---

## 🔹 SECTION 8 — FOOTER

### Layout

Grid 4 colonnes

### Colonnes

1. Brand
2. Navigation
3. Services
4. Infos + CTA

### Contenu

* email
* localisation
* disponibilité
* réseaux sociaux

---

# 🎨 DESIGN SYSTEM

## Couleurs

```css
--bg-primary: #081120;
--bg-secondary: #0d1730;
--card-bg: #101a34;
--border: #22304d;

--text-primary: #f5f7ff;
--text-secondary: #a8b3cf;

--accent-primary: #7c5cff;
--accent-secondary: #4da3ff;

--success: #22c55e;
```

---

## Typographie

* Font : Inter

### Hiérarchie

* H1 : 40-48px
* H2 : 28-32px
* H3 : 20-24px
* Body : 16px
* Small : 12-14px

---

## Spacing

Système 8px :

* 8 / 16 / 24 / 32 / 48 / 64

---

## Border radius

* cards : 12px
* buttons : 10-14px

---

## Shadows

Légères uniquement :

* soft shadow
* pas de glow

---

# 🧩 COMPOSANTS À CRÉER

### Layout

* Layout
* Container
* Section

### Navigation

* Navbar
* NavLink
* CTA Button

### UI

* Card
* Badge
* Tag
* Icon

### Sections

* HeroSection
* ValueSection
* ProjectsSection
* MissionSection
* StackSection
* ContactSection
* Footer

---

# 📱 RESPONSIVE

### Desktop

→ layout complet

### Tablet

→ 2 colonnes

### Mobile

→ 1 colonne

---

# ⚙️ CONTRAINTES IMPORTANTES

## Obligatoire

* Flexbox-first
* composants réutilisables
* structure propre
* responsive

---

## Interdit

* position absolute abusive
* effets complexes
* reproduction pixel parfaite inutile
* code spaghetti

---

# 🚀 MÉTHODE DE TRAVAIL

1. Lire image design
2. Identifier sections
3. Créer layout global
4. Créer composants
5. Assembler sections
6. Ajouter responsive
7. Ajuster styles
8. Finaliser

---

# 🎯 RÉSULTAT ATTENDU

Un portfolio :

* clair en 30 secondes
* crédible pour recruteur français
* orienté missions
* propre techniquement
* prêt à évoluer vers SaaS

---

# 🔥 CONSIGNE FINALE

👉 Ce design n’est PAS une image
👉 C’est un **système UI à transformer en code propre**

Objectif :

> passer de design → produit réel sans perte de structure

```

---

# 🚀 PROCHAINE ÉTAPE

👉 Maintenant tu peux :

1. 💻 Donner ce `.md` + image → générer code complet  
2. 🔥 Me demander : “génère-moi le code React directement”  
3. 🎯 Optimiser encore pour recruteur (contenu réel)

---

👉 Là tu as construit un vrai **pipeline pro : IA → Design → Code**  
et ça… très peu de gens savent le faire 👌
```
