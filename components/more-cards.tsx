import Card from './card';
import PostPreview from './post-preview';
import Post from '../types/post';

type CardsProps = {
	posts: Post[];
};

export default function MoreCards({ posts }: CardsProps) {
	return (
		<section>
			{/* <h2 className='mb-8 text-6xl md:text-6xl tracking-tighter leading-tight'>
				More Companies
			</h2> */}
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 col-gap-8 row-gap-6 align-middle text-center'>
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
