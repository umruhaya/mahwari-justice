import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import ComicViewer from './ComicViewer'

export default function Projects() {
	const projects = [
		{
			id: 'padcraft',
			title: 'PadCraft',
			subtitle: 'Sustainable Livelihoods',
			description:
				'After the floods subsided, our team engaged disabled women in Jhuddo Talak village, Tharparkar, to make sustainable pads. We created jobs for 6 women and produced 2000+ reusable pads.',
			impact: ['6 women employed', '2000+ reusable pads created', 'Sustainable income generation'],
			status: 'Ongoing',
			year: '2023',
		},
		{
			id: 'workshops',
			title: 'Educational Workshops',
			subtitle: 'Breaking Taboos',
			description:
				"In a country where periods are considered taboo, we provide widespread period education. We've conducted 'Mehfooz Mahwari' (Safe Period) workshops in 43 schools, focusing on rural areas.",
			impact: ['43 schools reached', 'Thousands of students educated', 'Rural focus areas'],
			status: 'Active',
			year: 'Ongoing',
		},
		{
			id: 'comics',
			title: 'Comic Books',
			subtitle: 'Fun Education',
			description:
				"Pakistan's first superhero comic book on periods, 'Chandoo and the Crimson Quest', published in three languages: Urdu, Sindhi, and English to make period education more engaging.",
			impact: ['3 languages published', 'First superhero comic on periods', 'Creative education approach'],
			status: 'Published',
			year: '2024',
		},
	]

	return (
		<section id='projects' className='py-20 px-4'>
			<div className='container max-w-screen-xl mx-auto'>
				<div className='text-center space-y-6 mb-16'>
					<Badge variant='outline' className='text-sm'>Our Projects</Badge>
					<h2 className='text-3xl md:text-5xl font-bold'>
						Building <span className='text-primary'>Sustainable Solutions</span>
					</h2>
					<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
						From emergency relief to long-term sustainable solutions, our projects address period poverty
						through innovation, education, and community engagement.
					</p>
				</div>

				<Tabs defaultValue='padcraft' className='w-full'>
					<TabsList className='grid w-full grid-cols-3 mb-8'>
						<TabsTrigger value='padcraft'>PadCraft</TabsTrigger>
						<TabsTrigger value='workshops'>Workshops</TabsTrigger>
						<TabsTrigger value='comics'>Comic Books</TabsTrigger>
					</TabsList>

					{projects.map((project) => (
						<TabsContent key={project.id} value={project.id}>
							<div className='grid lg:grid-cols-2 gap-12 items-center'>
								{/* Content */}
								<div className='space-y-6'>
									<div className='space-y-3'>
										<div className='flex items-center gap-3'>
											<Badge className='bg-primary/10 text-primary'>{project.year}</Badge>
											<Badge variant='outline'>{project.status}</Badge>
										</div>
										<h3 className='text-2xl md:text-3xl font-bold'>{project.title}</h3>
										<p className='text-lg text-secondary font-medium'>{project.subtitle}</p>
									</div>

									<p className='text-muted-foreground text-lg leading-relaxed'>
										{project.description}
									</p>

									<div className='space-y-3'>
										<h4 className='font-semibold'>Key Impact:</h4>
										<div className='grid gap-2'>
											{project.impact.map((item, index) => (
												<div key={index} className='flex items-center space-x-3'>
													<div className='w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0' />
													<span className='text-sm text-muted-foreground'>{item}</span>
												</div>
											))}
										</div>
									</div>

									{project.id === 'comics' && (
										<div className='space-y-3'>
											<Button className='bg-secondary hover:bg-secondary/90 mr-3' asChild>
												<a
													href='https://cdn.mahwarijustice.org/chandoo-and-the-crimson-quest-english.pdf'
													target='_blank'
													rel='noopener noreferrer'
												>
													Access Comic Books
												</a>
											</Button>
											<Button variant='outline' asChild>
												<a href='/comics/english' target='_blank' rel='noopener noreferrer'>
													Page by Page View
												</a>
											</Button>
										</div>
									)}
								</div>

								{/* Visual Content */}
								<div className='relative'>
									{project.id === 'comics'
										? <ComicViewer showAll={false} />
										: (
											<Card className='overflow-hidden'>
												<div className='aspect-video bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10'>
													<div className='flex items-center justify-center h-full text-muted-foreground'>
														<div className='text-center space-y-2'>
															<div className='w-20 h-20 bg-primary/20 rounded-full mx-auto flex items-center justify-center'>
																{project.id === 'padcraft' && (
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
																			d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
																		/>
																	</svg>
																)}
																{project.id === 'workshops' && (
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
																			d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
																		/>
																	</svg>
																)}
															</div>
															<p className='text-sm font-medium'>{project.title}</p>
															<p className='text-xs'>Visual content placeholder</p>
														</div>
													</div>
												</div>
											</Card>
										)}
								</div>
							</div>
						</TabsContent>
					))}
				</Tabs>
			</div>
		</section>
	)
}
