import Container from 'components/container';
import cn from 'classnames';
// import { EXAMPLE_PATH } from 'lib/constants';
import SocialMediaIcons from 'components/social-media-icons-footer';

type Props = {
	preview?: boolean;
};

const Alert = ({ preview }: Props) => {
	return (
		<div
			className={cn('border-t bg-black', {
				'bg-accent-7 border-accent-7 text-white': preview,
				'bg-black border-top border-cimaRed w-full align-middle justify-center': !preview
			})}
		>
			<Container>
				<div className='pb-1 text-center text-xl text-white align-middle items-center'>
					{preview ? (
						<>
							This is page is a preview.{' '}
							<a
								href='/api/exit-preview'
								className='underline hover:text-cyan duration-200 transition-colors'
							>
								Click here
							</a>{' '}
							to exit preview mode.
						</>
					) : (
						<>
							<a className='inline-flex mx-auto min-w-full w-full justify-center text-2xl flex-grow'>
								<SocialMediaIcons />
							</a>
						</>
					)}
				</div>
			</Container>
		</div>
	);
};

export default Alert;
