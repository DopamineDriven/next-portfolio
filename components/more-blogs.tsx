import PostPreview from './post-preview';
import Blogs from 'types/blog';

type Props = {
	blogs: Blogs[];
};

const MoreBlogs = ({ blogs }: Props) => {
	return (
		<section>
			<h2 className='mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight'>
				More Stories
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32'>
				{blogs.map(blog => (
					<PostPreview
						key={blog.slug}
						title={blog.title}
						coverImage={blog.coverImage}
						date={blog.date}
						author={blog.author}
						slug={blog.slug}
						excerpt={blog.excerpt}
					/>
				))}
			</div>
		</section>
	);
};

export default MoreBlogs;
