import React from 'react';

type MinusIconProps = React.ComponentPropsWithRef<'svg'>;

export const MinusIcon = (props: MinusIconProps) => {
	return (
		<svg width='17' height='2' viewBox='0 0 17 2' fill='black' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path d='M0 1C0 0.447715 0.447715 0 1 0H16C16.5523 0 17 0.447715 17 1C17 1.55228 16.5523 2 16 2H1C0.447715 2 0 1.55228 0 1Z' />
		</svg>
	)
};
