import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faLinkedin,
	faTwitter,
	faReact,
	faJava,
	faPython,
	faAngular,
	faGit,
	faNode,
	faWordpress,
	faStripe,
	faGoogle,
	faAdobe,
	faFigma,
	faYarn,
	faNpm,
	faUnsplash
} from '@fortawesome/free-brands-svg-icons';

import { HerokuIcon } from './svg-icons';
import { faCustomHerokuIcon, faCustomVercelIcon } from '../lib/fas-custom-integration';

type CardIconProps = {
	twitter: string;
	linkedin: string;
	react: string;
	heroku: string;
	vercel: string;
	props: string | number;
};

const CardIcons = ({ props, linkedin, twitter, react, heroku, vercel }: CardIconProps) => {
	console.log(typeof(faCustomHerokuIcon));
	console.log(typeof(faCustomVercelIcon));
	return (
		<div className='align-middle justify-right text-right content-right inline-block'>
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
							className='bg-customGray text-white hover:text-white hover:bg-iconHover transition-colors leading-normal duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-1 rounded-full focus:outline-none'
						>
							{vercel === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faCustomVercelIcon}
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
						className='bg-customGray text-white hover:text-white hover:bg-iconHover transition-colors leading-relaxed duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-1 rounded-full focus:outline-none'
					>
						<FontAwesomeIcon
							icon={faLinkedin}
							className='align-middle text-center font-extrabold text-1xl pb-1'
							size='lg'
						/>
					</a>{' '}
					<a
						aria-label="Heroku"
						className='bg-customGray text-white hover:text-white hover:bg-iconHover transition-colors leading-normal duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-1 rounded-full focus:outline-none'
					>
						<i className='flex flex-row -mt-10 align-middle text-center font-extrabold justify-center text-1xl'>
							<HerokuIcon width={'17'} fillColor='white' />
						</i>
					</a>{' '}
					{heroku === '' ? (
						<></>
					) : (
						<a
							aria-label='heroku'
							target='__blank'
							href={heroku}
							className='bg-customGray text-white hover:text-white hover:bg-iconHover transition-colors leading-normal duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-1 rounded-full focus:outline-none'
						>
							{react === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faCustomHerokuIcon}
									className='flex align-middle text-center font-extrabold text-1xl'
									size={"lg"}
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
