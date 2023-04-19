import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { store } from 'redux/store';

test('renders App Navigation Menu', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const navigationElement = screen.getByRole('navigation');
  expect(navigationElement).toBeInTheDocument();
});
