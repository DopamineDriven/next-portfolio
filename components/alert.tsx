import Container from './container';
import cn from 'classnames';
// import { EXAMPLE_PATH } from '../lib/constants';
import SocialMediaIcons from './social-media-icons';

type Props = {
	preview?: boolean;
};

const Alert = ({ preview }: Props) => {
	return (
		<div
			className={cn('border-t bg-black', {
				'bg-accent-7 border-accent-7 text-white': preview,
				'bg-black border-top border-cimaRed': !preview
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
							<SocialMediaIcons />
						</>
					)}
				</div>
			</Container>
		</div>
	);
};

export default Alert;
