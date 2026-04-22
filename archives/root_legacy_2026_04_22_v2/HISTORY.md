# Historique de l'évolution du Portfolio Bio-Inspiré

Ce document sert de fil d'Ariane pour suivre l'évolution architecturale et visuelle du projet, particulièrement lors de l'utilisation d'assistants IA.

## Lignée des Versions

| Version | État | Format | Description / Changements Clés |
| :--- | :--- | :--- | :--- |
| **1.0** | Initiale | - | Fondation du concept bio-inspiré. |
| **1.5** | Archivée | HTML | Portfolio Page d'accueil et Page 2. Correction 1.5. |
| **2.1** | Archivée | ZIP | Évolution vers une structure plus modulaire (`bio-inspired-portfolio 2.1`). |
| **2.2** | Archivée | ZIP | Amélioration de l'UI et des patterns techniques (`bio-inspired-portfolio2.2`). |
| **2.3** | Archivée | Repo Git | Version stable précédente avec Clean Architecture (`application/`, `domain/`, `infrastructure/`, `presentation/`). |
| **2.4** | **Actuelle** | Repo Git | Nouvelle base séparée orientée recrutement, React statique et déploiement gratuit. |

## Organisation du Répertoire

- `/archives` : Contient les anciennes versions sous format ZIP pour une restauration rapide si nécessaire.
- `/docs` : Spécifications techniques et assets de design.
- `/historique` : Emplacement pour les snapshots de code spécifiques ou les journaux d'évolution IA.

## Stratégie de Gestion (Recommandations)

1. **Git pour la 2.4** : Toutes les modifications actuelles sont suivies via Git dans ce repo séparé. Utiliser `git tag v2.x` pour marquer les étapes importantes.
2. **Snapshots Manuels** : Si une évolution majeure via l'IA est tentée, créer un commit avec le message `[IA-SNAPSHOT] Avant refactor X`.
3. **Répertoire Historique** : Déplacer les documents d'analyse générés par l'IA dans `/historique` pour garder une trace de la réflexion (Prompt Pipeline).

---
*Dernière mise à jour : 19 Avril 2026*
