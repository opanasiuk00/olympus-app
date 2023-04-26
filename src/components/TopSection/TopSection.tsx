import React from 'react';
import styles from './TopSection.module.css';
import { Typography } from '../Typography/Typography';
import { Button } from '../Button/Button';
import { Container } from '../Container/Container';

export const TopSection = () => {
	return (
		<section className={styles.top}>
			<Container className={styles.content}>
				<Typography tag='h1'>
					The Future Decentralized Reserve Currency
				</Typography>
				<Typography tag='p'>
					Olympus is building OHM, a community-owned, decentralized and
					censorship-resistant reserve currency that is asset-backed, deeply
					liquid and used widely across Web3.
				</Typography>
				<Button variant='contained'>Discover How</Button>
			</Container>
		</section>
	);
};
