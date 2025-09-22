import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import type { CollectionEntry } from 'astro:content'

export const Member = ({ member }: { member: CollectionEntry<'member'>['data'] }) => {
	return (
		<Card key={member.id} className='text-center hover:shadow-lg transition-shadow group'>
			<CardContent className='p-8 space-y-6'>
				{/* Avatar */}
				<div className='relative mx-auto w-fit'>
					<Avatar className='w-24 h-24 mx-auto ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all'>
						<AvatarImage src={member.profileImageUrl ?? ''} alt={member.name} />
						<AvatarFallback className='text-xl font-bold bg-primary/10 text-primary'>
							{member.name.slice(0, 2)}
						</AvatarFallback>
					</Avatar>
				</div>

				{/* Info */}
				<div className='space-y-3'>
					<div>
						<h3 className='text-xl font-bold'>{member.name}</h3>
						<p className='text-primary font-medium'>{member.role}</p>
					</div>

					<p className='text-muted-foreground text-sm leading-relaxed'>
						{member.description}
					</p>
				</div>

				{/* Achievements */}
				<div className='space-y-3'>
					<h4 className='text-sm font-semibold'>Key Contributions:</h4>
					<div className='flex flex-wrap gap-2 justify-center'>
						{member.contributions?.map((contribution, idx) => (
							<Badge key={idx} variant='secondary' className='text-xs'>
								{contribution}
							</Badge>
						))}
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
