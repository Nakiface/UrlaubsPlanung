import { defineConfig } from 'astro/config';

// compressHTML aus, damit das Inline-Skript unangetastet bleibt
// und die fertige dist/index.html per Doppelklick (file://) funktioniert.
export default defineConfig({
  compressHTML: false,
  build: { assets: '_astro' }
});
