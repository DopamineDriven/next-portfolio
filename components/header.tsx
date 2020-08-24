import { Fragment, useState } from 'react';
import Link from 'next/link';
import { NewSvgLogo } from 'components/svg-logo-only';
import Container from 'components/container';
import SocialMediaIcons from 'components/social-media-icons-footer';

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
		href: '/blog',
		label: 'Blog'
	},
	{
		href: '/contact',
		label: 'Contact'
	}
];

const Header = ({ props }: HeaderProps) => {
	const [navOpen, setNavOpen] = useState(false);
	const navText = navOpen ? '  duration-700' : ' duration-700';
	const onHover = !navOpen
		? ' md:hover:animate-pulse transform duration-3000 transition-all'
		: ' transform duration-3000 transition-all animate-pulse';
	const navlist = links.map(link => (
		<li className='nav-item' key={`${link.href}-${link.label}`}>
			<Link href={link.href}>
				<a
					className={`px-5 bg-black opacity-100 text-lg md:bg-black md:hover:bg-black md:opacity-75 md:hover:animate-pulse mx-auto md:px-5 md:mx-auto flex text-left 
					md:text-center w-full h-full min-h-full md:text-2xl font-bold leading-loose md:leading-loose text-white hover:opacity-75 
					antialiased transform transition-all duration-1000 justify-center uppercase md:tracking-widest md:uppercase tracking-widest md:my-auto md:flex md:justify-start`}
					aria-label={link.label}
				>
					&nbsp;{link.label}&nbsp;
				</a>
			</Link>
		</li>
	));

	const threadingTheNeedle = (
		<div
			className={
				'md:flex md:mx-auto md:my-auto md:h-full md:w-full flex-grow flex-wrap' +
				(navOpen ? ' flex' : ' hidden')
			}
		>
			{navOpen ? (
				<div
					className={`bg-transparent leading-none h-full block flex-row hover:bg-black flex-grow w-full text-xl text-center justify-center mx-auto my-auto uppercase text-white ${onHover}`}
				>
					<p className='hover:bg-black opacity-75 tracking-widest mx-auto inline-flex min-w-full text-lg md:text-3xl text-center justify-center px-5 antialiased transform transition-colors duration-1000'>
						Andrew&nbsp;&nbsp;Ross
					</p>
					<p className='my-1'>Developer</p>
					<p className='my-1'> Human</p>
					<p className='my-1'> Technophile</p>
				</div>
			) : (
				<div className='bg-transparent cursor-pointer flex flex-col flex-grow w-full text-1xl md:text-3xl text-center justify-center mx-auto my-0 uppercase text-white '>
					<p className='hover:bg-black hover:bg-opacity-10 mx-auto tracking-widest md:text-1x1 md:tracking-widest inline-flex px-auto min-w-full text-center justify-center antialiased transform transition-colors duration-1000'>
						Andrew&nbsp;&nbsp;Ross
					</p>{' '}
					<p className='hover:bg-black md:text-3xl opacity-75 tracking-widest mx-auto inline-flex min-w-full text-2xl text-center justify-center px-5 antialiased transform transition-colors duration-1000'>
						Developer - Human - Technophile
					</p>
				</div>
			)}
			<div
				className={
					'flex my-auto md:my-auto w-full h-full md:min-w-full  md:w-full md:min-h-full md:h-full items-center align-text-right justify-center md:mx-auto md:justify-center' +
					`md:hover:${onHover}`
				}
			>
				<ul className='flex flex-col mx-auto md:flex md:mx-auto md:justify-center md:relative md:flex-row flex-grow align-text-top md:text-2xl list-none md:my-auto my-auto md:h-full'>
					{navlist}
				</ul>
			</div>
		</div>
	);

	const paddingConditional = navOpen ? ' py-1' : ' py-10 md:py-0';

	const logoT = (
		<div className='flex flex-row mx-auto justify-center w-full min-w-full md:my-auto my-auto md:py-4 py-0 mt-2 md:mt-10 lg:mt-18 xl:mt-20'>
			<Link href='/'>
				<a
					className={`inline-block leading-relaxed whitespace-no-wrap text-white hover:opacity-75 text-xl rounded md:py-0 ${paddingConditional} mt-1`}
				>
					{<NewSvgLogo fillColor='#000000' />}
				</a>
			</Link>
		</div>
	);

	const logoB = (
		<div
			className={`flex flex-row mx-auto justify-center w-full min-w-full md:my-auto my-auto trasition-all duration-2000 py-0 md:mt-10 lg:mt-10 xl:mt-24`}
		>
			<Link href='/'>
				<a
					className={`inline-block leading-relaxed whitespace-no-wrap text-white hover:opacity-75 opacity-75 text-xl rounded md:py-0 ${paddingConditional} transform md:rotate-0 rotate-0`}
				>
					{
						<NewSvgLogo
							fillColor2='#000000'
							fillColor3='#000000'
							fillColor='#000000'
							fillColor4='#ffffff'
						/>
					}
				</a>
			</Link>
		</div>
	);

	const responsiveNav = (
		<div className='flex w-full relative md:min-w-full md:mx-auto md:my-auto md:align-middle md:float-left justify-between md:w-full md:justify-center md:flex md:flex-row md:flex-grow'>
			{/* <Link href='/'>
			<a className='inline-block leading-relaxed whitespace-no-wrap text-white hover:opacity-75 text-xl rounded'>
				{<NewSvgLogo fillColor='#ffffff' />}
			</a>
		</Link> */}
			<button
				className='text-white flex flex-col cursor-pointer text-xl leading-none transition-colors duration-1000 px-3 border border-solid border-transparent rounded bg-transparent md:hidden outline-none focus:outline-none'
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
							className='h-8 w-8 transition transform rotate-180 duration-1000'
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
	);
	// calculate vpw/vph - https://www.hawatel.com/blog/handle-window-resize-in-react/

	const heightOnOpen = navOpen ? ' h-whole' : ' h-whole';
	const pulseOnOpen = navOpen ? ' animate-none' : ' animate-pulse';

	const nav = (
		<nav
			className={`flex flex-row flex-wrap font-header xl:h-threeFourths lg:h-fourFifths md:h-sevenEights sm:h-nineTenths ${heightOnOpen} container overflow-y-hidden overflow-x-hidden -mx-5`}
		>
			<Container>
				<div
					className={`xl:h-threeFourths lg:h-fourFifths md:h-sevenEights sm:h-nineTenths ${heightOnOpen} transform duration-2000 absolute transition-all bg-opacity-10 ${!pulseOnOpen} bg-lighterBlack flex flex-row w-full bg-contain antialiased`}
					style={{
						backgroundImage: `url(https://res.cloudinary.com/asross311/image/upload/v1597640990/portfolio/unsplash-chemistry_sfct4z.jpg)`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: '100% 100%',
						backgroundColor: 'black'
					}}
				>
					<Container>
						<div className='container block flex-grow px-4 justify-center w-full min-w-full items-center mx-auto md:my-auto md:block md:flex-grow md:mx-auto md:min-w-full md:w-full md:justify-center'>
							<div className='flex w-full relative md:min-w-full md:mx-auto md:my-auto md:align-middle md:float-left justify-between md:w-full md:justify-center md:flex md:flex-row md:flex-grow'>
								<button
									className='text-white block mx-auto cursor-pointer pt-2 text-xl leading-none transition-colors duration-1000 px-3 border border-solid border-transparent rounded bg-transparent md:hidden outline-none focus:outline-none'
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
												className='h-8 w-8 transition transform rotate-180 duration-1000'
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
							<div className='overflow-hidden'>
								<Fragment>
									{/* {logoT} removed from below for UI/UX testing */}
									{threadingTheNeedle} {logoB}
								</Fragment>
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
			<div className='bg-black transform transition-all duration-1000 container w-full min-w-full'>
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
import SvgLogo from 'components/svg-logo-only';
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
