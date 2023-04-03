import React from 'react';
import { render, screen } from '@testing-library/react';
import FormFieldLabel from './FormFieldLabel';

test('renders FormInputError', () => {
  render(<FormFieldLabel text="Input label text" />);
  const labelElement = screen.getByText(/Input label text/i);
  expect(labelElement).toBeInTheDocument();
});
