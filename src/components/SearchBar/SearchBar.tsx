import { useEffect, useState, useRef } from 'react';
import './SearchBar.scss';
import Cards from 'components/Cards/Cards';
import Loader, { LoadStatus } from 'components/Loader/Loader';
import { CardType, Data } from 'types/api';

const base = 'https://rickandmortyapi.com/api';
const character = '/character';
const LS_VALUE = 'rss-input-value';
const LOADING_DELAY = 700;

export default function SearchBar() {
  const [value, setValue] = useState('');
  const refValue = useRef(value);

  const [cards, setCards] = useState<CardType[]>([]);
  const [statusText, setStatusText] = useState<LoadStatus>(LoadStatus.loading);

  useEffect(() => {
    const lastValue = localStorage.getItem(LS_VALUE) || '';
    setValue(() => lastValue);
    refValue.current = lastValue;
    fetchData(refValue.current);
  }, []);

  const errorData = () => {
    setCards(() => []);
    setStatusText(LoadStatus.failed);
  };

  const fetchData = async (value: string) => {
    setCards(() => []);
    setStatusText(LoadStatus.loading);

    setTimeout(async () => {
      try {
        const res = await fetch(`${base}${character}?name=${value}`);
        if (res.status === 200) {
          const data: Data = await res.json();
          setCards(data.results);
          setStatusText(LoadStatus.loaded);
        } else {
          errorData();
        }
      } catch (error) {
        errorData();
      }
    }, LOADING_DELAY);
  };

  const saveInput = () => {
    localStorage.setItem(LS_VALUE, refValue.current);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    refValue.current = e.target.value;
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      saveInput();
      fetchData(refValue.current);
    }
  };

  return (
    <>
      <input
        className="search-bar"
        onChange={onChange}
        onKeyDown={onKeyDown}
        type="text"
        value={value || ''}
        placeholder="Search..."
        title="search-bar"
      />
      <Loader status={statusText} />
      <Cards cards={cards} />
    </>
  );
}
