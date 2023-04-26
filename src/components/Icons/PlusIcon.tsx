import React from 'react';

type PlusIconProps = React.ComponentPropsWithRef<'svg'>;

export const PlusIcon = (props: PlusIconProps) => {
	return (
		<svg width='17' height='17' viewBox='0 0 17 17' fill='black' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path d='M8 1C8 0.447715 8.44772 0 9 0C9.55228 0 10 0.447715 10 1V16C10 16.5523 9.55228 17 9 17C8.44772 17 8 16.5523 8 16V1Z' />
			<path d='M0 8C0 7.44772 0.447715 7 1 7H16C16.5523 7 17 7.44772 17 8C17 8.55228 16.5523 9 16 9H1C0.447715 9 0 8.55228 0 8Z' />
		</svg>
	)
};
