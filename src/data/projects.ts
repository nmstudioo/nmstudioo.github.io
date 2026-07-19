import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'fighting-death',
    num: '01',
    name: 'Fighting Death — Metal Album',
    tags: ['Music Production', 'AI Direction'],
    blurb: 'A nine-track AI-assisted metal album where I acted as composer and creative director — using iterative prompt engineering to shape atmosphere, structure, and narrative pacing across every song.',
    gradient: 'linear-gradient(135deg, #1a0a3c 0%, #3b1fa3 100%)',
    iconType: 'music',
    link: '#/publications/metal-ai-music-no-limits',
    role: 'Creative Director',
    stack: 'AI-assisted DAW'
  },
  {
    id: 'ai-prompt-systems',
    num: '02',
    name: 'Advanced AI Prompt Systems',
    tags: ['AI Systems', 'Prompt Engineering'],
    blurb: 'A growing collection of reusable prompt architectures for reasoning, role engineering, and workflow chaining — now the foundation of nearly every technical and creative project I build.',
    gradient: 'linear-gradient(135deg, #0a1a2e 0%, #0d4a7a 100%)',
    iconType: 'grid',
    link: '#/publications/ai-assisted-creative-workflow',
    role: 'System Architect',
    stack: 'Prompt Chaining'
  },
  {
    id: 'this-portfolio',
    num: '03',
    name: 'This Dynamic Portfolio',
    tags: ['Frontend Dev', 'UI/UX'],
    blurb: 'A fully responsive site built to reflect how I think — every animation, spacing system, and interaction refined to balance elegance with usability across devices.',
    gradient: 'linear-gradient(135deg, #0d2a1a 0%, #1a6640 100%)',
    iconType: 'plus',
    link: '#/publications/typography-spacing-system',
    role: 'UI Designer & Dev',
    stack: 'React, TS, Tailwind'
  },
  {
    id: 'web-interfaces',
    num: '04',
    name: 'Responsive Web Interfaces',
    tags: ['Frontend Dev', 'Web'],
    blurb: 'An evolving set of layouts and university projects exploring component-based thinking, responsive grids, and interaction patterns that document my growth as a developer.',
    gradient: 'linear-gradient(135deg, #1a1200 0%, #4a3300 100%)',
    iconType: 'circle',
    link: '#/publications/via-browser-optimization',
    role: 'Frontend Engineer',
    stack: 'HTML5, CSS, ES6+'
  },
  {
    id: 'research-academic',
    num: '05',
    name: 'Research & Academic Projects',
    tags: ['Research', 'Digital Media'],
    blurb: 'Analytical and presentation-driven university work spanning literature, digital communication, and multimedia — sharpening how I organize and communicate complex ideas.',
    gradient: 'linear-gradient(135deg, #0a0a1e 0%, #200a4a 100%)',
    iconType: 'chart',
    link: '#/publications/personal-brand-digital-identity',
    role: 'Academic Researcher',
    stack: 'Textual Semiotics'
  },
  {
    id: 'android-optimization',
    num: '06',
    name: 'Android Customization & Optimization',
    tags: ['Systems', 'Android'],
    blurb: 'An ongoing personal initiative into performance tuning, UI customization, and privacy — prioritizing practical, stable improvements over unnecessary modification.',
    gradient: 'linear-gradient(135deg, #1a000a 0%, #4a0020 100%)',
    iconType: 'heart',
    link: '#/publications/android-customization-framework',
    role: 'Systems Optimizer',
    stack: 'AOSP, ADB Scripting'
  }
];
