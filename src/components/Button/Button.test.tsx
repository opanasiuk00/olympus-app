import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from './Button';
import type { ButtonProps } from './Button';

const BUTTON_TEST = {
	children: 'Click me',
	variant: 'contained',
	onClick: jest.fn(),
} satisfies ButtonProps;

describe('Button', () => {
	test('renders children', () => {
		render(<Button {...BUTTON_TEST} />);
		// eslint-disable-next-line testing-library/no-node-access
		const textButton = screen.getByText(BUTTON_TEST.children);
		expect(textButton).toBeInTheDocument();
	});

	test('renders the correct contained variant', () => {
		render(<Button {...BUTTON_TEST} variant="contained" />);
		const container = screen.getByRole('button')
		expect(container).toHaveClass('contained');
		expect(container).not.toHaveClass('outlined');
	});
	test('renders the correct outlined variant', () => {
		render(<Button {...BUTTON_TEST} variant="outlined" />);
		const container = screen.getByRole('button');
		expect(container).toHaveClass('outlined');
		expect(container).not.toHaveClass('contained');
	});

	test('calls onClick when clicked', () => {
		render(<Button {...BUTTON_TEST} />);
		fireEvent.click(screen.getByRole('button'));
		expect(BUTTON_TEST.onClick).toHaveBeenCalled();
	});
});