import Avatar from 'components/card-github-deployment';
import DateFormater from 'components/date-formatter';
import CoverImage from 'components/cover-image-card';
import Link from 'next/link';
import Author from 'types/author';

type Props = {
	title: string;
	coverImage: string;
	date: string;
	excerpt: string;
	author: Author;
	slug: string;
};

const PostPreview = ({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug
}: Props) => {
	return (
		<div className='font-polished'>
			<div className='mb-2'>
				<CoverImage slug={slug} title={title} src={coverImage} />
			</div>
			<h3 className='text-3xl mb-3 leading-snug'>
				<Link as={`/posts/${slug}`} href='/posts/[slug]'>
					<a className='hover:underline text-4xl font-semibold'>{title}</a>
				</Link>
			</h3>
			<div className='text-lg mb-2'>
				<DateFormater dateString={date} />
			</div>
			<div className='text-3xl leading-relaxed mb-2 text-center justify-center'>
				{excerpt}
			</div>
			<Avatar name={author.name} github={author.github} date={date} heroku={author.heroku} vercel={author.vercel} />
		</div>
	);
};

export default PostPreview;
