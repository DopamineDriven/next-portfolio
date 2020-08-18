import {
	SvgIcon,
	HerokuIcon,
	TailwindIcon,
	TsqlIcon,
	TypeOrmIcon,
	TypescriptIcon,
	VercelIcon,
	VimIcon,
	WebpackIcon,
	YamlIcon
} from './svg-icons';

export interface SvgIcons extends Array<SvgIcon>{}

// export const Voosh: SvgIcons[] = ({
// 	width = '60',
// 	height = '27.11',
// 	fillColor = 'none',
// 	strokeColor = 'text-white',
// 	rotateCenter = 0
// }) => [
// 	{
// 		...HerokuIcon
// 	}
// ];

/*
Type '({ width, height, fillColor, strokeColor, rotateCenter }: { width?: string | undefined; height?: string | undefined; fillColor?: string | undefined; strokeColor?: string | undefined; rotateCenter?: number | undefined; }) => { propTypes?: WeakValidationMap<...> | undefined; contextTypes?: ValidationMap<...> | undefin...' is missing the following properties from type 'SvgIcons[]': pop, push, concat, join, and 27 more.ts(2740)
*/
