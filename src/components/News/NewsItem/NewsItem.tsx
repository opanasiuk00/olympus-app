import React from 'react';
import styles from './NewsItes.module.css';
import { Typography } from '../../Typography/Typography';
import { ArrowIcon } from '../../Icons';

export type NewsItemProps = {
	children: React.ReactNode;
	title: string;
	date: string;
	href: string;
};

export const NewsItem = ({ children, title, date, href }: NewsItemProps) => {
	return (
		<article className={styles.news}>
			<div className={styles.head}>
				<Typography tag='h3'>{title}</Typography>
				<a href={href}>
					<ArrowIcon />
				</a>
			</div>
			<div className={styles.content}>
				<Typography
					tag='span'
					color='grey'
				>
					{date}
				</Typography>
				<Typography tag='p'>{children}</Typography>
			</div>
		</article>
	);
};
