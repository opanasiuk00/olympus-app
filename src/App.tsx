import React from 'react';
import styles from './App.module.css';
import { Button } from './components/Button/Button';
import { Typography } from './components/Typography/Typography';
import { NewsItem } from './components/NewsItem/NewsItem';
import { ParticipateItem } from './components/ParticipateItem/ParticipateItem';
import StakeImg from './StakeImg.png';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

export const App = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<main></main>
			<Footer />
		</div>
	);
};
