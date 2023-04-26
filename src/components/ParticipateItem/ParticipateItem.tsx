import React from 'react';
import styles from './ParticipateItem.module.css';
import { Typography } from '../Typography/Typography';

export type ParticipateItemProp = {
    children: React.ReactNode;
    title: string;
    imageSrc: string;
    linkName: string;
    href: string;
    borderRadius: 'left' | 'right';
    variant: 'dark' | 'light';
};

export const ParticipateItem = ({
    children,
    title,
    imageSrc,
    linkName,
    href,
    borderRadius,
    variant,
}: ParticipateItemProp) => {
    return (
        <div
            className={`${styles.participate} ${styles[borderRadius]} ${styles[variant]}`}
        >
            <div className={styles.head}>
                <Typography tag='h3'>{title}</Typography>
                <img
                    src={imageSrc}
                    alt={linkName}
                />
            </div>
            <div className={styles.content}>
                <Typography tag='p'>{children}</Typography>
                <a href={href}>
                    <Typography tag='span'>{linkName}</Typography>
                    <br />
                    <Typography tag='span'>{linkName}</Typography>
                </a>
            </div>
        </div>
    );
};
