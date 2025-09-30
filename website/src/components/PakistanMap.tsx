/**
 * PakistanMap Component
 *
 * An interactive SVG map of Pakistan with customizable location pins.
 * Pins show tooltips on hover with city names and descriptions.
 *
 * @example
 * ```tsx
 * // Using default cities
 * <PakistanMap />
 *
 * // Custom cities with specific locations
 * const customCities: CityLocation[] = [
 *   { name: 'Lahore', x: 60, y: 35, description: 'Educational hub' },
 *   { name: 'Karachi', x: 48, y: 85, description: 'Relief center' }
 * ]
 * <PakistanMap cities={customCities} />
 * ```
 *
 * @note x and y are percentages (0-100) relative to the map viewbox
 * - x: 0 is left edge, 100 is right edge
 * - y: 0 is top edge, 100 is bottom edge
 */

import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { MapPin } from 'lucide-react'

export interface CityLocation {
	name: string
	x: number // percentage from left (0-100)
	y: number // percentage from top (0-100)
	description?: string
}

interface PakistanMapProps {
	cities?: CityLocation[]
	className?: string
}

const defaultCities: CityLocation[] = [
	{ name: 'Karachi', x: 41, y: 87, description: 'Relief distribution hub' },
	{ name: 'Lahore', x: 78, y: 42, description: 'Educational workshops' },
]

export default function PakistanMap({ cities = defaultCities, className = '' }: PakistanMapProps) {
	return (
		<div className={`relative w-full max-w-md mx-auto ${className}`}>
			<div className='relative w-full'>
				{/* Pakistan Map SVG as background */}
				<img
					src='/pakistan-map.svg'
					alt='Map of Pakistan'
					className='w-full h-auto'
				/>

				{/* Cities as pins - positioned absolutely over the map */}
				<svg
					viewBox='0 0 1000 959'
					className='absolute inset-0 w-full h-full pointer-events-none'
					xmlns='http://www.w3.org/2000/svg'
				>
					{cities.map((city, index) => {
						const pinX = (city.x / 100) * 1000
						const pinY = (city.y / 100) * 959

						return (
							<g key={index} className='pointer-events-auto'>
								<Tooltip delayDuration={0}>
									<TooltipTrigger asChild>
										<g className='cursor-pointer group'>
											<foreignObject
												x={pinX - 12}
												y={pinY - 24}
												width='48'
												height='48'
											>
												<MapPin
													className='w-12 h-12 text-pink-500'
													strokeWidth={2}
												/>
											</foreignObject>
										</g>
									</TooltipTrigger>
									<TooltipContent
										side='top'
										className='max-w-xs [&]:animate-none'
										sideOffset={5}
									>
										<div className='text-center'>
											<p className='font-semibold'>{city.name}</p>
											{city.description && (
												<p className='text-xs opacity-90 mt-1'>{city.description}</p>
											)}
										</div>
									</TooltipContent>
								</Tooltip>
							</g>
						)
					})}
				</svg>
			</div>

			{/* Legend */}
			<div className='flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground'>
				<MapPin className='w-4 h-4 text-pink-500' />
				<span>Active Locations</span>
			</div>
		</div>
	)
}
