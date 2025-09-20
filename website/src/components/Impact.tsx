import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'

export default function Impact() {
	const impactStats = [
		{
			number: '150,000+',
			label: 'Relief Kits Distributed',
			description: 'To flood-affected menstruators across Pakistan',
			period: 'July 2022 - October 2023',
		},
		{
			number: '300+',
			label: 'Volunteers Mobilized',
			description: 'Nationwide network of dedicated volunteers',
			period: 'During 2022 floods',
		},
		{
			number: '8 Million',
			label: 'Menstruators Affected',
			description: 'Lost access to safe periods during Pakistan floods',
			period: '2022 Pakistan Floods',
		},
		{
			number: '43',
			label: 'Schools Reached',
			description: 'Educational workshops conducted in rural areas',
			period: 'Ongoing',
		},
	]

	const awards = [
		'Diana Award (2024)',
		"Women's Leadership Award (2023)",
		'Global Youth Champion Award (2023)',
		'50 Leading Lights Asia-Pacific (2023)',
	]

	return (
		<section id='impact' className='py-20 px-4 bg-muted/30'>
			<div className='container max-w-screen-xl mx-auto'>
				<div className='text-center space-y-6 mb-16'>
					<Badge variant='outline' className='text-sm'>Our Impact</Badge>
					<h2 className='text-3xl md:text-5xl font-bold'>
						Creating <span className='text-primary'>Lasting Change</span>
					</h2>
					<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
						From emergency relief during the 2022 Pakistan floods to ongoing educational initiatives, our
						work has touched hundreds of thousands of lives across the country.
					</p>
				</div>

				{/* Impact Statistics */}
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
					{impactStats.map((stat, index) => (
						<Card key={index} className='text-center hover:shadow-lg transition-shadow'>
							<CardContent className='p-6 space-y-4'>
								<div className='text-3xl md:text-4xl font-bold text-primary'>
									{stat.number}
								</div>
								<div className='space-y-2'>
									<h3 className='font-semibold text-lg'>{stat.label}</h3>
									<p className='text-sm text-muted-foreground'>{stat.description}</p>
									<Badge variant='secondary' className='text-xs'>{stat.period}</Badge>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Recognition Section */}
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					<div className='space-y-6'>
						<h3 className='text-2xl md:text-3xl font-bold'>Recognition & Awards</h3>
						<p className='text-muted-foreground'>
							Our work has been recognized both nationally and internationally by leading organizations
							committed to social change and women's rights.
						</p>
						<div className='grid gap-3'>
							{awards.map((award, index) => (
								<div key={index} className='flex items-center space-x-3'>
									<div className='w-2 h-2 bg-secondary rounded-full flex-shrink-0' />
									<span className='font-medium'>{award}</span>
								</div>
							))}
						</div>
					</div>

					{/* Image placeholder for awards/recognition */}
					<div className='relative'>
						<Card className='overflow-hidden'>
							<div className='aspect-square bg-gradient-to-br from-secondary/10 to-primary/10'>
								<div className='flex items-center justify-center h-full text-muted-foreground'>
									<div className='text-center space-y-2'>
										<div className='w-20 h-20 bg-secondary/20 rounded-full mx-auto flex items-center justify-center'>
											<svg
												className='w-10 h-10 text-secondary'
												fill='none'
												stroke='currentColor'
												viewBox='0 0 24 24'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth={2}
													d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
												/>
											</svg>
										</div>
										<p className='text-sm font-medium'>Awards & Recognition</p>
									</div>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</section>
	)
}
