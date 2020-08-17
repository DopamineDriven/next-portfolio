import { FC } from 'react';
import IcomoonReact, { iconList } from 'icomoon-react';
import iconSet from '../lib/icomoon.json';

const Icon: FC<{
	color?: string;
	size: string | number;
	icon: string;
	className?: string;
}> = props => {
    console.log(iconList(iconSet));
    const { color, size = '100%', icon, className = '' } = props;
	return (
		<IcomoonReact
			className={className}
			iconSet={iconSet}
			color={color}
			size={size}
			icon={icon}
		/>
	);
};

export default Icon;
