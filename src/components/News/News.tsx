import React from 'react';
import styles from './News.module.css';
import { Container } from '../Container/Container';
import { NewsItem } from './NewsItem/NewsItem';
import { Typography } from '../Typography/Typography';

const NewsList = [
	{
		id: 0,
		title: 'Olympus H1 2022 Report',
		description:
			'Over the last year, Olympus DAO has implemented a number of initiatives to improve understanding of how the DAO is executing on community authorized and mandated initiatives.',
		date: 'Aug 4, 2022',
		href: '#1',
	},
	{
		id: 1,
		title: 'Mint & Sync',
		description:
			'One of the primary objectives outlined in the Olympus12 Action Plan is to bootstrap deep OHM liquidity.',
		date: 'Jul 30, 2022',
		href: '#2',
	},
	{
		id: 2,
		title: 'Fundamentals: Encouraging Usability Through The Utility Pillar',
		description:
			'Welcome back to the final part of the Olympus Fundamental Series. If you’re new or need a refresher, read the first Olympus Foundations article!',
		date: 'Mar 31, 2022',
		href: '#3',
	},
];

export const News = () => {
	return (
		<section className={styles.news}>
			<Container className={styles.content}>
				<div>
					<Typography
						className={styles.title}
						tag='h2'
					>
						In The News
					</Typography>
				</div>
				<div className={styles.items}>
					{NewsList.map((item) => (
						<NewsItem
							key={item.id}
							title={item.title}
							date={item.date}
							href={item.href}
						>
							{item.description}
						</NewsItem>
					))}
				</div>
			</Container>
		</section>
	);
};
