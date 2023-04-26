import React from 'react';
import styles from './MobileMenu.module.css';
import { LinkItem } from '../../LinkItem/LinkItem';
import { MenuItemType } from '../Header';

export type MobileMenuProps = React.ComponentPropsWithRef<'nav'> & {
    menu: MenuItemType[];
};

export const MobileMenu = ({ menu, ...props }: MobileMenuProps) => {
    const [changeMenu, setChangeMenu] = React.useState<boolean>(false);

    const toggleClick = () => {
        setChangeMenu((prev) => !prev);
    };

    return (
        <nav {...props}>
            <button
                className={`${styles.button} ${
                    changeMenu ? styles.active : ''
                }`}
                onClick={toggleClick}
            >
                <span className={styles.line1}></span>
                <span className={styles.line2}></span>
                <span className={styles.line3}></span>
            </button>
            <ul className={`${styles.menu} ${changeMenu ? styles.open : ''}`}>
                {menu.map((item, i) => (
                    <li key={i}>
                        <LinkItem
                            onClick={toggleClick}
                            href={item.href}
                        >
                            {item.name}
                        </LinkItem>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
