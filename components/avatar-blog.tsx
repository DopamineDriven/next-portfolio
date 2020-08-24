type Props = {
	name: string;
	picture: string;
};

const Avatar = ({ name, picture }: Props) => {
	return (
		<div className='flex items-center'>
			<img src={picture} className='w-14 h-14 rounded-full mr-4' alt={name} />
			<div className='text-md font-semibold'>{name}</div>
		</div>
	);
};

export default Avatar;
