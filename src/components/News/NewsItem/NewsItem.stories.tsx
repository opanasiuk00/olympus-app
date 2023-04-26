import { NewsItem } from './NewsItem';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NewsItem> = {
	title: 'UI/NewsItem',
	component: NewsItem,
}

export default meta;

type Story = StoryObj<typeof NewsItem>;

export const Default: Story = {
	args: {
		children: 'Over the last year, Olympus DAO has implemented a number of initiatives to improve understanding of how the DAO is executing on community authorized and mandated initiatives.',
		title: 'Fundamentals: Encouraging Usability Through The Utility Pillar',
		date: 'Jul 30, 2022',
		href: '#'
	},
};

export const example: Story = {
	render: () => <NewsItem title='Olympus H1 2022 Report' date='Aug 4, 2022' href='#'>Over the last year, Olympus DAO has implemented a number of initiatives to improve understanding of how the DAO is executing on community authorized and mandated initiatives.</NewsItem>,
};
