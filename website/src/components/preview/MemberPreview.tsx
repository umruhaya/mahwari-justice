import { useQuery } from '@tanstack/react-query'
import { queryClient } from '~/lib/query-client'
import { Member } from '~/components/Member'
import { Loader } from 'lucide-react'
import { getMember } from '~/loaders/member'
import { useSearch } from '~/hooks/use-search'

export const MemberPreview = () => {
	const { getParam } = useSearch()
	const id = getParam('id')
	const { data, isLoading, error } = useQuery({
		queryKey: ['member', id],
		queryFn: () => {
			if (!id) {
				throw new Error('No id provided')
			}
			return getMember(id, { preview: true })
		},
		staleTime: 1,
	}, queryClient)

	if (error) {
		return <div>Error: {error.message}</div>
	}

	if (isLoading || !data) {
		return (
			<div className='flex justify-center items-center h-screen'>
				<Loader className='w-4 h-4 animate-spin' />
			</div>
		)
	}

	return (
		<div className='m-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
			<Member member={data} />
		</div>
	)
}
