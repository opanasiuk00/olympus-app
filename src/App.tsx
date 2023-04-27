import React from 'react';
import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { TopSection } from './components/TopSection/TopSection';
import { News } from './components/News/News';
import { Participate } from './components/Participate/Participate';
import { Faq } from './components/Faq/Faq';
import { ProtocolStats } from './components/ProtocolStats/ProtocolStats';

export const App = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<main>
				<TopSection />
				<ProtocolStats />
				<Participate />
				<News />
				<Faq />
			</main>
			<Footer />
		</div>
	);
};
