import { Fragment, useState } from 'react';
import Link from 'next/link';
import { VercelIcon } from './svg-icons';
import Container from './container';
import SocialMediaIcons from './social-media-icons-footer';

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
					className={`px-5 pb-2 mx-auto md:px-3 flex text-left md:text-right w-full h-full min-h-full md:text-xl font-bold leading-10 md:leading-none text-white hover:opacity-75 antialiased transform transition-colors duration-1000 justify-center uppercase md:tracking-wide md:normal-case tracking-widest`}
					aria-label={link.label}
				>
					{link.label}
				</a>
			</Link>
		</li>
	));
	// calculate vpw/vph - https://www.hawatel.com/blog/handle-window-resize-in-react/

	const heightOnOpen = navOpen ? ' h-whole' : ' h-whole';

	// const menuOpenNav = navOpen ? (
	// 	<ul className='sm:hidden flex flex-row mx-auto my-auto sm:mr-0 sm:relative sm:flex-row transform sm:mx-auto  sm:text-2xl list-none sm:ml-auto h-full min-h-full'>
	// 		<div className='flex flex-col h-full min-h-full items-baseline text-left justify-center mx-auto'>
	// 			{navlist}
	// 		</div>
	// 	</ul>
	// ) : null;

	const nav = (
		<nav
			className={`flex flex-row flex-wrap font-header xl:h-whole lg:h-whole md:h-whole sm:h-whole ${heightOnOpen} container overflow-y-hidden animate-pulse md:animate-none  overflow-x-hidden -mx-5`}
		>
			<Container>
				<div
					className={`xl:h-whole lg:h-whole md:h-whole sm:h-whole ${heightOnOpen} transform duration-1000 absolute transition-all flex flex-row w-full bg-contain antialiased`}
					style={{
						backgroundImage: `url(https://res.cloudinary.com/asross311/image/upload/v1597640990/portfolio/unsplash-chemistry_sfct4z.jpg)`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: '100% 100%',
						backgroundColor: 'black'
					}}
				>
					<Container>
						<div className='container flex flex-wrap px-4 justify-between mx-auto pt-6 align-bottom'>
							<div className='flex w-full relative md:flex-row justify-between md:w-auto md:static md:justify-start md:block'>
								<Link href='/'>
									<a className='inline-block leading-relaxed mr-4 whitespace-no-wrap text-white hover:opacity-75 text-xl rounded'>
										{<VercelIcon />}
									</a>
								</Link>
								<button
									className='text-white block cursor-pointer text-xl leading-none transition-colors duration-1000 px-3 border border-solid border-transparent rounded bg-transparent md:hidden outline-none focus:outline-none'
									type='button'
									onClick={() => setNavOpen(!navOpen)}
									name='open-nav-button'
								>
									{navOpen ? (
										<a
											aria-label='open-nav'
											className='transition duration-1000 hover:opacity-75 w-full'
										>
											<svg
												fill='none'
												viewBox='0 0 24 24'
												className='h-8 w-8 transition transform rotate-180 duration-1000 animate-pulse'
											>
												<path
													d='M6 18L18 6M6 6L18 18'
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='3.5'
													stroke='currentColor'
												/>
											</svg>
										</a>
									) : (
										<a
											aria-label='open-nav'
											className='transition-colors delay-1000 hover:opacity-75'
										>
											<svg
												fill='none'
												viewBox='0 0 24 24'
												className='h-8 w-8 transform rotate-855 transition duration-1000'
											>
												<path
													d='M6 18L18 6M6 6L18 18'
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='2.5'
													stroke='currentColor'
												/>
											</svg>
										</a>
									)}
								</button>
							</div>
							<div
								className={
									'md:flex flex-grow flex-wrap float-right' +
									(navOpen ? ' flex' : ' hidden')
								}
							>
								<div className='flex my-auto md:my-0 md:float-right w-full h-full items-center float-right align-text-right justify-center md:mx-auto'>
									<ul className='flex flex-col mx-auto md:mr-0 md:relative md:flex-row align-text-top md:text-2xl list-none md:ml-auto my-auto float-right'>
										{navlist}
									</ul>
								</div>
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

	const subnav = (
		<div className='text-xl transition delay-700 ease-in-out'>
			<SocialMediaIcons />
		</div>
	);
	return (
		<Fragment>
			<div className='bg-black transform  transition-all container w-full min-w-full'>
				{' '}
				{nav}
				{subnav}
			</div>
		</Fragment>
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
