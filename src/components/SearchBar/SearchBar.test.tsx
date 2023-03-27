import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';
import '@testing-library/jest-dom';

describe('SearchBar component', () => {
  it('SearchBar placeholder', () => {
    render(<SearchBar />);
    const SearchBarElement = screen.getByPlaceholderText(/Search.../i);
    expect(SearchBarElement).toBeInTheDocument();
  });

  it('SearchBar title', () => {
    render(<SearchBar />);
    const SearchBarElement = screen.getByTitle('search-bar');
    expect(SearchBarElement).toBeInTheDocument();
  });

  it('SearchBar input', () => {
    render(<SearchBar />);
    const SearchBarElement = screen.getByTitle<HTMLInputElement>('search-bar');
    fireEvent.change(SearchBarElement, { target: { value: 'Lebron James' } });
    expect(SearchBarElement.value).toEqual('Lebron James');
  });
});
