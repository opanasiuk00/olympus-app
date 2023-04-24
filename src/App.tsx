import React from 'react';
import styles from './App.module.css';
import { Button } from './components/Button/Button';
import { Typography } from './components/Typography/Typography';
import { NewsItem } from './components/NewsItem/NewsItem';
import { ParticipateItem } from './components/ParticipateItem/ParticipateItem';
import StakeImg from './StakeImg.png';
import { Header } from './components/Header/Header';

export const App = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Button variant='contained'>Enter App</Button>
			<Button variant='outlined'>Enter App</Button>
			<Typography tag='h4'>Title</Typography>
			<NewsItem title='Fundamentals: Encouraging Usability Through The Utility Pillar' date='Jul 30, 2022' href='#'>Over the last year, Olympus DAO has implemented a number of initiatives to improve understanding of how the DAO is executing on community authorized and mandated initiatives.</NewsItem>
			<ParticipateItem title='Staking' imageSrc={StakeImg} linkName='Stake' borderRadius='left' href='#' variant='dark'>Stakers play an important role in the Olympus ecosystem. Stakers deposit their OHM into the protocol, which contributes to OHM’s long-term price stability. In exchange, stakers receive their pro rata share of rebases and governance rights.</ParticipateItem>
		</div>
	);
};
