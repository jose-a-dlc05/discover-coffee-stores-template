import Image from 'next/image';
import Link from 'next/link';
import cls from 'classnames';
import styles from './card.module.css';

interface CardProps {
	name: string;
	imgUrl: string;
	href: string;
	className: string;
}

export default function Card(props: CardProps) {
	return (
		<Link href={props.href} className={styles.cardLink}>
			<div className={cls('glass', styles.container)}>
				<div className={styles.cardHeaderWrapper}>
					<h2 className={styles.cardHeader}>{props.name}</h2>
				</div>
				<div className={styles.cardImageWrapper}>
					<Image
						className={styles.cardImage}
						src={props.imgUrl}
						width={260}
						height={160}
						alt={'coffee-store image'}
					/>
				</div>
			</div>
		</Link>
	);
}
