import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import '@testing-library/jest-dom/extend-expect';

describe('NavBar', () => {
  test('renders the logo', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );

    const logoElement = screen.getByAltText('Los Angeles Mountains Logo');
    expect(logoElement).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );

    const historyLink = screen.getByText('01. History');
    const teamLink = screen.getByText('02. Team');

    expect(historyLink).toBeInTheDocument();
    expect(historyLink.getAttribute('href')).toBe('/history');
    expect(teamLink).toBeInTheDocument();
    expect(teamLink.getAttribute('href')).toBe('/teams');
  });
});
