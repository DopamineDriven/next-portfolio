import Avatar from 'components/avatar-blog';
import DateFormater from 'components/date-formatter';
import CoverImage from 'components/cover-image-blog';
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

const HeroPost = ({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug
}: Props) => {
	return (
		<section>
			<div className='mb-8 md:mb-16'>
				<CoverImage title={title} src={coverImage} slug={slug} />
			</div>
			<div className='md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28'>
				<div>
					<h3 className='mb-4 text-4xl lg:text-6xl leading-tight'>
						<Link as={`/blogs/${slug}`} href='/blogs/[slug]'>
							<a className='hover:underline'>{title}</a>
						</Link>
					</h3>
					<div className='mb-4 md:mb-0 md:pt-22 text-lg font-semibold ml-1'>
						<DateFormater dateString={date} />
					</div>
				</div>
				<div>
					<p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
					<div className='font-semibold'>
						{' '}
						<Avatar name={author.name} picture={author.avatar} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroPost;
