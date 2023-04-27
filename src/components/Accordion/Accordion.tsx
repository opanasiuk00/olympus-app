import React from 'react';
import styles from './Accordion.module.css';
import { Typography } from '../Typography/Typography';
import { MinusIcon, PlusIcon } from '../Icons';

export type AccordionProps = {
	summary: string;
	details: string;
};

export const Accordion = ({ summary, details }: AccordionProps) => {
	const [open, setOpen] = React.useState<boolean>(false);

	const toggleClickOpen = () => {
		setOpen((prev) => !prev);
	};

	return (
		<div className={styles.accordion}>
			<div
				className={styles.summary}
				onClick={toggleClickOpen}
			>
				<Typography tag='h2'>{summary}</Typography>
				{!open && <PlusIcon />}
				{open && <MinusIcon />}
			</div>
			<div className={`${styles.details} ${open ? styles.active : ''}`}>
				<Typography tag='p'>{details}</Typography>
			</div>
		</div>
	);
};
