import { render } from '@testing-library/react';
import FormCards from './FormCards';
import '@testing-library/jest-dom';

test('FormCards rendered', () => {
  const { container } = render(<FormCards formCards={[]} />);
  const cards = container.querySelector('.form__cards');
  expect(cards).toBeInTheDocument();
});
