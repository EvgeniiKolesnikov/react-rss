import { render, screen } from '@testing-library/react';
import Form from './Form';
import { FormCardType } from 'components/FormCard/FormCard';

test('renders Form placeholderName', () => {
  let cards: FormCardType[] = [];

  function updateCards(newCard: FormCardType) {
    cards = [...cards, newCard];
  }

  function showSubmitMessage(): void {}

  render(<Form showSubmitMessage={showSubmitMessage} updateCards={updateCards} />);
  const placeholderName = screen.getByPlaceholderText('Enter your name');
  expect(placeholderName).toBeInTheDocument();
});
