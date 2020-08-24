type AvatarProps = {
	name: string;
	avatar: string;
};

export default function Avatar({ name, avatar }: AvatarProps) {
	return (
		<>
			<div className='flex w-full items-center text-center align-middle justify-center rounded-full overflow-hidden'>
				<div>
					<img
						src={avatar}
						className='h-20 w-20 rounded-full border-tinyHouseWhite border-collapse border-opacity-50 border-4'
						alt={name}
					/>
				</div>
			</div>
			<div className='flex text-md font-semibold w-full items-center text-center align-middle justify-center'>
				<h2>{name}</h2>
			</div>
		</>
	);
}
