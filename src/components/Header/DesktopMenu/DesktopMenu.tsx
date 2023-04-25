import React from 'react';
import styles from './DesktopMenu.module.css';
import { MenuItemType } from '../Header';
import { LinkItem } from '../../LinkItem/LinkItem';

export type DesktopMenuProps = React.ComponentPropsWithRef<'nav'> & {
	menu: MenuItemType[];
};

export const DesktopMenu = ({ menu, ...props }: DesktopMenuProps) => {
	return (
		<nav {...props}>
			<ul className={styles.menu}>
				{menu.map((item, i) => <li key={i}>
					<LinkItem href={item.href}>{item.name}</LinkItem>
				</li>)}
			</ul>
		</nav>
	)
};
