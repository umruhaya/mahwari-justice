import { useEffect, useRef, useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { ChevronLeft, ChevronRight, Download, Home, Maximize2 } from 'lucide-react'

const BASE_CDN_URL = 'https://cdn.mahwarijustice.org'

interface ComicPageViewerProps {
	language: string
}

const comicInfo = {
	english: {
		title: 'Chandoo and the Crimson Quest',
		language: 'English',
		basePath: '/chandoo-and-the-crimson-quest-english',
		pdfUrl: `${BASE_CDN_URL}/chandoo-and-the-crimson-quest-english.pdf`,
		color: 'bg-blue-100 text-blue-800',
		totalPages: 71,
	},
	urdu: {
		title: 'چاندو اور سرخ جستجو',
		language: 'Urdu',
		basePath: '/chandoo-and-the-crimson-quest-urdu',
		pdfUrl: `${BASE_CDN_URL}/chandoo-and-the-crimson-quest-urdu.pdf`,
		color: 'bg-green-100 text-green-800',
		totalPages: 71,
	},
	sindhi: {
		title: 'چاندو ۽ ڳاڙهي ڳولا',
		language: 'Sindhi',
		basePath: '/chandoo-and-the-crimson-quest-sindhi',
		pdfUrl: `${BASE_CDN_URL}/chandoo-and-the-crimson-quest-sindhi.pdf`,
		color: 'bg-purple-100 text-purple-800',
		totalPages: 71,
	},
}

export default function ComicPageViewer({ language }: ComicPageViewerProps) {
	const [currentPage, setCurrentPage] = useState(1)
	const [isFullscreen, setIsFullscreen] = useState(false)
	const [imageLoading, setImageLoading] = useState(true)
	const [imageError, setImageError] = useState(false)
	const [preloadedPages, setPreloadedPages] = useState<Set<number>>(new Set())

	// Refs to store hidden iframes for preloading
	const preloadRefs = useRef<{ [key: number]: HTMLIFrameElement }>({})

	const comic = comicInfo[language as keyof typeof comicInfo]
	const totalPages = comic.totalPages

	const getPageUrl = (pageNum: number) => {
		const pageString = pageNum.toString().padStart(3, '0')
		return `${BASE_CDN_URL}${comic.basePath}/page_${pageString}.pdf`
	}

	// Preload pages function
	const preloadPage = (pageNum: number) => {
		if (pageNum < 1 || pageNum > totalPages || preloadedPages.has(pageNum)) {
			return
		}

		// Create hidden iframe for preloading
		const iframe = document.createElement('iframe')
		iframe.src = getPageUrl(pageNum)
		iframe.style.display = 'none'
		iframe.style.position = 'absolute'
		iframe.style.top = '-9999px'
		iframe.style.left = '-9999px'

		iframe.onload = () => {
			setPreloadedPages(prev => new Set([...prev, pageNum]))
			// Keep reference for faster access
			preloadRefs.current[pageNum] = iframe
		}

		iframe.onerror = () => {
			// Remove failed preload attempt
			document.body.removeChild(iframe)
		}

		document.body.appendChild(iframe)
	}

	// Preload next 2 pages when current page changes
	useEffect(() => {
		// Preload next 2 pages
		if (currentPage + 1 <= totalPages) {
			preloadPage(currentPage + 1)
		}
		if (currentPage + 2 <= totalPages) {
			preloadPage(currentPage + 2)
		}

		// Also preload previous page if going backwards
		if (currentPage - 1 >= 1) {
			preloadPage(currentPage - 1)
		}
	}, [currentPage, totalPages])

	// Initial preload on component mount
	useEffect(() => {
		// Preload first few pages immediately
		setTimeout(() => {
			preloadPage(2)
			preloadPage(3)
		}, 500) // Small delay to not interfere with initial load
	}, [])

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			const nextPage = currentPage + 1
			setCurrentPage(nextPage)

			// If page is preloaded, loading will be faster
			if (preloadedPages.has(nextPage)) {
				setImageLoading(false)
				setImageError(false)
			} else {
				setImageLoading(true)
				setImageError(false)
			}
		}
	}

	const handlePrevPage = () => {
		if (currentPage > 1) {
			const prevPage = currentPage - 1
			setCurrentPage(prevPage)

			// If page is preloaded, loading will be faster
			if (preloadedPages.has(prevPage)) {
				setImageLoading(false)
				setImageError(false)
			} else {
				setImageLoading(true)
				setImageError(false)
			}
		}
	}

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'ArrowLeft') handlePrevPage()
		if (event.key === 'ArrowRight') handleNextPage()
		if (event.key === 'Escape') setIsFullscreen(false)
	}

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown)
		return () => document.removeEventListener('keydown', handleKeyDown)
	}, [currentPage])

	const handleImageLoad = () => {
		setImageLoading(false)
		setImageError(false)
	}

	const handleImageError = () => {
		setImageLoading(false)
		setImageError(true)
	}

	const handleDownloadPDF = () => {
		window.open(comic.pdfUrl, '_blank')
	}

	// Cleanup preloaded iframes on unmount
	useEffect(() => {
		return () => {
			Object.values(preloadRefs.current).forEach(iframe => {
				if (iframe.parentNode) {
					iframe.parentNode.removeChild(iframe)
				}
			})
		}
	}, [])

	if (!comic) {
		return (
			<div className='min-h-screen flex items-center justify-center px-4'>
				<div className='text-center'>
					<h1 className='text-xl sm:text-2xl font-bold mb-4'>Comic not found</h1>
					<Button asChild>
						<a href='/'>Return Home</a>
					</Button>
				</div>
			</div>
		)
	}

	return (
		<div className={`min-h-screen bg-background ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : ''}`}>
			{/* Header */}
			<header className='border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40'>
				<div className='container max-w-screen-xl mx-auto px-4 py-3 sm:py-4'>
					{/* Mobile Layout (flex-col on small screens) */}
					<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0'>
						{/* Top row on mobile: Home button and Download button */}
						<div className='flex items-center justify-between sm:justify-start sm:space-x-4'>
							<Button variant='ghost' size='sm' asChild className='shrink-0'>
								<a href='/'>
									<Home className='w-4 h-4 mr-1 sm:mr-2' />
									<span className='hidden xs:inline'>Home</span>
								</a>
							</Button>

							{/* Download button visible on mobile */}
							<Button
								variant='outline'
								size='sm'
								onClick={handleDownloadPDF}
								className='sm:hidden shrink-0'
							>
								<Download className='w-4 h-4 mr-1' />
								<span className='hidden xs:inline'>PDF</span>
							</Button>
						</div>

						{/* Title and badge */}
						<div className='flex items-center justify-between sm:justify-center flex-1 sm:flex-none sm:order-none'>
							<div className='min-w-0 flex-1 sm:flex-none'>
								<h1 className='text-lg sm:text-xl font-bold truncate'>{comic.title}</h1>
								<Badge className={`${comic.color} text-xs`}>{comic.language}</Badge>
							</div>
						</div>

						{/* Desktop right section */}
						<div className='hidden sm:flex items-center space-x-2 shrink-0'>
							<span className='text-sm text-muted-foreground whitespace-nowrap'>
								Page {currentPage} of {totalPages}
								{preloadedPages.has(currentPage + 1) && (
									<span className='ml-2 text-green-600'>• Next ready</span>
								)}
							</span>
							<Button variant='outline' size='sm' onClick={handleDownloadPDF}>
								<Download className='w-4 h-4 mr-2' />
								Download PDF
							</Button>
						</div>

						{/* Mobile page info */}
						<div className='flex sm:hidden justify-center'>
							<span className='text-sm text-muted-foreground'>
								Page {currentPage} of {totalPages}
								{preloadedPages.has(currentPage + 1) && (
									<span className='ml-2 text-green-600 text-xs'>• Next ready</span>
								)}
							</span>
						</div>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<div className='container max-w-screen-xl mx-auto px-4 py-4 sm:py-8'>
				<div className='flex flex-col items-center space-y-4 sm:space-y-6'>
					{/* Page Navigation (Top) */}
					<div className='flex items-center justify-between w-full max-w-sm sm:max-w-none sm:space-x-4 sm:justify-center'>
						<Button
							variant='outline'
							size='sm'
							onClick={handlePrevPage}
							disabled={currentPage === 1}
							className='shrink-0'
						>
							<ChevronLeft className='w-4 h-4 sm:mr-2' />
							<span className='hidden sm:inline'>Previous</span>
						</Button>

						<div className='text-center px-4'>
							<div className='text-base sm:text-lg font-semibold'>Page {currentPage}</div>
							<div className='text-xs sm:text-sm text-muted-foreground'>of {totalPages}</div>
						</div>

						<Button
							variant='outline'
							size='sm'
							onClick={handleNextPage}
							disabled={currentPage === totalPages}
							className='shrink-0'
						>
							<span className='hidden sm:inline'>Next</span>
							<ChevronRight className='w-4 h-4 sm:ml-2' />
						</Button>
					</div>

					{/* Page Display */}
					<Card className='w-full max-w-4xl'>
						<CardContent className='p-0'>
							<div className='relative bg-white rounded-lg overflow-hidden'>
								{imageLoading && !preloadedPages.has(currentPage) && (
									<div className='aspect-[4/3] sm:aspect-[7/5] flex items-center justify-center bg-muted'>
										<div className='text-center'>
											<div className='animate-spin w-6 h-6 sm:w-8 sm:h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-2'>
											</div>
											<p className='text-xs sm:text-sm text-muted-foreground'>Loading page...</p>
										</div>
									</div>
								)}

								{imageError
									? (
										<div className='aspect-[4/3] sm:aspect-[7/5] flex items-center justify-center bg-muted'>
											<div className='text-center space-y-4'>
												<p className='text-muted-foreground text-sm'>
													Failed to load page {currentPage}
												</p>
												<Button
													variant='outline'
													size='sm'
													onClick={() => window.location.reload()}
												>
													Retry
												</Button>
											</div>
										</div>
									)
									: (
										<iframe
											src={getPageUrl(currentPage)}
											className={`w-full aspect-[4/3] sm:aspect-[7/5] border-0 ${
												imageLoading && !preloadedPages.has(currentPage) ? 'hidden' : 'block'
											}`}
											onLoad={handleImageLoad}
											onError={handleImageError}
											title={`${comic.title} - Page ${currentPage}`}
										/>
									)}
							</div>
						</CardContent>
					</Card>

					{/* Page Navigation (Bottom) - Responsive */}
					<div className='w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-4 sm:justify-center'>
						{/* Mobile: Previous/Next buttons in a row */}
						<div className='flex sm:hidden items-center justify-between w-full max-w-sm'>
							<Button
								variant='outline'
								size='sm'
								onClick={handlePrevPage}
								disabled={currentPage === 1}
								className='flex-1 max-w-[120px]'
							>
								<ChevronLeft className='w-4 h-4 mr-1' />
								Previous
							</Button>
							<Button
								variant='outline'
								size='sm'
								onClick={handleNextPage}
								disabled={currentPage === totalPages}
								className='flex-1 max-w-[120px]'
							>
								Next
								<ChevronRight className='w-4 h-4 ml-1' />
							</Button>
						</div>

						{/* Desktop: Full pagination layout */}
						<div className='hidden sm:flex items-center space-x-4'>
							<Button
								variant='outline'
								onClick={handlePrevPage}
								disabled={currentPage === 1}
							>
								<ChevronLeft className='w-4 h-4 mr-2' />
								Previous
							</Button>

							<div className='flex items-center space-x-2'>
								{[...Array(Math.min(10, totalPages))].map((_, i) => {
									const pageNum = Math.max(1, currentPage - 5) + i
									if (pageNum > totalPages) return null

									return (
										<Button
											key={pageNum}
											variant={pageNum === currentPage ? 'default' : 'outline'}
											size='sm'
											onClick={() => {
												setCurrentPage(pageNum)
												if (!preloadedPages.has(pageNum)) {
													setImageLoading(true)
													setImageError(false)
												}
											}}
											className={`w-10 h-10 p-0 ${
												preloadedPages.has(pageNum) ? 'ring-2 ring-green-500/20' : ''
											}`}
										>
											{pageNum}
										</Button>
									)
								})}
							</div>

							<Button
								variant='outline'
								onClick={handleNextPage}
								disabled={currentPage === totalPages}
							>
								Next
								<ChevronRight className='w-4 h-4 ml-2' />
							</Button>
						</div>

						{/* Mobile: Condensed pagination */}
						<div className='flex sm:hidden items-center justify-center space-x-1 overflow-x-auto max-w-full px-4'>
							{/* Show fewer page numbers on mobile */}
							{[...Array(Math.min(5, totalPages))].map((_, i) => {
								const pageNum = Math.max(1, currentPage - 2) + i
								if (pageNum > totalPages) return null

								return (
									<Button
										key={pageNum}
										variant={pageNum === currentPage ? 'default' : 'outline'}
										size='sm'
										onClick={() => {
											setCurrentPage(pageNum)
											if (!preloadedPages.has(pageNum)) {
												setImageLoading(true)
												setImageError(false)
											}
										}}
										className={`w-8 h-8 p-0 text-xs shrink-0 ${
											preloadedPages.has(pageNum) ? 'ring-1 ring-green-500/20' : ''
										}`}
									>
										{pageNum}
									</Button>
								)
							})}
						</div>
					</div>

					{/* Instructions */}
					<div className='text-center text-xs sm:text-sm text-muted-foreground max-w-md px-4'>
						<p className='hidden sm:block'>
							Use arrow keys to navigate pages, or click the navigation buttons. Press Escape to exit
							fullscreen mode.
						</p>
						<p className='sm:hidden'>
							Tap navigation buttons to change pages.
						</p>
						<p className='mt-1 text-xs'>
							Pages with green rings are preloaded for faster access.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
