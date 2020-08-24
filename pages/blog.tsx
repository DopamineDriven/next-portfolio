import Head from 'next/head';
import { GetStaticProps } from 'next';
import Header from 'components/header';
import Layout from 'components/layout';
import Container from 'components/container';
import Intro from 'components/intro';
import HeroBlog from 'components/hero-post-blog';
import { CLIENT_NAME } from 'lib/constants';
import { getAllBlogs } from 'lib/blog-api';
import BlogType from 'types/blog';
import MoreBlogs from 'components/more-blogs';
import LandingSidebar from 'components/landing-sidebar';

interface BlogProps {
	props: string | number;
	preview?: boolean;
	allBlogs: BlogType[];
}

const Blog = ({ allBlogs, preview, props }: BlogProps) => {
	const heroBlog = allBlogs[0];
	const moreBlogs = allBlogs.slice(1);
	return (
		<>
			<Header props={props} />
			<Layout preview={preview}>
				<LandingSidebar />
				<Head>
					<title>{`${CLIENT_NAME}' about page`}</title>
				</Head>
				<Container>
					<Intro props={props} />
					{heroBlog && (
						<HeroBlog
							title={heroBlog.title}
							coverImage={heroBlog.coverImage}
							date={heroBlog.date}
							author={heroBlog.author}
							slug={heroBlog.slug}
							excerpt={heroBlog.excerpt}
						/>
					)}
					{moreBlogs.length > 0 && <MoreBlogs blogs={moreBlogs} />}
				</Container>
			</Layout>
		</>
	);
};

export default Blog;

export const getStaticProps = async ({}: GetStaticProps) => {
	const allBlogs = getAllBlogs([
		'title',
		'date',
		'slug',
		'author',
		'coverImage',
		'excerpt'
	]);

	return {
		props: { allBlogs }
	};
};

/*
	<h2 className='text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8'>
		<Link href='/'>
			<a className='hover:underline text-cimaRed px-8'>Blog</a>
		</Link>
	</h2> 
*/
