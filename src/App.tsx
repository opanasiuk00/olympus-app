import React from 'react';
import styles from './App.module.css';
import { Button } from './components/Button/Button';
import { Typography } from './components/Typography/Typography';

export const App = () => {
	return (
		<div className={styles.wrapper}>
			<Button variant='contained'>Enter App</Button>
			<Button variant='outlined'>Enter App</Button>
			<Typography tag='h4'>Title</Typography>
		</div>
	);
};
