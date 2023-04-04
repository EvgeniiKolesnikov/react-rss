import { render, screen } from '@testing-library/react';
import Form from './Form';
import { FormCardType } from 'components/FormCard/FormCard';

test('renders Form placeholderName', () => {
  let cards: FormCardType[] = [];

  function updateCards(newCard: FormCardType) {
    cards = [...cards, newCard];
  }

  render(<Form updateCards={updateCards} />);
  const placeholderName = screen.getByPlaceholderText('Enter your name');
  expect(placeholderName).toBeInTheDocument();
});
