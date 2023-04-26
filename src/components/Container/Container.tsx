import React from 'react';
import styles from './Container.module.css';

export type ContainerProps = React.ComponentPropsWithRef<'div'> & {
	children: React.ReactNode,
	className?: string,
};

export const Container = ({ children, className = '', ...props }: ContainerProps) => {
	return (
		<div className={`${styles.container} ${className}`} {...props}>{children}</div>
	)
};
