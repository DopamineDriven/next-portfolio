import Date from 'components/date-formatter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faVercelIcon, faHerokuIcon } from 'lib/fas-custom-integration';

type CardTechProps = {
	name: string;
	date: string;
	github: string;
	heroku: string;
	vercel: string;
};

export default function Avatar({
	date,
	name,
	github,
	vercel,
	heroku
}: CardTechProps) {
	return (
		<>
			<div className='ml-1 mt-1 flex flex-row align-bottom items-left text-left float-left overflow-hidden'>
				<div className='flex flex-row-reverse w-1/2 mr-6 align-middle items-center justify-center cursor-pointer'>
					{github === '' ? (
						<></>
					) : (
						<a
							aria-label='github'
							target='__blank'
							href={github}
							className='bg-black text-white hover:text-white hover:bg-iconHover transition-colors leading-normal duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-1 rounded-full focus:outline-none'
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
					{heroku === '' ? (
						<></>
					) : (
						<a
							aria-label='github'
							target='__blank'
							href={heroku}
							className='bg-black text-white hover:text-white hover:bg-iconHover transition-colors leading-normal duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-1 rounded-full focus:outline-none'
						>
							{heroku === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faHerokuIcon}
									className='flex align-middle text-center font-extrabold text-1xl'
									size='2x'
								/>
							)}
						</a>
					)}{' '}
					{vercel === '' ? (
						<></>
					) : (
						<a
							aria-label='github'
							target='__blank'
							href={vercel}
							className='bg-black text-white hover:text-white hover:bg-iconHover transition-colors leading-normal duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-1 rounded-full focus:outline-none'
						>
							{vercel === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faVercelIcon}
											className='flex align-middle text-center font-extrabold pb-1 text-lg'
											size='1x'
								/>
							)}
						</a>
					)}{' '}
				</div>

				<div className='flex flex-col w-2/3 my-0 text-sm pt-1 pb-2 items-left align-top text-left float-left -mx-5'>
					<div className='flex flex-row w-32 align-top font-semibold font-subpolished'>
						<a className='flex w-full'>{name}</a>
					</div>
					<div className='flex flex-row text-xs text-gray-500 text-left align-top float-left font-subpolished'>
						<Date dateString={date} />
					</div>
				</div>
			</div>
		</>
	);
}

/*
		<div className='flex w-full items-center text-center align-middle justify-center rounded-full shadow-lg border-collapse bg-blizzardBlue border-4 border-white border-opacity-50'>
			<img
				src={author.avatar.url}
				className='h-24 w-24 rounded-full border-transparent border-collapse border-opacity-75 border-2 shadow-xl'
				alt={nombre}
			/>
		</div>
*/
