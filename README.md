# next-jamstack-portfolio
- statically generated next-portfolio ft projects, blog posts, custom font-awesome icons generated via deconstructing declaration files, extending library interfaces, patching, and postinstall scripting. 

```xml
<svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="32.5" cy="32.5" r="31.5" stroke="#151515" stroke-width="2"/>
<path d="M30.116 39H32.816L27.956 26.238H25.076L20.18 39H22.808L23.87 36.084H29.054L30.116 39ZM26.462 28.992L28.226 33.816H24.698L26.462 28.992ZM40.7482 39H43.5202L40.7842 33.78C42.4582 33.294 43.5022 31.944 43.5022 30.162C43.5022 27.948 41.9182 26.238 39.4342 26.238H34.4482V39H36.9502V34.086H38.2462L40.7482 39ZM36.9502 31.944V28.398H38.9662C40.2262 28.398 40.9642 29.1 40.9642 30.18C40.9642 31.224 40.2262 31.944 38.9662 31.944H36.9502Z" fill="#151515"/>
</svg>
```


## Typography themes for utils

- https://kyleamathews.github.io/typography.js/
- - https://tailwindcss.com/docs/typography-plugin
- Jose Felix 
	- https://dev.to/joserfelix/using-react-spring-to-animate-svg-icons-dark-mode-toggle-2c86
	- https://dev.to/joserfelix/kick-start-your-newsletter-mailchimp-custom-form-with-react-og5
	- https://dev.to/joserfelix/dynamic-theme-switching-in-ant-design-how-to-change-between-light-and-dark-themes-5b8p
	- https://dev.to/joserfelix/how-to-make-text-match-any-background-color-1n0f

```git
yarn add typography-theme-sutro typeface-merriweather typeface-open-sans
```

## Mailchimp for contact page

- https://dev.to/joserfelix/kick-start-your-newsletter-mailchimp-custom-form-with-react-og5

## lquip 86'd over security vulnerability

- removed lquip-loader package as it flagged a high security vulnerability alert (regex)
- https://github.com/cyrilwanner/next-optimized-images#optimization-packages

## Markdown

- https://dev.to/joserfelix/how-to-make-a-static-blog-with-next-js-2bd6**
- https://dev.to/jfelx/how-to-make-a-static-blog-with-next-js-2bd6
- https://github.com/vriad/devii
- https://www.netlify.com/blog/2020/05/04/building-a-markdown-blog-with-next-9.4-and-netlify/

## SCSS + Tailwind

- https://nextjs.org/blog/next-9-3#built-in-sass-css-module-support-for-component-level-styles
- https://codeburst.io/next-js-boilerplate-with-tailwindcss-and-sass-ecc1df90f501

## Add several components to bitsrc.io

- https://blog.bitsrc.io/react-typescript-cheetsheet-2b6fa2cecfe2

## Patching Node_Modules

- https://stackoverflow.com/questions/13300137/how-to-edit-a-node-module-installed-via-npm

```git
npx patch-package @fortawesome/fontawesome-common-types
```

- then, add the following to scripts in package.json

```
"postinstall": "npx patch-package"
```

**_create a master svgLibrary function wrapping all svg declarations_**

- Pass Props

## Extending an abstracted functional component to an array of objects via props extension

- https://stackoverflow.com/questions/25469244/how-can-i-define-an-interface-for-an-array-of-objects-with-typescript/25470775

## SVG viewBox Exact Order of Translation and Scaling

- https://stackoverflow.com/questions/53582351/svg-viewbox-exact-order-of-translation-and-scaling

### Transformations

- https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Transformations

## SVGs in tailwindcss

- https://medium.com/swlh/reusable-svg-icon-using-figma-react-typescript-and-tailwind-css-51b8ceb86ac2
- https://tailwindcss.com/course/working-with-svg-icons

## Ico Moon custom icons

- https://icomoon.io/app/#/select
- https://www.npmjs.com/package/react-icomoon
- ssg
- svg logo libraries
- https://www.vectorlogo.zone/index.html?q=gray%20matter
- http://www.lib4dev.in/info/unicodeveloper/awesome-nextjs/75291705
- https://favicon.io/favicon-converter/
- https://picsvg.com/
- https://www.favicon-generator.org/
- add custom svg icons Yes, as long as you create a definition file in the same format as the existing icon definitions, you can import and use them in the same way as the official icons. You may want to use a custom prefix for your own icons to keep them organised, though.
- https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react#step-6-%E2%80%94-using-react-fontawesome-and-icons-outside-of-react
- https://github.com/remarkjs/remark/blob/HEAD/doc/plugins.md#list-of-plugins

- next plugins
  - https://github.com/vercel/next-plugins

