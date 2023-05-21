import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';
import '@testing-library/jest-dom/extend-expect';

describe('LandingPage', () => {
  test('renders the image', () => {
    render(<LandingPage />);

    const imageElement = screen.getByAltText('Los Angeles Mountains');
    expect(imageElement).toBeInTheDocument();
  });
});
