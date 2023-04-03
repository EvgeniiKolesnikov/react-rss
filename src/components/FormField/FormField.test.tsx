import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormField from './FormField';

test('FormField rendered', () => {
  const { container } = render(<FormField />);
  const formField = container.querySelector('.form__field');
  expect(formField).toBeInTheDocument();
});
