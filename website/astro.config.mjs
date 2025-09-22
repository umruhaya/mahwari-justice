// @ts-check
import { defineConfig, envField } from 'astro/config'
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
			// skip preview pages
			filter: page => page.includes('/preview/') === false,
		}),
		compress({
			HTML: true,
			CSS: true,
			JavaScript: true,
			Image: false, // Handle image optimization separately
			SVG: true,
		}),
	],
	env: {
		schema: {
			CONTENTFUL_SPACE_ID: envField.string({ context: 'client', access: 'public' }),
			CONTENTFUL_DELIVERY_ACCESS_TOKEN: envField.string({ context: 'client', access: 'public' }),
			CONTENTFUL_PREVIEW_ACCESS_TOKEN: envField.string({ context: 'client', access: 'public' }),
		},
	},
	output: 'static',
	build: {
		inlineStylesheets: 'auto',
	},
	vite: {
		plugins: [tailwindcss()],
	},
})
