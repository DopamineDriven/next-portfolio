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
		<>
			<PostTitle>{title}</PostTitle>
			<div className='hidden md:block md:mb-12'>
				<Avatar name={author.name} picture={author.avatar} />
			</div>
			<div className='mb-8 md:mb-16 -mx-5 sm:mx-0'>
				<CoverImage title={title} src={coverImage} />
			</div>
			<div className='max-w-2xl mx-auto'>
				<div className='block md:hidden mb-6'>
					<Avatar name={author.name} picture={author.avatar} />
				</div>
				<div className='mb-6 text-lg'>
					<DateFormater dateString={date} />
				</div>
			</div>
		</>
	);
};

export default PostHeaderBlog;
