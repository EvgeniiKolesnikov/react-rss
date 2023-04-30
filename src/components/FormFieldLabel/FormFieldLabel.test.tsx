import React from 'react';
import { render, screen } from '@testing-library/react';
import FormFieldLabel from './FormFieldLabel';

test('renders FormFieldLabel', () => {
  render(<FormFieldLabel text="Input label text" />);
  const labelElement = screen.getByText(/Input label text/i);
  expect(labelElement).toBeInTheDocument();
});

test('no renders FormFieldLabel', () => {
  render(<FormFieldLabel text="" />);
  const noLabel = screen.queryByText('Input label text');
  expect(noLabel).not.toBeInTheDocument();
});
