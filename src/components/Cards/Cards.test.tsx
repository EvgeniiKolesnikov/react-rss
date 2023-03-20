import { render } from '@testing-library/react';
import Cards from './Cards';
import '@testing-library/jest-dom';

test('Cards rendered', () => {
  const { container } = render(<Cards />);
  const cards = container.querySelector('.cards');
  expect(cards).toBeInTheDocument();
});
