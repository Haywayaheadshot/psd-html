import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import '@testing-library/jest-dom/extend-expect';

describe('Footer', () => {
  test('renders the footer logo', () => {
    render(<Footer />);

    const footerLogo = screen.getByAltText('Footer Logo');
    expect(footerLogo).toBeInTheDocument();
  });

  test('renders the company name', () => {
    render(<Footer />);

    const companyText = screen.getByText('LOSANGELES');
    expect(companyText).toBeInTheDocument();

    const mountainsText = screen.getByText('MOUNTAINS');
    expect(mountainsText).toBeInTheDocument();
  });

  test('renders the copyright information', () => {
    render(<Footer />);

    const copyrightText = screen.getByText('COPYRIGHT 2016. ALL RIGHTS RESERVED.');
    expect(copyrightText).toBeInTheDocument();
  });
});
