import React from 'react';
import { render, screen } from '@testing-library/react';
import FormInputError from './FormInputError';

test('renders FormInputError', () => {
  render(<FormInputError error="error message" />);
  const linkElement = screen.getByText(/error message/i);
  expect(linkElement).toBeInTheDocument();
});
