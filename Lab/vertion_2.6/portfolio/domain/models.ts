export enum View {
  ACCUEIL = 'ACCUEIL',
  PROJETS = 'PROJETS',
  A_PROPOS = 'A_PROPOS',
  CONTACT = 'CONTACT',
  TECH_PYTHON = 'TECH_PYTHON',
}

export interface TechSkill {
  name: string;
  iconKey: string;
  color: string;
}

export type ProjectStatus = 'completed' | 'in-progress' | 'future' | 'secret';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  gallery?: string[];
  color: string;
  tags: string[];
  isFeatured: boolean;
  status: ProjectStatus;
  isResearch?: boolean;
  link?: string;
  linkText?: string;
  layout?: 'standard' | 'wide' | 'tall';
  alignment?: 'left' | 'center';
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  iconKey: string;
  color: string;
  layout?: 'standard' | 'wide';
}
