import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Actions supplies the real Pages URL, including a repository subdirectory.
const deployment = new URL(process.env.SITE_URL || 'https://rsebxc.github.io/');

export default defineConfig({
  site: deployment.origin,
  base: deployment.pathname,
  output: 'static',
  trailingSlash: 'always',
  vite: { plugins: [tailwindcss()] },
  devToolbar: { enabled: false },
});
