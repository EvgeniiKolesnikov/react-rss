import React from 'react';
import { render, screen } from '@testing-library/react';
import FormFieldError from './FormFieldError';

test('renders FormFieldError', () => {
  render(<FormFieldError error="error message" />);
  const errorElement = screen.getByText(/error message/i);
  expect(errorElement).toBeInTheDocument();
});
