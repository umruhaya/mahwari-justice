import { Button } from './ui/button'
import { Badge } from './ui/badge'
import VideoPlayer from './VideoPlayer'

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
							<Button size='lg' className='bg-primary hover:bg-primary/90' asChild>
								<a href='#donate'>Support Our Mission</a>
							</Button>
							<Button
								size='lg'
								variant='outline'
								onClick={() => {
									const videoElement = document.querySelector('[data-video-player]')
									if (videoElement) {
										videoElement.scrollIntoView({ behavior: 'smooth' })
										// Trigger video play
										const playButton = videoElement.querySelector('[role="button"]') as HTMLElement
										if (playButton) playButton.click()
									}
								}}
							>
								Watch Our Story
							</Button>
						</div>
					</div>

					{/* Video Player */}
					<div className='relative' data-video-player>
						<VideoPlayer
							videoUrl='https://cdn.mahwarijustice.org/impact-of-mahwari-justice.webm'
							title='6-minute Impact Documentary'
							description="See how we're creating change across Pakistan"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
