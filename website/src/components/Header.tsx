import { useState } from 'react'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from './ui/navigation-menu'

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	const navItems = [
		{ href: '#about', label: 'About', ariaLabel: 'Learn about Mahwari Justice mission and work' },
		{ href: '#impact', label: 'Impact', ariaLabel: 'View our impact statistics and achievements' },
		{
			href: '#projects',
			label: 'Projects',
			ariaLabel: 'Explore our projects including PadCraft and educational workshops',
		},
		{ href: '/comics', label: 'Comics', ariaLabel: 'Read our comic books' },
		{ href: '#team', label: 'Team', ariaLabel: 'Meet our team members and founders' },
		{ href: '#contact', label: 'Contact', ariaLabel: 'Contact Mahwari Justice and get in touch' },
	]

	return (
		<header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container flex h-16 max-w-screen-2xl items-center justify-between px-4'>
				{/* Logo with proper SEO */}
				<a href='/' className='flex items-center space-x-2' aria-label='Mahwari Justice Home'>
					<img
						src='/mj-logo.png'
						alt='Mahwari Justice Logo - Period Rights Organization'
						className='h-8 w-8'
						width='32'
						height='32'
						loading='eager'
					/>
					<span className='text-xl font-bold text-primary'>Mahwari Justice</span>
				</a>

				{/* Desktop Navigation */}
				<nav className='hidden md:flex' aria-label='Main navigation'>
					<NavigationMenu>
						<NavigationMenuList>
							{navItems.map((item) => (
								<NavigationMenuItem key={item.href}>
									<NavigationMenuLink
										className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50'
										href={item.href}
										aria-label={item.ariaLabel}
									>
										{item.label}
									</NavigationMenuLink>
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>
				</nav>

				{/* Mobile Menu Button */}
				<button
					className='md:hidden p-2 rounded-md hover:bg-accent focus:bg-accent focus:outline-none'
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					aria-label='Toggle mobile menu'
					aria-expanded={mobileMenuOpen}
					aria-controls='mobile-menu'
				>
					{mobileMenuOpen ? <X size={24} aria-hidden='true' /> : <Menu size={24} aria-hidden='true' />}
				</button>

				{/* Donate Button */}
				<Button className='bg-primary hover:bg-primary/90 hidden md:flex' asChild>
					<a href='#donate' aria-label='Donate to Mahwari Justice - Support our mission'>
						Donate Now
					</a>
				</Button>
			</div>

			{/* Mobile Navigation */}
			{mobileMenuOpen && (
				<nav
					id='mobile-menu'
					className='md:hidden border-t bg-background/95 backdrop-blur'
					aria-label='Mobile navigation'
				>
					<ul className='flex flex-col py-4' role='list'>
						{navItems.map((item) => (
							<li key={item.href} role='listitem'>
								<a
									href={item.href}
									className='block px-4 py-3 text-sm hover:bg-accent transition-colors'
									aria-label={item.ariaLabel}
									onClick={() => setMobileMenuOpen(false)}
								>
									{item.label}
								</a>
							</li>
						))}
						<li role='listitem' className='px-4 py-2'>
							<Button className='w-full bg-primary hover:bg-primary/90' asChild>
								<a href='#donate' aria-label='Donate to Mahwari Justice - Support our mission'>
									Donate Now
								</a>
							</Button>
						</li>
					</ul>
				</nav>
			)}
		</header>
	)
}
