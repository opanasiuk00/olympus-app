import React from 'react';
import styles from './Header.module.css';
import { Button } from '../Button/Button';
import { Container } from '../Container/Container';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { DesktopMenu } from './DesktopMenu/DesktopMenu';

export type MenuItemType = {
	name: string;
	href: string;
}

export const MenuItem: MenuItemType[] = [
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
				<DesktopMenu menu={MenuItem} className={styles.desktopMenu} />
				<MobileMenu menu={MenuItem} className={styles.mobileMenu} />
				<Button variant='contained'>Enter App</Button>
			</Container>
		</header>
	)
};
