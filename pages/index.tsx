import Container from 'components/container';
import MoreCards from 'components/more-cards';
// import HeroPost from 'components/hero-post';
import Intro from 'components/intro';
import Layout from 'components/layout';
import { getAllPosts } from 'lib/api';
import Head from 'next/head';
import { CMS_NAME } from 'lib/constants';
import Post from 'types/post';
import Header from 'components/header';
import { iconLinks } from 'components/social-media-icons-footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from 'components/landing-sidebar';

type Props = {
	allPosts: Post[];
	props: string | number;
	preview?: boolean;
};

const Index = ({ allPosts, props, preview }: Props) => {
	const morePosts = allPosts.slice(0);

	return (
		<>
			<Header props={props} />
			<Layout preview={preview}>
				<Sidebar />
				<Head>
					<title>A Nextjs Portfolio via {CMS_NAME}</title>
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

/*
Twitter practice problems
	week of 8-16
	// const y: (boolean & number) | unknown = true && 0o0;
	// console.log(typeof y, y);
	// console.log(typeof 0o0);

	week of 8-23
	// const seven: number = 7;
	// const bool: boolean | number = true && 1;
	// console.log('value of bool in isolation:', bool);
	// console.log('type of bool in isolation:', typeof bool);
	// const x: number & (boolean | number) = seven + bool;
	// x === 8 ? console.log('result of x:', x) : console.log(typeof x);
	// console.log('type of x:', typeof x);

	week of 8-30
	const value: number | string = parseFloat('3.14.55');
		value == '3.14.55' ? console.log(`correct, value === ${value}`) : console.log(value);
	
	// const value: number = parseFloat('3.14.55');
	// console.log(value);
	outputs 3.14


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
1) `in` in JS is not about the elements *in* the structure but about it's properties
2) The structure's methods are in the same collection "properties".
The in operator returns true if the specified property is in the specified object or its prototype chain.
Reduce can be used to process an :array and operate on each of its elements.
Hence, it will allways return true even if the array is empty.
	const nums: number[] = [1, 2, 3];
	console.log(nums);
	'reduce' in nums;
	console.log(nums);
*/
