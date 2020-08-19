import { library } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition, IconLookup } from '@fortawesome/fontawesome-svg-core';

export interface CustomIcon extends IconDefinition, IconLookup {}

export const faCustomHerokuIcon: CustomIcon = {
	prefix: 'fac',
	iconName: 'heroku-icon',
	icon: [
		64,
		64,
		[],
		'#000000',
		'M18 8C14.71 8 12 10.71 12 14V50C12 53.29 14.71 56 18 56H46C49.29 56 52 53.29 52 50V14C52 10.71 49.29 8 46 8H18ZM18 12H46C47.126 12 48 12.876 48 14V50C48 51.126 47.124 52 46 52H18C16.874 52 16 51.124 16 50V14C16 12.874 16.876 12 18 12ZM26 16L22 16.062C22 16.062 21.968 34.08 22 34C37.296 26.812 38 31.624 38 31.624V48H42V31.688C42 21.632 26 28 26 28V16ZM38.562 16C38.562 16 35.89 19.688 34 22H39.25C42.102 18.312 44 16 44 16H38.562ZM22 38V47.938L28 43L22 38Z'
	]
};

export const faCustomVercelIcon: CustomIcon = {
	prefix: 'fac',
	iconName: 'vercel-icon',
	icon: [24, 24, [], '#626262', 'M24 22.525H0l12-21.05l12 21.05z']
};

library.add(faCustomHerokuIcon, faCustomVercelIcon);