import React from 'react';
import styles from './Button.module.css';

export type ButtonProps = React.ComponentPropsWithRef<'button'> & {
	children: React.ReactNode;
	variant: 'contained' | 'outlined';
};

export const Button = ({ children, variant, className = '', ...props }: ButtonProps) => {
	return (
		<button className={`${styles.button}  ${styles[variant]} ${className}`} {...props}>
			<span>{children}</span>
		</button>
	)
};
