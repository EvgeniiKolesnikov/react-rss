import { render } from '@testing-library/react';
import FormCards from './FormCards';
import '@testing-library/jest-dom';
import { FormCardType } from 'components/FormCard/FormCard';

const cardExample: FormCardType = {
  name: 'Jo',
  date: '01-11-2002',
  pet: 'Cat',
  assent: true,
  gender: 'male',
  img: null,
};

test('FormCards rendered', () => {
  const { container } = render(<FormCards formCards={[cardExample]} />);
  const formCardsElem = container.querySelector('.form__cards');
  expect(formCardsElem).toBeInTheDocument();
});
