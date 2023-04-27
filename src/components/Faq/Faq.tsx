import React from 'react';
import styles from './Faq.module.css';
import { Container } from '../Container/Container';
import { Typography } from '../Typography/Typography';
import { Accordion } from '../Accordion/Accordion';

export const Faq = () => {
	return (
		<section className={styles.faq}>
			<Container className={styles.content}>
				<Typography tag='h2'>FAQ</Typography>
				<div>
					<Accordion
						summary='What is Olympus?'
						details='Over the last year, Olympus DAO has implemented a number of initiatives to improve understanding of how the DAO is executing on community authorized and mandated initiatives.'
					/>
					<Accordion
						summary='What is the goal of Olympus?'
						details='Over the last year, Olympus DAO has implemented a number of initiatives to improve understanding of how the DAO is executing on community authorized and mandated initiatives.'
					/>
					<Accordion
						summary='Why do we need Olympus in the first place?'
						details='Over the last year, Olympus DAO has implemented a number of initiatives to improve understanding of how the DAO is executing on community authorized and mandated initiatives.'
					/>
					<Accordion
						summary='Is OHM a stable coin?'
						details='Over the last year, Olympus DAO has implemented a number of initiatives to improve understanding of how the DAO is executing on community authorized and mandated initiatives.'
					/>
					<Accordion
						summary='Is OHM pegged?'
						details='Over the last year, Olympus DAO has implemented a number of initiatives to improve understanding of how the DAO is executing on community authorized and mandated initiatives.'
					/>
				</div>
			</Container>
		</section>
	);
};
