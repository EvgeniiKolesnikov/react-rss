import React from 'react';
import { render, screen } from '@testing-library/react';
import FormPage from './FormPage';

test('renders FormPage', () => {
  render(<FormPage />);
  const element = screen.getByText('Form');
  expect(element).toBeInTheDocument();
});
