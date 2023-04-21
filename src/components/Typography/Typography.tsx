import React from 'react';
import styles from './Typography.module.css';

export type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p';

export type TypographyProps = {
	children: React.ReactNode;
	tag: TypographyTag
	color?: 'dark' | 'light';
}

export const Typography = ({ children, tag: Tag, color = 'dark' }: TypographyProps) => {
	return (
		<Tag className={`${styles[Tag]} ${styles[color]}`}>{children}</Tag>
	)
};
