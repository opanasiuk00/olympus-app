import React from 'react';
import styles from './ParticipateItem.module.css';
import { Typography } from '../../Typography/Typography';

export type ParticipateItemProp = {
	children: React.ReactNode;
	title: string;
	imageSrc: string;
	linkName: string;
	href: string;
	position: 'left' | 'right';
	variant: 'dark' | 'light';
};

export const ParticipateItem = ({
	children,
	title,
	imageSrc,
	linkName,
	href,
	position,
	variant,
}: ParticipateItemProp) => {
	return (
		<div
			className={`${styles.participate} ${styles[position]} ${styles[variant]}`}
		>
			<div className={styles.head}>
				<Typography
					color='inherit'
					tag='h3'
				>
					{title}
				</Typography>
				<img
					src={imageSrc}
					alt={linkName}
				/>
			</div>
			<Typography
				color='inherit'
				tag='p'
			>
				{children}
			</Typography>
			<a href={href}>
				<Typography
					color='inherit'
					tag='span'
				>
					{linkName}
				</Typography>
			</a>
		</div>
	);
};
