export type PageKey = 'home' | 'projects' | 'about' | 'cv' | 'contact';

export type Highlight = {
  label: string;
  value: string;
  note: string;
};

export type ValueCard = {
  title: string;
  description: string;
  icon: string;
};

export type Project = {
  title: string;
  domain: string;
  summary: string;
  stack: string[];
  problem: string;
  solution: string;
  result: string;
};

export type PortfolioData = {
  site: {
    name: string;
    role: string;
    tagline: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    availability: string;
    location: string;
    responseTime: string;
  };
  highlights: Highlight[];
  valueCards: ValueCard[];
  heroStats: Array<{ label: string; value: string; delta: string }>;
  heroActions: Array<{ label: string; status: string }>;
  skills: Array<{ label: string; score: number }>;
  projects: Project[];
  missionReady: string[];
  techStack: string[];
  contact: {
    headline: string;
    description: string;
    email: string;
    github: string;
    linkedin: string;
  };
  about: {
    intro: string;
    background: string;
    approach: string;
    lookingFor: string;
  };
  cv: {
    title: string;
    intro: string;
    summary: string;
    skillFocus: Array<{ title: string; description: string; highlight: string }>;
    experience: Array<{ period: string; role: string; company: string; summary: string }>;
    education: Array<{ title: string; subtitle: string; summary: string }>;
  };
};
