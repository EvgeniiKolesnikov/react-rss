import Cards from 'components/Cards/Cards';
import Loader, { LoadStatus } from 'components/Loader/Loader';
import { CardType } from 'types/api';
import { setSearchText } from 'redux/searchTextSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect, useState } from 'react';
import { useGetCharacterQuery } from 'redux/rickandmortyApi';
import './SearchBar.scss';

export default function SearchBar() {
  const searchText = useAppSelector((state) => state.searchText.searchText);
  const dispatch = useAppDispatch();

  const [value, setValue] = useState(searchText);
  const [cards, setCards] = useState<CardType[]>([]);

  const { data, error, isFetching } = useGetCharacterQuery(searchText);

  useEffect(() => {
    data ? setCards(() => data.results) : setCards(() => []);
  }, [data]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(() => e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(setSearchText(value));
    }
  };

  return (
    <>
      <input
        className="search-bar"
        onChange={onChange}
        onKeyDown={onKeyDown}
        type="text"
        value={value}
        placeholder="Search..."
        title="search-bar"
      />
      {isFetching && <Loader status={LoadStatus.loading} />}
      {!isFetching && error && <Loader status={LoadStatus.failed} />}
      {!isFetching && !error && data?.results && <Cards cards={cards} />}
    </>
  );
}
