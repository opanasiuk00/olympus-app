import React from 'react';
import { render, screen } from '@testing-library/react';
import { NewsItem } from './NewsItem';
import type { NewsItemProps } from './NewsItem';

const NEWSITEM_TEST = {
	children: 'content',
	title: 'children',
	date: 'Jul 30, 2022',
	href: '/213123',
} satisfies NewsItemProps;


describe('News item', () => {
	test('renders children', () => {
		render(<NewsItem {...NEWSITEM_TEST} />);
		// eslint-disable-next-line testing-library/no-node-access
		const children = screen.getByText(NEWSITEM_TEST.children);
		expect(children).toBeInTheDocument();
	});
	test('renders title', () => {
		render(<NewsItem {...NEWSITEM_TEST} />);
		const title = screen.getByText(NEWSITEM_TEST.title);
		expect(title).toBeInTheDocument();
	});
	test('renders date', () => {
		render(<NewsItem {...NEWSITEM_TEST} />);
		const date = screen.getByText(NEWSITEM_TEST.date);
		expect(date).toBeInTheDocument();
	});
});