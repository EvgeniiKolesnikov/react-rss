import SearchBar from './SearchBar';
import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import '@testing-library/jest-dom';

describe('SearchBar component', () => {
  it('SearchBar placeholder', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const SearchBarElement = screen.getByPlaceholderText(/Search.../i);
    expect(SearchBarElement).toBeInTheDocument();
  });

  it('SearchBar title', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const SearchBarElement = screen.getByTitle('search-bar');
    expect(SearchBarElement).toBeInTheDocument();
  });

  it('SearchBar input', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const SearchBarElement = screen.getByTitle<HTMLInputElement>('search-bar');
    fireEvent.change(SearchBarElement, { target: { value: 'Lebron James' } });
    expect(SearchBarElement.value).toEqual('Lebron James');
  });

  it('loads and displays API', async () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const SearchBarElement = screen.getByTitle<HTMLInputElement>('search-bar');
    fireEvent.change(SearchBarElement, { target: { value: 'Rick' } });
    userEvent.click(SearchBarElement);
    fireEvent.keyDown(SearchBarElement, { key: 'Enter', code: 'Enter' });
    await waitFor(() => screen.findByText('Adjudicator Rick'));
  });
});
