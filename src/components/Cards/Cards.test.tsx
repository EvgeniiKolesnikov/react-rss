import { render, screen } from '@testing-library/react';
import Cards from './Cards';
import '@testing-library/jest-dom';
import { sampleCardsArray } from 'data/samples';

test('Cards rendered', () => {
  render(<Cards cards={sampleCardsArray} />);
  const card = screen.getAllByText('Investigator Rick');
  screen.debug();
  expect(card[0]).toBeInTheDocument();
});
