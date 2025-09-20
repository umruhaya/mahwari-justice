import { useState } from 'react'
import { Play, X } from 'lucide-react'
import { Button } from './ui/button'

interface VideoPlayerProps {
	videoUrl: string
	posterImage?: string
	title: string
	description: string
	className?: string
}

export default function VideoPlayer({
	videoUrl,
	posterImage = '/mj-logo.png',
	title,
	description,
	className = '',
}: VideoPlayerProps) {
	const [isPlaying, setIsPlaying] = useState(false)
	const [showFullscreen, setShowFullscreen] = useState(false)

	const handlePlayClick = () => {
		setIsPlaying(true)
		setShowFullscreen(true)
	}

	const handleCloseVideo = () => {
		setIsPlaying(false)
		setShowFullscreen(false)
	}

	return (
		<>
			{/* Video Thumbnail */}
			<div className={`relative ${className}`}>
				<div
					className='aspect-video bg-muted rounded-lg overflow-hidden cursor-pointer group'
					onClick={handlePlayClick}
				>
					<div className='flex items-center justify-center h-full text-muted-foreground relative'>
						{/* Background overlay */}
						<div className='absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20' />

						{/* Content */}
						<div className='text-center space-y-4 z-10 relative'>
							<div className='w-20 h-20 bg-primary/90 rounded-full mx-auto flex items-center justify-center group-hover:bg-primary transition-colors'>
								<Play className='w-8 h-8 text-white ml-1' fill='currentColor' />
							</div>
							<div>
								<p className='text-lg font-semibold text-foreground'>{title}</p>
								<p className='text-sm text-muted-foreground'>{description}</p>
							</div>
						</div>

						{/* Decorative elements */}
						<div className='absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl' />
						<div className='absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl' />
					</div>
				</div>
			</div>

			{/* Fullscreen Video Modal */}
			{showFullscreen && (
				<div className='fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4'>
					<div className='relative w-full max-w-6xl'>
						{/* Close button */}
						<Button
							variant='ghost'
							size='sm'
							className='absolute -top-12 right-0 text-white hover:bg-white/10 z-10'
							onClick={handleCloseVideo}
						>
							<X className='w-6 h-6' />
							<span className='sr-only'>Close video</span>
						</Button>

						{/* Video container */}
						<div className='aspect-video bg-black rounded-lg overflow-hidden'>
							{isPlaying
								? (
									<video
										className='w-full h-full'
										controls
										autoPlay
										poster={posterImage}
										onLoadStart={() => setIsPlaying(true)}
									>
										<source src={videoUrl} type='video/mp4' />
										<p className='text-white p-4'>
											Your browser does not support the video tag.
											<a href={videoUrl} className='underline ml-2'>
												Download the video instead
											</a>
										</p>
									</video>
								)
								: (
									<div className='flex items-center justify-center h-full text-white'>
										<div className='text-center space-y-4'>
											<div className='w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center'>
												<Play className='w-8 h-8 text-white' fill='currentColor' />
											</div>
											<p>Loading video...</p>
										</div>
									</div>
								)}
						</div>
					</div>
				</div>
			)}
		</>
	)
}
