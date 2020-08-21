import { useState } from 'react';
import Link from 'next/link';
import { VercelIcon } from './svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Container from './container';

interface NavRef {
	href: string;
	label: string;
}

type HeaderProps = {
	props: string | number;
};

const links: NavRef[] = [
	{
		href: '/',
		label: 'Portfolio'
	},
	{
		href: '/about',
		label: 'About'
	},
	{
		href: '/contact',
		label: 'Contact'
	}
];

const Header = ({ props }: HeaderProps) => {
	const [navOpen, setNavOpen] = useState(false);
	const navText = navOpen ? '  duration-700' : ' duration-700';
	const navlist = links.map(link => (
		<li className='nav-item' key={`${link.href}-${link.label}`}>
			<Link href={link.href}>
				<a
					className={`px-5 pb-2 mx-auto sm:px-3 flex text-left sm:text-right w-full h-full min-h-full sm:text-xl font-bold leading-relaxed sm:leading-none text-white hover:opacity-75 antialiased transform transition-colors duration-1000`}
					aria-label={link.label}
				>
					{link.label}
				</a>
			</Link>
		</li>
	));
	// calculate vpw/vph - https://www.hawatel.com/blog/handle-window-resize-in-react/

	const heightOnOpen = navOpen ? ' h-nineTwentieths' : ' h-sevenTwentieths';
	// const subNav = (
	// 	<div className='container flex  items-center mx-auto min-h-full align-text-bottom justify-center'>
	// 		<ul className='flex flex-row mx-auto sm:mr-0 sm:relative sm:flex-row transform translate-y-full duration-1000 sm:text-2xl list-none sm:ml-auto h-full min-h-full align-text-bottom'>
	// 			<div className='flex flex-row h-full min-h-full items-baseline align-text-bottom justify-center'>
	// 				{navlist}
	// 			</div>
	// 		</ul>
	// 	</div>
	// );
	return (
		<nav
			className={`flex flex-row flex-wrap font-header xl:h-whole lg:h-fourFifths md:h-threeFourths sm:h-half ${heightOnOpen} pb-20 xl:mb-2 mb-2 container overflow-y-hidden overflow-x-hidden -mx-5`}
		>
			<Container>
				<div
					className={`xl:h-whole lg:h-fourFifths md:h-threeFourths sm:h-half ${heightOnOpen} transform duration-1000 absolute flex flex-row w-full bg-contain antialiased`}
					style={{
						backgroundImage: `url(https://res.cloudinary.com/asross311/image/upload/v1597640060/portfolio/blood-moon-cover_cwmoo0.jpg)`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: '100% 100%',
						backgroundColor: 'black'
					}}
				>
					<Container>
						<div className='container flex flex-wrap px-4 justify-between mx-auto pt-6 align-bottom'>
							<div className='flex w-full relative sm:flex-row justify-between sm:w-auto sm:static sm:justify-start sm:block'>
								<Link href='/'>
									<a className='inline-block leading-relaxed mr-4 whitespace-no-wrap text-white hover:opacity-75 text-xl rounded'>
										{<VercelIcon />}
									</a>
								</Link>
								<button
									className='text-white block cursor-pointer text-xl leading-none transition-colors duration-1000 px-3 border border-solid border-transparent rounded bg-transparent sm:hidden outline-none focus:outline-none'
									type='button'
									onClick={() => setNavOpen(!navOpen)}
									name='open-nav-button'
								>
									{navOpen ? (
										<a
											aria-label='open-nav'
											className='transition-colors duration-1000 hover:opacity-75'
										>
											<svg
												fill='none'
												viewBox='0 0 24 24'
												className='h-6 w-6 transition transform rotate-180 duration-1000'
											>
												<path
													d='M6 18L18 6M6 6L18 18'
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='2'
													stroke='currentColor'
												/>
											</svg>
										</a>
									) : (
										<a
											aria-label='open-nav'
											className='transition-colors duration-1000 hover:opacity-75 transform rotate-45'
										>
											<svg
												fill='none'
												viewBox='0 0 24 24'
												className='h-6 w-6 transform rotate-45 transition duration-1000'
											>
												<path
													d='M6 18L18 6M6 6L18 18'
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='2'
													stroke='currentColor'
												/>
											</svg>
										</a>
									)}
								</button>
							</div>
							<div
								className={
									'sm:flex flex-grow items-center flex-wrap' +
									(navOpen ? ' flex' : ' hidden')
								}
							>
								<ul className='flex flex-row mx-auto sm:mr-0 sm:relative sm:flex-row align-text-top sm:text-2xl list-none sm:ml-auto'>
									{navlist}
								</ul>
								{/* {navOpen ? (
									<div className='container flex  items-center mx-auto min-h-full align-text-bottom justify-center'>
										<ul className='flex flex-row mx-auto sm:mr-0 sm:relative sm:flex-row transform  sm:text-2xl list-none sm:ml-auto h-full min-h-full text-left'>
											<div className='flex flex-col h-full min-h-full items-baseline text-left justify-center mx-auto'>
												{navlist}
											</div>
										</ul>
									</div>
								) : (
									<ul className='flex flex-row mx-auto sm:mr-0 sm:relative sm:flex-row align-text-top sm:text-2xl list-none sm:ml-auto'>
										{navlist}
									</ul>
								)} */}
							</div>
						</div>
					</Container>
				</div>
			</Container>
		</nav>
	);
};

export default Header;
// <ul className='flex flex-col-reverse sm:flex-row-reverse sm:text-smxmd list-none sm:ml-auto font-polished w-full float-right text-right sm:pt-4'>
// text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none
/*
import { useState } from 'react';
import Link from 'next/link';
import SvgLogo from './svg-logo-only';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface NavRef {
	href: string;
	label: string;
}

type HeaderProps = {
	props: string | number;
};

const links: NavRef[] = [
	{
		href: '/',
		label: 'Directory'
	},
	{
		href: '/contact',
		label: 'Contact'
	},
	{
		href: '/about',
		label: 'About'
	}
];

const Header = ({ props }: HeaderProps) => {
	const [navOpen, setNavOpen] = useState(false);
	const navlist = links.map(link => (
		<li className='nav-item' key={`${link.href}-${link.label}`}>
			<Link href={link.href}>
				<a
					className='px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:opacity-75'
					aria-label={link.label}
				>
					{link.label}
				</a>
			</Link>
		</li>
	));
	return (
		<nav className='relative flex flex-wrap shadow-boxshadow items-center justify-between px-2 py-1 navbar-expand-lg bg-cimaRed'>
			<div className='container mx-auto flex flex-wrap items-center justify-between'>
				<div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
					<Link href='/'>
						<a>{<SvgLogo props={props} />}</a>
					</Link>
					<button
						className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
						type='button'
						onClick={() => setNavOpen(!navOpen)}
						name='open-nav-button'
					>
						<a aria-label='open-nav'>
							<FontAwesomeIcon icon={faBars} />
						</a>
					</button>
				</div>
				<div
					className={
						'lg:flex flex-grow items-right' +
						(navOpen ? ' flex float-right' : ' hidden')
					}
				>
					<ul className='flex flex-col lg:flex-row list-none lg:ml-auto font-body'>
						{navlist}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;

*/
