import Alert from 'components/alert';
import Footer from 'components/footer';
import Meta from 'components/meta';
import { ReactNode } from 'react';

type Props = {
	preview?: boolean;
	children: ReactNode;
};

const Layout = ({ preview, children }: Props) => {
	return (
		<>
			<Meta />
			<div className='min-h-screen'>
				<main>{children}</main>
			</div>
			<Alert preview={preview} />
			<Footer />
		</>
	);
};

export default Layout;
