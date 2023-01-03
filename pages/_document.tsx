import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link
					rel='preload'
					href='/fonts/IBMPlexSans-Bold.ttf'
					as='font'
					crossOrigin='anonymous'
				/>
				<link
					rel='preload'
					href='/fonts/IBMPlexSans-Regular.ttf'
					as='font'
					crossOrigin='anonymous'
				/>
				<link
					rel='preload'
					href='/fonts/IBMPlexSans-SemiBold.ttf'
					as='font'
					crossOrigin='anonymous'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

/**
 * Basically what you apply here applies to the codebase in general. Document in a sense allows you to directly make changes to the actual DOM tree.
 */
