import { defineCollection, z } from 'astro:content'
import { getMembers } from './loaders/member'

const member = defineCollection({
	loader: getMembers,
	schema: z.object({
		id: z.string(),
		name: z.string(),
		role: z.string(),
		description: z.string().nullable(),
		contributions: z.array(z.string()).nullable(),
		profileImageUrl: z.string().nullable(),
	}),
})

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { member }
