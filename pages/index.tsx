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


type Props = {
	allPosts: Post[];
	props: string | number;
};

const Index = ({ allPosts, props }: Props) => {
	// const heroPost = allPosts[0];
	const x: boolean & number | unknown = true && 0o0;
	console.log(typeof(x), x);
	console.log(typeof(0o0));
	const morePosts = allPosts.slice(0);
	return (
		<>
			<Header props={props} />
			<Layout>
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


