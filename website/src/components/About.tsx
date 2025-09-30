import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'

export default function About() {
	const sdgs = [
		{ number: '3', title: 'Good Health and Well-being' },
		{ number: '5', title: 'Gender Equality' },
		{ number: '6', title: 'Clean Water and Sanitation' },
		{ number: '13', title: 'Climate Action' },
	]

	return (
		<section id='about' className='py-20 px-4'>
			<div className='container max-w-screen-xl mx-auto'>
				<div className='text-center space-y-6 mb-16'>
					<Badge variant='outline' className='text-sm'>About Mahwari Justice</Badge>
					<h2 className='text-3xl md:text-5xl font-bold'>
						What is <span className='text-primary'>Mahwari</span>?
					</h2>
					<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
						Mahwari is an Urdu word for menstruation. We are a grassroots student-led organization ensuring
						access to safe periods, especially during disasters and emergencies.
					</p>
				</div>

				<div className='grid lg:grid-cols-2 gap-12 items-center mb-16'>
					{/* Our Work */}
					<div className='space-y-6'>
						<h3 className='text-2xl font-bold'>Our Work Includes</h3>
						<div className='grid gap-4'>
							{[
								'Providing menstrual health products in disaster-affected areas',
								'Menstrual health education and awareness campaigns',
								'Supporting menstrual hygiene management in marginalized communities',
								'Policy advocacy and eliminating pink tax',
								'Community outreach and engagement programs',
								'Educational workshops in schools and universities',
								'Raising awareness about period poverty in Pakistan',
							].map((item, index) => (
								<div key={index} className='flex items-start space-x-3'>
									<div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0' />
									<p className='text-muted-foreground'>{item}</p>
								</div>
							))}
						</div>
					</div>

					{/* Image placeholder */}
					<div className='relative'>
						<div className='aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden'>
							<div className='flex items-center justify-center h-full text-muted-foreground'>
								<div className='text-center space-y-2'>
									<div className='w-20 h-20 bg-primary/20 rounded-full mx-auto flex items-center justify-center'>
										<svg
											className='w-10 h-10 text-primary'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
											/>
										</svg>
									</div>
									<p className='text-sm font-medium'>Our Mission in Action</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* SDGs */}
				<div className='space-y-8'>
					<div className='text-center'>
						<h3 className='text-2xl font-bold mb-4'>Aligned with UN Sustainable Development Goals</h3>
						<p className='text-muted-foreground'>
							Our work directly contributes to achieving these global goals
						</p>
					</div>

					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
						{sdgs.map((sdg) => (
							<Card key={sdg.number} className='text-center hover:shadow-lg transition-shadow'>
								<CardContent className='p-6 space-y-4'>
									<div className='w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center'>
										<span className='text-base font-bold text-primary'>
											SDG<br />
											{sdg.number}
										</span>
									</div>
									<h4 className='font-semibold text-sm'>{sdg.title}</h4>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
