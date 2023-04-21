import { Typography } from './Typography';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Typography> = {
	title: 'UI/Typography',
	component: Typography,
}

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
	args: {
		children: 'The Future Decentralized Reserve Currency',
		tag: 'h1',
		color: 'dark'
	},
};

export const h1: Story = {
	render: () => <Typography tag='h1'>The Future Decentralized Reserve Currency</Typography>,
};
export const h2: Story = {
	render: () => <Typography tag='h2'>How to Participate</Typography>,
};
export const h3: Story = {
	render: () => <Typography tag='h3'>Protocol Stats</Typography>,
};
export const h4: Story = {
	render: () => <Typography tag='h4'>Number of Holders</Typography>,
};
export const p: Story = {
	render: () => <Typography tag='p'>Olympus is building OHM, a community-owned, decentralized and censorship-resistant reserve currency that is asset-backed, deeply liquid and used widely across Web3.</Typography>,
};
