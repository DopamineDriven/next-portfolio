import Card from 'components/card';
import PostPreview from 'components/post-preview';
import Post from 'types/post';

type CardsProps = {
	posts: Post[];
};

export default function MoreCards({ posts }: CardsProps) {
	return (
		<section>
			{/* <h2 className='mb-8 text-6xl md:text-6xl tracking-tighter leading-tight'>
				More Companies
			</h2> */}
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-6 align-middle text-center px-2'>
				{posts.map(post => (
					<Card
						key={post.slug}
						title={post.title}
						src={post.coverImage}
						author={post.author}
						date={post.date}
						slug={post.slug}
						excerpt={post.excerpt}
					/>
				))}
			</div>
		</section>
	);
}
