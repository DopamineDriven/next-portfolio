import { iconLinks } from 'components/social-media-icons-footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const landingSidebar = () => {
	const iconMap = iconLinks.map(link => (
		<a
			key={link.name}
			aria-label={link.name}
			target='__blank'
			href={link.href}
			className='bg-black text-white hover:text-iconHover transform transition-colors duration-500 font-lg my-2 items-center justify-center align-center outline-none focus:outline-none rounded-full py-2 px-2 inline-block text-center'
		>
			<FontAwesomeIcon icon={link.icon} size='2x' className='rounded-full' />
		</a>
	));
	return (
		<div className='md:flex md:float-right hidden'>
			<div className='h-screen sticky top-0 flex'>
				{' '}
				<ul className='flex flex-row w-full my-auto lg:flex-row list-none py-1 bg-scroll sticky top-0 bg-black rounded-l-lg'>
					<li className='grid grids-cols-1 items-end justify-end mx-auto py-1 pr-1 my-2 mr-1 pl-2'>
						{iconMap}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default landingSidebar;
