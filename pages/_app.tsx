import '../styles/index.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { AppProps } from 'next/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { ReactElement } from 'react';
import { faHerokuIcon, faVercelIcon } from '../lib/fas-custom-integration';

library.add(faHerokuIcon, faVercelIcon);

config.autoAddCss = false;

export function reportWebVitals(metric: any): void {
	// These metrics can be sent to any analytics service
	console.log(metric);
}

function App({ Component, pageProps }: AppProps): ReactElement {
	return <Component {...pageProps} />;
}

export default App;

// Configuring Fortawesome with nextjs v9+
// https://github.com/UnlyEd/next-right-now/blob/master/src/pages/_app.tsx
// https://stackoverflow.com/questions/44752189/how-to-add-font-awesome-to-next-js-project
