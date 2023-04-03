import React from 'react';
import { render, screen } from '@testing-library/react';
import FormInputLabel from './FormInputLabel';

test('renders FormInputError', () => {
  render(<FormInputLabel text="Input label text" />);
  const labelElement = screen.getByText(/Input label text/i);
  expect(labelElement).toBeInTheDocument();
});