```js
module.exports = {
	purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				}
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite'
			},
			fontFamily: {
				header: ['Playfair Display', 'serif'],
				body: ['Barlow Condensed', 'sans-serif'],
				display: ['Barlow Condensed', 'sans-serif'],
				polished: ['brandon-grotesque', 'sans-serif'],
				subpolished: ['Montserrat', 'sans-serif']
			},
			colors: {
				'accent-1': '#FAFAFA',
				'accent-2': '#EAEAEA',
				'accent-7': '#333',
				black: '#000000',
				white: '#ffffff',
				success: '#0070f3',
				cyan: '#79FFE1',
				blizzardBlue: '#b3ddf2',
				chicagoRed: '#ff0000',
				cimaRed: '#B8242C',
				wcdPink: '#eb57a3',
				tinyHouseWhite: '#f0f1f2',
				customGray: '#D0D0D0',
				iconHover: '#9D9D9D',
				iconHoverTwo: '#AEAEAE',
				tailwindBlue: '#2298BD',
				tailwindGreen: '#0ED7B5'
				// tailwindBackground:
				// 	'linear-gradient(109.08deg, #2298BD 6.16%, #0ED7B5 91.66%)'
			},
			height: {
				whole: '100vh',
				nineTenths: '90vh',
				fourFifths: '80vh',
				threeFourths: '75vh',
				twoThirds: '66.67vh',
				threeFifths: '60vh',
				half: '50vh',
				nineTwentieths: '45vh',
				twoFifths: '40vh',
				sevenTwentieths: '35vh',
				oneThird: '33.33vh',
				threeTenths: '30vh',
				oneFourth: '25vh',
				oneFifth: '20vh',
				oneSixth: '16.67vh'
			},
			spacing: {
				7: '1.75rem',
				14: '3.5rem',
				18: '4.5rem',
				28: '7rem',
				44: '11rem',
				100: '25rem',
				150: '37.5rem',
				200: '50rem',
				250: '62.5rem',
				300: '75rem',
				309: '77.25rem'
			},
			letterSpacing: {
				tighter: '-.04em'
			},
			lineHeight: {
				tight: 1.2
			},
			fontSize: {
				smxmd: '0.9375rem',
				'1xl': '1.0rem',
				'3xl': '2.0rem',
				'5xl': '2.5rem',
				'6xl': '2.75rem',
				'7xl': '4.5rem',
				'8xl': '6.25rem'
			},
			boxShadow: {
				small: '0 5px 10px rgba(0, 0, 0, 0.12)',
				medium: '0 8px 30px rgba(0, 0, 0, 0.12)'
			}
		}
	}
	// variants: {
	// 	backgroundImage: ['responsive, hover, focus'], // this is for the "bg-none" utility
	// 	linearGradients: ['responsive, hover, focus'],
	// 	radialGradients: ['responsive, hover, focus'],
	// 	conicGradients: ['responsive, hover, focus'],
	// 	repeatingLinearGradients: ['responsive, hover, focus'],
	// 	repeatingRadialGradients: ['responsive, hover, focus'],
	// 	repeatingConicGradients: ['responsive, hover, focus']
	// },
	// plugins: [plugin(function(require('tailwindcss-gradients')))]
};
```

```ts
// const plugin = require('tailwindcss/plugin');

// module.exports = {
// 	plugins: [
// 		plugin(function({ addUtilities }) {
// 			const newUtilities =
// 		})
// 	]
// } https://github.com/benface/tailwindcss-gradients
```

```ts
export type IconPrefix = "fas" | "fab" | "fac" | "far" | "fal" | "fad";
export type IconPathData = string | string[]

export interface IconLookup {
  prefix: IconPrefix;
  // IconName is defined in the code that will be generated at build time and bundled with this file.
  iconName: IconName;
}

export interface IconDefinition extends IconLookup {
  icon: [
    number, // width
    number, // height
    string[], // ligatures
    string, // unicode
    IconPathData // svgPathData
  ];
}

export interface IconPack {
  [key: string]: IconDefinition;
}

export type IconName = 'graphql-icon' | 'heroku-icon' | 'next-icon' | 'vercel-icon' | 'typescript-icon' | '500px' |
```

```xml
<svg width="112" height="51" viewBox="0 0 112 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M55.8681 0.0673828C40.9701 0.0673828 31.6584 5.66368 27.9341 16.8559C33.5209 11.2597 40.0387 9.16108 47.4879 10.5602C51.7378 11.3583 54.7756 13.675 58.1382 16.2388C63.6159 20.416 69.9552 25.2502 83.8022 25.2502C98.7002 25.2502 108.012 19.6539 111.736 8.46167C106.149 14.058 99.6316 16.1565 92.1824 14.7574C87.9325 13.9593 84.8946 11.6426 81.5321 9.07878C76.0544 4.90164 69.7151 0.0673828 55.8681 0.0673828ZM27.9341 25.2502C13.036 25.2502 3.7244 30.8465 0 42.0388C5.58681 36.4425 12.1046 34.3439 19.5538 35.7431C23.8037 36.5412 26.8416 38.8578 30.2041 41.4217C35.6818 45.5988 42.0211 50.4331 55.8681 50.4331C70.7661 50.4331 80.0778 44.8368 83.8022 33.6445C78.2154 39.2408 71.6975 41.3394 64.2483 39.9402C59.9984 39.1421 56.9606 36.8255 53.598 34.2616C48.1203 30.0845 41.7811 25.2502 27.9341 25.2502Z" fill="url(#paint0_linear)"/>
</g>
<defs>
<linearGradient id="paint0_linear" x1="-3.10403" y1="16.1844" x2="77.8156" y2="78.2893" gradientUnits="userSpaceOnUse">
<stop stop-color="#2298BD"/>
<stop offset="1" stop-color="#0ED7B5"/>
</linearGradient>
<clipPath id="clip0">
<rect width="111.736" height="50.5" fill="white"/>
</clipPath>
</defs>
</svg>

```

'0': '0ms',
'200': '200ms',
'300': '300ms',
'500': '500ms',
'700': '700ms',
'1000': '1000ms',
