// // https://astro.build/config
// export default defineConfig({
//     integrations: [
//     // Enable Preact to support Preact JSX components.
//     preact(),
//     // Enable React for the Algolia search component.
//     react(), tailwind()],
//     site: `https://www.christophermarkus.com`,
//     output: 'static',
//     outDir: './docs',
//     build: {
//       assets: 'astro'
//     }
//   });

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	site: `https://hutcherro.github.io`,
    // site: `https://www.hutcherro.github.io`,
	output: 'static',
    outDir: './docs',
    build: {
    assets: 'astro'
  }

});