export type PageId =
  | 'home'
  | 'work'
  | 'about'
  | 'process'
  | 'experience'
  | 'contact'
  | string; // For publications, e.g. 'publication:manifesto'

export interface Project {
  id: string;
  num: string;
  name: string;
  tags: string[];
  blurb: string;
  gradient: string;
  link?: string;
  iconType: 'music' | 'grid' | 'plus' | 'circle' | 'chart' | 'heart';
  role?: string;
  stack?: string;
}

export interface Publication {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  content: string; // Markdown or rich text content
  accentGradient: string;
  coverImage?: string;
  
  // Roadmap metadata extensions
  version?: string;
  status?: 'Canonical' | 'Stable' | 'Experimental' | 'Revision';
  difficulty?: 'Introductory' | 'Intermediate' | 'Systemic' | 'Technical' | 'Advanced';
  wordCount?: number;
  executiveSummary?: string;
  takeaways?: string[];
  revisionHistory?: { date: string; version: string; note: string }[];
  bibliography?: string[];
}

export interface ProcessStep {
  num: string;
  title: string;
  body: string;
  iconType: 'discover' | 'define' | 'design' | 'deliver';
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  body: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
