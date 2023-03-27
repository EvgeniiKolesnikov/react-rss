import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App Navigation Menu', () => {
  render(<App />);
  const navigationElement = screen.getByRole('navigation');
  expect(navigationElement).toBeInTheDocument();
});
