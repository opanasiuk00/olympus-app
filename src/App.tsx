import React from 'react';
import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { TopSection } from './components/TopSection/TopSection';
import { News } from './components/News/News';
import { Participate } from './components/Participate/Participate';

export const App = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<main>
				<TopSection />
				<Participate />
				<News />
			</main>
			<Footer />
		</div>
	);
};
