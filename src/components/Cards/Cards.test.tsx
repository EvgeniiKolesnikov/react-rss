import { render, screen } from '@testing-library/react';
import Cards from './Cards';
import '@testing-library/jest-dom';

test('Cards rendered', () => {
  render(<Cards cards={[]} />);
  const cards = screen.queryByText('cards');
  expect(cards).not.toBeInTheDocument();
});
