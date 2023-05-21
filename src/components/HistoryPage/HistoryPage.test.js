import React from 'react';
import { render, screen } from '@testing-library/react';
import HistoryPage from './HistoryPage';
import '@testing-library/jest-dom/extend-expect';

describe('HistoryPage', () => {
  test('renders the history section', () => {
    render(<HistoryPage />);

    const historySection = screen.getByText('HISTORY');
    expect(historySection).toBeInTheDocument();

    const historyContent = screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.');
    expect(historyContent).toBeInTheDocument();
  });

  test('renders the carousel section', () => {
    render(<HistoryPage />);

    const carouselImages = screen.getAllByRole('img');
    expect(carouselImages.length).toBe(4);
  });

  test('renders the climb section', () => {
    render(<HistoryPage />);

    const climbSection = screen.getByText('CLIMB');
    expect(climbSection).toBeInTheDocument();

    const climbContent = screen.getByText('Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.');
    expect(climbContent).toBeInTheDocument();
  });
});
