import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Other() {
	const router = useRouter();
	const { pid } = router.query;

	return (
		<>
			<Head>
				<title>{pid}</title>
			</Head>
			<div>Page {pid}</div>
		</>
	);
}
