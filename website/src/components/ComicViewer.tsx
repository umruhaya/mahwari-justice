import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { BookOpen, Download, Eye } from 'lucide-react'

const BASE_CDN_URL = 'https://cdn.mahwarijustice.org'

const comics = [
	{
		id: 'english',
		title: 'Chandoo and the Crimson Quest',
		language: 'English',
		languageCode: 'EN',
		pdfUrl: `${BASE_CDN_URL}/chandoo-and-the-crimson-quest-english.pdf`,
		basePath: '/chandoo-and-the-crimson-quest-english',
		pageCount: 71,
		description: "Pakistan's first superhero comic book on periods in English",
		color: 'bg-blue-100 text-blue-800',
	},
	{
		id: 'urdu',
		title: 'چاندو اور سرخ جستجو',
		language: 'Urdu',
		languageCode: 'UR',
		pdfUrl: `${BASE_CDN_URL}/chandoo-and-the-crimson-quest-urdu.pdf`,
		basePath: '/chandoo-and-the-crimson-quest-urdu',
		pageCount: 71,
		description: "Pakistan's first superhero comic book on periods in Urdu",
		color: 'bg-green-100 text-green-800',
	},
	{
		id: 'sindhi',
		title: 'چاندو ۽ ڳاڙهي ڳولا',
		language: 'Sindhi',
		languageCode: 'SD',
		pdfUrl: `${BASE_CDN_URL}/chandoo-and-the-crimson-quest-sindhi.pdf`,
		basePath: '/chandoo-and-the-crimson-quest-sindhi',
		pageCount: 71,
		description: "Pakistan's first superhero comic book on periods in Sindhi",
		color: 'bg-purple-100 text-purple-800',
	},
]

interface ComicViewerProps {
	showAll?: boolean
	className?: string
}

export default function ComicViewer({ showAll = false, className = '' }: ComicViewerProps) {
	const [selectedComic, setSelectedComic] = useState(comics[0])

	const handleDownload = (comic: typeof comics[0]) => {
		window.open(comic.pdfUrl, '_blank')
	}

	const handleViewOnline = (comic: typeof comics[0]) => {
		// Open in new tab with PDF viewer
		window.open(comic.pdfUrl, '_blank')
	}

	const handleViewPages = (comic: typeof comics[0]) => {
		// Navigate to page-by-page viewer (we'll create a separate route for this)
		window.open(`/comics/${comic.id}`, '_blank')
	}

	const getPosterImageUrl = (comic: typeof comics[0]) => {
		return `${BASE_CDN_URL}${comic.basePath}/poster.webp`
	}

	if (!showAll) {
		// Simple version for homepage
		return (
			<div className={className}>
				<div className='grid md:grid-cols-3 gap-6 p-4'>
					{comics.map((comic) => (
						<Card
							key={comic.id}
							className='flex flex-col text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden'
						>
							{/* Poster Image Section */}
							<div className='relative w-full aspect-video bg-gradient-to-br from-muted/50 to-muted overflow-hidden'>
								<img
									src={getPosterImageUrl(comic)}
									className='w-full aspect-video border-0 pointer-events-none'
									title={`${comic.title} - Cover`}
									style={{ transform: 'scale(1.2)', transformOrigin: 'center top' }}
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
								<Badge className={`${comic.color} absolute top-3 left-3 shadow-sm`}>
									{comic.languageCode}
								</Badge>
							</div>

							<CardHeader className='flex-grow pb-3 px-4'>
								<CardTitle className='text-lg leading-tight mb-2'>{comic.title}</CardTitle>
								<p className='text-sm text-muted-foreground flex-grow'>{comic.description}</p>
							</CardHeader>

							<CardContent className='px-4 pb-4'>
								<div className='flex flex-col gap-2'>
									<Button
										size='sm'
										className='bg-primary hover:bg-primary/90 w-full'
										onClick={() => handleViewPages(comic)}
									>
										<Eye className='w-4 h-4 mr-2' />
										View PDF
									</Button>
									<Button
										size='sm'
										variant='outline'
										className='w-full'
										onClick={() => handleDownload(comic)}
									>
										<Download className='w-4 h-4 mr-2' />
										Download
									</Button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		)
	}

	// Full version with tabs and more options
	return (
		<div className={className}>
			<Tabs defaultValue='english' className='w-full'>
				<TabsList className='grid w-full grid-cols-3 mb-6'>
					{comics.map((comic) => (
						<TabsTrigger key={comic.id} value={comic.id} className='flex items-center gap-2'>
							<Badge className={comic.color} variant='secondary'>
								{comic.languageCode}
							</Badge>
							{comic.language}
						</TabsTrigger>
					))}
				</TabsList>

				{comics.map((comic) => (
					<TabsContent key={comic.id} value={comic.id}>
						<Card className='overflow-hidden'>
							<div className='grid md:grid-cols-2 gap-0'>
								{/* Left side - Poster Image */}
								<div className='relative h-96 md:h-full bg-gradient-to-br from-muted/50 to-muted'>
									<iframe
										src={getPosterImageUrl(comic)}
										className='w-full h-full border-0 pointer-events-none'
										title={`${comic.title} - Cover`}
									/>
									<div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent' />
									<Badge className={`${comic.color} absolute top-4 left-4 shadow-sm`}>
										{comic.pageCount} pages
									</Badge>
								</div>

								{/* Right side - Content */}
								<div className='flex flex-col'>
									<CardHeader className='bg-gradient-to-r from-primary/5 to-secondary/5 flex-grow'>
										<div className='flex items-start justify-between'>
											<div className='flex-grow'>
												<CardTitle className='text-2xl mb-3'>{comic.title}</CardTitle>
												<p className='text-muted-foreground mb-4'>{comic.description}</p>
												<div className='flex items-center space-x-2'>
													<BookOpen className='w-5 h-5 text-primary' />
													<span className='text-sm font-medium'>
														{comic.language} Edition
													</span>
												</div>
											</div>
										</div>
									</CardHeader>
									<CardContent className='p-6'>
										<div className='grid gap-3'>
											<Button
												className='bg-primary hover:bg-primary/90 w-full'
												onClick={() => handleViewOnline(comic)}
											>
												<Eye className='w-4 h-4 mr-2' />
												View Full PDF
											</Button>
											<Button
												variant='outline'
												className='w-full'
												onClick={() => handleViewPages(comic)}
											>
												<BookOpen className='w-4 h-4 mr-2' />
												Page by Page
											</Button>
											<Button
												variant='secondary'
												className='w-full'
												onClick={() => handleDownload(comic)}
											>
												<Download className='w-4 h-4 mr-2' />
												Download PDF
											</Button>
										</div>

										<div className='mt-6 p-4 bg-muted/50 rounded-lg'>
											<h4 className='font-semibold mb-2'>About the Comic</h4>
											<p className='text-sm text-muted-foreground'>
												"Chandoo and the Crimson Quest" is Pakistan's first superhero comic book
												addressing period education. Created by Mahwari Justice to make
												menstrual health education fun and engaging for young people. The comic
												follows the adventures of Chandoo, a superhero who fights period poverty
												and stigma.
											</p>
										</div>
									</CardContent>
								</div>
							</div>
						</Card>
					</TabsContent>
				))}
			</Tabs>
		</div>
	)
}
