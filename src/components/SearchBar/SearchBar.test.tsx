import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchBar from './SearchBar';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

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

  it('loads and displays API', async () => {
    render(<SearchBar />);
    const SearchBarElement = screen.getByTitle<HTMLInputElement>('search-bar');
    fireEvent.change(SearchBarElement, { target: { value: 'Rick' } });
    userEvent.click(SearchBarElement);
    fireEvent.keyDown(SearchBarElement, { key: 'Enter', code: 'Enter' });
    await waitFor(() => screen.findByText('Adjudicator Rick'));
  });
});
