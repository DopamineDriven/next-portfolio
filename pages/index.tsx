import Container from '../components/container';
import MoreCards from '../components/more-cards';
// import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import Post from '../types/post';
import Header from '../components/header';
import { iconLinks } from '../components/social-media-icons-footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
	allPosts: Post[];
	props: string | number;
};

const Index = ({ allPosts, props }: Props) => {
	// const heroPost = allPosts[0];
	const x: (boolean & number) | unknown = true && 0o0;
	console.log(typeof x, x);
	console.log(typeof 0o0);
	const morePosts = allPosts.slice(0);
	const iconMap = iconLinks.map(link => (
		<a
			key={link.name}
			aria-label={link.name}
			target='__blank'
			href={link.href}
			className='bg-transparent text-black hover:text-cimaRed transform transition-colors duration-500 font-lg items-center justify-center align-center outline-none focus:outline-none rounded-full py-2 px-3 inline-block text-center'
		>
			<FontAwesomeIcon icon={link.icon} size='2x' />
		</a>
	));
	return (
		<>
			<Header props={props} />
			<Layout>
				<div className='flex float-left'>
					<div className='h-screen sticky top-0 flex'>
						{' '}
						<ul className='flex flex-row w-full my-auto lg:flex-row list-none float-left py-1 bg-scroll sticky top-0'>
							<li className='grid grids-cols-1 float-left items-end justify-end mx-auto'>
								{iconMap}
							</li>
						</ul>
					</div>
				</div>

				<Head>
					<title>Next.js Blog Example with {CMS_NAME}</title>
				</Head>
				<Container>
					<Intro props={props} />
					{/* {heroPost && (
						<HeroPost
							title={heroPost.title}
							coverImage={heroPost.coverImage}
							date={heroPost.date}
							author={heroPost.author}
							slug={heroPost.slug}
							excerpt={heroPost.excerpt}
						/>
					)} */}
					<div className='max-w-5xl mt-5 mb-5 grid mx-auto content-center justify-center items-center text-center'>
						{morePosts.length > 0 && <MoreCards posts={morePosts} />}
					</div>
				</Container>
			</Layout>
		</>
	);
};

export default Index;

export const getStaticProps = async () => {
	const allPosts = getAllPosts([
		'title',
		'date',
		'slug',
		'author',
		'coverImage',
		'excerpt'
	]);

	return {
		props: { allPosts }
	};
};

{
	/* <div className='flex flex-wrap transform duration-1000'>
<ul className='flex flex-row w-full my-auto lg:flex-row list-none lg:mx-auto py-1'>
	<li className='grid grids-cols-1'>{iconMap}</li>
</ul>
</div> */
}

// /*
// import Container from '../components/container';
// import MoreCards from '../components/more-cards';
// // import HeroPost from '../components/hero-post';
// import Intro from '../components/intro';
// import Layout from '../components/layout';
// import { getAllPosts } from '../lib/api';
// import Head from 'next/head';
// import { CMS_NAME } from '../lib/constants';
// import Post from '../types/post';
// import Header from '../components/header';
// import { InferGetStaticPropsType, GetStaticProps } from 'next';

// type Props = {
// 	allPosts: Post[];
// 	props: string | number;
// };

// const Index = ({
// 	allPosts,
// 	props
// }: Props & InferGetStaticPropsType<typeof getStaticProps>) => {
// 	// const heroPost = allPosts[0];
// 	const x: (boolean & number) | unknown = true && 0o0;
// 	console.log(typeof x, x);
// 	console.log(typeof 0o0);
// 	const morePosts = allPosts.slice(0);
// 	return (
// 		<>
// 			<Header props={props} />
// 			<Layout>
// 				<Head>
// 					<title>Next.js Blog Example with {CMS_NAME}</title>
// 				</Head>
// 				<Container>
// 					<Intro props={props} />
// 					{/* {heroPost && (
// 						<HeroPost
// 							title={heroPost.title}
// 							coverImage={heroPost.coverImage}
// 							date={heroPost.date}
// 							author={heroPost.author}
// 							slug={heroPost.slug}
// 							excerpt={heroPost.excerpt}
// 						/>
// 					)} */}
// 					<div className='max-w-5xl mt-5 mb-5 grid mx-auto content-center justify-center items-center text-center'>
// 						{morePosts.length > 0 && <MoreCards posts={morePosts} />}
// 					</div>
// 				</Container>
// 			</Layout>
// 		</>
// 	);
// };

// export default Index;

// export const getStaticProps: GetStaticProps = async () => {
// 	const allPosts = getAllPosts([
// 		'title',
// 		'date',
// 		'slug',
// 		'author',
// 		'coverImage',
// 		'excerpt'
// 	]);

// 	return {
// 		props: { allPosts }
// 	};
// };
