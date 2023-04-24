import React from 'react';
import styles from './LinkItem.module.css';

export type LinkItemProps = React.ComponentPropsWithRef<'a'> & {
	children: React.ReactNode
}

export const LinkItem = ({ children, ...props }: LinkItemProps) => {
	return (
		<a className={styles.link} {...props}>{children}</a>
	)
};
