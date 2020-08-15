import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
	faGithub,
	faInstagram,
	faLinkedin,
	faTwitter
} from '@fortawesome/free-brands-svg-icons';
type Props = {};

type CardIconProps = {
	github: string;
	twitter: string;
	linkedin: string;
};

const CardIcons = ({ github, linkedin, twitter }: CardIconProps) => {
	return (
		<div className='align-middle justify-right text-right content-right inline-block'>
			<ul className='align-middle'>
				<li className='align-middle'>
					{' '}
					<a
						aria-label='github'
						target='__blank'
						href={github}
						className='bg-customGray text-white hover:text-white hover:bg-iconHover transition-colors leading-relaxed duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 rounded-full focus:outline-none'
					>
						<FontAwesomeIcon
							icon={faGithub}
							className='align-middle text-center font-extrabold text-1xl'
						/>
					</a>{' '}
					<a
						aria-label='linkedin'
						target='__blank'
						href={linkedin}
						className='bg-customGray text-white hover:text-white hover:bg-iconHover transition-colors leading-relaxed duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 rounded-full focus:outline-none'
					>
						<FontAwesomeIcon
							icon={faLinkedin}
							className='align-middle text-center font-extrabold text-1xl'
						/>
					</a>{' '}
					<a
						aria-label='twitter'
						target='__blank'
						href={twitter}
						className='bg-customGray text-white hover:text-white hover:bg-iconHover transition-colors leading-relaxed duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 rounded-full focus:outline-none'
					>
						<FontAwesomeIcon
							icon={faTwitter}
							className='align-middle text-center font-extrabold text-1xl'
						/>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default CardIcons;

// CUSTOM ICONS https://medium.com/@nsisodiya/hacking-font-awesome-for-custom-svg-icons-ea762118fa7b
