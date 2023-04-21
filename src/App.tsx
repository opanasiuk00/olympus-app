import React from 'react';
import styles from './App.module.css';
import { Button } from './components/Button/Button';
import { Typography } from './components/Typography/Typography';
import { NewsItem } from './components/NewsItem/NewsItem';

export const App = () => {
	return (
		<div className={styles.wrapper}>
			<Button variant='contained'>Enter App</Button>
			<Button variant='outlined'>Enter App</Button>
			<Typography tag='h4'>Title</Typography>
			<NewsItem title='Fundamentals: Encouraging Usability Through The Utility Pillar' date='Jul 30, 2022' href='#'>Over the last year, Olympus DAO has implemented a number of initiatives to improve understanding of how the DAO is executing on community authorized and mandated initiatives.</NewsItem>
		</div>
	);
};
