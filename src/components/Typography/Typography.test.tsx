import React from 'react';
import { render, screen } from '@testing-library/react';
import { Typography } from './Typography';
import type { TypographyProps, TypographyTag } from './Typography';

const TYPOGRAPHY_TEST = {
	children: 'Title',
	tag: 'h1',
	color: 'dark',
} satisfies TypographyProps;

const typographyTags: { tag: TypographyTag }[] = [
	{ tag: 'h1' },
	{ tag: 'h2' },
	{ tag: 'h3' },
	{ tag: 'h4' },
	{ tag: 'p' },
	{ tag: 'span' },
];
const typographyColors: { color: 'dark' | 'light' | 'grey' }[] = [
	{ color: 'dark' },
	{ color: 'light' },
	{ color: 'grey' },
];


describe('Typography', () => {
	test('renders children', () => {
		render(<Typography {...TYPOGRAPHY_TEST} />);
		// eslint-disable-next-line testing-library/no-node-access
		const children = screen.getByText(TYPOGRAPHY_TEST.children);
		expect(children).toBeInTheDocument();
	});

	typographyTags.forEach(typographyTag => {
		test(`Should set right tag when provided ${typographyTag.tag} tag`, () => {
			const { container } = render(<Typography {...TYPOGRAPHY_TEST} tag={typographyTag.tag} />);
			// eslint-disable-next-line testing-library/no-node-access
			expect(container.firstChild).toHaveClass(typographyTag.tag);
		});
	});
	typographyColors.forEach(typographyColor => {
		test(`Should set right color when provided ${typographyColor.color} color`, () => {
			const { container } = render(<Typography {...TYPOGRAPHY_TEST} color={typographyColor.color} />);
			// eslint-disable-next-line testing-library/no-node-access
			expect(container.firstChild).toHaveClass(typographyColor.color);
		});
	});
});