
import { Project, TechSkill, Article } from '../../domain/models';

export const skills: TechSkill[] = [
  { name: 'PYTHON', iconKey: 'python', color: 'text-[#3776AB]' },
  { name: 'IA APPLIQUÉE', iconKey: 'brain', color: 'text-brand-cyan' },
  { name: 'AUTOMATISATION', iconKey: 'robot', color: 'text-brand-orange' },
  { name: 'REACT', iconKey: 'react', color: 'text-brand-cyan' },
  { name: 'C#/.NET', iconKey: 'csharp', color: 'text-[#512BD4]' },
  { name: 'SQL / DATA', iconKey: 'chart', color: 'text-brand-indigo' },
];

export const workflowTools: TechSkill[] = [
    { name: 'GIT', iconKey: 'git', color: 'text-brand-orange' },
    { name: 'CLI & TERMINAL', iconKey: 'terminal', color: 'text-gray-400' },
    { name: 'DOCKER', iconKey: 'docker', color: 'text-brand-cyan' }
];

export const projects: Project[] = [
  {
    id: 'py-1',
    title: 'Pipeline d’automatisation des données',
    description: 'Traitement automatisé des imports, nettoyage et enrichissement de données pour réduire les tâches manuelles et fiabiliser la qualité.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&w=800&q=80',
    color: 'brand-cyan',
    tags: ['PYTHON', 'SQL / DATA', 'AUTOMATISATION'],
    isFeatured: true,
    status: 'completed',
    linkText: 'Voir le pipeline'
  },
  {
    id: 'ai-1',
    title: 'Assistant IA pour support client',
    description: 'Assistant interne pour répondre aux demandes récurrentes, proposer des réponses guidées et accélérer le support.',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    color: 'brand-orange',
    tags: ['IA APPLIQUÉE', 'PYTHON', 'OPENAI'],
    isFeatured: true,
    status: 'completed',
    linkText: 'Voir l’assistant'
  },
  {
    id: 're-1',
    title: 'Dashboard analytique commercial',
    description: 'Tableau de bord pour suivre les ventes, les KPI et les tendances de performance dans une vue claire et exploitable.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    color: 'brand-indigo',
    tags: ['REACT', 'DATA', 'KPI'],
    isFeatured: true,
    status: 'completed',
    linkText: 'Voir le dashboard'
  },
  {
    id: 'cs-1',
    title: 'Outil interne de facturation et documents',
    description: 'Application métier pour structurer des informations, générer des PDF et accélérer les opérations répétitives.',
    imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80',
    color: 'brand-orange',
    tags: ['PYTHON', 'OUTILS MÉTIER', 'PDF'],
    isFeatured: false,
    status: 'completed'
  },
  {
    id: 'cs-2',
    title: 'Gestion structurée de données produit',
    description: 'Organisation et enrichissement de données produit avec QR code, DPP et contrôles de cohérence.',
    imageUrl: 'https://images.unsplash.com/photo-1556742205-9f0f0b9b1b43?auto=format&fit=crop&w=800&q=80',
    color: 'brand-cyan',
    tags: ['DATA', 'PYTHON', 'QR CODE'],
    isFeatured: false,
    status: 'in-progress',
    linkText: 'Voir le cas'
  },
  {
    id: 'net-1',
    title: 'Prototype web d’outils métiers',
    description: 'Interface orientée entreprise pour centraliser des actions, améliorer la lisibilité et réduire les pertes de temps.',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
    color: 'brand-indigo',
    tags: ['REACT', '.NET', 'OUTILS MÉTIER'],
    isFeatured: false,
    status: 'future'
  }
];

export const articles: Article[] = [
  {
    id: 'art-1',
    title: 'Automatisation Python pour les équipes métier',
    excerpt: 'Passer d’Excel et de tâches répétitives à des outils simples, fiables et documentés.',
    iconKey: 'robot',
    color: 'text-brand-cyan'
  },
  {
    id: 'art-2',
    title: 'IA appliquée: utile avant d’être spectaculaire',
    excerpt: 'Comment intégrer l’IA comme accélérateur de travail sans perdre la rigueur ni le contrôle.',
    iconKey: 'brain',
    color: 'text-brand-orange'
  },
  {
    id: 'art-3',
    title: 'Construire un portfolio lisible par le marché',
    excerpt: 'Un portfolio doit montrer le problème, la solution et le résultat, pas seulement la technique.',
    iconKey: 'chart',
    color: 'text-brand-indigo'
  }
];
