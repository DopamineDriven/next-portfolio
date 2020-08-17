import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/fontawesome-svg-core';
import {
	faGithub,
	faLinkedin,
	faTwitter,
	faReact,
	faNode,
	faWordpress,
	faStripe,
	faGoogle,
	faAdobe,
	faFigma,
} from '@fortawesome/free-brands-svg-icons';

// import { library } from '@fortawesome/fontawesome-svg-core';

// const faHerokuIcon: any = {
// 	prefis: 'fas',
// 	iconName: 'heroku',
// 	icon: [
// 		512,
// 		512,
// 		[],
// 		'000000',
// 		'M414.5 0h-317c-33.084 0-60 26.916-60 60v392c0 33.084 26.916 60 60 60h317c33.084 0 60-26.916 60-60V60c0-33.084-26.916-60-60-60zm30 452c0 16.542-13.458 30-30 30h-317c-16.542 0-30-13.458-30-30V60c0-16.542 13.458-30 30-30h317c16.542 0 30 13.458 30 30v392z M357.702 201.773c-16.828-14.256-38.669-22.107-61.5-22.107-5.578 0-11.225.47-16.783 1.396L211 192.465V60h-90v238.707l173.215-28.87c2.32-.388 4.449-.124 5.313.606.679.576 1.472 2.268 1.472 5.142V452h90V275.586c0-28.983-12.137-55.887-33.298-73.813zM361 422h-30V275.586c0-11.477-4.29-21.433-12.081-28.032-6.104-5.17-13.912-7.903-22.582-7.903-2.313 0-4.687.2-7.055.595L151 263.293V90h30v137.879l103.351-17.225a72.372 72.372 0 0111.852-.988c15.738 0 30.692 5.326 42.108 14.998C352.729 236.878 361 255.439 361 275.586V422z M121 304v150l100-75-100-75zm30 60l20 15-20 15v-30zM301 60v15c0 19.204-2.802 38.22-8.328 56.522l-5.839 19.336h94.278l2.665-11.657A288.523 288.523 0 00391 75V60h-90zm55.912 60.858h-30.606A225.638 225.638 0 00330.504 90h30.062a258.528 258.528 0 01-3.654 30.858z'
// 	]
// };
// library.add(faHerokuIcon);

// export const herokuIcon = (
// 	<FontAwesomeIcon
// 		color='white'
// 		size='6x'
// 		icon='heroku'
// 		className='align-middle text-center font-extrabold text-1xl'
// 	/>
// );
// type Props = {};

type CardIconProps = {
	github: string;
	twitter: string;
	linkedin: string;
	react: string;
};

const CardIcons = ({ github, linkedin, twitter, react }: CardIconProps) => {
	return (
		<div className='align-middle justify-right text-right content-right inline-block'>
			<ul className='align-middle'>
				<li className='align-middle'>
					{' '}
					{github === '' ? (
						<></>
					) : (
						<a
							aria-label='github'
							target='__blank'
							href={github}
							className='bg-customGray text-white hover:text-white hover:bg-iconHover transition-colors leading-normal duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-1 rounded-full focus:outline-none'
						>
							{github === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faGithub}
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
					<a
						aria-label='twitter'
						target='__blank'
						href={twitter}
						className='bg-customGray text-white hover:text-white hover:bg-iconHover transition-colors leading-relaxed duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-1 rounded-full focus:outline-none'
					>
						<FontAwesomeIcon
							icon={faTwitter}
							className='align-middle text-center font-extrabold text-1xl'
						/>
					</a>
					{' '}
					{react === '' ? (
						<></>
					) : (
						<a
							aria-label='github'
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
