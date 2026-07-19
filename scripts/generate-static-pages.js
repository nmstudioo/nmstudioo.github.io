import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const INDEX_HTML = path.join(DIST_DIR, 'index.html');

if (!fs.existsSync(INDEX_HTML)) {
  console.error('Error: dist/index.html does not exist. Build must run first.');
  process.exit(1);
}

const routes = [
  'work',
  'about',
  'process',
  'experience',
  'contact',
  'publications/manifesto',
  'publications/personal-brand-digital-identity',
  'publications/blogger-theme-engineering',
  'publications/ai-assisted-creative-workflow',
  'publications/wavelet-feature-reference',
  'publications/via-browser-optimization',
  'publications/typography-spacing-system',
  'publications/metal-ai-music-no-limits',
  'publications/android-customization-framework'
];

// Create 404.html
fs.copyFileSync(INDEX_HTML, path.join(DIST_DIR, '404.html'));
console.log('Created dist/404.html');

// Create directories and index.html copies for clean SEO URLs
routes.forEach(route => {
  const routeDir = path.join(DIST_DIR, route);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  fs.copyFileSync(INDEX_HTML, path.join(routeDir, 'index.html'));
  console.log(`Created dist/${route}/index.html`);
});

console.log('Static pages generated successfully for GitHub Pages SEO!');
