import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

export default function Donate() {
	const pakistaniAccounts = [
		{
			title: 'Bushra Mahnoor',
			accountNo: '10010010150551680016',
			iban: 'PK46ABPA0010150551680016',
			bank: 'Allied Bank Limited',
		},
	]

	const internationalOptions = [
		{
			platform: 'GoFundMe',
			url: 'https://gofund.me/3d3d914f',
			description: 'Secure online donations for international supporters',
		},
		{
			platform: 'PayPal',
			url: 'http://paypal.me/duaaezahrashah',
			username: '@duaaezahrashah',
			description: 'Direct PayPal transfers for quick support',
		},
	]

	return (
		<section id='donate' className='py-20 px-4'>
			<div className='container max-w-screen-xl mx-auto'>
				<div className='text-center space-y-6 mb-16'>
					<Badge variant='outline' className='text-sm'>Support Our Mission</Badge>
					<h2 className='text-3xl md:text-5xl font-bold'>
						Make a <span className='text-primary'>Difference</span> Today
					</h2>
					<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
						Your support helps us provide menstrual health products, education, and emergency relief to
						thousands of women and girls across Pakistan. Every contribution counts.
					</p>
				</div>

				<div className='grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
					{/* Pakistani Donors */}
					<Card className='overflow-hidden'>
						<CardHeader className='bg-primary/5'>
							<div className='flex items-center gap-3'>
								<div className='w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center'>
									🇵🇰
								</div>
								<CardTitle className='text-xl'>For Pakistani Donors</CardTitle>
							</div>
						</CardHeader>
						<CardContent className='p-6 space-y-6'>
							{pakistaniAccounts.map((account, index) => (
								<div key={index}>
									<div className='space-y-3'>
										<h3 className='font-semibold text-lg'>{account.title}</h3>
										<div className='space-y-2 text-sm'>
											{account.accountNo && (
												<div className='flex justify-between'>
													<span className='text-muted-foreground'>Account No:</span>
													<span className='font-mono'>{account.accountNo}</span>
												</div>
											)}
											<div className='flex justify-between'>
												<span className='text-muted-foreground'>IBAN:</span>
												<span className='font-mono'>{account.iban}</span>
											</div>
											<div className='flex justify-between'>
												<span className='text-muted-foreground'>Bank:</span>
												<span>{account.bank}</span>
											</div>
										</div>
									</div>
									{index < pakistaniAccounts.length - 1 && <Separator className='my-4' />}
								</div>
							))}
						</CardContent>
					</Card>

					{/* International Donors */}
					<Card className='overflow-hidden'>
						<CardHeader className='bg-secondary/5'>
							<div className='flex items-center gap-3'>
								<div className='w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center'>
									🌍
								</div>
								<CardTitle className='text-xl'>For International Supporters</CardTitle>
							</div>
						</CardHeader>
						<CardContent className='p-6 space-y-6'>
							{internationalOptions.map((option, index) => (
								<div key={index} className='space-y-4'>
									<div className='space-y-2'>
										<h3 className='font-semibold text-lg flex items-center gap-2'>
											{option.platform}
											{option.username && (
												<Badge variant='outline' className='text-xs'>{option.username}</Badge>
											)}
										</h3>
										<p className='text-sm text-muted-foreground'>{option.description}</p>
									</div>
									<Button
										className='w-full bg-secondary hover:bg-secondary/90'
										onClick={() => window.open(option.url, '_blank')}
									>
										Donate via {option.platform}
									</Button>
									{index < internationalOptions.length - 1 && <Separator className='my-4' />}
								</div>
							))}
						</CardContent>
					</Card>
				</div>

				{/* Impact message */}
				<div className='text-center mt-16 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg'>
					<h3 className='text-2xl font-bold mb-4'>Your Impact</h3>
					<div className='grid md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
						<div className='space-y-2'>
							<div className='text-3xl font-bold text-primary'>₨500</div>
							<p className='text-sm text-muted-foreground'>Provides one menstrual health kit</p>
						</div>
						<div className='space-y-2'>
							<div className='text-3xl font-bold text-secondary'>₨2,000</div>
							<p className='text-sm text-muted-foreground'>
								Sponsors educational workshop for one school
							</p>
						</div>
						<div className='space-y-2'>
							<div className='text-3xl font-bold text-accent'>₨5,000</div>
							<p className='text-sm text-muted-foreground'>Supports one woman in PadCraft for a month</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
