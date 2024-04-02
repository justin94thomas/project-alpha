import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../index';

describe('Header Component', () => {
    it('renders the Blockbuster logo', () => {
        const { getByAltText } = render(<Header />);
        const logo = getByAltText('Blockbuster Logo');
        expect(logo).toBeInTheDocument();
    });

    it('calls handleNavigateDashboard when Blockbuster logo is clicked', () => {
        const handleNavigateDashboard = jest.fn();
        const { getByAltText } = render(<Header handleNavigateDashboard={handleNavigateDashboard} />);
        const logo = getByAltText('Blockbuster Logo');
        fireEvent.click(logo);
        expect(handleNavigateDashboard).toHaveBeenCalledTimes(1);
    });
});
