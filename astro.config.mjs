import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	site: `https://www.hutcherro.github.io`,
	output: 'static',
  	outDir: './docs',
  	build: {
    assets: 'astro'
  }

});
