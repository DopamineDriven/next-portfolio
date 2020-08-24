import { useRouter } from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';
import { Fragment } from 'react';
import { getBlogBySlug, getAllBlogs } from 'lib/blog-api';
import { CMS_NAME } from 'lib/constants';
import markdownToHtml from 'lib/markdownToHtml';
import Container from 'components/container';
import BlogPostBody from 'components/post-body-blog';
import BlogPostHeader from 'components/post-header-blog';
import Header from 'components/header';
import BlogPostTitle from 'components/post-title-blog';
import Layout from 'components/layout';
import Blog from 'types/blog';

interface BlogInterface {
	blog: Blog;
	moreBlogs: Blog[];
	preview?: boolean;
	props: string | number;
}

const Blogs = ({ blog, moreBlogs, preview, props }: BlogInterface) => {
	const router = useRouter();
	if (!router.isFallback && !blog?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<Fragment>
			<Header props={props} />
			<Layout preview={preview}>
				<Container>
					{router.isFallback ? (
						<BlogPostTitle>Loading...</BlogPostTitle>
					) : (
						<article className='mb-16'>
							<Head>
								<title>
									{blog.title} | Next.js Portfolio with {CMS_NAME}
								</title>
								<meta property='og:image' content={blog.ogImage.url} />
							</Head>
							<BlogPostHeader
								title={blog.title}
								coverImage={blog.coverImage}
								date={blog.date}
								author={blog.author}
							/>
							<BlogPostBody content={blog.content} />
						</article>
					)}
				</Container>
			</Layout>
		</Fragment>
	);
};

export default Blogs;

interface BlogParams {
	params: {
		slug: string;
	};
}

export async function getStaticProps({ params }: BlogParams) {
	const blog = getBlogBySlug(params.slug, [
		'title',
		'date',
		'slug',
		'author',
		'content',
		'ogImage',
		'coverImage'
	]);

	const blogContent = await markdownToHtml(blog.content || '');

	return {
		props: {
			blog: {
				...blog,
				blogContent
			}
		}
	};
}

export async function getStaticPaths() {
	const blogs = getAllBlogs(['slug']);

	return {
		paths: blogs.map(blogs => {
			return {
				params: {
					slug: blogs.slug
				}
			};
		}),
		fallback: false
	};
}
