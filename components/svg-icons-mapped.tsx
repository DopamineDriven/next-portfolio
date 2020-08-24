import { FC } from 'react';
import {
	SvgIcon,
	AntDesignIcon,
	ApolloIcon,
	Auth0Icon,
	BabelIcon,
	BootstrapIcon,
	CloudinaryIcon,
	CraIcon,
	DigitalOceanIcon,
	DockerIcon,
	EslintIcon,
	ExpressIcon,
	GatsbyIcon,
	GqlIcon,
	HerokuIcon,
	JavaScriptIcon,
	JestIcon,
	JwtIcon,
	MarkdownHereIcon,
	MongoDbIcon,
	MySqlIcon,
	NextIcon,
	OauthIcon,
	PhpIcon,
	PostgreSqlIcon,
	ReduxIcon,
	RemarkIcon,
	SequelizeIcon,
	StyleLintIcon,
	StyledComponentsIcon,
	TailwindIcon,
	TsqlIcon,
	TypeOrmIcon,
	TypeScriptIcon,
	VercelIcon,
	VimIcon,
	WebpackIcon,
	YamlIcon
} from 'components/svg-icons';


export interface SvgIconAbstract {
	id: number;
	icon: SvgIcon;
	name: string;
}

export const svgIconLibrary: SvgIconAbstract[] = [
	{
		id: 0,
		icon: AntDesignIcon,
		name: 'Ant Design Icon'
	},
	{
		id: 1,
		icon: ApolloIcon,
		name: 'Apollo Icon'
	},
	{
		id: 2,
		icon: Auth0Icon,
		name: 'Auth 0 Icon'
	},
	{
		id: 3,
		icon: BabelIcon,
		name: 'Babel Icon'
	},
	{
		id: 4,
		icon: BootstrapIcon,
		name: 'Bootstrap Icon'
	},
	{
		id: 5,
		icon: CloudinaryIcon,
		name: 'Cloudinary Icon'
	},
	{
		id: 6,
		icon: CraIcon,
		name: 'Create React App Icon'
	},
	{
		id: 7,
		icon: DigitalOceanIcon,
		name: 'Digital Ocean Icon'
	},
	{
		id: 8,
		icon: DockerIcon,
		name: 'Docker Icon'
	},
	{
		id: 9,
		icon: EslintIcon,
		name: 'ES Lint Icon'
	},
	{
		id: 10,
		icon: ExpressIcon,
		name: 'Express Icon'
	},
	{
		id: 11,
		icon: GatsbyIcon,
		name: 'Gatsby Icon'
	},
	{
		id: 12,
		icon: GqlIcon,
		name: 'GraphQL Icon'
	},
	{
		id: 13,
		icon: HerokuIcon,
		name: 'Heroku Icon'
	},
	{
		id: 14,
		icon: JavaScriptIcon,
		name: 'JavaScript Icon'
	},
	{
		id: 15,
		icon: JestIcon,
		name: 'Jest Icon'
	},
	{
		id: 16,
		icon: JwtIcon,
		name: 'JSON Web Token Icon'
	},
	{
		id: 17,
		icon: MarkdownHereIcon,
		name: 'Mark Down Here Icon'
	},
	{
		id: 18,
		icon: MongoDbIcon,
		name: 'Mongo DB Icon'
	},
	{
		id: 19,
		icon: MySqlIcon,
		name: 'MySQL Icon'
	},
	{
		id: 20,
		icon: NextIcon,
		name: 'GraphQL Icon'
	},
	{
		id: 21,
		icon: OauthIcon,
		name: 'OAuth Icon'
	},
	{
		id: 22,
		icon: PhpIcon,
		name: 'Php Icon'
	},
	{
		id: 23,
		icon: PostgreSqlIcon,
		name: 'PostgreSQL Icon'
	},
	{
		id: 24,
		icon: ReduxIcon,
		name: 'Redux Icon'
	},
	{
		id: 25,
		icon: RemarkIcon,
		name: 'Remark Icon'
	},
	{
		id: 26,
		icon: SequelizeIcon,
		name: 'Sequelize Icon'
	},
	{
		id: 27,
		icon: StyleLintIcon,
		name: 'StyleLint Icon'
	},
	{
		id: 28,
		icon: StyledComponentsIcon,
		name: 'Styled Components Icon'
	},
	{
		id: 29,
		icon: TailwindIcon,
		name: 'Tailwind CSS Icon'
	},
	{
		id: 30,
		icon: TsqlIcon,
		name: 'T-SQL Icon'
	},
	{
		id: 31,
		icon: TypeOrmIcon,
		name: 'Type ORM Icon'
	},
	{
		id: 32,
		icon: TypeScriptIcon,
		name: 'TypeScript Icon'
	},
	{
		id: 33,
		icon: VercelIcon,
		name: 'Vercel Icon'
	},
	{
		id: 34,
		icon: VimIcon,
		name: 'Vim Icon'
	},
	{
		id: 35,
		icon: WebpackIcon,
		name: 'Webpack Icon'
	},
	{
		id: 36,
		icon: YamlIcon,
		name: 'Yet Another Markup Language Icon'
	}
];

export interface SvgIconLibraryExtended extends FC<SvgIconAbstract>{}

export const CustomSvgIcons: SvgIconLibraryExtended = ({}) => {
	const iconCollection = svgIconLibrary.map(constituent => {
		<a
			key={constituent.id}
			aria-label={constituent.name}
			className='bg-customGray text-white hover:text-white hover:bg-iconHover transition-colors leading-normal duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-1 rounded-full focus:outline-none'
		>
			<i className='flex align-middle text-center font-extrabold text-1xl'>
				{constituent.icon}
			</i>
		</a>;
	});

	return (
		<div className='align-middle justify-right text-right content-right inline-block'>
			<ul className='align-middle'>
				<li className='align-middle'>{iconCollection}</li>
			</ul>
		</div>
	);
};
