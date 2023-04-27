import React from 'react';
import styles from './ProtocolStats.module.css';
import { Container } from '../Container/Container';
import { Typography } from '../Typography/Typography';

export const ProtocolStats = () => {
	return (
		<section className={styles.protocol}>
			<Container>
				<div className={styles.content}>
					<Typography tag='h3'>Protocol Stats</Typography>
					<div>
						<div className={styles.stats}>
							<Typography tag='h4'>Treasury Balance</Typography>
							<p>$100,027,422</p>
						</div>
						<div className={styles.stats}>
							<Typography tag='h4'>Number of Holders</Typography>
							<p>66,000 +</p>
						</div>
						<div className={styles.stats}>
							<Typography tag='h4'>Protocol-Owned Liquidity</Typography>
							<p>$ 28,829,462</p>
						</div>
						<div className={styles.stats}>
							<Typography tag='h4'>Unique Tokens in Treasury</Typography>
							<p>50 +</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
