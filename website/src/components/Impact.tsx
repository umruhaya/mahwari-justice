import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import PakistanMap from './PakistanMap'

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

					{/* Pakistan Map with locations */}
					<div className='relative'>
						<Card className='overflow-hidden p-8'>
							<div className='space-y-4'>
								<h4 className='text-xl font-semibold text-center mb-6'>Our Nationwide Reach</h4>
								<PakistanMap />
								<p className='text-sm text-muted-foreground text-center mt-4'>
									Operating across major cities with a network of volunteers and partners
								</p>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</section>
	)
}
