import React from 'react';
import styles from './Header.module.css';
import { LinkItem } from '../LinkItem/LinkItem';
import { Button } from '../Button/Button';
import { Container } from '../Container/Container';

const MenuItem = [
	{ name: 'STAKE', href: '#' },
	{ name: 'BOND', href: '#' },
	{ name: 'Flex loans', href: '#' },
	{ name: 'Olympus Pro', href: '#' },
	{ name: 'Blog', href: '#' },
	{ name: 'Transparency', href: '#' },
	{ name: 'GOVERNANCE', href: '#' },
];

export const Header = () => {
	return (
		<header className={styles.header}>
			<Container className={styles.content}>
				<nav>
					<ul className={styles.menu}>
						{MenuItem.map((item, i) => <li key={i}>
							<LinkItem href={item.href}>{item.name}</LinkItem>
						</li>)}
					</ul>
				</nav>
				<Button variant='contained'>Enter App</Button>
			</Container>
		</header>
	)
};
