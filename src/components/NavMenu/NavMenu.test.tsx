import { render, screen } from '@testing-library/react';
import NavMenu from './NavMenu';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

test('renders NavMenu Home', () => {
  render(
    <BrowserRouter>
      <NavMenu />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders NavMenu AboutUs', () => {
  render(
    <BrowserRouter>
      <NavMenu />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/About Us/i);
  expect(linkElement).toBeInTheDocument();
});
