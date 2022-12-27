import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function CoffeeStore() {
	const router = useRouter();
	const { pid } = router.query;
	return (
		<div>
			Coffee Store Page {pid}{' '}
			<Link href='/'>
				<p>Go back Home</p>
			</Link>
			<Link href='/coffee-store/dynamic'>
				<p>Go back Dynamic</p>
			</Link>
		</div>
	);
}
