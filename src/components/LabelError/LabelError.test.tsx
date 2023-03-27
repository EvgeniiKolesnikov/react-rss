import React from 'react';
import { render, screen } from '@testing-library/react';
import LabelError from './LabelError';

test('renders LabelError', () => {
  render(<LabelError value="error message" />);
  const linkElement = screen.getByText(/error message/i);
  expect(linkElement).toBeInTheDocument();
});
