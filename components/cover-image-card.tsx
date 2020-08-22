import cn from 'classnames';
import Link from 'next/link';

export type CoverImageProps = {
	title: string;
	src: string;
	slug?: string;
};

export default function CoverImageCard({
	title,
	src,
	slug
}: CoverImageProps) {
	const image = (
		<img
			src={src}
			alt={title}
			className={cn(
				'shadow-sm w-full h-44 max-h-full sm:h-56 lg:h-64 overflow-x rounded-t rounded-b-sm',
				{
					'hover:shadow-lg transition-shadow duration-400': slug
				}
			)}
		/>
	);
	return (
		<div className='-mx-5 sm:mx-0'>
			{slug ? (
				<Link as={`/posts/${slug}`} href='/posts/[slug]'>
					<a aria-label={title}>{image}</a>
				</Link>
			) : (
				image
			)}
		</div>
	);
}
