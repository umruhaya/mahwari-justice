import { Button } from './ui/button'
import { Badge } from './ui/badge'

export default function Hero() {
	return (
		<section className='relative py-20 px-4 overflow-hidden'>
			{/* Background gradient */}
			<div className='absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10' />

			<div className='container relative max-w-screen-xl mx-auto'>
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					{/* Content */}
					<div className='space-y-8'>
						<div className='space-y-4'>
							<Badge variant='secondary' className='text-sm'>
								Period Rights • Climate Justice • Women's Health
							</Badge>
							<h1 className='text-4xl md:text-6xl font-bold leading-tight'>
								Ensuring Access to <span className='text-primary'>Safe Periods</span> for All
							</h1>
							<p className='text-xl text-muted-foreground max-w-lg'>
								Mahwari Justice is a grassroots student-led organization providing menstrual health
								products, education, and advocacy, especially during disasters and emergencies.
							</p>
						</div>

						{/* Impact stats */}
						<div className='grid grid-cols-2 gap-6'>
							<div className='text-center lg:text-left'>
								<div className='text-3xl font-bold text-primary'>150,000+</div>
								<div className='text-sm text-muted-foreground'>Relief Kits Distributed</div>
							</div>
							<div className='text-center lg:text-left'>
								<div className='text-3xl font-bold text-secondary'>300+</div>
								<div className='text-sm text-muted-foreground'>Volunteers Mobilized</div>
							</div>
						</div>

						{/* CTA Buttons */}
						<div className='flex flex-col sm:flex-row gap-4'>
							<Button size='lg' className='bg-primary hover:bg-primary/90'>
								Support Our Mission
							</Button>
							<Button size='lg' variant='outline'>
								Watch Our Story
							</Button>
						</div>
					</div>

					{/* Video/Image placeholder */}
					<div className='relative'>
						<div className='aspect-video bg-muted rounded-lg overflow-hidden'>
							<div className='flex items-center justify-center h-full text-muted-foreground'>
								<div className='text-center space-y-2'>
									<div className='w-16 h-16 bg-primary/20 rounded-full mx-auto flex items-center justify-center'>
										<svg className='w-8 h-8 text-primary' fill='currentColor' viewBox='0 0 24 24'>
											<path d='M8 5v14l11-7z' />
										</svg>
									</div>
									<p className='text-sm font-medium'>6-minute Impact Documentary</p>
									<p className='text-xs'>Click to watch our story</p>
								</div>
							</div>
						</div>
						{/* Decorative elements */}
						<div className='absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl' />
						<div className='absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl' />
					</div>
				</div>
			</div>
		</section>
	)
}
