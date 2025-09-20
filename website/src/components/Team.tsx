import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export default function Team() {
	const teamMembers = [
		{
			name: 'Bushra Mahnoor',
			role: 'Founder and Director',
			description:
				"Period Rights Activist leading the charge for menstrual equity in Pakistan. Author of Pakistan's first superhero comic book on periods.",
			initials: 'BM',
			achievements: ['Diana Award (2024)', '50 Leading Lights Asia-Pacific', "Women's Leadership Award"],
		},
		{
			name: 'Anum Khalid',
			role: 'Co-Founder',
			description:
				'Co-leading Mahwari Justice with a focus on community outreach and volunteer coordination during emergency relief efforts.',
			initials: 'AK',
			achievements: ['Volunteer Coordination', 'Community Outreach', 'Emergency Relief'],
		},
		{
			name: 'Raiha Zainab Shah',
			role: 'Program Associate',
			description:
				'Managing educational programs and policy advocacy initiatives to break period taboos through innovative approaches.',
			initials: 'RZ',
			achievements: ['Program Management', 'Policy Advocacy', 'Educational Initiatives'],
		},
	]

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
					{teamMembers.map((member, index) => (
						<Card key={index} className='text-center hover:shadow-lg transition-shadow group'>
							<CardContent className='p-8 space-y-6'>
								{/* Avatar */}
								<div className='relative mx-auto w-fit'>
									<Avatar className='w-24 h-24 mx-auto ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all'>
										<AvatarImage src='' alt={member.name} />
										<AvatarFallback className='text-xl font-bold bg-primary/10 text-primary'>
											{member.initials}
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
										{member.achievements.map((achievement, idx) => (
											<Badge key={idx} variant='secondary' className='text-xs'>
												{achievement}
											</Badge>
										))}
									</div>
								</div>
							</CardContent>
						</Card>
					))}
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
