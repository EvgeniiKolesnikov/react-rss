import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Header AboutUs', () => {
  render(<Header name="About Us" />);
  const linkElement = screen.getByText(/About Us/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Header Home', () => {
  render(<Header name="Home" />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Header 404', () => {
  render(<Header name="404" />);
  const linkElement = screen.getByText(/404/i);
  expect(linkElement).toBeInTheDocument();
});
