import CoverImage, { CoverImageProps } from 'components/cover-image-card';
import Avatar from 'components/card-tech-specs';
import Link from 'next/link';
import CardIcons from 'components/card-icons';
import Author from 'types/author';
import TechIcons from 'types/tech-icons';
import next from 'next';

type CardProps = {
	author: Author;
	src: string;
	title: string;
	slug: string;
	date: string;
	excerpt: string;
};

const Card = ({ author, src, excerpt, date, slug, title }: CardProps) => {
	// animate
	// https://www.npmjs.com/package/tailwindcss-animatecss
	return (
		<div className='font-polished transition duration-1000 ease-in-out inline-block'>
			<div className='max-w-xs hover:max-w-sm sm:max-w-sm lg:max-w-md rounded-lg overflow-x-hidden overflow-y-hidden bg-white shadow-lg inline-block'>
				<CoverImage src={src} title={title} slug={slug} />

				<div className='flex flex-col text-left justify-center bg-white shadow rounded-b-lg'>
					<div className='font-bold text-xl h-12 mt-2 w-full font-polished leading-tight px-4 pb-2'>
						<Link as={`/posts/${slug}`} href='/posts/[slug]'>
							<a
								className='hover:underline text-xl font-semibold text-left'
								dangerouslySetInnerHTML={{ __html: title }}
							></a>
						</Link>
					</div>
					<div
						className={
							'text-smxmd px-4 mt-1 text-left leading-tight overflow-y h-16 w-full'
						}
						dangerouslySetInnerHTML={{ __html: excerpt }}
					></div>
					<>
						<div className='grid-cols-1 pl-2 font-subpolished'>
							<Avatar
								github={author.github}
								date={date}
								name={author.name}
								vercel={author.vercel}
								heroku={author.heroku}
							/>
						</div>
					</>
					<hr className='border-customGray w-full mt-2' />
					<div className='text-right items-end align-middle float-right pr-2 py-1 font-subpolished'>
						<CardIcons
							apollo={author.apollo}
							auth0={author.auth0}
							graphql={author.graphql}
							next={author.next}
							react={author.react}
							tailwindcss={author.tailwindcss}
							typescript={author.typescript}
							wordpress={author.wordpress}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

// interface CardSlugProps {
// 	title: string;
// }

// const CardSlug = ({ title }: CardSlugProps) => {
// 	return (
// 		<>
// 			<Link as={`/posts/${Card()}`} href='/posts/[slug]'>
// 				<a>
// 				<Card />
// 				</a>
// 			</Link>
// 		</>
// 	);
// };

export default Card;
