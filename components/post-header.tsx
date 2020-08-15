import Avatar from './post-avatar';
import Date from './date-formatter';
import CoverImage from './post-cover-image';
import PostTitle from './post-title';
import CardIcons from './card-icons';
import Author from '../types/author';

type PostHeaderProps = {
	title: string;
	coverImage: string;
	author: Author;
	date: string;
	// slug?: string;
	social: string;
};

export default function PostHeader({
	title,
	date,
	author,
	social,
	coverImage
}: PostHeaderProps) {
	return (
		<>
			<div className='max-w-screen font-polished'>
				<div className='mb-4 md:mb-4 -mx-5 sm:mx-0'>
					<CoverImage title={title} coverImage={coverImage} />
				</div>
				<PostTitle>{title}</PostTitle>

				<div className='max-w-4xl mx-auto align-middle content-center justified-center text-center'>
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
					<CardIcons twitter={social} github={social} linkedin={social} />
				</div>

				<hr className='border-customGray w-4xl' />
			</div>
		</>
	);
}
