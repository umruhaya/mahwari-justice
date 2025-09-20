// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import compress from 'astro-compress'

// https://astro.build/config
export default defineConfig({
	site: 'https://mahwarijustice.org',
	integrations: [
		react(),
		sitemap({
			i18n: {
				defaultLocale: 'en',
				locales: {
					en: 'en-US',
					ur: 'ur-PK',
				},
			},
		}),
		compress({
			HTML: true,
			CSS: true,
			JavaScript: true,
			Image: false, // Handle image optimization separately
			SVG: true,
		}),
	],
	output: 'static',
	build: {
		inlineStylesheets: 'auto',
	},
	vite: {
		plugins: [tailwindcss()],
	},
})
