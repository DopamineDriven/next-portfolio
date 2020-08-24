import Avatar from 'components/avatar-blog';
import DateFormater from 'components/date-formatter';
import CoverImage from 'components/cover-image-blog';
import PostTitle from 'components/post-title';
import Author from 'types/author';

type Props = {
	title: string;
	coverImage: string;
	date: string;
	author: Author;
};

const PostHeaderBlog = ({ title, coverImage, date, author }: Props) => {
	return (
		<div className='mt-4'>
			<PostTitle>{title}</PostTitle>
			{/* <div className='hidden md:flex md:content-center md:mb-12 md:mx-auto md:justify-center md:mt-4'> */}
			<div className='hidden md:hidden'>
				<Avatar name={author.name} picture={author.avatar} />
			</div>{' '}
			<div className='mb-2 text-2xl font-semibold inline-flex mx-auto text-center justify-center w-full'>
				<DateFormater dateString={date} />
			</div>
			<div className='mb-8 md:mb-8 pl-2 -mr-2 text-center content-center items-center md:pl-0 mx-auto md:flex md:mx-auto justify-center md:text-center'>
				<CoverImage title={title} src={coverImage} />
			</div>
			<div className='max-w-2xl mx-auto md:flex md:justify-center'>
				{/* <div className='block md:hidden mb-6'> */}
				<div className='hidden md:hidden'>
					<Avatar name={author.name} picture={author.avatar} />
				</div>
				{/* <div className='mb-2 text-2xl font-semibold'>
					<DateFormater dateString={date} />
				</div> */}
			</div>
		</div>
	);
};

export default PostHeaderBlog;
