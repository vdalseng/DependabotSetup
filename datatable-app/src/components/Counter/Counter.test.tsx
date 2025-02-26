import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import Counter from './Counter';

describe('Counter component', () => {
    it('increments count when button is clicked', () => {
        render(<Counter />);
        const button = screen.getByText('Click me');

        fireEvent.click(button);
        expect(screen.getByText('You clicked 1 times')).toBeInTheDocument();

        fireEvent.click(button);
        expect(screen.getByText('You clicked 2 times')).toBeInTheDocument();
    });

    it('renders initial count', () => {
        render(<Counter />);
        expect(screen.getByText('You clicked 0 times')).toBeInTheDocument();
    });

    it('does not increment count when button is not clicked', () => {
        render(<Counter />);
        expect(screen.getByText('You clicked 0 times')).toBeInTheDocument();
    });

    it('increments count multiple times', () => {
        render(<Counter />);
        const button = screen.getByText('Click me');

        for (let i = 1; i <= 5; i++) {
            fireEvent.click(button);
            expect(screen.getByText(`You clicked ${i} times`)).toBeInTheDocument();
        }
    });
});