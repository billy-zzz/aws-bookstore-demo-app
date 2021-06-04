import React from 'react';
import {render, screen} from '@testing-library/react';
import BestSellers from '../modules/bestSellers/BestSellers';
window.alert = () => {};

test('Best Sellers heading should display correctly', function() {
    let alert = window.alert;
    render(<BestSellers />);
    
    let heading = document.getElementById("heading");

    expect(heading?.innerHTML).toBe('Top 20 best sellers');
    window.alert = alert;
})