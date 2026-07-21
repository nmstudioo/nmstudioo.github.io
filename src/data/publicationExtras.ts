import { Publication } from '../types';

export interface PublicationExtra {
  version: string;
  status: 'Canonical' | 'Stable' | 'Experimental' | 'Revision';
  difficulty: 'Introductory' | 'Intermediate' | 'Systemic' | 'Technical' | 'Advanced';
  wordCount: number;
  executiveSummary: string;
  takeaways: string[];
  revisionHistory: { date: string; version: string; note: string }[];
  bibliography: string[];
}

export const publicationExtras: Record<string, PublicationExtra> = {
  'manifesto': {
    version: 'v1.4',
    status: 'Canonical',
    difficulty: 'Systemic',
    wordCount: 840,
    executiveSummary: 'This manifesto examines the convergence of Interface, Engine, and Agency. It argues that modern software is transcending passive design and entering a collaborative, co-authored realm powered by real-time client environments and language-model assistants.',
    takeaways: [
      'The Interface is no longer static—it is a dynamic, fluid, semantic translator.',
      'AI represents an agentic partner, shifting human effort from generation to rigorous curation.',
      'Aesthetic refinement and functional precision are not opposing values, but parallel requirements.'
    ],
    revisionHistory: [
      { date: '2026-07-15', version: 'v1.4', note: 'Polished the system synthesis model definitions.' },
      { date: '2026-05-10', version: 'v1.0', note: 'Initial public draft published for peer review.' }
    ],
    bibliography: [
      'Mostafa, N. (2026). "Synthesizing Interfaces: The Golden Spacing Paradigm."',
      'Norman, D. (2013). "The Design of Everyday Things: Revised and Expanded Edition."',
      'Raskin, J. (2000). "The Humane Interface: New Directions for Designing Interactive Systems."'
    ]
  },
  'personal-brand-digital-identity': {
    version: 'v1.1',
    status: 'Stable',
    difficulty: 'Introductory',
    wordCount: 650,
    executiveSummary: 'An exploration of professional brand alignment across decentralized domain nodes. Explains the process of design-engineered portfolio construction and the deliberate exclusion of unrequested features (AI slop) to assert visual and architectural authority.',
    takeaways: [
      'Your digital identity is a complete ecosystem: DNS records, layouts, and typography choice.',
      'Deliberate omission of unrequested features builds professional respect.',
      'Static page generation guarantees SEO success on isolated static targets.'
    ],
    revisionHistory: [
      { date: '2026-07-18', version: 'v1.1', note: 'Added static page pre-generation metrics.' },
      { date: '2026-06-20', version: 'v1.0', note: 'Initial publication.' }
    ],
    bibliography: [
      'Tschichold, J. (1991). "The New Typography: A Handbook for Modern Designers."',
      'VanderLans, R. (2004). "Emigre: Graphic Design into the Digital Realm."'
    ]
  },
  'blogger-theme-engineering': {
    version: 'v2.1',
    status: 'Canonical',
    difficulty: 'Technical',
    wordCount: 920,
    executiveSummary: 'This engineering case study documents the complete custom refactoring of a Blogger template parser, bypassing legacy XML schema overhead and injecting lightning-fast CSS custom variables to achieve single-millisecond contentful paints.',
    takeaways: [
      'Legacy platforms can deliver contemporary speeds when stripped of default widgets.',
      'Direct CSS Custom Variables completely bypass XML compilation bottlenecks.',
      'Bypassing layout-thrashing elements elevates mobile responsiveness by +82%.'
    ],
    revisionHistory: [
      { date: '2026-07-10', version: 'v2.1', note: 'Updated Google Lighthouse core web vitals optimization data.' },
      { date: '2026-04-12', version: 'v1.0', note: 'Draft of Blogger Parser Core published.' }
    ],
    bibliography: [
      'Garsiel, T. & Irish, P. (2011). "How Browsers Work: Behind the scenes of modern web browsers."',
      'Marcotte, E. (2011). "Responsive Web Design: Book Apart Series."'
    ]
  },
  'ai-assisted-creative-workflow': {
    version: 'v1.2',
    status: 'Stable',
    difficulty: 'Intermediate',
    wordCount: 780,
    executiveSummary: 'A structured workflow methodology showcasing how designers and programmers can leverage generative LLM models safely by preserving absolute human quality vetoes over every generated module.',
    takeaways: [
      'AI is an accelerant for exploration, not an absolute replacement for design refinement.',
      'A "Balanced Curation Loop" guarantees deterministic output without losing human polish.',
      'Prompt engineering is system-engineering, requiring reusable structures and clear boundaries.'
    ],
    revisionHistory: [
      { date: '2026-07-14', version: 'v1.2', note: 'Refined the Prompt Architecture guidelines.' },
      { date: '2026-05-30', version: 'v1.0', note: 'Initial publication.' }
    ],
    bibliography: [
      'Mostafa, N. (2026). "The Human Veto: Creative Workflows in the Generative Era."',
      'AI Guild Research. (2025). "Systemic Prompt Engineering Best Practices."'
    ]
  },
  'wavelet-feature-reference': {
    version: 'v1.3',
    status: 'Stable',
    difficulty: 'Advanced',
    wordCount: 1120,
    executiveSummary: 'A comprehensive engineering guide detailing audio signal frequency equalization, custom AutoEQ compensation presets, and finite impulse filter arrays utilizing Wavelet digital sign processing.',
    takeaways: [
      'Digital sound signature correction requires finite impulse response filters.',
      'AutoEQ mapping neutralizes specific acoustic deficiencies without clipping.',
      'Optimizing channels in separate arrays prevents latency lag in multi-channel systems.'
    ],
    revisionHistory: [
      { date: '2026-07-12', version: 'v1.3', note: 'Added channel array optimizations.' },
      { date: '2026-03-05', version: 'v1.0', note: 'Initial Audio Reference Draft.' }
    ],
    bibliography: [
      'Oppenheim, A. & Schafer, R. (2009). "Discrete-Time Signal Processing: Third Edition."',
      'Smith, J. O. (2007). "Introduction to Digital Filters with Audio Applications."'
    ]
  },
  'via-browser-optimization': {
    version: 'v1.1',
    status: 'Stable',
    difficulty: 'Technical',
    wordCount: 710,
    executiveSummary: 'An investigation into extreme mobile browser performance optimization. Demonstrates how micro-clients can bypass rendering bottlenecks by script-vetoing and implementing aggressive pre-fetching configurations.',
    takeaways: [
      'Mobile rendering bottlenecks are solved by early DNS pre-resolve and pre-fetching.',
      'Aggressive caching parameters prevent redundant, battery-draining network trips.',
      'Vetoing script executions reduces layout-recalculation lag by over 400ms on low-end nodes.'
    ],
    revisionHistory: [
      { date: '2026-07-16', version: 'v1.1', note: 'Updated with DNS pre-resolve latency measurements.' },
      { date: '2026-06-01', version: 'v1.0', note: 'Initial Performance Guide.' }
    ],
    bibliography: [
      'Grigorik, I. (2013). "High Performance Browser Networking: O\'Reilly Media."',
      'Souders, S. (2009). "Even Faster Web Sites: Performance Best Practices."'
    ]
  },
  'typography-spacing-system': {
    version: 'v1.5',
    status: 'Canonical',
    difficulty: 'Systemic',
    wordCount: 890,
    executiveSummary: 'The foundational guide for NM Design\'s layout grid, analyzing the golden ratio system, fluid clamp typography, and relative vertical baseline offsets that form the strict aesthetic rhythm of our digital interface.',
    takeaways: [
      'A rigid typographic scale establishes reading comfort and intuitive visual hierarchy.',
      'Dynamic spacing using Tailwind custom variables prevents layout degradation on small viewports.',
      'Using fluid clamp calculations aligns display headers smoothly across desktop and mobile.'
    ],
    revisionHistory: [
      { date: '2026-07-19', version: 'v1.5', note: 'Added accessibility guidelines and high-contrast parameters.' },
      { date: '2026-02-14', version: 'v1.0', note: 'Initial Release of Design System Fundamentals.' }
    ],
    bibliography: [
      'Lupton, E. (2010). "Thinking with Type: A Critical Guide for Designers, Writers, Editors, and Students."',
      'Bringhurst, R. (1992). "The Elements of Typographic Style: Hartley & Marks."'
    ]
  },
  'metal-ai-music-no-limits': {
    version: 'v1.0',
    status: 'Experimental',
    difficulty: 'Intermediate',
    wordCount: 740,
    executiveSummary: 'An artistic analysis of composing extreme heavy metal compositions with generative prompt structures, proving that algorithm-driven compositions can maintain stylistic integrity when structured under human arrangement.',
    takeaways: [
      'Generative music models benefit from precise, highly specific sub-genre prompt descriptors.',
      'Post-processing and structural arrangement are critical to avoid machine predictability.',
      'Algorithmic creation is a canvas—human curation supplies the emotional spine.'
    ],
    revisionHistory: [
      { date: '2026-07-13', version: 'v1.0', note: 'Initial release detailing our 9-album track creation cycle.' }
    ],
    bibliography: [
      'Roads, C. (1996). "The Computer Music Tutorial: MIT Press."',
      'Cope, D. (2001). "Virtual Music: Computer Synthesis of Musical Style."'
    ]
  },
  'android-customization-framework': {
    version: 'v1.2',
    status: 'Stable',
    difficulty: 'Systemic',
    wordCount: 960,
    executiveSummary: 'An engineering blueprint detailing Android customization that prioritizes user agency. Explains non-destructive user debloating, controlling wakelocks, and the intentional boundaries of security stewardship.',
    takeaways: [
      'True customization respects device security boundaries (TEE trust tokens).',
      'System debloating should happen in safe user-0 spaces without root-induced vulnerabilities.',
      'Restricting background services expands battery life while preserving system integrity.'
    ],
    revisionHistory: [
      { date: '2026-07-17', version: 'v1.2', note: 'Added Wakelock restriction matrix.' },
      { date: '2026-05-18', version: 'v1.0', note: 'Initial Android Stewardship Draft.' }
    ],
    bibliography: [
      'Elenkov, N. (2014). "Android Security Internals: An In-Depth Guide to Android\'s Security Architecture."',
      'Android Open Source Project. (2026). "Device Customization and Security Integrity Guidelines."'
    ]
  }
};
