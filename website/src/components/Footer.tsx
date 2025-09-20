import { Separator } from './ui/separator'
import { Button } from './ui/button'

export default function Footer() {
	const socialLinks = [
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/mahwarijusticeofficial',
			icon: '📷',
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/company/mahwari-justice',
			icon: '💼',
		},
		{
			name: 'Facebook',
			url: 'https://www.facebook.com/p/Mahwari-Justice-100084051635594',
			icon: '📘',
		},
		{
			name: 'Twitter/X',
			url: 'https://x.com/mahwarijustice',
			icon: '🐦',
		},
	]

	const quickLinks = [
		{ name: 'About', href: '#about' },
		{ name: 'Impact', href: '#impact' },
		{ name: 'Projects', href: '#projects' },
		{ name: 'Team', href: '#team' },
		{ name: 'Donate', href: '#donate' },
	]

	return (
		<footer className='bg-muted/50 border-t'>
			<div className='container max-w-screen-xl mx-auto px-4 py-16'>
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{/* Organization Info */}
					<div className='space-y-4'>
						<div className='flex items-center space-x-2'>
							<img src='/mj-logo.png' alt='Mahwari Justice' className='h-8 w-8' />
							<span className='text-xl font-bold text-primary'>Mahwari Justice</span>
						</div>
						<p className='text-sm text-muted-foreground leading-relaxed'>
							A grassroots student-led organization ensuring access to safe periods, especially during
							disasters and emergencies.
						</p>
						<div className='space-y-2 text-sm'>
							<p className='text-muted-foreground'>
								<strong>Email:</strong> mahwarijustice@gmail.com
							</p>
							<p className='text-muted-foreground'>
								<strong>Phone:</strong> +92 301 5135252
							</p>
						</div>
					</div>

					{/* Quick Links */}
					<div className='space-y-4'>
						<h3 className='font-semibold text-lg'>Quick Links</h3>
						<div className='space-y-2'>
							{quickLinks.map((link) => (
								<a
									key={link.name}
									href={link.href}
									className='block text-sm text-muted-foreground hover:text-primary transition-colors'
								>
									{link.name}
								</a>
							))}
						</div>
					</div>

					{/* Social Media */}
					<div className='space-y-4'>
						<h3 className='font-semibold text-lg'>Follow Us</h3>
						<div className='space-y-3'>
							{socialLinks.map((social) => (
								<a
									key={social.name}
									href={social.url}
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors'
								>
									<span className='text-base'>{social.icon}</span>
									<span>{social.name}</span>
								</a>
							))}
						</div>
					</div>

					{/* Resources */}
					<div className='space-y-4'>
						<h3 className='font-semibold text-lg'>Resources</h3>
						<div className='space-y-3'>
							<div>
								<h4 className='text-sm font-medium mb-2'>Comic Books</h4>
								<p className='text-xs text-muted-foreground mb-2'>
									"Chandoo and the Crimson Quest" in 3 languages
								</p>
								<Button variant='outline' size='sm' className='text-xs'>
									Access Comics
								</Button>
							</div>
							<div>
								<h4 className='text-sm font-medium mb-2'>Impact Documentary</h4>
								<p className='text-xs text-muted-foreground mb-2'>
									6-minute video showcasing our work
								</p>
								<Button variant='outline' size='sm' className='text-xs'>
									Watch Video
								</Button>
							</div>
						</div>
					</div>
				</div>

				<Separator className='my-8' />

				{/* Bottom section */}
				<div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
					<div className='text-sm text-muted-foreground'>
						© 2024 Mahwari Justice. All rights reserved. Period rights are human rights.
					</div>
					<div className='flex items-center space-x-4 text-sm'>
						<span className='text-muted-foreground'>Made with ❤️ for period equity</span>
					</div>
				</div>
			</div>
		</footer>
	)
}
