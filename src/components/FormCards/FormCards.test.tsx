import { screen, render } from '@testing-library/react';
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
  render(<FormCards formCards={[cardExample]} />);
  const fieldName = screen.queryByText(/Name: Jo/);
  const fieldDate = screen.queryByText(/Date: 01-11-2002/);
  expect(fieldName).toBeInTheDocument();
  expect(fieldDate).toBeInTheDocument();
});
