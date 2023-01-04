import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Banner from '../components/banner.component';
import Card from '../components/card.component';
import coffeeStoresData from '../data/coffee-stores.json';

const inter = Inter({ subsets: ['latin'] });

export async function getStaticProps(context: any) {
	return {
		props: {
			coffeeStoresData,
		}, // will be passed to the page component as props
	};
}

export default function Home(props: any) {
	const handleOnBannerBtnClick = () => {
		console.log('hi banner btn');
	};
	return (
		<>
			<Head>
				<title>Coffee Connoisseur</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.main}>
				<Banner
					buttonText='View stores nearby'
					handleOnClick={handleOnBannerBtnClick}
				/>
				<div>
					<Image
						className={styles.heroImage}
						src='/static/hero-image.png'
						width={700}
						height={400}
						alt='Picture of coffee illustration'
					/>
				</div>
				<div className={styles.cardLayout}>
					{props.coffeeStoresData?.map((coffeeStore: any) => {
						return (
							<Card
								key={coffeeStore.id}
								name={coffeeStore.name}
								imgUrl={coffeeStore.imgUrl}
								href={`/coffee-store/${coffeeStore.id}`}
								className={styles.card}
							/>
						);
					})}
				</div>
			</main>
		</>
	);
}
