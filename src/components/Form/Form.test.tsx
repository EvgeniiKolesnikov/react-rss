import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from './Form';

test('renders Form placeholderName', () => {
  render(<Form />);
  const placeholderName = screen.getByPlaceholderText('Enter your name');
  expect(placeholderName).toBeInTheDocument();
});
