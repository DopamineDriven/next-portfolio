import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Layout from '../components/layout';
import Container from '../components/container';
import Intro from '../components/intro';
import { CLIENT_NAME } from '../lib/constants';
import { getAllBlogs } from '../lib/api';

interface Props {
	props: string | number;
	preview?: boolean;
}

const Blog = ({ preview, props }: Props) => {
	return (
		<>
			<Header props={props} />
			<Layout preview={preview}>
				<Head>
					<title>{`${CLIENT_NAME}' about page`}</title>
				</Head>
				<Container>
					<Intro props={props} />
				</Container>
			</Layout>
		</>
	);
};

export default Blog;

/*
	<h2 className='text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8'>
		<Link href='/'>
			<a className='hover:underline text-cimaRed px-8'>Blog</a>
		</Link>
	</h2> 
*/
