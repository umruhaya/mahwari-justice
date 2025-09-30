import { Button } from '~/components/ui/button'

export default function Petition() {
	return (
		<section className='py-12 bg-muted/50'>
			<div className='container mx-auto px-4 text-center'>
				<h2 className='text-2xl md:text-3xl font-bold mb-4'>
					Sign Our Petition: Remove Luxury Tax on Period Products
				</h2>
				<p className='text-lg mb-6 max-w-md mx-auto'>
					Join Mahwari Justice in fighting for menstrual equity. Support our legal challenge in the Lahore
					High Court.
				</p>
				<Button size='lg' asChild className='text-lg px-8 py-3'>
					<a
						href='https://www.change.org/p/remove-luxury-tax-from-period-products-in-pakistan'
						target='_blank'
						rel='noopener noreferrer'
					>
						Sign the Petition Now!
					</a>
				</Button>
			</div>
		</section>
	)
}
