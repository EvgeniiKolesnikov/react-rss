import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from './Form';

test('renders Form', () => {
  render(<Form />);
  const element = screen.getByText('Form');
  expect(element).toBeInTheDocument();
});
