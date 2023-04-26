import React from 'react';
import styles from './Participate.module.css';
import { Container } from '../Container/Container';
import { Typography } from '../Typography/Typography';
import { ParticipateItem } from './ParticipateItem/ParticipateItem';
import StakeImg from './StakeImg.png';

type ParticipateListType = {
	id: number;
	title: string;
	description: string;
	linkName: string;
	href: string;
	image: string;
	position: 'left' | 'right';
	variant: 'dark' | 'light';
};

const ParticipateList: ParticipateListType[] = [
	{
		id: 0,
		title: 'Staking',
		description:
			'Stakers play an important role in the Olympus ecosystem. Stakers deposit their OHM into the protocol, which contributes to OHM’s long-term price stability. In exchange, stakers receive their pro rata share of rebases and governance rights.',
		linkName: 'Stake',
		href: '#1',
		image: 'Stake',
		position: 'left',
		variant: 'dark',
	},
	{
		id: 1,
		title: 'Bonding',
		description:
			'Bonding allows you to trade various tokens for OHM at a discounted price. In exchange, bond sales provide additional liquidity and reserve assets to the Olympus treasury, contributing to the stability of the protocol. As a result, 99% of all liquidity is owned by Olympus.',
		linkName: 'Bond',
		href: '#2',
		image: 'Stake',
		position: 'right',
		variant: 'light',
	},
];

export const Participate = () => {
	return (
		<section className={styles.participate}>
			<Container className={styles.content}>
				<Typography tag='h2'>How to Participate</Typography>
				<div>
					{ParticipateList.map((item) => (
						<ParticipateItem
							key={item.id}
							title={item.title}
							imageSrc={StakeImg}
							linkName={item.linkName}
							href={item.href}
							position={item.position}
							variant={item.variant}
						>
							{item.description}
						</ParticipateItem>
					))}
				</div>
			</Container>
		</section>
	);
};
