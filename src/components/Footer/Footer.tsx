import React from 'react';
import styles from './Footer.module.css';
import { Container } from '../Container/Container';
import { Typography } from '../Typography/Typography';
import { LinkItem } from '../LinkItem/LinkItem';
import { TwitterIcon, YoutubeIcon } from '../Icons';

const Products = [
	{ name: 'Olympus Pro', href: '#' },
	{ name: 'STAKING', href: '#' },
	{ name: 'BONDS', href: '#' },
];
const Learn = [
	{ name: 'DOCUMENTATION', href: '#' },
	{ name: 'BLOG', href: '#' },
	{ name: 'MEDIUM', href: '#' },
];
const Contact = [
	{ name: 'JOIN OLYMPUS DISCORD', href: '#' },
	{ name: 'Media inquiries', href: '#' },
];

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container className={styles.content}>
				<div className={styles.social}>
					<a href='#a'>
						<TwitterIcon />
					</a>
					<a href='#a'>
						<YoutubeIcon />
					</a>
				</div>
				<nav className={styles.menu}>
					<ul>
						<li>
							<Typography
								color='light'
								tag='h4'
							>
								Products
							</Typography>
						</li>
						{Products.map((item, i) => (
							<li key={i}>
								<LinkItem href={item.href}>{item.name}</LinkItem>
							</li>
						))}
					</ul>
					<ul>
						<li>
							<Typography
								color='light'
								tag='h4'
							>
								Learn
							</Typography>
						</li>
						{Learn.map((item, i) => (
							<li key={i}>
								<LinkItem href={item.href}>{item.name}</LinkItem>
							</li>
						))}
					</ul>
					<ul>
						<li>
							<Typography
								color='light'
								tag='h4'
							>
								Contact us
							</Typography>
						</li>
						{Contact.map((item, i) => (
							<li key={i}>
								<LinkItem href={item.href}>{item.name}</LinkItem>
							</li>
						))}
					</ul>
				</nav>
			</Container>
		</footer>
	);
};
