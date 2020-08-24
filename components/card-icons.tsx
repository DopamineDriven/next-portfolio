import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
	faAuth0Icon,
	faGraphQLIcon,
	faHerokuIcon,
	faNextIcon,
	faVercelIcon,
	faTypeScriptIcon
} from 'lib/fas-custom-integration';
interface MappingProps {
	href: string;
	name: string;
	icon: IconProp;
}

const iconLinks: MappingProps[] = [
	{
		href: 'https://auth0.com/',
		name: 'auth0',
		icon: faAuth0Icon
	},
	{
		href: 'https://www.graphql.com/',
		name: 'graphql',
		icon: faGraphQLIcon
	},
	{
		href: 'https://www.heroku.com/',
		name: 'heroku',
		icon: faHerokuIcon
	},
	{
		href: 'https://nextjs.org/',
		name: 'next',
		icon: faNextIcon
	},
	{
		href: 'https://vercel.com/',
		name: 'vercel',
		icon: faVercelIcon
	},
	{
		href: 'https://twitter.com/Dopamine_Driven',
		name: 'typescript',
		icon: faTypeScriptIcon
	}
];

type CardIconProps = {
	twitter: string;
	linkedin: string;
	react: string;
	heroku: string;
	vercel: string;
	props: string | number;
};

const CardIcons = ({
	props,
	linkedin,
	twitter,
	react,
	heroku,
	vercel
}: CardIconProps) => {
	console.log(typeof faHerokuIcon);
	console.log(typeof faVercelIcon);
	return (
		<div className='align-middle justify-right text-right inline-block'>
			<ul className='align-middle'>
				<li className='align-middle'>
					{' '}
					{vercel === '' ? (
						<></>
					) : (
						<a
							aria-label='react'
							target='__blank'
							href={vercel}
							className='bg-black text-white hover:text-white hover:bg-iconHover transition-colors leading-normal duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-1 rounded-full focus:outline-none'
						>
							{vercel === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faVercelIcon}
									className='flex align-middle text-center font-extrabold text-1xl pb-1'
									size='lg'
								/>
							)}
						</a>
					)}{' '}
					<a
						aria-label='linkedin'
						target='__blank'
						href={linkedin}
						className='bg-black text-white hover:text-white hover:bg-iconHover transition-colors leading-relaxed duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-1 rounded-full focus:outline-none'
					>
						<FontAwesomeIcon
							icon={faNextIcon}
							className='align-middle text-center font-extrabold text-1xl pb-1'
							size='lg'
						/>
					</a>{' '}
					<a
						aria-label='linkedin'
						target='__blank'
						href={linkedin}
						className='bg-black text-white hover:text-white hover:bg-iconHover transition-colors leading-relaxed duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-1 rounded-full focus:outline-none'
					>
						<FontAwesomeIcon
							icon={faGraphQLIcon}
							className='align-middle text-center font-extrabold text-1xl pb-1'
							size='lg'
						/>
					</a>{' '}
					{heroku === '' ? (
						<></>
					) : (
						<a
							aria-label='heroku'
							target='__blank'
							href={heroku}
							className='bg-black text-white hover:text-white hover:bg-iconHover transition-colors leading-normal duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-1 rounded-full focus:outline-none'
						>
							{react === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faTypeScriptIcon}
									className='flex align-middle text-center font-extrabold text-1xl'
									size={'sm'}
								/>
							)}
						</a>
					)}{' '}
					{heroku === '' ? (
						<></>
					) : (
						<a
							aria-label='auth0'
							target='__blank'
							href={heroku}
							className='bg-black text-white hover:text-white hover:bg-iconHover transition-colors leading-normal duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-1 rounded-full focus:outline-none'
						>
							{react === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faAuth0Icon}
									className='flex align-middle text-center font-extrabold text-1xl'
									size={'sm'}
								/>
							)}
						</a>
					)}{' '}
				</li>
			</ul>
		</div>
	);
};

export default CardIcons;

// CUSTOM ICONS https://medium.com/@nsisodiya/hacking-font-awesome-for-custom-svg-icons-ea762118fa7b

/*
// import {
// 	faGithub,
// 	faLinkedin,
// 	faDev,
// 	faMedium,
// 	faTwitter,
// 	faReact,
// 	faJava,
// 	faPython,
// 	faAngular,
// 	faGit,
// 	faNode,
// 	faWordpress,
// 	faStripe,
// 	faGoogle,
// 	faAdobe,
// 	faFigma,
// 	faYarn,
// 	faNpm,
// 	faUnsplash
// } from '@fortawesome/free-brands-svg-icons';

// import { HerokuIcon } from './svg-icons';
*/
