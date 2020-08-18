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

type CardIconProps = {
	twitter: string;
	linkedin: string;
	react: string;
	props: string | number;
};

const CardIcons = ({ props, linkedin, twitter, react }: CardIconProps) => {
	return (
		<div className='align-middle justify-right text-right content-right inline-block'>
			<ul className='align-middle'>
				<li className='align-middle'>
					{' '}
					{react === '' ? (
						<></>
					) : (
						<a
							aria-label='react'
							target='__blank'
							href={react}
							className='bg-customGray text-white hover:text-white hover:bg-iconHover transition-colors leading-normal duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-1 rounded-full focus:outline-none'
						>
							{react === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faReact}
									className='flex align-middle text-center font-extrabold text-1xl'
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
							className='align-middle text-center font-extrabold text-1xl'
						/>
					</a>{' '}
					{/* <a
						aria-label='twitter'
						target='__blank'
						href={twitter}
						className='bg-customGray text-white hover:text-white hover:bg-iconHover transition-colors leading-relaxed duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-1 rounded-full focus:outline-none'
					>
						<Heroku props={props} />
					</a> */}
					{' '}
					{react === '' ? (
						<></>
					) : (
						<a
							aria-label='react'
							target='__blank'
							href={react}
							className='bg-customGray text-white hover:text-white hover:bg-iconHover transition-colors leading-normal duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-1 rounded-full focus:outline-none'
						>
							{react === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faReact}
									className='flex align-middle text-center font-extrabold text-1xl'
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
