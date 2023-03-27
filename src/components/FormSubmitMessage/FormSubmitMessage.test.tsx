import React from 'react';
import { render, screen } from '@testing-library/react';
import FormSubmitMessage from './FormSubmitMessage';

test('renders FormSubmitMessage', () => {
  render(<FormSubmitMessage />);
  const element = screen.getByText('New Card data has been saved');
  expect(element).toBeInTheDocument();
});
