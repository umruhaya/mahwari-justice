import { createClient, type EntryFieldTypes } from 'contentful'
import {
	CONTENTFUL_DELIVERY_ACCESS_TOKEN,
	CONTENTFUL_PREVIEW_ACCESS_TOKEN,
	CONTENTFUL_SPACE_ID,
} from 'astro:env/client'

type MemberSkeleton = {
	contentTypeId: 'member'
	fields: {
		name: EntryFieldTypes.Text
		role: EntryFieldTypes.Text
		description?: EntryFieldTypes.Text
		profileImage?: EntryFieldTypes.AssetLink
		contributions?: EntryFieldTypes.Text[]
	}
}

const getClient = (preview: boolean) => {
	return createClient({
		space: CONTENTFUL_SPACE_ID,
		accessToken: preview ? CONTENTFUL_PREVIEW_ACCESS_TOKEN : CONTENTFUL_DELIVERY_ACCESS_TOKEN,
		host: preview ? 'preview.contentful.com' : undefined,
	})
}

const normalizeAssetUrl = (asset: any): string | null => {
	if (!asset?.fields?.file?.url) return null
	let url: string = asset.fields.file.url
	if (typeof url === 'string' && url.startsWith('//')) url = `https:${url}`
	return url ?? null
}

export const getMembers = async ({ preview }: { preview: boolean } = { preview: false }) => {
	const client = getClient(preview)
	const entries = await client.getEntries<MemberSkeleton>({
		content_type: 'member',
		include: 2,
	})
	return entries.items.map(item => ({
		id: item.sys.id,
		name: item.fields.name,
		role: item.fields.role,
		description: item.fields.description ?? null,
		contributions: item.fields.contributions ?? null,
		profileImageUrl: normalizeAssetUrl(item.fields.profileImage),
	}))
}

export const getMember = async (id: string, { preview }: { preview: boolean } = { preview: false }) => {
	const client = getClient(preview)
	const entry = await client.getEntry<MemberSkeleton>(id, { include: 2 })
	return {
		id: entry.sys.id,
		name: entry.fields.name,
		role: entry.fields.role,
		description: entry.fields.description ?? null,
		contributions: entry.fields.contributions ?? null,
		profileImageUrl: normalizeAssetUrl(entry.fields.profileImage),
	}
}
