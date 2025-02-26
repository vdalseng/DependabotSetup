import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import JsonTable from './JsonTable';

describe('JsonTable', () => {
    it('renders correctly', () => {
        const { container } = render(<JsonTable />);
        expect(container).toBeTruthy();
    });
});