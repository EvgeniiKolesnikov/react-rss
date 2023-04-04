import { useEffect, useState, useRef } from 'react';
import './SearchBar.scss';

export default function SearchBar() {
  const [value, setValue] = useState('');
  const refValue = useRef(value);

  useEffect(() => {
    const lastValue = localStorage.getItem('rss-input-value') || '';
    setValue(lastValue);
    refValue.current = lastValue;

    return () => {
      localStorage.setItem('rss-input-value', refValue.current);
    };
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    refValue.current = e.target.value;
  };

  return (
    <>
      <input
        className="search-bar"
        onChange={onChange}
        type="text"
        value={value || ''}
        placeholder="Search..."
        title="search-bar"
      />
    </>
  );
}
