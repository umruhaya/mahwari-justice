import { Badge } from '~/components/ui/badge'
import { Member } from '~/components/Member'
import type { CollectionEntry } from 'astro:content'
import { getMembers } from '~/loaders/member'
import { useQuery } from '@tanstack/react-query'
import { queryClient } from '~/lib/query-client'

export default function Team({ members: initialMembers }: { members: CollectionEntry<'member'>['data'][] }) {
	const { data: members } = useQuery({
		queryKey: ['members'],
		queryFn: () => getMembers(),
		initialData: initialMembers,
	}, queryClient)

	return (
		<section id='team' className='py-20 px-4 bg-muted/30'>
			<div className='container max-w-screen-xl mx-auto'>
				<div className='text-center space-y-6 mb-16'>
					<Badge variant='outline' className='text-sm'>Our Team</Badge>
					<h2 className='text-3xl md:text-5xl font-bold'>
						Meet the <span className='text-primary'>Change Makers</span>
					</h2>
					<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
						Our dedicated team of activists, educators, and advocates working tirelessly to ensure period
						equity and break menstrual taboos across Pakistan.
					</p>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{members.map((member) => <Member key={member.id} member={member} />)}
				</div>

				{/* Call to action */}
				<div className='text-center mt-16 space-y-4'>
					<h3 className='text-2xl font-bold'>Join Our Mission</h3>
					<p className='text-muted-foreground max-w-2xl mx-auto'>
						We're always looking for passionate individuals to join our cause. Whether you're a volunteer,
						donor, or advocate, there's a place for you in our movement.
					</p>
				</div>
			</div>
		</section>
	)
}
