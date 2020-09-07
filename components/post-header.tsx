import Avatar from 'components/post-avatar';
import Date from 'components/date-formatter';
import CoverImage from 'components/post-cover-image';
import PostTitle from 'components/post-title';
import CardIcons from 'components/card-icons';
import Author from 'types/author';
import TechIcons from 'types/tech-icons';

type PostHeaderProps = {
	title: string;
	coverImage: string;
	author: Author;
	date: string;
	// slug?: string;
};

export default function PostHeader({
	title,
	date,
	author,
	coverImage
}: PostHeaderProps) {
	return (
		<>
			<div className='max-w-screen font-polished'>
				<div className='mb-4 md:mb-4 -mx-5 sm:mx-0'>
					<CoverImage title={title} coverImage={coverImage} />
				</div>
				<PostTitle>{title}</PostTitle>

				<div className='max-w-4xl mx-auto align-middle content-center justify-center text-center'>
					<div className='hidden md:block align-middle content-center text-center justify-center'>
						<Avatar avatar={author.avatar} name={author.name} />
					</div>
					<div className='text-xs font-subpolished'>
						Published&nbsp;
						<Date dateString={date} />
					</div>
					<div className='block md:hidden w-inherit'>
						<Avatar avatar={author.avatar} name={author.name} />
					</div>
					{/* <div className='flex flex-col'>
						<Categories categories={categories} />
					</div> */}
					<CardIcons
						antdesign={author.antdesign}
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

				<hr className='border-customGray w-4xl' />
			</div>
		</>
	);
}
