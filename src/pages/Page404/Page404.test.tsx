import React from 'react';
import { render, screen } from '@testing-library/react';
import Page404 from './Page404';

test('renders Page404', () => {
  render(<Page404 />);
  const element = screen.getByText('404');
  expect(element).toBeInTheDocument();
});
