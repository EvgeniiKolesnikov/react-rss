import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader, { LoadStatus } from './Loader';

test('renders Loader', () => {
  render(<Loader status={LoadStatus.failed} />);
  const loaderElement = screen.getByText(/There is nothing here/i);
  expect(loaderElement).toBeInTheDocument();
});
