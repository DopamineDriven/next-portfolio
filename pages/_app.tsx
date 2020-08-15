import '../styles/index.css';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { AppProps } from 'next/app';

const faHerokuIcon = {
	prefis: 'fas',
	iconName: 'heroku',
	icon: [
		512,
		512,
		[],
		"000000",
		"M414.5 0h-317c-33.084 0-60 26.916-60 60v392c0 33.084 26.916 60 60 60h317c33.084 0 60-26.916 60-60V60c0-33.084-26.916-60-60-60zm30 452c0 16.542-13.458 30-30 30h-317c-16.542 0-30-13.458-30-30V60c0-16.542 13.458-30 30-30h317c16.542 0 30 13.458 30 30v392z M357.702 201.773c-16.828-14.256-38.669-22.107-61.5-22.107-5.578 0-11.225.47-16.783 1.396L211 192.465V60h-90v238.707l173.215-28.87c2.32-.388 4.449-.124 5.313.606.679.576 1.472 2.268 1.472 5.142V452h90V275.586c0-28.983-12.137-55.887-33.298-73.813zM361 422h-30V275.586c0-11.477-4.29-21.433-12.081-28.032-6.104-5.17-13.912-7.903-22.582-7.903-2.313 0-4.687.2-7.055.595L151 263.293V90h30v137.879l103.351-17.225a72.372 72.372 0 0111.852-.988c15.738 0 30.692 5.326 42.108 14.998C352.729 236.878 361 255.439 361 275.586V422z M121 304v150l100-75-100-75zm30 60l20 15-20 15v-30zM301 60v15c0 19.204-2.802 38.22-8.328 56.522l-5.839 19.336h94.278l2.665-11.657A288.523 288.523 0 00391 75V60h-90zm55.912 60.858h-30.606A225.638 225.638 0 00330.504 90h30.062a258.528 258.528 0 01-3.654 30.858z"
	]
}

config.autoAddCss = false;

export function reportWebVitals(metric: any): void {
	// These metrics can be sent to any analytics service
	console.log(metric);
}

function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default App;

// Configuring Fortawesome with nextjs v9+
// https://github.com/UnlyEd/next-right-now/blob/master/src/pages/_app.tsx
// https://stackoverflow.com/questions/44752189/how-to-add-font-awesome-to-next-js-project
