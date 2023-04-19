import FormPage from './FormPage';
import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { store } from 'redux/store';

test('renders FormPage', () => {
  render(
    <Provider store={store}>
      <FormPage />
    </Provider>
  );
  const element = screen.getByText('Form');
  expect(element).toBeInTheDocument();
});
