import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { ExternalLink, Globe, Image, MapPin } from 'lucide-react'
import { internationalMediaData } from '../lib/international-media'
import { nationalMediaData } from '../lib/national-media'

interface MediaItem {
	outlet: string
	link: string
	image?: string
}

interface MediaData {
	title: string
	coverage: MediaItem[]
}

interface MediaCoverageProps {
	className?: string
}

const MediaCoverage: React.FC<MediaCoverageProps> = ({ className = '' }) => {
	const MediaCard: React.FC<{ item: MediaItem }> = ({ item }) => {
		const [imageError, setImageError] = useState(false)

		return (
			<Card className='h-full group hover:shadow-lg transition-all duration-300 cursor-pointer'>
				<div className='aspect-video overflow-hidden rounded-t-lg bg-gray-100'>
					{(item.image !== undefined && imageError === false)
						? (
							<img
								src={item.image}
								alt={item.outlet}
								className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
									imageError ? 'opacity-0' : 'opacity-100'
								}`}
								onError={() => setImageError(true)}
							/>
						)
						: (
							<div className='w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100'>
								<div className='animate-pulse text-gray-400'>
									<Image className='w-10 h-10' />
								</div>
							</div>
						)}
				</div>
				<CardHeader className='pb-4'>
					<CardTitle className='text-lg leading-tight group-hover:text-purple-600 transition-colors text-center'>
						{item.outlet}
					</CardTitle>
				</CardHeader>
				<CardContent className='pt-0 pb-6'>
					<div className='flex justify-center'>
						<a
							href={item.link}
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium'
						>
							Read Coverage
							<ExternalLink className='w-4 h-4' />
						</a>
					</div>
				</CardContent>
			</Card>
		)
	}

	const MediaCarousel: React.FC<{ data: MediaData }> = ({ data }) => (
		<div className='w-full'>
			<Carousel className='w-full'>
				<CarouselContent className='-ml-2 md:-ml-4'>
					{data.coverage.map((item, index) => (
						<CarouselItem
							key={`${item.outlet}-${index}`}
							className='pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3'
						>
							<MediaCard item={item} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className='hidden md:flex' />
				<CarouselNext className='hidden md:flex' />
			</Carousel>
		</div>
	)

	return (
		<section className={`py-16 bg-gradient-to-br from-purple-50 to-pink-50 ${className}`} id='media'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
						Media Coverage
					</h2>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
						Our work has been featured in national and international media outlets, amplifying the message
						of menstrual equity and period rights.
					</p>
				</div>

				<Tabs defaultValue='international' className='w-full'>
					<TabsList className='grid w-full grid-cols-2 mb-8'>
						<TabsTrigger value='international' className='flex items-center gap-2'>
							<Globe className='w-4 h-4' />
							International Coverage
						</TabsTrigger>
						<TabsTrigger value='national' className='flex items-center gap-2'>
							<MapPin className='w-4 h-4' />
							National Coverage
						</TabsTrigger>
					</TabsList>

					<TabsContent value='international' className='space-y-6'>
						<h3 className='text-2xl font-semibold text-gray-800 mb-6 text-center'>
							{internationalMediaData.title}
						</h3>
						<MediaCarousel data={internationalMediaData} />
					</TabsContent>

					<TabsContent value='national' className='space-y-6'>
						<h3 className='text-2xl font-semibold text-gray-800 mb-6 text-center'>
							{nationalMediaData.title}
						</h3>
						<MediaCarousel data={nationalMediaData} />
					</TabsContent>
				</Tabs>
			</div>
		</section>
	)
}

export default MediaCoverage
