import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TeamsPage from './TeamsPage';
import '@testing-library/jest-dom/extend-expect';

describe('TeamsPage', () => {
  test('renders mountain 1 content by default', () => {
    render(<TeamsPage />);

    expect(screen.getByText('SCHEDULE')).toBeInTheDocument();
    expect(screen.getByText('25 Nov 2016')).toBeInTheDocument();
  });

  test('renders mountain 2 content when mountain 2 button is clicked', () => {
    render(<TeamsPage />);

    fireEvent.click(screen.getByText('MOUNTAIN 2'));

    expect(screen.getByText('SCHEDULE')).toBeInTheDocument();
    expect(screen.getByText('17 Nov 2016')).toBeInTheDocument();
  });
});
