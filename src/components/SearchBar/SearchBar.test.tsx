import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import '@testing-library/jest-dom';

describe('SearchBar component', () => {
  it('SearchBar placeholder', () => {
    render(<SearchBar />);
    const linkElement = screen.getByPlaceholderText(/Search.../i);
    expect(linkElement).toBeInTheDocument();
  });

  it('SearchBar title', () => {
    render(<SearchBar />);
    const linkElement = screen.getByTitle('search-bar');
    expect(linkElement).toBeInTheDocument();
  });
});
