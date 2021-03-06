import Container from 'components/container';
import { EXAMPLE_PATH } from 'lib/constants';

const Footer = () => {
	return (
		<footer className='bg-black border-t border-chicagoRed'>
			<Container>
				<div className='py-16 flex flex-col lg:flex-row items-center'>
					<h3 className='text-3xl lg:text-4xl font-bold tracking-tighter text-white hover:text-cimaRed transform transition-colors duration-500 font-polished leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2'>
						Statically Generated with Next.js.
					</h3>
					<div className='flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-6/12'>
						<a
							href='https://nextjs.org/docs/basic-features/pages'
							className='mx-3 bg-black hover:text-cimaRed border border-cimaRed text-white font-polished font-bold py-3 px-12 lg:px-8 transform duration-500 transition-colors mb-6 lg:mb-0'
						>
							Read Documentation
						</a>
						<a
							href={`https://github.com/DopamineDriven/${EXAMPLE_PATH}`}
							className='mx-3 bg-black hover:text-cimaRed border border-cimaRed text-white font-polished font-bold py-3 px-12 lg:px-8 transform duration-500 transition-colors mb-6 lg:mb-0'
						>
							View on GitHub
						</a>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
